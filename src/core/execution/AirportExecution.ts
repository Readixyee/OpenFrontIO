import {
  AllPlayers,
  Cell,
  Execution,
  Game,
  Player,
  Unit,
  PlayerID,
  TerrainType,
  UnitType,
} from "../game/Game";
import { PathFinder } from "../pathfinding/PathFinding";
import { PseudoRandom } from "../PseudoRandom";
import { consolex } from "../Consolex";
import { manhattanDistFN, TileRef } from "../game/GameMap";
import { TradePlaneExecution } from "./TradePlaneExecution";

export class AirportExecution implements Execution {
  private active = true;
  private mg: Game;
  private port: Unit;
  private random: PseudoRandom;

  constructor(
    private _owner: PlayerID,
    private tile: TileRef,
  ) {}

  init(mg: Game, ticks: number): void {
    if (!mg.hasPlayer(this._owner)) {
      console.warn(`PortExecution: player ${this._owner} not found`);
      this.active = false;
      return;
    }
    this.mg = mg;
    this.random = new PseudoRandom(mg.ticks());
  }

  tick(ticks: number): void {
    if (this.port == null) {
      const player = this.mg.player(this._owner);
      const spawnTile = player.canBuild(UnitType.SAMLauncher, this.tile);
      if (!spawnTile) {
        consolex.warn(`player ${player} cannot build port at ${this.tile}`);
        this.active = false;
        return;
      }

      this.port = player.buildUnit(UnitType.Airport, 0, spawnTile);
    }

    if (!this.port.isActive()) {
      this.active = false;
      return;
    }

    const totalNbOfPorts = this.mg.units(UnitType.Airport).length;
    if (
      !this.random.chance(this.mg.config().tradePlaneSpawnRate(totalNbOfPorts))
    ) {
      return;
    }

    const ports = this.mg
      .players()
      .filter((p) => p != this.port.owner() && p.canTrade(this.port.owner()))
      .flatMap((p) => p.units(UnitType.Airport));
    if (ports.length == 0) {
      return;
    }

    const port = this.random.randElement(ports);
    const pf = PathFinder.Mini(this.mg, 2500, true);
    this.mg.addExecution(
      new TradePlaneExecution(this.player().id(), this.port, port, pf),
    );
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

  player(): Player {
    return this.port.owner();
  }
}
