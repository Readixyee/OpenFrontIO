"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateopenfront_client"](
  "src_core_worker_Worker_worker_ts",
  {
    /***/ "./src/core/execution/SAMLauncherExecution.ts":
      /*!****************************************************!*\
  !*** ./src/core/execution/SAMLauncherExecution.ts ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SAMLauncherExecution: () => (/* binding */ SAMLauncherExecution)\n/* harmony export */ });\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _SAMMissileExecution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SAMMissileExecution */ "./src/core/execution/SAMMissileExecution.ts");\n\n\n\nclass PseudoRandom {\n    constructor(seed) {\n        this.seed = seed;\n    }\n    next() {\n        this.seed = (this.seed * 1664525 + 1013904223) % 0x100000000;\n        return (this.seed >>> 0) / 0x100000000;\n    }\n}\nclass SAMLauncherExecution {\n    constructor(ownerId, tile) {\n        this.ownerId = ownerId;\n        this.tile = tile;\n        this.active = true;\n        this.target = null;\n        this.searchRange = 100;\n        this.missileAttackRate = 50;\n        this.lastMissileAttack = 0;\n        this.pseudoRandom = new PseudoRandom(80085);\n    }\n    init(mg, ticks) {\n        this.mg = mg;\n        if (!mg.hasPlayer(this.ownerId)) {\n            console.warn(`SAMLauncherExecution: owner ${this.ownerId} not found`);\n            this.active = false;\n            return;\n        }\n        this.player = mg.player(this.ownerId);\n    }\n    tick(ticks) {\n        if (this.post == null) {\n            const spawnTile = this.player.canBuild(_game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.SAMLauncher, this.tile);\n            if (spawnTile == false) {\n                _Consolex__WEBPACK_IMPORTED_MODULE_0__.consolex.warn("cannot build SAM Launcher");\n                this.active = false;\n                return;\n            }\n            this.post = this.player.buildUnit(_game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.SAMLauncher, 0, spawnTile);\n        }\n        if (!this.post.isActive()) {\n            this.active = false;\n            return;\n        }\n        const nukes = this.mg\n            .units(_game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.AtomBomb, _game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.HydrogenBomb)\n            .filter((u) => this.mg.manhattanDist(u.tile(), this.post.tile()) < this.searchRange)\n            .filter((u) => u.owner() !== this.player)\n            .filter((u) => !u.owner().isAlliedWith(this.player));\n        this.target =\n            nukes.sort((a, b) => {\n                // Prioritize HydrogenBombs first\n                if (a.type() === _game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.HydrogenBomb &&\n                    b.type() !== _game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.HydrogenBomb) {\n                    return -1;\n                }\n                if (a.type() !== _game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.HydrogenBomb &&\n                    b.type() === _game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.HydrogenBomb) {\n                    return 1;\n                }\n                // If both are the same type, sort by distance\n                return (this.mg.manhattanDist(this.post.tile(), a.tile()) -\n                    this.mg.manhattanDist(this.post.tile(), b.tile()));\n            })[0] ?? null;\n        if (this.target != null) {\n            if (this.mg.ticks() - this.lastMissileAttack > this.missileAttackRate) {\n                this.lastMissileAttack = this.mg.ticks();\n                this.mg.addExecution(new _SAMMissileExecution__WEBPACK_IMPORTED_MODULE_2__.SAMMissileExecution(this.post.tile(), this.post.owner(), this.post, this.target, this.mg, this.ps));\n            }\n        }\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/SAMLauncherExecution.ts?',
        );

        /***/
      },
  },
  /******/ function (__webpack_require__) {
    // webpackRuntimeModules
    /******/ /* webpack/runtime/getFullHash */
    /******/ (() => {
      /******/ __webpack_require__.h = () => "ed8186365fe6ca8cace7";
      /******/
    })();
    /******/
    /******/
  },
);
