import { MessageType } from "../game/Game";
import { renderNumber } from "../../client/Utils";
import {
  AllPlayers,
  Cell,
  Execution,
  Game,
  Unit,
  Player,
  PlayerID,
  UnitType,
} from "../game/Game";
import { PathFinder } from "../pathfinding/PathFinding";
import { PathFindResultType } from "../pathfinding/AStar";
import { distSortUnit } from "../Util";
import { consolex } from "../Consolex";
import { TileRef } from "../game/GameMap";

export class TradePlaneExecution implements Execution {
  private active = true;
  private mg: Game;
  private origOwner: Player;
  private tradePlane: Unit;
  private index = 0;

  constructor(
    private _owner: PlayerID,
    private srcPort: Unit,
    private _dstAirport: Unit,
    private pathFinder: PathFinder,
    private speed: number = 2,
  ) {}

  init(mg: Game, ticks: number): void {
    this.mg = mg;
    this.origOwner = mg.player(this._owner);
  }

  tick(ticks: number): void {
    if (this.tradePlane == null) {
      const spawn = this.origOwner.canBuild(
        UnitType.TradePlane,
        this.srcPort.tile(),
      );
      if (spawn == false) {
        consolex.warn(`cannot build trade plane`);
        this.active = false;
        return;
      }
      this.tradePlane = this.origOwner.buildUnit(
        UnitType.TradePlane,
        0,
        spawn,
        {
          dstAirport: this._dstAirport,
        },
      );
    }

    if (!this.tradePlane.isActive()) {
      this.active = false;
      return;
    }

    // If a player captures an other player's port while trading we should delete
    // the plane.
    if (this._dstAirport.owner().id() == this.srcPort.owner().id()) {
      this.tradePlane.delete(false);
      this.active = false;
      return;
    }

    if (
      !this._dstAirport.isActive() ||
      !this.tradePlane.owner().canTrade(this._dstAirport.owner())
    ) {
      this.tradePlane.delete(false);
      this.active = false;
      return;
    }

    for (let i = 0; i < this.speed; i++) {
      const result = this.pathFinder.nextTile(
        this.tradePlane.tile(),
        this._dstAirport.tile(),
      );

      switch (result.type) {
        case PathFindResultType.Completed:
          this.complete();
          break;
        case PathFindResultType.Pending:
          // Fire unit event to rerender.
          this.tradePlane.move(this.tradePlane.tile());
          break;
        case PathFindResultType.NextTile:
          this.tradePlane.move(result.tile);
          break;
        case PathFindResultType.PathNotFound:
          consolex.warn("captured trade plane cannot find route");
          this.active = false;
          break;
      }
    }
  }

  private complete() {
    this.active = false;
    this.tradePlane.delete(false);
    const gold = this.mg
      .config()
      .tradePlaneGold(
        this.mg.manhattanDist(this.srcPort.tile(), this._dstAirport.tile()),
      );

    this.srcPort.owner().addGold(gold);
    this._dstAirport.owner().addGold(gold);
    this.mg.displayMessage(
      `Received ${renderNumber(gold)} gold from trade with ${this.srcPort.owner().displayName()}`,
      MessageType.SUCCESS,
      this._dstAirport.owner().id(),
    );
    this.mg.displayMessage(
      `Received ${renderNumber(gold)} gold from trade with ${this._dstAirport.owner().displayName()}`,
      MessageType.SUCCESS,
      this.srcPort.owner().id(),
    );
    return;
  }

  owner(): Player {
    return null;
  }

  isActive(): boolean {
    return this.active;
  }

  activeDuringSpawnPhase(): boolean {
    return false;
  }

  dstAirport(): TileRef {
    return this._dstAirport.tile();
  }
}
