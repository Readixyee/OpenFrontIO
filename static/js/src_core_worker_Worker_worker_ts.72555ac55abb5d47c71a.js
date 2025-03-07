/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/client/Utils.ts":
      /*!*****************************!*\
  !*** ./src/client/Utils.ts ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCanvas: () => (/* binding */ createCanvas),\n/* harmony export */   generateCryptoRandomUUID: () => (/* binding */ generateCryptoRandomUUID),\n/* harmony export */   renderNumber: () => (/* binding */ renderNumber),\n/* harmony export */   renderTroops: () => (/* binding */ renderTroops)\n/* harmony export */ });\nfunction renderTroops(troops) {\n    return renderNumber(troops / 10);\n}\nfunction renderNumber(num) {\n    num = Math.max(num, 0);\n    if (num >= 10000000) {\n        const value = Math.floor(num / 100000) / 10;\n        return value.toFixed(1) + "M";\n    }\n    else if (num >= 1000000) {\n        const value = Math.floor(num / 10000) / 100;\n        return value.toFixed(2) + "M";\n    }\n    else if (num >= 100000) {\n        return Math.floor(num / 1000) + "K";\n    }\n    else if (num >= 10000) {\n        const value = Math.floor(num / 100) / 10;\n        return value.toFixed(1) + "K";\n    }\n    else if (num >= 1000) {\n        const value = Math.floor(num / 10) / 100;\n        return value.toFixed(2) + "K";\n    }\n    else {\n        return Math.floor(num).toString();\n    }\n}\nfunction createCanvas() {\n    const canvas = document.createElement("canvas");\n    // Set canvas style to fill the screen\n    canvas.style.position = "fixed";\n    canvas.style.left = "0";\n    canvas.style.top = "0";\n    canvas.style.width = "100%";\n    canvas.style.height = "100%";\n    canvas.style.touchAction = "none";\n    return canvas;\n}\n/**\n * A polyfill for crypto.randomUUID that provides fallback implementations\n * for older browsers, particularly Safari versions < 15.4\n */\nfunction generateCryptoRandomUUID() {\n    // Type guard to check if randomUUID is available\n    if (typeof crypto !== "undefined" && "randomUUID" in crypto) {\n        return crypto.randomUUID();\n    }\n    // Fallback using crypto.getRandomValues\n    if (typeof crypto !== "undefined" && "getRandomValues" in crypto) {\n        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^\n            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));\n    }\n    // Last resort fallback using Math.random\n    // Note: This is less cryptographically secure but ensures functionality\n    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {\n        const r = (Math.random() * 16) | 0;\n        const v = c === "x" ? r : (r & 0x3) | 0x8;\n        return v.toString(16);\n    });\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/client/Utils.ts?',
        );

        /***/
      },

    /***/ "./src/client/graphics/NameBoxCalculator.ts":
      /*!**************************************************!*\
  !*** ./src/client/graphics/NameBoxCalculator.ts ***!
  \**************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateFontSize: () => (/* binding */ calculateFontSize),\n/* harmony export */   createGrid: () => (/* binding */ createGrid),\n/* harmony export */   findLargestInscribedRectangle: () => (/* binding */ findLargestInscribedRectangle),\n/* harmony export */   largestRectangleInHistogram: () => (/* binding */ largestRectangleInHistogram),\n/* harmony export */   placeName: () => (/* binding */ placeName)\n/* harmony export */ });\n/* harmony import */ var _core_game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _core_Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Util */ "./src/core/Util.ts");\n\n\nfunction placeName(game, player) {\n    const boundingBox = player.largestClusterBoundingBox ??\n        (0,_core_Util__WEBPACK_IMPORTED_MODULE_1__.calculateBoundingBox)(game, player.borderTiles());\n    let scalingFactor = 1;\n    const width = boundingBox.max.x - boundingBox.min.x;\n    const height = boundingBox.max.y - boundingBox.min.y;\n    const size = Math.min(width, height);\n    if (size < 25) {\n        scalingFactor = 1;\n    }\n    else if (size < 50) {\n        scalingFactor = 2;\n    }\n    else if (size < 100) {\n        scalingFactor = 4;\n    }\n    else if (size < 250) {\n        scalingFactor = 8;\n    }\n    else if (size < 500) {\n        scalingFactor = 16;\n    }\n    else {\n        scalingFactor = 32;\n    }\n    const grid = createGrid(game, player, boundingBox, scalingFactor);\n    const largestRectangle = findLargestInscribedRectangle(grid);\n    largestRectangle.x = largestRectangle.x * scalingFactor;\n    largestRectangle.y = largestRectangle.y * scalingFactor;\n    largestRectangle.width = largestRectangle.width * scalingFactor;\n    largestRectangle.height = largestRectangle.height * scalingFactor;\n    let center = new _core_game_Game__WEBPACK_IMPORTED_MODULE_0__.Cell(Math.floor(largestRectangle.x + largestRectangle.width / 2 + boundingBox.min.x), Math.floor(largestRectangle.y + largestRectangle.height / 2 + boundingBox.min.y));\n    const fontSize = calculateFontSize(largestRectangle, player.name());\n    center = new _core_game_Game__WEBPACK_IMPORTED_MODULE_0__.Cell(center.x, center.y - fontSize / 3);\n    return {\n        x: Math.ceil(center.x),\n        y: Math.ceil(center.y),\n        size: fontSize,\n    };\n}\nfunction createGrid(game, player, boundingBox, scalingFactor) {\n    const scaledBoundingBox = {\n        min: {\n            x: Math.floor(boundingBox.min.x / scalingFactor),\n            y: Math.floor(boundingBox.min.y / scalingFactor),\n        },\n        max: {\n            x: Math.floor(boundingBox.max.x / scalingFactor),\n            y: Math.floor(boundingBox.max.y / scalingFactor),\n        },\n    };\n    const width = scaledBoundingBox.max.x - scaledBoundingBox.min.x + 1;\n    const height = scaledBoundingBox.max.y - scaledBoundingBox.min.y + 1;\n    const grid = Array(width)\n        .fill(null)\n        .map(() => Array(height).fill(false));\n    for (let x = scaledBoundingBox.min.x; x <= scaledBoundingBox.max.x; x++) {\n        for (let y = scaledBoundingBox.min.y; y <= scaledBoundingBox.max.y; y++) {\n            const cell = new _core_game_Game__WEBPACK_IMPORTED_MODULE_0__.Cell(x * scalingFactor, y * scalingFactor);\n            if (game.isOnMap(cell)) {\n                const tile = game.ref(cell.x, cell.y);\n                grid[x - scaledBoundingBox.min.x][y - scaledBoundingBox.min.y] =\n                    game.isLake(tile) || game.owner(tile) === player; // TODO: okay if lake\n            }\n        }\n    }\n    return grid;\n}\nfunction findLargestInscribedRectangle(grid) {\n    const rows = grid[0].length;\n    const cols = grid.length;\n    const heights = new Array(cols).fill(0);\n    let largestRect = { x: 0, y: 0, width: 0, height: 0 };\n    for (let row = 0; row < rows; row++) {\n        for (let col = 0; col < cols; col++) {\n            if (grid[col][row]) {\n                heights[col]++;\n            }\n            else {\n                heights[col] = 0;\n            }\n        }\n        const rectForRow = largestRectangleInHistogram(heights);\n        if (rectForRow.width * rectForRow.height >\n            largestRect.width * largestRect.height) {\n            largestRect = {\n                x: rectForRow.x,\n                y: row - rectForRow.height + 1,\n                width: rectForRow.width,\n                height: rectForRow.height,\n            };\n        }\n    }\n    return largestRect;\n}\nfunction largestRectangleInHistogram(widths) {\n    const stack = [];\n    let maxArea = 0;\n    let largestRect = { x: 0, y: 0, width: 0, height: 0 };\n    for (let i = 0; i <= widths.length; i++) {\n        const h = i === widths.length ? 0 : widths[i];\n        while (stack.length > 0 && h < widths[stack[stack.length - 1]]) {\n            const height = widths[stack.pop()];\n            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;\n            if (height * width > maxArea) {\n                maxArea = height * width;\n                largestRect = {\n                    x: stack.length === 0 ? 0 : stack[stack.length - 1] + 1,\n                    y: 0,\n                    width: width,\n                    height: height,\n                };\n            }\n        }\n        stack.push(i);\n    }\n    return largestRect;\n}\nfunction calculateFontSize(rectangle, name) {\n    // This is a simplified calculation. You might want to adjust it based on your specific font and rendering system.\n    const widthConstrained = (rectangle.width / name.length) * 2;\n    const heightConstrained = rectangle.height / 3;\n    return Math.min(widthConstrained, heightConstrained);\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/client/graphics/NameBoxCalculator.ts?',
        );

        /***/
      },

    /***/ "./src/core/Consolex.ts":
      /*!******************************!*\
  !*** ./src/core/Consolex.ts ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SendLogEvent: () => (/* binding */ SendLogEvent),\n/* harmony export */   consolex: () => (/* binding */ consolex),\n/* harmony export */   initRemoteSender: () => (/* binding */ initRemoteSender)\n/* harmony export */ });\nconst consolex = {\n    log: console.log,\n    warn: console.warn,\n    error: console.error,\n};\nlet inited = false;\n// Only call this in client/browser!\nfunction initRemoteSender(eventBus) {\n    if (inited) {\n        return;\n    }\n    inited = true;\n    consolex.log = (...args) => {\n        console.log(...args);\n        // eventBus.emit(new SendLogEvent(LogSeverity.Info, args.join(' ')))\n    };\n    consolex.warn = (...args) => {\n        console.warn(...args);\n        // eventBus.emit(new SendLogEvent(LogSeverity.Warn, args.join(' ')))\n    };\n    consolex.error = (...args) => {\n        console.error(...args);\n        // eventBus.emit(new SendLogEvent(LogSeverity.Error, args.join(' ')))\n    };\n}\nclass SendLogEvent {\n    constructor(severity, log) {\n        this.severity = severity;\n        this.log = log;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/Consolex.ts?",
        );

        /***/
      },

    /***/ "./src/core/GameRunner.ts":
      /*!********************************!*\
  !*** ./src/core/GameRunner.ts ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameRunner: () => (/* binding */ GameRunner),\n/* harmony export */   createGameRunner: () => (/* binding */ createGameRunner)\n/* harmony export */ });\n/* harmony import */ var _client_graphics_NameBoxCalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/graphics/NameBoxCalculator */ "./src/client/graphics/NameBoxCalculator.ts");\n/* harmony import */ var _configuration_Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration/Config */ "./src/core/configuration/Config.ts");\n/* harmony import */ var _execution_ExecutionManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./execution/ExecutionManager */ "./src/core/execution/ExecutionManager.ts");\n/* harmony import */ var _execution_WinCheckExecution__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./execution/WinCheckExecution */ "./src/core/execution/WinCheckExecution.ts");\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _game_GameUpdates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/GameUpdates */ "./src/core/game/GameUpdates.ts");\n/* harmony import */ var _game_GameImpl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/GameImpl */ "./src/core/game/GameImpl.ts");\n/* harmony import */ var _game_TerrainMapLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/TerrainMapLoader */ "./src/core/game/TerrainMapLoader.ts");\n\n\n\n\n\n\n\n\nasync function createGameRunner(gameID, gameConfig, clientID, callBack) {\n    const config = await (0,_configuration_Config__WEBPACK_IMPORTED_MODULE_1__.getConfig)(gameConfig, null);\n    const gameMap = await (0,_game_TerrainMapLoader__WEBPACK_IMPORTED_MODULE_7__.loadTerrainMap)(gameConfig.gameMap);\n    const game = (0,_game_GameImpl__WEBPACK_IMPORTED_MODULE_6__.createGame)(gameMap.gameMap, gameMap.miniGameMap, gameMap.nationMap, config);\n    const gr = new GameRunner(game, new _execution_ExecutionManager__WEBPACK_IMPORTED_MODULE_2__.Executor(game, gameID, clientID), callBack);\n    gr.init();\n    return gr;\n}\nclass GameRunner {\n    constructor(game, execManager, callBack) {\n        this.game = game;\n        this.execManager = execManager;\n        this.callBack = callBack;\n        this.turns = [];\n        this.currTurn = 0;\n        this.isExecuting = false;\n        this.playerViewData = {};\n    }\n    init() {\n        if (this.game.config().bots() > 0) {\n            this.game.addExecution(...this.execManager.spawnBots(this.game.config().numBots()));\n        }\n        if (this.game.config().spawnNPCs()) {\n            this.game.addExecution(...this.execManager.fakeHumanExecutions());\n        }\n        this.game.addExecution(new _execution_WinCheckExecution__WEBPACK_IMPORTED_MODULE_3__.WinCheckExecution());\n    }\n    addTurn(turn) {\n        this.turns.push(turn);\n    }\n    executeNextTick() {\n        if (this.isExecuting) {\n            return;\n        }\n        if (this.currTurn >= this.turns.length) {\n            return;\n        }\n        this.isExecuting = true;\n        this.game.addExecution(...this.execManager.createExecs(this.turns[this.currTurn]));\n        this.currTurn++;\n        let updates;\n        try {\n            updates = this.game.executeNextTick();\n        }\n        catch (error) {\n            if (error instanceof Error) {\n                console.error("Game tick error:", error.message);\n                this.callBack({\n                    errMsg: error.message,\n                    stack: error.stack,\n                });\n                return;\n            }\n        }\n        if (this.game.inSpawnPhase() && this.game.ticks() % 2 == 0) {\n            this.game\n                .players()\n                .filter((p) => p.type() == _game_Game__WEBPACK_IMPORTED_MODULE_4__.PlayerType.Human || p.type() == _game_Game__WEBPACK_IMPORTED_MODULE_4__.PlayerType.FakeHuman)\n                .forEach((p) => (this.playerViewData[p.id()] = (0,_client_graphics_NameBoxCalculator__WEBPACK_IMPORTED_MODULE_0__.placeName)(this.game, p)));\n        }\n        if (this.game.ticks() < 3 || this.game.ticks() % 30 == 0) {\n            this.game.players().forEach((p) => {\n                this.playerViewData[p.id()] = (0,_client_graphics_NameBoxCalculator__WEBPACK_IMPORTED_MODULE_0__.placeName)(this.game, p);\n            });\n        }\n        // Many tiles are updated to pack it into an array\n        const packedTileUpdates = updates[_game_GameUpdates__WEBPACK_IMPORTED_MODULE_5__.GameUpdateType.Tile].map((u) => u.update);\n        updates[_game_GameUpdates__WEBPACK_IMPORTED_MODULE_5__.GameUpdateType.Tile] = [];\n        this.callBack({\n            tick: this.game.ticks(),\n            packedTileUpdates: new BigUint64Array(packedTileUpdates),\n            updates: updates,\n            playerNameViewData: this.playerViewData,\n        });\n        this.isExecuting = false;\n    }\n    playerActions(playerID, x, y) {\n        const player = this.game.player(playerID);\n        const tile = this.game.ref(x, y);\n        const actions = {\n            canBoat: player.canBoat(tile),\n            canAttack: player.canAttack(tile),\n            buildableUnits: Object.values(_game_Game__WEBPACK_IMPORTED_MODULE_4__.UnitType).map((u) => {\n                return {\n                    type: u,\n                    canBuild: player.canBuild(u, tile) != false,\n                    cost: this.game.config().unitInfo(u).cost(player),\n                };\n            }),\n            canSendEmojiAllPlayers: player.canSendEmoji(_game_Game__WEBPACK_IMPORTED_MODULE_4__.AllPlayers),\n        };\n        if (this.game.hasOwner(tile)) {\n            const other = this.game.owner(tile);\n            actions.interaction = {\n                sharedBorder: player.sharesBorderWith(other),\n                canSendEmoji: player.canSendEmoji(other),\n                canTarget: player.canTarget(other),\n                canSendAllianceRequest: player.canSendAllianceRequest(other),\n                canBreakAlliance: player.isAlliedWith(other),\n                canDonate: player.canDonate(other),\n                canEmbargo: !player.hasEmbargoAgainst(other),\n            };\n        }\n        return actions;\n    }\n    playerProfile(playerID) {\n        const player = this.game.playerBySmallID(playerID);\n        if (!player.isPlayer()) {\n            throw new Error(`player with id ${playerID} not found`);\n        }\n        return player.playerProfile();\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/GameRunner.ts?',
        );

        /***/
      },

    /***/ "./src/core/PseudoRandom.ts":
      /*!**********************************!*\
  !*** ./src/core/PseudoRandom.ts ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PseudoRandom: () => (/* binding */ PseudoRandom)\n/* harmony export */ });\nclass PseudoRandom {\n    constructor(seed) {\n        this.m = 0x80000000; // 2**31\n        this.a = 1103515245;\n        this.c = 12345;\n        this.state = seed % this.m;\n    }\n    /**\n     * Generates the next pseudorandom number.\n     * @returns A number between 0 (inclusive) and 1 (exclusive).\n     */\n    next() {\n        this.state = (this.a * this.state + this.c) % this.m;\n        return this.state / this.m;\n    }\n    /**\n     * Generates a random integer between min (inclusive) and max (exclusive).\n     */\n    nextInt(min, max) {\n        return Math.floor(this.next() * (max - min) + min);\n    }\n    /**\n     * Generates a random float between min (inclusive) and max (exclusive).\n     */\n    nextFloat(min, max) {\n        return this.next() * (max - min) + min;\n    }\n    nextID() {\n        return this.nextInt(0, Math.pow(36, 8)) // 36^8 possibilities\n            .toString(36) // Convert to base36 (0-9 and a-z)\n            .padStart(8, "0"); // Ensure 8 chars by padding with zeros\n    }\n    randElement(arr) {\n        if (arr.length == 0) {\n            throw new Error("array must not be empty");\n        }\n        return arr[this.nextInt(0, arr.length)];\n    }\n    chance(odds) {\n        return this.nextInt(0, odds) == 0;\n    }\n    shuffleArray(array) {\n        for (let i = array.length - 1; i >= 0; i--) {\n            const j = Math.floor(this.nextInt(0, i + 1));\n            [array[i], array[j]] = [array[j], array[i]];\n        }\n        return array;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/PseudoRandom.ts?',
        );

        /***/
      },

    /***/ "./src/core/Util.ts":
      /*!**************************!*\
  !*** ./src/core/Util.ts ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateGameRecord: () => (/* binding */ CreateGameRecord),\n/* harmony export */   assertNever: () => (/* binding */ assertNever),\n/* harmony export */   calculateBoundingBox: () => (/* binding */ calculateBoundingBox),\n/* harmony export */   calculateBoundingBoxCenter: () => (/* binding */ calculateBoundingBoxCenter),\n/* harmony export */   closestShoreFromPlayer: () => (/* binding */ closestShoreFromPlayer),\n/* harmony export */   distSort: () => (/* binding */ distSort),\n/* harmony export */   distSortUnit: () => (/* binding */ distSortUnit),\n/* harmony export */   generateID: () => (/* binding */ generateID),\n/* harmony export */   getMode: () => (/* binding */ getMode),\n/* harmony export */   inscribed: () => (/* binding */ inscribed),\n/* harmony export */   manhattanDistWrapped: () => (/* binding */ manhattanDistWrapped),\n/* harmony export */   maxInt: () => (/* binding */ maxInt),\n/* harmony export */   minInt: () => (/* binding */ minInt),\n/* harmony export */   onlyImages: () => (/* binding */ onlyImages),\n/* harmony export */   processName: () => (/* binding */ processName),\n/* harmony export */   sanitize: () => (/* binding */ sanitize),\n/* harmony export */   simpleHash: () => (/* binding */ simpleHash),\n/* harmony export */   sourceDstOceanShore: () => (/* binding */ sourceDstOceanShore),\n/* harmony export */   targetTransportTile: () => (/* binding */ targetTransportTile),\n/* harmony export */   toInt: () => (/* binding */ toInt),\n/* harmony export */   within: () => (/* binding */ within),\n/* harmony export */   withinInt: () => (/* binding */ withinInt)\n/* harmony export */ });\n/* harmony import */ var twemoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twemoji */ "./node_modules/twemoji/dist/twemoji.esm.js");\n/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");\n/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");\n/* harmony import */ var _game_GameMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/GameMap */ "./src/core/game/GameMap.ts");\n\n\n\n\n\nfunction manhattanDistWrapped(c1, c2, width) {\n    // Calculate x distance\n    let dx = Math.abs(c1.x - c2.x);\n    // Check if wrapping around the x-axis is shorter\n    dx = Math.min(dx, width - dx);\n    // Calculate y distance (no wrapping for y-axis)\n    const dy = Math.abs(c1.y - c2.y);\n    // Return the sum of x and y distances\n    return dx + dy;\n}\nfunction within(value, min, max) {\n    return Math.min(Math.max(value, min), max);\n}\nfunction distSort(gm, target) {\n    return (a, b) => {\n        return gm.manhattanDist(a, target) - gm.manhattanDist(b, target);\n    };\n}\nfunction distSortUnit(gm, target) {\n    const targetRef = typeof target === "number" ? target : target.tile();\n    return (a, b) => {\n        return (gm.manhattanDist(a.tile(), targetRef) -\n            gm.manhattanDist(b.tile(), targetRef));\n    };\n}\n// TODO: refactor to new file\nfunction sourceDstOceanShore(gm, src, tile) {\n    const dst = gm.owner(tile);\n    const srcTile = closestShoreFromPlayer(gm, src, tile);\n    let dstTile = null;\n    if (dst.isPlayer()) {\n        dstTile = closestShoreFromPlayer(gm, dst, tile);\n    }\n    else {\n        dstTile = closestShoreTN(gm, tile, 50);\n    }\n    return [srcTile, dstTile];\n}\nfunction targetTransportTile(gm, tile) {\n    const dst = gm.playerBySmallID(gm.ownerID(tile));\n    let dstTile = null;\n    if (dst.isPlayer()) {\n        dstTile = closestShoreFromPlayer(gm, dst, tile);\n    }\n    else {\n        dstTile = closestShoreTN(gm, tile, 50);\n    }\n    return dstTile;\n}\nfunction closestShoreFromPlayer(gm, player, target) {\n    const shoreTiles = Array.from(player.borderTiles()).filter((t) => gm.isShore(t));\n    if (shoreTiles.length == 0) {\n        return null;\n    }\n    return shoreTiles.reduce((closest, current) => {\n        const closestDistance = manhattanDistWrapped(gm.cell(target), gm.cell(closest), gm.width());\n        const currentDistance = manhattanDistWrapped(gm.cell(target), gm.cell(current), gm.width());\n        return currentDistance < closestDistance ? current : closest;\n    });\n}\nfunction closestShoreTN(gm, tile, searchDist) {\n    const tn = Array.from(gm.bfs(tile, (0,_game_GameMap__WEBPACK_IMPORTED_MODULE_3__.andFN)((_, t) => !gm.hasOwner(t), (0,_game_GameMap__WEBPACK_IMPORTED_MODULE_3__.manhattanDistFN)(tile, searchDist))))\n        .filter((t) => gm.isShore(t))\n        .sort((a, b) => gm.manhattanDist(tile, a) - gm.manhattanDist(tile, b));\n    if (tn.length == 0) {\n        return null;\n    }\n    return tn[0];\n}\nfunction simpleHash(str) {\n    let hash = 0;\n    for (let i = 0; i < str.length; i++) {\n        const char = str.charCodeAt(i);\n        hash = (hash << 5) - hash + char;\n        hash = hash & hash; // Convert to 32-bit integer\n    }\n    return Math.abs(hash);\n}\nfunction calculateBoundingBox(gm, borderTiles) {\n    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;\n    borderTiles.forEach((tile) => {\n        const cell = gm.cell(tile);\n        minX = Math.min(minX, cell.x);\n        minY = Math.min(minY, cell.y);\n        maxX = Math.max(maxX, cell.x);\n        maxY = Math.max(maxY, cell.y);\n    });\n    return { min: new _game_Game__WEBPACK_IMPORTED_MODULE_2__.Cell(minX, minY), max: new _game_Game__WEBPACK_IMPORTED_MODULE_2__.Cell(maxX, maxY) };\n}\nfunction calculateBoundingBoxCenter(gm, borderTiles) {\n    const { min, max } = calculateBoundingBox(gm, borderTiles);\n    return new _game_Game__WEBPACK_IMPORTED_MODULE_2__.Cell(min.x + Math.floor((max.x - min.x) / 2), min.y + Math.floor((max.y - min.y) / 2));\n}\nfunction inscribed(outer, inner) {\n    return (outer.min.x <= inner.min.x &&\n        outer.min.y <= inner.min.y &&\n        outer.max.x >= inner.max.x &&\n        outer.max.y >= inner.max.y);\n}\nfunction getMode(list) {\n    // Count occurrences\n    const counts = new Map();\n    for (const item of list) {\n        counts.set(item, (counts.get(item) || 0) + 1);\n    }\n    // Find the item with the highest count\n    let mode = 0;\n    let maxCount = 0;\n    for (const [item, count] of counts) {\n        if (count > maxCount) {\n            maxCount = count;\n            mode = item;\n        }\n    }\n    return mode;\n}\nfunction sanitize(name) {\n    return Array.from(name)\n        .join("")\n        .replace(/[^\\p{L}\\p{N}\\s\\p{Emoji}\\p{Emoji_Component}\\[\\]_]/gu, "");\n}\nfunction processName(name) {\n    // First sanitize the raw input - strip everything except text and emojis\n    const sanitizedName = sanitize(name);\n    // Process emojis with twemoji\n    const withEmojis = twemoji__WEBPACK_IMPORTED_MODULE_0__["default"].parse(sanitizedName, {\n        base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/",\n        folder: "svg",\n        ext: ".svg",\n    });\n    // Add CSS styles inline to the wrapper span\n    const styledHTML = `\n        <span class="player-name" style="\n            display: inline-flex;\n            align-items: center;\n            gap: 0.25rem;\n            font-weight: 500;\n            vertical-align: middle;\n        ">\n            ${withEmojis}\n        </span>\n    `;\n    // Add CSS for the emoji images\n    const withEmojiStyles = styledHTML.replace(/<img/g, \'<img style="height: 1.2em; width: 1.2em; vertical-align: -0.2em; margin: 0 0.05em 0 0.1em;"\');\n    // Sanitize the final HTML, allowing styles and specific attributes\n    return onlyImages(withEmojiStyles);\n}\nfunction onlyImages(html) {\n    return dompurify__WEBPACK_IMPORTED_MODULE_1___default().sanitize(html, {\n        ALLOWED_TAGS: ["span", "img"],\n        ALLOWED_ATTR: ["src", "alt", "class", "style"],\n        ALLOWED_URI_REGEXP: /^https:\\/\\/cdn\\.jsdelivr\\.net\\/gh\\/twitter\\/twemoji/,\n        ADD_ATTR: ["style"],\n    });\n}\nfunction CreateGameRecord(id, gameConfig, \n// username does not need to be set.\nplayers, turns, start, end, winner) {\n    const record = {\n        id: id,\n        gameConfig: gameConfig,\n        startTimestampMS: start,\n        endTimestampMS: end,\n        date: new Date().toISOString().split("T")[0],\n        turns: [],\n    };\n    for (const turn of turns) {\n        if (turn.intents.length != 0) {\n            record.turns.push(turn);\n            for (const intent of turn.intents) {\n                if (intent.type == "spawn") {\n                    for (const playerRecord of players) {\n                        if (playerRecord.clientID == intent.clientID) {\n                            playerRecord.username = intent.name;\n                        }\n                    }\n                }\n            }\n        }\n    }\n    record.players = players;\n    record.durationSeconds = Math.floor((record.endTimestampMS - record.startTimestampMS) / 1000);\n    record.num_turns = turns.length;\n    record.winner = winner;\n    return record;\n}\nfunction assertNever(x) {\n    throw new Error("Unexpected value: " + x);\n}\nfunction generateID() {\n    const nanoid = (0,nanoid__WEBPACK_IMPORTED_MODULE_4__.customAlphabet)("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 8);\n    return nanoid();\n}\nfunction toInt(num) {\n    if (num === Infinity) {\n        return BigInt(Number.MAX_SAFE_INTEGER);\n    }\n    if (num === -Infinity) {\n        return BigInt(Number.MIN_SAFE_INTEGER);\n    }\n    return BigInt(Math.floor(num));\n}\nfunction maxInt(a, b) {\n    return a > b ? a : b;\n}\nfunction minInt(a, b) {\n    return a < b ? a : b;\n}\nfunction withinInt(num, min, max) {\n    const atLeastMin = maxInt(num, min);\n    return minInt(atLeastMin, max);\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/Util.ts?',
        );

        /***/
      },

    /***/ "./src/core/configuration/Config.ts":
      /*!******************************************!*\
  !*** ./src/core/configuration/Config.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameEnv: () => (/* binding */ GameEnv),\n/* harmony export */   getConfig: () => (/* binding */ getConfig),\n/* harmony export */   getServerConfigFromClient: () => (/* binding */ getServerConfigFromClient),\n/* harmony export */   getServerConfigFromServer: () => (/* binding */ getServerConfigFromServer)\n/* harmony export */ });\n/* harmony import */ var _PreprodConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreprodConfig */ "./src/core/configuration/PreprodConfig.ts");\n/* harmony import */ var _ProdConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProdConfig */ "./src/core/configuration/ProdConfig.ts");\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n/* harmony import */ var _DefaultConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultConfig */ "./src/core/configuration/DefaultConfig.ts");\n/* harmony import */ var _DevConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DevConfig */ "./src/core/configuration/DevConfig.ts");\n\n\n\n\n\nlet cachedSC = null;\nvar GameEnv;\n(function (GameEnv) {\n    GameEnv[GameEnv["Dev"] = 0] = "Dev";\n    GameEnv[GameEnv["Preprod"] = 1] = "Preprod";\n    GameEnv[GameEnv["Prod"] = 2] = "Prod";\n})(GameEnv || (GameEnv = {}));\nasync function getConfig(gameConfig, userSettings = null) {\n    const sc = await getServerConfigFromClient();\n    switch (sc.env()) {\n        case GameEnv.Dev:\n            return new _DevConfig__WEBPACK_IMPORTED_MODULE_4__.DevConfig(sc, gameConfig, userSettings);\n        case GameEnv.Preprod:\n        case GameEnv.Prod:\n            _Consolex__WEBPACK_IMPORTED_MODULE_2__.consolex.log("using prod config");\n            return new _DefaultConfig__WEBPACK_IMPORTED_MODULE_3__.DefaultConfig(sc, gameConfig, userSettings);\n        default:\n            throw Error(`unsupported server configuration: ${"dev"}`);\n    }\n}\nasync function getServerConfigFromClient() {\n    if (cachedSC) {\n        return cachedSC;\n    }\n    const response = await fetch("/api/env");\n    if (!response.ok) {\n        throw new Error(`Failed to fetch server config: ${response.status} ${response.statusText}`);\n    }\n    const config = await response.json();\n    // Log the retrieved configuration\n    console.log("Server config loaded:", config);\n    cachedSC = getServerConfig(config.game_env);\n    return cachedSC;\n}\nfunction getServerConfigFromServer() {\n    const gameEnv = "dev";\n    return getServerConfig(gameEnv);\n}\nfunction getServerConfig(gameEnv) {\n    switch (gameEnv) {\n        case "dev":\n            _Consolex__WEBPACK_IMPORTED_MODULE_2__.consolex.log("using dev server config");\n            return new _DevConfig__WEBPACK_IMPORTED_MODULE_4__.DevServerConfig();\n        case "staging":\n            _Consolex__WEBPACK_IMPORTED_MODULE_2__.consolex.log("using preprod server config");\n            return _PreprodConfig__WEBPACK_IMPORTED_MODULE_0__.preprodConfig;\n        case "prod":\n            _Consolex__WEBPACK_IMPORTED_MODULE_2__.consolex.log("using prod server config");\n            return _ProdConfig__WEBPACK_IMPORTED_MODULE_1__.prodConfig;\n        default:\n            throw Error(`unsupported server configuration: ${gameEnv}`);\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/configuration/Config.ts?',
        );

        /***/
      },

    /***/ "./src/core/configuration/DefaultConfig.ts":
      /*!*************************************************!*\
  !*** ./src/core/configuration/DefaultConfig.ts ***!
  \*************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DefaultConfig: () => (/* binding */ DefaultConfig),\n/* harmony export */   DefaultServerConfig: () => (/* binding */ DefaultServerConfig)\n/* harmony export */ });\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util */ "./src/core/Util.ts");\n/* harmony import */ var _PastelTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PastelTheme */ "./src/core/configuration/PastelTheme.ts");\n/* harmony import */ var _PastelThemeDark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PastelThemeDark */ "./src/core/configuration/PastelThemeDark.ts");\n\n\n\n\nclass DefaultServerConfig {\n    adminHeader() {\n        return "x-admin-key";\n    }\n    adminToken() {\n        return process.env.ADMIN_TOKEN;\n    }\n    turnIntervalMs() {\n        return 100;\n    }\n    gameCreationRate(highTraffic) {\n        if (highTraffic) {\n            return 20 * 1000;\n        }\n        else {\n            return 50 * 1000;\n        }\n    }\n    lobbyLifetime(highTraffic) {\n        return this.gameCreationRate(highTraffic) * 2;\n    }\n    workerIndex(gameID) {\n        return (0,_Util__WEBPACK_IMPORTED_MODULE_1__.simpleHash)(gameID) % this.numWorkers();\n    }\n    workerPath(gameID) {\n        return `w${this.workerIndex(gameID)}`;\n    }\n    workerPort(gameID) {\n        return this.workerPortByIndex(this.workerIndex(gameID));\n    }\n    workerPortByIndex(index) {\n        return 3001 + index;\n    }\n}\nclass DefaultConfig {\n    constructor(_serverConfig, _gameConfig, _userSettings) {\n        this._serverConfig = _serverConfig;\n        this._gameConfig = _gameConfig;\n        this._userSettings = _userSettings;\n    }\n    traitorDefenseDebuff() {\n        return 0.8;\n    }\n    spawnImmunityDuration() {\n        return 5 * 10;\n    }\n    gameConfig() {\n        return this._gameConfig;\n    }\n    serverConfig() {\n        return this._serverConfig;\n    }\n    userSettings() {\n        return this._userSettings;\n    }\n    difficultyModifier(difficulty) {\n        switch (difficulty) {\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.Difficulty.Easy:\n                return 1;\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.Difficulty.Medium:\n                return 3;\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.Difficulty.Hard:\n                return 9;\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.Difficulty.Impossible:\n                return 18;\n        }\n    }\n    cityPopulationIncrease() {\n        return 250000;\n    }\n    falloutDefenseModifier() {\n        return 5;\n    }\n    defensePostRange() {\n        return 30;\n    }\n    defensePostDefenseBonus() {\n        return 5;\n    }\n    spawnNPCs() {\n        return !this._gameConfig.disableNPCs;\n    }\n    bots() {\n        return this._gameConfig.bots;\n    }\n    instantBuild() {\n        return this._gameConfig.instantBuild;\n    }\n    infiniteGold() {\n        return this._gameConfig.infiniteGold;\n    }\n    infiniteTroops() {\n        return this._gameConfig.infiniteTroops;\n    }\n    tradeShipGold(dist) {\n        return 10000 + 100 * Math.pow(dist, 1.1);\n    }\n    tradeShipSpawnRate() {\n        return 500;\n    }\n    unitInfo(type) {\n        switch (type) {\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TransportShip:\n                return {\n                    cost: () => 0,\n                    territoryBound: false,\n                };\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Warship:\n                return {\n                    cost: (p) => p.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Human && this.infiniteGold()\n                        ? 0\n                        : Math.min(1000000, (p.unitsIncludingConstruction(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Warship).length + 1) *\n                            250000),\n                    territoryBound: false,\n                    maxHealth: 1000,\n                };\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Shell:\n                return {\n                    cost: () => 0,\n                    territoryBound: false,\n                    damage: 250,\n                };\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.SAMMissile:\n                return {\n                    cost: () => 0,\n                    territoryBound: false,\n                };\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Port:\n                return {\n                    cost: (p) => p.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Human && this.infiniteGold()\n                        ? 0\n                        : Math.min(1000000, Math.pow(2, p.unitsIncludingConstruction(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Port).length) * 125000),\n                    territoryBound: true,\n                    constructionDuration: this.instantBuild() ? 0 : 2 * 10,\n                };\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.AtomBomb:\n                return {\n                    cost: (p) => p.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Human && this.infiniteGold() ? 0 : 750000,\n                    territoryBound: false,\n                };\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.HydrogenBomb:\n                return {\n                    cost: (p) => p.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Human && this.infiniteGold() ? 0 : 5000000,\n                    territoryBound: false,\n                };\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MIRV:\n                return {\n                    cost: (p) => p.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Human && this.infiniteGold()\n                        ? 25\n                        : 25000000,\n                    territoryBound: false,\n                };\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MIRVWarhead:\n                return {\n                    cost: () => 0,\n                    territoryBound: false,\n                };\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TradeShip:\n                return {\n                    cost: () => 0,\n                    territoryBound: false,\n                };\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MissileSilo:\n                return {\n                    cost: (p) => p.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Human && this.infiniteGold() ? 0 : 1000000,\n                    territoryBound: true,\n                    constructionDuration: this.instantBuild() ? 0 : 10 * 10,\n                };\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.DefensePost:\n                return {\n                    cost: (p) => p.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Human && this.infiniteGold()\n                        ? 0\n                        : Math.min(250000, (p.unitsIncludingConstruction(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.DefensePost).length +\n                            1) *\n                            50000),\n                    territoryBound: true,\n                    constructionDuration: this.instantBuild() ? 0 : 5 * 10,\n                };\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.SAMLauncher:\n                return {\n                    cost: (p) => p.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Human && this.infiniteGold()\n                        ? 0\n                        : Math.min(1000000, (p.unitsIncludingConstruction(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.SAMLauncher).length +\n                            1) *\n                            1000000),\n                    territoryBound: true,\n                    constructionDuration: this.instantBuild() ? 0 : 10 * 10,\n                };\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.City:\n                return {\n                    cost: (p) => p.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Human && this.infiniteGold()\n                        ? 0\n                        : Math.min(1000000, Math.pow(2, p.unitsIncludingConstruction(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.City).length) * 125000),\n                    territoryBound: true,\n                    constructionDuration: this.instantBuild() ? 0 : 2 * 10,\n                };\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Construction:\n                return {\n                    cost: () => 0,\n                    territoryBound: true,\n                };\n            default:\n                (0,_Util__WEBPACK_IMPORTED_MODULE_1__.assertNever)(type);\n        }\n    }\n    defaultDonationAmount(sender) {\n        return Math.floor(sender.troops() / 3);\n    }\n    donateCooldown() {\n        return 10 * 10;\n    }\n    emojiMessageDuration() {\n        return 5 * 10;\n    }\n    emojiMessageCooldown() {\n        return 5 * 10;\n    }\n    targetDuration() {\n        return 10 * 10;\n    }\n    targetCooldown() {\n        return 15 * 10;\n    }\n    allianceRequestCooldown() {\n        return 30 * 10;\n    }\n    allianceDuration() {\n        return 240 * 10; // 4 minutes\n    }\n    percentageTilesOwnedToWin() {\n        return 80;\n    }\n    boatMaxNumber() {\n        return 3;\n    }\n    numSpawnPhaseTurns() {\n        return this._gameConfig.gameType == _game_Game__WEBPACK_IMPORTED_MODULE_0__.GameType.Singleplayer ? 100 : 300;\n    }\n    numBots() {\n        return this.bots();\n    }\n    theme() {\n        return this.userSettings().darkMode() ? _PastelThemeDark__WEBPACK_IMPORTED_MODULE_3__.pastelThemeDark : _PastelTheme__WEBPACK_IMPORTED_MODULE_2__.pastelTheme;\n    }\n    attackLogic(gm, attackTroops, attacker, defender, tileToConquer) {\n        let mag = 0;\n        let speed = 0;\n        const type = gm.terrainType(tileToConquer);\n        switch (type) {\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.TerrainType.Plains:\n                mag = 80;\n                speed = 15;\n                break;\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.TerrainType.Highland:\n                mag = 100;\n                speed = 20;\n                break;\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.TerrainType.Mountain:\n                mag = 120;\n                speed = 25;\n                break;\n            default:\n                throw new Error(`terrain type ${type} not supported`);\n        }\n        if (defender.isPlayer()) {\n            for (const dp of gm.nearbyDefensePosts(tileToConquer)) {\n                if (dp.owner() == defender) {\n                    mag *= this.defensePostDefenseBonus();\n                    speed *= this.defensePostDefenseBonus();\n                    break;\n                }\n            }\n        }\n        if (gm.hasFallout(tileToConquer)) {\n            mag *= this.falloutDefenseModifier();\n            speed *= this.falloutDefenseModifier();\n        }\n        if (attacker.isPlayer() && defender.isPlayer()) {\n            if (attacker.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Human &&\n                defender.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Bot) {\n                mag *= 0.8;\n            }\n            if (attacker.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.FakeHuman &&\n                defender.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Bot) {\n                mag *= 0.8;\n            }\n        }\n        let largeModifier = 1;\n        if (attacker.numTilesOwned() > 50000) {\n            largeModifier = Math.sqrt(50000 / attacker.numTilesOwned());\n        }\n        if (defender.isPlayer()) {\n            return {\n                attackerTroopLoss: (0,_Util__WEBPACK_IMPORTED_MODULE_1__.within)(defender.troops() / attackTroops, 0.5, 2) *\n                    mag *\n                    0.8 *\n                    largeModifier *\n                    (defender.isTraitor() ? this.traitorDefenseDebuff() : 1),\n                defenderTroopLoss: defender.troops() / defender.numTilesOwned(),\n                tilesPerTickUsed: (0,_Util__WEBPACK_IMPORTED_MODULE_1__.within)(defender.troops() / (5 * attackTroops), 0.2, 1.5) *\n                    speed *\n                    largeModifier,\n            };\n        }\n        else {\n            return {\n                attackerTroopLoss: attacker.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Bot ? mag / 10 : mag / 5,\n                defenderTroopLoss: 0,\n                tilesPerTickUsed: (0,_Util__WEBPACK_IMPORTED_MODULE_1__.within)((2000 * Math.max(10, speed)) / attackTroops, 5, 100),\n            };\n        }\n    }\n    attackTilesPerTick(attackTroops, attacker, defender, numAdjacentTilesWithEnemy) {\n        if (defender.isPlayer()) {\n            return ((0,_Util__WEBPACK_IMPORTED_MODULE_1__.within)(((5 * attackTroops) / defender.troops()) * 2, 0.01, 0.5) *\n                numAdjacentTilesWithEnemy *\n                3);\n        }\n        else {\n            return numAdjacentTilesWithEnemy * 2;\n        }\n    }\n    boatAttackAmount(attacker, defender) {\n        return Math.floor(attacker.troops() / 5);\n    }\n    attackAmount(attacker, defender) {\n        if (attacker.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Bot) {\n            return attacker.troops() / 20;\n        }\n        else {\n            return attacker.troops() / 5;\n        }\n    }\n    startManpower(playerInfo) {\n        if (playerInfo.playerType == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Bot) {\n            return 10000;\n        }\n        if (playerInfo.playerType == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.FakeHuman) {\n            switch (this._gameConfig.difficulty) {\n                case _game_Game__WEBPACK_IMPORTED_MODULE_0__.Difficulty.Easy:\n                    return 2500 * (playerInfo?.nation?.strength ?? 1);\n                case _game_Game__WEBPACK_IMPORTED_MODULE_0__.Difficulty.Medium:\n                    return 5000 * (playerInfo?.nation?.strength ?? 1);\n                case _game_Game__WEBPACK_IMPORTED_MODULE_0__.Difficulty.Hard:\n                    return 20000 * (playerInfo?.nation?.strength ?? 1);\n                case _game_Game__WEBPACK_IMPORTED_MODULE_0__.Difficulty.Impossible:\n                    return 50000 * (playerInfo?.nation?.strength ?? 1);\n            }\n        }\n        return this.infiniteTroops() ? 1000000 : 25000;\n    }\n    maxPopulation(player) {\n        const maxPop = player.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Human && this.infiniteTroops()\n            ? 1000000000\n            : 2 * (Math.pow(player.numTilesOwned(), 0.6) * 1000 + 50000) +\n                player.units(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.City).length * this.cityPopulationIncrease();\n        if (player.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Bot) {\n            return maxPop / 2;\n        }\n        if (player.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Human) {\n            return maxPop;\n        }\n        switch (this._gameConfig.difficulty) {\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.Difficulty.Easy:\n                return maxPop * 0.5;\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.Difficulty.Medium:\n                return maxPop * 1;\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.Difficulty.Hard:\n                return maxPop * 1.5;\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.Difficulty.Impossible:\n                return maxPop * 2;\n        }\n    }\n    populationIncreaseRate(player) {\n        const max = this.maxPopulation(player);\n        let toAdd = 10 + Math.pow(player.population(), 0.73) / 4;\n        const ratio = 1 - player.population() / max;\n        toAdd *= ratio;\n        if (player.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Bot) {\n            toAdd *= 0.7;\n        }\n        if (player.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.FakeHuman) {\n            switch (this._gameConfig.difficulty) {\n                case _game_Game__WEBPACK_IMPORTED_MODULE_0__.Difficulty.Easy:\n                    toAdd *= 0.9;\n                    break;\n                case _game_Game__WEBPACK_IMPORTED_MODULE_0__.Difficulty.Medium:\n                    toAdd *= 1;\n                    break;\n                case _game_Game__WEBPACK_IMPORTED_MODULE_0__.Difficulty.Hard:\n                    toAdd *= 1.1;\n                    break;\n                case _game_Game__WEBPACK_IMPORTED_MODULE_0__.Difficulty.Impossible:\n                    toAdd *= 1.2;\n                    break;\n            }\n        }\n        return Math.min(player.population() + toAdd, max) - player.population();\n    }\n    goldAdditionRate(player) {\n        return Math.sqrt(player.workers() * player.numTilesOwned()) / 200;\n    }\n    troopAdjustmentRate(player) {\n        const maxDiff = this.maxPopulation(player) / 1000;\n        const target = player.population() * player.targetTroopRatio();\n        const diff = target - player.troops();\n        if (Math.abs(diff) < maxDiff) {\n            return diff;\n        }\n        const adjustment = maxDiff * Math.sign(diff);\n        // Can ramp down troops much faster\n        if (adjustment < 0) {\n            return adjustment * 5;\n        }\n        return adjustment;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/configuration/DefaultConfig.ts?',
        );

        /***/
      },

    /***/ "./src/core/configuration/DevConfig.ts":
      /*!*********************************************!*\
  !*** ./src/core/configuration/DevConfig.ts ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DevConfig: () => (/* binding */ DevConfig),\n/* harmony export */   DevServerConfig: () => (/* binding */ DevServerConfig)\n/* harmony export */ });\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Config */ "./src/core/configuration/Config.ts");\n/* harmony import */ var _DefaultConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultConfig */ "./src/core/configuration/DefaultConfig.ts");\n\n\n\nclass DevServerConfig extends _DefaultConfig__WEBPACK_IMPORTED_MODULE_2__.DefaultServerConfig {\n    adminToken() {\n        return "WARNING_DEV_ADMIN_KEY_DO_NOT_USE_IN_PRODUCTION";\n    }\n    env() {\n        return _Config__WEBPACK_IMPORTED_MODULE_1__.GameEnv.Dev;\n    }\n    gameCreationRate(highTraffic) {\n        return 5 * 1000;\n    }\n    discordRedirectURI() {\n        return "http://localhost:3000/auth/callback";\n    }\n    numWorkers() {\n        return 2;\n    }\n}\nclass DevConfig extends _DefaultConfig__WEBPACK_IMPORTED_MODULE_2__.DefaultConfig {\n    constructor(sc, gc, us) {\n        super(sc, gc, us);\n    }\n    numSpawnPhaseTurns() {\n        return this.gameConfig().gameType == _game_Game__WEBPACK_IMPORTED_MODULE_0__.GameType.Singleplayer ? 40 : 100;\n        // return 100\n    }\n    unitInfo(type) {\n        const info = super.unitInfo(type);\n        const oldCost = info.cost;\n        // info.cost = (p: Player) => oldCost(p) / 1000000000;\n        return info;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/configuration/DevConfig.ts?',
        );

        /***/
      },

    /***/ "./src/core/configuration/PastelTheme.ts":
      /*!***********************************************!*\
  !*** ./src/core/configuration/PastelTheme.ts ***!
  \***********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pastelTheme: () => (/* binding */ pastelTheme)\n/* harmony export */ });\n/* harmony import */ var colord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! colord */ "./node_modules/colord/index.mjs");\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _PseudoRandom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PseudoRandom */ "./src/core/PseudoRandom.ts");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/core/Util.ts");\n\n\n\n\nconst pastelTheme = new (class {\n    constructor() {\n        this.rand = new _PseudoRandom__WEBPACK_IMPORTED_MODULE_1__.PseudoRandom(123);\n        this.background = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 60, g: 60, b: 60 });\n        this.land = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 194, g: 193, b: 148 });\n        this.shore = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 204, g: 203, b: 158 });\n        this.falloutColors = [\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 120, g: 255, b: 71 }), // Original color\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 130, g: 255, b: 85 }), // Slightly lighter\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 110, g: 245, b: 65 }), // Slightly darker\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 125, g: 255, b: 75 }), // Warmer tint\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 115, g: 250, b: 68 }), // Cooler tint\n        ];\n        this.water = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 70, g: 132, b: 180 });\n        this.shorelineWater = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 143, b: 255 });\n        this.territoryColors = [\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 100, b: 100 }), // Bright Red\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 180, b: 230 }), // Sky Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 180, b: 80 }), // Golden Yellow\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 100, b: 230 }), // Purple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 80, g: 200, b: 120 }), // Emerald Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 130, b: 180 }), // Pink\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 160, b: 80 }), // Olive Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 150, b: 100 }), // Peach\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 80, g: 130, b: 190 }), // Navy Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 210, g: 210, b: 100 }), // Lime Yellow\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 100, b: 130 }), // Maroon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 210, b: 210 }), // Turquoise\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 210, g: 140, b: 80 }), // Light Orange\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 150, g: 110, b: 190 }), // Lavender\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 210, b: 120 }), // Light Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 210, g: 100, b: 160 }), // Hot Pink\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 140, b: 110 }), // Sea Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 180, b: 180 }), // Light Pink\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 120, g: 120, b: 190 }), // Periwinkle\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 170, b: 100 }), // Sand\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 180, b: 160 }), // Aquamarine\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 210, g: 160, b: 200 }), // Orchid\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 170, g: 190, b: 100 }), // Yellow Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 130, b: 150 }), // Steel Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 140, b: 140 }), // Salmon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 140, g: 180, b: 220 }), // Light Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 200, g: 160, b: 110 }), // Tan\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 130, b: 180 }), // Plum\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 130, g: 200, b: 130 }), // Light Sea Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 220, g: 120, b: 120 }), // Coral\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 120, g: 160, b: 200 }), // Cornflower Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 200, g: 200, b: 140 }), // Khaki\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 160, g: 120, b: 160 }), // Purple Gray\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 140, g: 180, b: 140 }), // Dark Sea Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 200, g: 130, b: 110 }), // Dark Salmon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 130, g: 170, b: 190 }), // Cadet Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 180, b: 160 }), // Tan Gray\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 170, g: 140, b: 190 }), // Medium Purple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 160, g: 190, b: 160 }), // Pale Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 150, b: 130 }), // Rosy Brown\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 140, g: 150, b: 180 }), // Light Slate Gray\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 170, b: 140 }), // Dark Khaki\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 150, g: 130, b: 150 }), // Thistle\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 170, g: 190, b: 180 }), // Pale Blue Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 140, b: 150 }), // Puce\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 130, g: 180, b: 170 }), // Medium Aquamarine\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 160, b: 180 }), // Mauve\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 160, g: 180, b: 140 }), // Dark Olive Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 170, g: 150, b: 170 }), // Dusty Rose\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 180, b: 230 }), // Sky Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 180, b: 80 }), // Golden Yellow\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 100, b: 230 }), // Purple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 80, g: 200, b: 120 }), // Emerald Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 130, b: 180 }), // Pink\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 160, b: 80 }), // Olive Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 150, b: 100 }), // Peach\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 80, g: 130, b: 190 }), // Navy Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 210, g: 210, b: 100 }), // Lime Yellow\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 100, b: 130 }), // Maroon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 210, b: 210 }), // Turquoise\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 210, g: 140, b: 80 }), // Light Orange\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 150, g: 110, b: 190 }), // Lavender\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 210, b: 120 }), // Light Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 210, g: 100, b: 160 }), // Hot Pink\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 140, b: 110 }), // Sea Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 180, b: 180 }), // Light Pink\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 120, g: 120, b: 190 }), // Periwinkle\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 170, b: 100 }), // Sand\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 180, b: 160 }), // Aquamarine\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 210, g: 160, b: 200 }), // Orchid\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 170, g: 190, b: 100 }), // Yellow Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 130, b: 150 }), // Steel Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 140, b: 140 }), // Salmon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 140, g: 180, b: 220 }), // Light Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 200, g: 160, b: 110 }), // Tan\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 130, b: 180 }), // Plum\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 130, g: 200, b: 130 }), // Light Sea Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 220, g: 120, b: 120 }), // Coral\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 120, g: 160, b: 200 }), // Cornflower Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 200, g: 200, b: 140 }), // Khaki\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 160, g: 120, b: 160 }), // Purple Gray\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 140, g: 180, b: 140 }), // Dark Sea Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 200, g: 130, b: 110 }), // Dark Salmon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 130, g: 170, b: 190 }), // Cadet Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 180, b: 160 }), // Tan Gray\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 170, g: 140, b: 190 }), // Medium Purple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 160, g: 190, b: 160 }), // Pale Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 150, b: 130 }), // Rosy Brown\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 140, g: 150, b: 180 }), // Light Slate Gray\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 170, b: 140 }), // Dark Khaki\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 150, g: 130, b: 150 }), // Thistle\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 170, g: 190, b: 180 }), // Pale Blue Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 140, b: 150 }), // Puce\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 130, g: 180, b: 170 }), // Medium Aquamarine\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 160, b: 180 }), // Mauve\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 160, g: 180, b: 140 }), // Dark Olive Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 170, g: 150, b: 170 }), // Dusty Rose\n        ];\n        this.humanColors = [\n            // Original set\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 235, g: 75, b: 75 }), // Bright Red\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 67, g: 190, b: 84 }), // Fresh Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 59, g: 130, b: 246 }), // Royal Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 245, g: 158, b: 11 }), // Amber\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 236, g: 72, b: 153 }), // Deep Pink\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 48, g: 178, b: 180 }), // Teal\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 168, g: 85, b: 247 }), // Vibrant Purple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 251, g: 191, b: 36 }), // Marigold\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 74, g: 222, b: 128 }), // Mint\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 239, g: 68, b: 68 }), // Crimson\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 34, g: 197, b: 94 }), // Emerald\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 96, g: 165, b: 250 }), // Sky Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 249, g: 115, b: 22 }), // Tangerine\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 192, g: 132, b: 252 }), // Lavender\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 45, g: 212, b: 191 }), // Turquoise\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 244, g: 114, b: 182 }), // Rose\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 132, g: 204, b: 22 }), // Lime\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 56, g: 189, b: 248 }), // Light Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 234, g: 179, b: 8 }), // Sunflower\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 217, g: 70, b: 239 }), // Fuchsia\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 16, g: 185, b: 129 }), // Sea Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 251, g: 146, b: 60 }), // Light Orange\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 147, g: 51, b: 234 }), // Bright Purple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 79, g: 70, b: 229 }), // Indigo\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 245, g: 101, b: 101 }), // Coral\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 134, g: 239, b: 172 }), // Light Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 59, g: 130, b: 246 }), // Cerulean\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 253, g: 164, b: 175 }), // Salmon Pink\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 147, g: 197, b: 253 }), // Powder Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 252, g: 211, b: 77 }), // Golden\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 92, b: 251 }), // Amethyst\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 82, g: 183, b: 136 }), // Jade\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 248, g: 113, b: 113 }), // Warm Red\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 99, g: 202, b: 253 }), // Azure\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 240, g: 171, b: 252 }), // Orchid\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 163, g: 230, b: 53 }), // Yellow Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 234, g: 88, b: 12 }), // Burnt Orange\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 125, g: 211, b: 252 }), // Crystal Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 251, g: 113, b: 133 }), // Watermelon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 52, g: 211, b: 153 }), // Spearmint\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 167, g: 139, b: 250 }), // Periwinkle\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 245, g: 158, b: 11 }), // Honey\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 110, g: 231, b: 183 }), // Seafoam\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 233, g: 213, b: 255 }), // Light Lilac\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 202, g: 138, b: 4 }), // Rich Gold\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 151, g: 255, b: 187 }), // Fresh Mint\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 220, g: 38, b: 38 }), // Ruby\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 124, g: 58, b: 237 }), // Royal Purple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 45, g: 212, b: 191 }), // Ocean\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 252, g: 165, b: 165 }), // Peach\n            // Additional 50 colors\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 179, g: 136, b: 255 }), // Light Purple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 133, g: 77, b: 14 }), // Chocolate\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 52, g: 211, b: 153 }), // Aquamarine\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 234, g: 179, b: 8 }), // Mustard\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 236, g: 72, b: 153 }), // Hot Pink\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 147, g: 197, b: 253 }), // Sky\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 249, g: 115, b: 22 }), // Pumpkin\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 167, g: 139, b: 250 }), // Iris\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 16, g: 185, b: 129 }), // Pine\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 251, g: 146, b: 60 }), // Mango\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 192, g: 132, b: 252 }), // Wisteria\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 79, g: 70, b: 229 }), // Sapphire\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 245, g: 101, b: 101 }), // Salmon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 134, g: 239, b: 172 }), // Spring Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 59, g: 130, b: 246 }), // Ocean Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 253, g: 164, b: 175 }), // Rose Gold\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 16, g: 185, b: 129 }), // Forest\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 252, g: 211, b: 77 }), // Sunshine\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 92, b: 251 }), // Grape\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 82, g: 183, b: 136 }), // Eucalyptus\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 248, g: 113, b: 113 }), // Cherry\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 99, g: 202, b: 253 }), // Arctic\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 240, g: 171, b: 252 }), // Lilac\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 163, g: 230, b: 53 }), // Chartreuse\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 234, g: 88, b: 12 }), // Rust\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 125, g: 211, b: 252 }), // Ice Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 251, g: 113, b: 133 }), // Strawberry\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 52, g: 211, b: 153 }), // Sage\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 167, g: 139, b: 250 }), // Violet\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 245, g: 158, b: 11 }), // Apricot\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 110, g: 231, b: 183 }), // Mint Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 233, g: 213, b: 255 }), // Thistle\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 202, g: 138, b: 4 }), // Bronze\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 151, g: 255, b: 187 }), // Pistachio\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 220, g: 38, b: 38 }), // Fire Engine\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 124, g: 58, b: 237 }), // Electric Purple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 45, g: 212, b: 191 }), // Caribbean\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 252, g: 165, b: 165 }), // Melon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 168, g: 85, b: 247 }), // Byzantium\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 74, g: 222, b: 128 }), // Kelly Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 239, g: 68, b: 68 }), // Cardinal\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 34, g: 197, b: 94 }), // Shamrock\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 96, g: 165, b: 250 }), // Marina\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 249, g: 115, b: 22 }), // Carrot\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 192, g: 132, b: 252 }), // Heliotrope\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 45, g: 212, b: 191 }), // Lagoon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 244, g: 114, b: 182 }), // Bubble Gum\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 132, g: 204, b: 22 }), // Apple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 56, g: 189, b: 248 }), // Electric Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 234, g: 179, b: 8 }), // Daffodil\n        ];\n        this._selfColor = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 0, g: 255, b: 0 });\n        this._allyColor = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 255, g: 255, b: 0 });\n        this._enemyColor = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 255, g: 0, b: 0 });\n        this._spawnHighlightColor = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 255, g: 213, b: 79 });\n    }\n    territoryColor(playerInfo) {\n        if (playerInfo.playerType == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Human) {\n            return this.humanColors[(0,_Util__WEBPACK_IMPORTED_MODULE_2__.simpleHash)(playerInfo.name) % this.humanColors.length];\n        }\n        return this.territoryColors[(0,_Util__WEBPACK_IMPORTED_MODULE_2__.simpleHash)(playerInfo.name) % this.territoryColors.length];\n    }\n    textColor(playerInfo) {\n        return playerInfo.playerType == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Human ? "#000000" : "#4D4D4D";\n    }\n    borderColor(playerInfo) {\n        const tc = this.territoryColor(playerInfo).rgba;\n        return (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({\n            r: Math.max(tc.r - 40, 0),\n            g: Math.max(tc.g - 40, 0),\n            b: Math.max(tc.b - 40, 0),\n        });\n    }\n    defendedBorderColor(playerInfo) {\n        const bc = this.borderColor(playerInfo).rgba;\n        return (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({\n            r: Math.max(bc.r - 40, 0),\n            g: Math.max(bc.g - 40, 0),\n            b: Math.max(bc.b - 40, 0),\n        });\n    }\n    terrainColor(gm, tile) {\n        const mag = gm.magnitude(tile);\n        if (gm.isShore(tile)) {\n            return this.shore;\n        }\n        switch (gm.terrainType(tile)) {\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.TerrainType.Ocean:\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.TerrainType.Lake:\n                const w = this.water.rgba;\n                if (gm.isShoreline(tile) && gm.isWater(tile)) {\n                    return this.shorelineWater;\n                }\n                if (gm.magnitude(tile) < 10) {\n                    return (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({\n                        r: Math.max(w.r - 10 + mag, 0),\n                        g: Math.max(w.g - 10 + mag, 0),\n                        b: Math.max(w.b - 10 + mag, 0),\n                    });\n                }\n                return this.water;\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.TerrainType.Plains:\n                return (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({\n                    r: 190,\n                    g: 220 - 2 * mag,\n                    b: 138,\n                });\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.TerrainType.Highland:\n                return (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({\n                    r: 200 + 2 * mag,\n                    g: 183 + 2 * mag,\n                    b: 138 + 2 * mag,\n                });\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.TerrainType.Mountain:\n                return (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({\n                    r: 230 + mag / 2,\n                    g: 230 + mag / 2,\n                    b: 230 + mag / 2,\n                });\n        }\n    }\n    backgroundColor() {\n        return this.background;\n    }\n    falloutColor() {\n        return this.rand.randElement(this.falloutColors);\n    }\n    font() {\n        return "Overpass, sans-serif";\n    }\n    selfColor() {\n        return this._selfColor;\n    }\n    allyColor() {\n        return this._allyColor;\n    }\n    enemyColor() {\n        return this._enemyColor;\n    }\n    spawnHighlightColor() {\n        return this._spawnHighlightColor;\n    }\n})();\n\n\n//# sourceURL=webpack://openfront-client/./src/core/configuration/PastelTheme.ts?',
        );

        /***/
      },

    /***/ "./src/core/configuration/PastelThemeDark.ts":
      /*!***************************************************!*\
  !*** ./src/core/configuration/PastelThemeDark.ts ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pastelThemeDark: () => (/* binding */ pastelThemeDark)\n/* harmony export */ });\n/* harmony import */ var colord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! colord */ "./node_modules/colord/index.mjs");\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _PseudoRandom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PseudoRandom */ "./src/core/PseudoRandom.ts");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/core/Util.ts");\n\n\n\n\nconst pastelThemeDark = new (class {\n    constructor() {\n        this.rand = new _PseudoRandom__WEBPACK_IMPORTED_MODULE_1__.PseudoRandom(123);\n        this.background = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 0, g: 0, b: 0 });\n        this.land = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 194, g: 193, b: 148 });\n        this.shore = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 134, g: 133, b: 88 });\n        this.falloutColors = [\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 120, g: 255, b: 71 }), // Original color\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 130, g: 255, b: 85 }), // Slightly lighter\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 110, g: 245, b: 65 }), // Slightly darker\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 125, g: 255, b: 75 }), // Warmer tint\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 115, g: 250, b: 68 }), // Cooler tint\n        ];\n        this.water = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 14, g: 11, b: 30 });\n        this.shorelineWater = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 50, g: 50, b: 50 });\n        this.territoryColors = [\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 100, b: 100 }), // Bright Red\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 180, b: 230 }), // Sky Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 180, b: 80 }), // Golden Yellow\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 100, b: 230 }), // Purple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 80, g: 200, b: 120 }), // Emerald Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 130, b: 180 }), // Pink\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 160, b: 80 }), // Olive Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 150, b: 100 }), // Peach\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 80, g: 130, b: 190 }), // Navy Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 210, g: 210, b: 100 }), // Lime Yellow\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 100, b: 130 }), // Maroon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 210, b: 210 }), // Turquoise\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 210, g: 140, b: 80 }), // Light Orange\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 150, g: 110, b: 190 }), // Lavender\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 210, b: 120 }), // Light Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 210, g: 100, b: 160 }), // Hot Pink\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 140, b: 110 }), // Sea Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 180, b: 180 }), // Light Pink\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 120, g: 120, b: 190 }), // Periwinkle\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 170, b: 100 }), // Sand\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 180, b: 160 }), // Aquamarine\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 210, g: 160, b: 200 }), // Orchid\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 170, g: 190, b: 100 }), // Yellow Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 130, b: 150 }), // Steel Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 140, b: 140 }), // Salmon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 140, g: 180, b: 220 }), // Light Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 200, g: 160, b: 110 }), // Tan\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 130, b: 180 }), // Plum\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 130, g: 200, b: 130 }), // Light Sea Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 220, g: 120, b: 120 }), // Coral\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 120, g: 160, b: 200 }), // Cornflower Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 200, g: 200, b: 140 }), // Khaki\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 160, g: 120, b: 160 }), // Purple Gray\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 140, g: 180, b: 140 }), // Dark Sea Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 200, g: 130, b: 110 }), // Dark Salmon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 130, g: 170, b: 190 }), // Cadet Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 180, b: 160 }), // Tan Gray\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 170, g: 140, b: 190 }), // Medium Purple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 160, g: 190, b: 160 }), // Pale Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 150, b: 130 }), // Rosy Brown\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 140, g: 150, b: 180 }), // Light Slate Gray\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 170, b: 140 }), // Dark Khaki\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 150, g: 130, b: 150 }), // Thistle\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 170, g: 190, b: 180 }), // Pale Blue Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 140, b: 150 }), // Puce\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 130, g: 180, b: 170 }), // Medium Aquamarine\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 160, b: 180 }), // Mauve\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 160, g: 180, b: 140 }), // Dark Olive Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 170, g: 150, b: 170 }), // Dusty Rose\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 180, b: 230 }), // Sky Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 180, b: 80 }), // Golden Yellow\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 100, b: 230 }), // Purple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 80, g: 200, b: 120 }), // Emerald Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 130, b: 180 }), // Pink\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 160, b: 80 }), // Olive Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 150, b: 100 }), // Peach\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 80, g: 130, b: 190 }), // Navy Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 210, g: 210, b: 100 }), // Lime Yellow\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 100, b: 130 }), // Maroon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 210, b: 210 }), // Turquoise\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 210, g: 140, b: 80 }), // Light Orange\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 150, g: 110, b: 190 }), // Lavender\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 210, b: 120 }), // Light Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 210, g: 100, b: 160 }), // Hot Pink\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 140, b: 110 }), // Sea Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 180, b: 180 }), // Light Pink\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 120, g: 120, b: 190 }), // Periwinkle\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 170, b: 100 }), // Sand\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 180, b: 160 }), // Aquamarine\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 210, g: 160, b: 200 }), // Orchid\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 170, g: 190, b: 100 }), // Yellow Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 100, g: 130, b: 150 }), // Steel Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 230, g: 140, b: 140 }), // Salmon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 140, g: 180, b: 220 }), // Light Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 200, g: 160, b: 110 }), // Tan\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 130, b: 180 }), // Plum\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 130, g: 200, b: 130 }), // Light Sea Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 220, g: 120, b: 120 }), // Coral\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 120, g: 160, b: 200 }), // Cornflower Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 200, g: 200, b: 140 }), // Khaki\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 160, g: 120, b: 160 }), // Purple Gray\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 140, g: 180, b: 140 }), // Dark Sea Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 200, g: 130, b: 110 }), // Dark Salmon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 130, g: 170, b: 190 }), // Cadet Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 180, b: 160 }), // Tan Gray\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 170, g: 140, b: 190 }), // Medium Purple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 160, g: 190, b: 160 }), // Pale Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 150, b: 130 }), // Rosy Brown\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 140, g: 150, b: 180 }), // Light Slate Gray\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 170, b: 140 }), // Dark Khaki\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 150, g: 130, b: 150 }), // Thistle\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 170, g: 190, b: 180 }), // Pale Blue Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 140, b: 150 }), // Puce\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 130, g: 180, b: 170 }), // Medium Aquamarine\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 180, g: 160, b: 180 }), // Mauve\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 160, g: 180, b: 140 }), // Dark Olive Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 170, g: 150, b: 170 }), // Dusty Rose\n        ];\n        this.humanColors = [\n            // Original set\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 235, g: 75, b: 75 }), // Bright Red\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 67, g: 190, b: 84 }), // Fresh Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 59, g: 130, b: 246 }), // Royal Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 245, g: 158, b: 11 }), // Amber\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 236, g: 72, b: 153 }), // Deep Pink\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 48, g: 178, b: 180 }), // Teal\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 168, g: 85, b: 247 }), // Vibrant Purple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 251, g: 191, b: 36 }), // Marigold\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 74, g: 222, b: 128 }), // Mint\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 239, g: 68, b: 68 }), // Crimson\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 34, g: 197, b: 94 }), // Emerald\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 96, g: 165, b: 250 }), // Sky Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 249, g: 115, b: 22 }), // Tangerine\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 192, g: 132, b: 252 }), // Lavender\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 45, g: 212, b: 191 }), // Turquoise\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 244, g: 114, b: 182 }), // Rose\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 132, g: 204, b: 22 }), // Lime\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 56, g: 189, b: 248 }), // Light Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 234, g: 179, b: 8 }), // Sunflower\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 217, g: 70, b: 239 }), // Fuchsia\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 16, g: 185, b: 129 }), // Sea Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 251, g: 146, b: 60 }), // Light Orange\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 147, g: 51, b: 234 }), // Bright Purple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 79, g: 70, b: 229 }), // Indigo\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 245, g: 101, b: 101 }), // Coral\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 134, g: 239, b: 172 }), // Light Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 59, g: 130, b: 246 }), // Cerulean\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 253, g: 164, b: 175 }), // Salmon Pink\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 147, g: 197, b: 253 }), // Powder Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 252, g: 211, b: 77 }), // Golden\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 92, b: 251 }), // Amethyst\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 82, g: 183, b: 136 }), // Jade\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 248, g: 113, b: 113 }), // Warm Red\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 99, g: 202, b: 253 }), // Azure\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 240, g: 171, b: 252 }), // Orchid\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 163, g: 230, b: 53 }), // Yellow Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 234, g: 88, b: 12 }), // Burnt Orange\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 125, g: 211, b: 252 }), // Crystal Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 251, g: 113, b: 133 }), // Watermelon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 52, g: 211, b: 153 }), // Spearmint\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 167, g: 139, b: 250 }), // Periwinkle\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 245, g: 158, b: 11 }), // Honey\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 110, g: 231, b: 183 }), // Seafoam\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 233, g: 213, b: 255 }), // Light Lilac\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 202, g: 138, b: 4 }), // Rich Gold\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 151, g: 255, b: 187 }), // Fresh Mint\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 220, g: 38, b: 38 }), // Ruby\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 124, g: 58, b: 237 }), // Royal Purple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 45, g: 212, b: 191 }), // Ocean\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 252, g: 165, b: 165 }), // Peach\n            // Additional 50 colors\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 179, g: 136, b: 255 }), // Light Purple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 133, g: 77, b: 14 }), // Chocolate\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 52, g: 211, b: 153 }), // Aquamarine\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 234, g: 179, b: 8 }), // Mustard\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 236, g: 72, b: 153 }), // Hot Pink\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 147, g: 197, b: 253 }), // Sky\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 249, g: 115, b: 22 }), // Pumpkin\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 167, g: 139, b: 250 }), // Iris\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 16, g: 185, b: 129 }), // Pine\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 251, g: 146, b: 60 }), // Mango\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 192, g: 132, b: 252 }), // Wisteria\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 79, g: 70, b: 229 }), // Sapphire\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 245, g: 101, b: 101 }), // Salmon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 134, g: 239, b: 172 }), // Spring Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 59, g: 130, b: 246 }), // Ocean Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 253, g: 164, b: 175 }), // Rose Gold\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 16, g: 185, b: 129 }), // Forest\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 252, g: 211, b: 77 }), // Sunshine\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 190, g: 92, b: 251 }), // Grape\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 82, g: 183, b: 136 }), // Eucalyptus\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 248, g: 113, b: 113 }), // Cherry\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 99, g: 202, b: 253 }), // Arctic\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 240, g: 171, b: 252 }), // Lilac\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 163, g: 230, b: 53 }), // Chartreuse\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 234, g: 88, b: 12 }), // Rust\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 125, g: 211, b: 252 }), // Ice Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 251, g: 113, b: 133 }), // Strawberry\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 52, g: 211, b: 153 }), // Sage\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 167, g: 139, b: 250 }), // Violet\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 245, g: 158, b: 11 }), // Apricot\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 110, g: 231, b: 183 }), // Mint Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 233, g: 213, b: 255 }), // Thistle\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 202, g: 138, b: 4 }), // Bronze\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 151, g: 255, b: 187 }), // Pistachio\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 220, g: 38, b: 38 }), // Fire Engine\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 124, g: 58, b: 237 }), // Electric Purple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 45, g: 212, b: 191 }), // Caribbean\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 252, g: 165, b: 165 }), // Melon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 168, g: 85, b: 247 }), // Byzantium\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 74, g: 222, b: 128 }), // Kelly Green\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 239, g: 68, b: 68 }), // Cardinal\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 34, g: 197, b: 94 }), // Shamrock\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 96, g: 165, b: 250 }), // Marina\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 249, g: 115, b: 22 }), // Carrot\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 192, g: 132, b: 252 }), // Heliotrope\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 45, g: 212, b: 191 }), // Lagoon\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 244, g: 114, b: 182 }), // Bubble Gum\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 132, g: 204, b: 22 }), // Apple\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 56, g: 189, b: 248 }), // Electric Blue\n            (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 234, g: 179, b: 8 }), // Daffodil\n        ];\n        this._selfColor = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 0, g: 255, b: 0 });\n        this._allyColor = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 255, g: 255, b: 0 });\n        this._enemyColor = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 255, g: 0, b: 0 });\n        this._spawnHighlightColor = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({ r: 255, g: 213, b: 79 });\n    }\n    territoryColor(playerInfo) {\n        if (playerInfo.playerType == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Human) {\n            return this.humanColors[(0,_Util__WEBPACK_IMPORTED_MODULE_2__.simpleHash)(playerInfo.name) % this.humanColors.length];\n        }\n        return this.territoryColors[(0,_Util__WEBPACK_IMPORTED_MODULE_2__.simpleHash)(playerInfo.name) % this.territoryColors.length];\n    }\n    textColor(playerInfo) {\n        return playerInfo.playerType == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Human ? "#ffffff" : "#e6e6e6";\n    }\n    borderColor(playerInfo) {\n        const tc = this.territoryColor(playerInfo).rgba;\n        return (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({\n            r: Math.max(tc.r - 40, 0),\n            g: Math.max(tc.g - 40, 0),\n            b: Math.max(tc.b - 40, 0),\n        });\n    }\n    defendedBorderColor(playerInfo) {\n        const bc = this.borderColor(playerInfo).rgba;\n        return (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({\n            r: Math.max(bc.r - 40, 0),\n            g: Math.max(bc.g - 40, 0),\n            b: Math.max(bc.b - 40, 0),\n        });\n    }\n    terrainColor(gm, tile) {\n        const mag = gm.magnitude(tile);\n        if (gm.isShore(tile)) {\n            return this.shore;\n        }\n        switch (gm.terrainType(tile)) {\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.TerrainType.Ocean:\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.TerrainType.Lake:\n                const w = this.water.rgba;\n                if (gm.isShoreline(tile) && gm.isWater(tile)) {\n                    return this.shorelineWater;\n                }\n                if (gm.magnitude(tile) < 10) {\n                    return (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({\n                        r: Math.max(w.r + 9 - mag, 0),\n                        g: Math.max(w.g + 9 - mag, 0),\n                        b: Math.max(w.b + 9 - mag, 0),\n                    });\n                }\n                return this.water;\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.TerrainType.Plains:\n                return (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({\n                    r: 140,\n                    g: 170 - 2 * mag,\n                    b: 88,\n                });\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.TerrainType.Highland:\n                return (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({\n                    r: 150 + 2 * mag,\n                    g: 133 + 2 * mag,\n                    b: 88 + 2 * mag,\n                });\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.TerrainType.Mountain:\n                return (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)({\n                    r: 180 + mag / 2,\n                    g: 180 + mag / 2,\n                    b: 180 + mag / 2,\n                });\n        }\n    }\n    backgroundColor() {\n        return this.background;\n    }\n    falloutColor() {\n        return this.rand.randElement(this.falloutColors);\n    }\n    font() {\n        return "Overpass, sans-serif";\n    }\n    selfColor() {\n        return this._selfColor;\n    }\n    allyColor() {\n        return this._allyColor;\n    }\n    enemyColor() {\n        return this._enemyColor;\n    }\n    spawnHighlightColor() {\n        return this._spawnHighlightColor;\n    }\n})();\n\n\n//# sourceURL=webpack://openfront-client/./src/core/configuration/PastelThemeDark.ts?',
        );

        /***/
      },

    /***/ "./src/core/configuration/PreprodConfig.ts":
      /*!*************************************************!*\
  !*** ./src/core/configuration/PreprodConfig.ts ***!
  \*************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   preprodConfig: () => (/* binding */ preprodConfig)\n/* harmony export */ });\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./src/core/configuration/Config.ts");\n/* harmony import */ var _DefaultConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultConfig */ "./src/core/configuration/DefaultConfig.ts");\n\n\nconst preprodConfig = new (class extends _DefaultConfig__WEBPACK_IMPORTED_MODULE_1__.DefaultServerConfig {\n    env() {\n        return _Config__WEBPACK_IMPORTED_MODULE_0__.GameEnv.Preprod;\n    }\n    discordRedirectURI() {\n        return "https://openfront.dev/auth/callback";\n    }\n    numWorkers() {\n        return 3;\n    }\n})();\n\n\n//# sourceURL=webpack://openfront-client/./src/core/configuration/PreprodConfig.ts?',
        );

        /***/
      },

    /***/ "./src/core/configuration/ProdConfig.ts":
      /*!**********************************************!*\
  !*** ./src/core/configuration/ProdConfig.ts ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prodConfig: () => (/* binding */ prodConfig)\n/* harmony export */ });\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./src/core/configuration/Config.ts");\n/* harmony import */ var _DefaultConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultConfig */ "./src/core/configuration/DefaultConfig.ts");\n\n\nconst prodConfig = new (class extends _DefaultConfig__WEBPACK_IMPORTED_MODULE_1__.DefaultServerConfig {\n    numWorkers() {\n        return 6;\n    }\n    env() {\n        return _Config__WEBPACK_IMPORTED_MODULE_0__.GameEnv.Prod;\n    }\n    discordRedirectURI() {\n        return "https://openfront.io/auth/callback";\n    }\n})();\n\n\n//# sourceURL=webpack://openfront-client/./src/core/configuration/ProdConfig.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/AttackExecution.ts":
      /*!***********************************************!*\
  !*** ./src/core/execution/AttackExecution.ts ***!
  \***********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AttackExecution: () => (/* binding */ AttackExecution)\n/* harmony export */ });\n/* harmony import */ var _datastructures_js_priority_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datastructures-js/priority-queue */ "./node_modules/@datastructures-js/priority-queue/index.js");\n/* harmony import */ var _datastructures_js_priority_queue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_datastructures_js_priority_queue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _PseudoRandom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PseudoRandom */ "./src/core/PseudoRandom.ts");\n/* harmony import */ var _client_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client/Utils */ "./src/client/Utils.ts");\n\n\n\n\n\nconst malusForRetreat = 25;\nclass AttackExecution {\n    constructor(startTroops = null, _ownerID, _targetID, sourceTile = null, removeTroops = true) {\n        this.startTroops = startTroops;\n        this._ownerID = _ownerID;\n        this._targetID = _targetID;\n        this.sourceTile = sourceTile;\n        this.removeTroops = removeTroops;\n        this.breakAlliance = false;\n        this.active = true;\n        this.toConquer = new _datastructures_js_priority_queue__WEBPACK_IMPORTED_MODULE_0__.PriorityQueue((a, b) => {\n            if (a.priority == b.priority) {\n                if (a.tick == b.tick) {\n                    return 0;\n                    // return this.random.nextInt(-1, 1)\n                }\n                return a.tick - b.tick;\n            }\n            return a.priority - b.priority;\n        });\n        this.random = new _PseudoRandom__WEBPACK_IMPORTED_MODULE_2__.PseudoRandom(123);\n        this.border = new Set();\n        this.attack = null;\n    }\n    targetID() {\n        return this._targetID;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n    init(mg, ticks) {\n        if (!this.active) {\n            return;\n        }\n        this.mg = mg;\n        if (!mg.hasPlayer(this._ownerID)) {\n            console.warn(`player ${this._ownerID} not found`);\n            this.active = false;\n            return;\n        }\n        if (this._targetID != null && !mg.hasPlayer(this._targetID)) {\n            console.warn(`target ${this._targetID} not found`);\n            this.active = false;\n            return;\n        }\n        this._owner = mg.player(this._ownerID);\n        this.target =\n            this._targetID == this.mg.terraNullius().id()\n                ? mg.terraNullius()\n                : mg.player(this._targetID);\n        if (this._owner == this.target) {\n            console.error(`Player ${this._owner} cannot attack itself`);\n            this.active = false;\n            return;\n        }\n        if (this.target.isPlayer() &&\n            this.mg.config().numSpawnPhaseTurns() +\n                this.mg.config().spawnImmunityDuration() >\n                this.mg.ticks()) {\n            console.warn("cannot attack player during immunity phase");\n            this.active = false;\n            return;\n        }\n        if (this.startTroops == null) {\n            this.startTroops = this.mg\n                .config()\n                .attackAmount(this._owner, this.target);\n        }\n        if (this.removeTroops) {\n            this.startTroops = Math.min(this._owner.troops(), this.startTroops);\n            this._owner.removeTroops(this.startTroops);\n        }\n        this.attack = this._owner.createAttack(this.target, this.startTroops, this.sourceTile);\n        for (const incoming of this._owner.incomingAttacks()) {\n            if (incoming.attacker() == this.target) {\n                // Target has opposing attack, cancel them out\n                if (incoming.troops() > this.attack.troops()) {\n                    incoming.setTroops(incoming.troops() - this.attack.troops());\n                    this.attack.delete();\n                    this.active = false;\n                    return;\n                }\n                else {\n                    this.attack.setTroops(this.attack.troops() - incoming.troops());\n                    incoming.delete();\n                }\n            }\n        }\n        for (const outgoing of this._owner.outgoingAttacks()) {\n            if (outgoing != this.attack &&\n                outgoing.target() == this.attack.target() &&\n                outgoing.sourceTile() == this.attack.sourceTile()) {\n                // Existing attack on same target, add troops\n                outgoing.setTroops(outgoing.troops() + this.attack.troops());\n                this.active = false;\n                this.attack.delete();\n                return;\n            }\n        }\n        if (this.sourceTile != null) {\n            this.addNeighbors(this.sourceTile);\n        }\n        else {\n            this.refreshToConquer();\n        }\n        if (this.target.isPlayer()) {\n            if (this._owner.isAlliedWith(this.target)) {\n                // No updates should happen in init.\n                this.breakAlliance = true;\n            }\n            this.target.updateRelation(this._owner, -80);\n        }\n    }\n    refreshToConquer() {\n        this.toConquer.clear();\n        this.border.clear();\n        for (const tile of this._owner.borderTiles()) {\n            this.addNeighbors(tile);\n        }\n    }\n    retreat(malusPercent = 0) {\n        this._owner.addTroops(this.attack.troops() * (1 - malusPercent / 100));\n        this.attack.delete();\n        this.active = false;\n    }\n    tick(ticks) {\n        if (this.attack.retreated()) {\n            this.retreat(malusForRetreat);\n            this.active = false;\n            return;\n        }\n        if (!this.attack.isActive()) {\n            this.active = false;\n            return;\n        }\n        const alliance = this._owner.allianceWith(this.target);\n        if (this.breakAlliance && alliance != null) {\n            this.breakAlliance = false;\n            this._owner.breakAlliance(alliance);\n        }\n        if (this.target.isPlayer() && this._owner.isAlliedWith(this.target)) {\n            // In this case a new alliance was created AFTER the attack started.\n            this.retreat();\n            return;\n        }\n        let numTilesPerTick = this.mg\n            .config()\n            .attackTilesPerTick(this.attack.troops(), this._owner, this.target, this.border.size + this.random.nextInt(0, 5));\n        // consolex.log(`num tiles per tick: ${numTilesPerTick}`)\n        // consolex.log(`num execs: ${this.mg.executions().length}`)\n        while (numTilesPerTick > 0) {\n            if (this.attack.troops() < 1) {\n                this.attack.delete();\n                this.active = false;\n                return;\n            }\n            if (this.toConquer.size() == 0) {\n                this.refreshToConquer();\n                this.retreat();\n                return;\n            }\n            const tileToConquer = this.toConquer.dequeue().tile;\n            this.border.delete(tileToConquer);\n            const onBorder = this.mg\n                .neighbors(tileToConquer)\n                .filter((t) => this.mg.owner(t) == this._owner).length > 0;\n            if (this.mg.owner(tileToConquer) != this.target || !onBorder) {\n                continue;\n            }\n            this.addNeighbors(tileToConquer);\n            const { attackerTroopLoss, defenderTroopLoss, tilesPerTickUsed } = this.mg\n                .config()\n                .attackLogic(this.mg, this.attack.troops(), this._owner, this.target, tileToConquer);\n            numTilesPerTick -= tilesPerTickUsed;\n            this.attack.setTroops(this.attack.troops() - attackerTroopLoss);\n            if (this.target.isPlayer()) {\n                this.target.removeTroops(defenderTroopLoss);\n            }\n            this._owner.conquer(tileToConquer);\n            this.handleDeadDefender();\n        }\n    }\n    addNeighbors(tile) {\n        for (const neighbor of this.mg.neighbors(tile)) {\n            if (this.mg.isWater(neighbor) || this.mg.owner(neighbor) != this.target) {\n                continue;\n            }\n            this.border.add(neighbor);\n            let numOwnedByMe = this.mg\n                .neighbors(neighbor)\n                .filter((t) => this.mg.owner(t) == this._owner).length;\n            const dist = 0;\n            if (numOwnedByMe > 2) {\n                numOwnedByMe = 10;\n            }\n            let mag = 0;\n            switch (this.mg.terrainType(tile)) {\n                case _game_Game__WEBPACK_IMPORTED_MODULE_1__.TerrainType.Plains:\n                    mag = 1;\n                    break;\n                case _game_Game__WEBPACK_IMPORTED_MODULE_1__.TerrainType.Highland:\n                    mag = 1.5;\n                    break;\n                case _game_Game__WEBPACK_IMPORTED_MODULE_1__.TerrainType.Mountain:\n                    mag = 2;\n                    break;\n            }\n            this.toConquer.enqueue(new TileContainer(neighbor, dist / 100 + this.random.nextInt(0, 2) - numOwnedByMe + mag, this.mg.ticks()));\n        }\n    }\n    handleDeadDefender() {\n        if (!(this.target.isPlayer() && this.target.numTilesOwned() < 100))\n            return;\n        const gold = this.target.gold();\n        this.mg.displayMessage(`Conquered ${this.target.displayName()} received ${(0,_client_Utils__WEBPACK_IMPORTED_MODULE_3__.renderNumber)(gold)} gold`, _game_Game__WEBPACK_IMPORTED_MODULE_1__.MessageType.SUCCESS, this._owner.id());\n        this.target.removeGold(gold);\n        this._owner.addGold(gold);\n        for (let i = 0; i < 10; i++) {\n            for (const tile of this.target.tiles()) {\n                const borders = this.mg\n                    .neighbors(tile)\n                    .some((t) => this.mg.owner(t) == this._owner);\n                if (borders) {\n                    this._owner.conquer(tile);\n                }\n                else {\n                    for (const neighbor of this.mg.neighbors(tile)) {\n                        const no = this.mg.owner(neighbor);\n                        if (no.isPlayer() && no != this.target) {\n                            this.mg.player(no.id()).conquer(tile);\n                            break;\n                        }\n                    }\n                }\n            }\n        }\n    }\n    owner() {\n        return this._owner;\n    }\n    isActive() {\n        return this.active;\n    }\n}\nclass TileContainer {\n    constructor(tile, priority, tick) {\n        this.tile = tile;\n        this.priority = priority;\n        this.tick = tick;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/AttackExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/BotExecution.ts":
      /*!********************************************!*\
  !*** ./src/core/execution/BotExecution.ts ***!
  \********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BotExecution: () => (/* binding */ BotExecution)\n/* harmony export */ });\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _PseudoRandom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PseudoRandom */ "./src/core/PseudoRandom.ts");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/core/Util.ts");\n/* harmony import */ var _AttackExecution__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttackExecution */ "./src/core/execution/AttackExecution.ts");\n\n\n\n\nclass BotExecution {\n    constructor(bot) {\n        this.bot = bot;\n        this.active = true;\n        this.neighborsTerraNullius = true;\n        this.random = new _PseudoRandom__WEBPACK_IMPORTED_MODULE_1__.PseudoRandom((0,_Util__WEBPACK_IMPORTED_MODULE_2__.simpleHash)(bot.id()));\n        this.attackRate = this.random.nextInt(10, 50);\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n    init(mg, ticks) {\n        this.mg = mg;\n        this.bot.setTargetTroopRatio(0.7);\n        // this.neighborsTerra = this.bot.neighbors().filter(n => n == this.gs.terraNullius()).length > 0\n    }\n    tick(ticks) {\n        if (!this.bot.isAlive()) {\n            this.active = false;\n            return;\n        }\n        if (ticks % this.attackRate != 0) {\n            return;\n        }\n        this.bot.incomingAllianceRequests().forEach((ar) => {\n            if (ar.requestor().isTraitor()) {\n                ar.reject();\n            }\n            else {\n                ar.accept();\n            }\n        });\n        const traitors = this.bot\n            .neighbors()\n            .filter((n) => n.isPlayer() && n.isTraitor());\n        if (traitors.length > 0) {\n            const toAttack = this.random.randElement(traitors);\n            const odds = this.bot.isAlliedWith(toAttack) ? 6 : 3;\n            if (this.random.chance(odds)) {\n                this.sendAttack(toAttack);\n                return;\n            }\n        }\n        if (this.neighborsTerraNullius) {\n            for (const b of this.bot.borderTiles()) {\n                for (const n of this.mg.neighbors(b)) {\n                    if (!this.mg.hasOwner(n) && this.mg.isLand(n)) {\n                        this.sendAttack(this.mg.terraNullius());\n                        return;\n                    }\n                }\n            }\n            this.neighborsTerraNullius = false;\n        }\n        const border = Array.from(this.bot.borderTiles())\n            .flatMap((t) => this.mg.neighbors(t))\n            .filter((t) => this.mg.hasOwner(t) && this.mg.owner(t) != this.bot);\n        if (border.length == 0) {\n            return;\n        }\n        const toAttack = border[this.random.nextInt(0, border.length)];\n        const owner = this.mg.owner(toAttack);\n        if (owner.isPlayer()) {\n            if (this.bot.isAlliedWith(owner)) {\n                return;\n            }\n            if (owner.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.FakeHuman) {\n                if (!this.random.chance(2)) {\n                    return;\n                }\n            }\n        }\n        this.sendAttack(owner);\n    }\n    sendAttack(toAttack) {\n        this.mg.addExecution(new _AttackExecution__WEBPACK_IMPORTED_MODULE_3__.AttackExecution(this.bot.troops() / 20, this.bot.id(), toAttack.isPlayer() ? toAttack.id() : null));\n    }\n    owner() {\n        return this.bot;\n    }\n    isActive() {\n        return this.active;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/BotExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/BotSpawner.ts":
      /*!******************************************!*\
  !*** ./src/core/execution/BotSpawner.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BotSpawner: () => (/* binding */ BotSpawner)\n/* harmony export */ });\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _PseudoRandom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PseudoRandom */ "./src/core/PseudoRandom.ts");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Util */ "./src/core/Util.ts");\n/* harmony import */ var _utils_BotNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/BotNames */ "./src/core/execution/utils/BotNames.ts");\n\n\n\n\n\nclass BotSpawner {\n    constructor(gs, gameID) {\n        this.gs = gs;\n        this.bots = [];\n        this.random = new _PseudoRandom__WEBPACK_IMPORTED_MODULE_2__.PseudoRandom((0,_Util__WEBPACK_IMPORTED_MODULE_3__.simpleHash)(gameID));\n    }\n    spawnBots(numBots) {\n        let tries = 0;\n        while (this.bots.length < numBots) {\n            if (tries > 10000) {\n                _Consolex__WEBPACK_IMPORTED_MODULE_0__.consolex.log("too many retries while spawning bots, giving up");\n                return this.bots;\n            }\n            const botName = this.randomBotName();\n            const spawn = this.spawnBot(botName);\n            if (spawn != null) {\n                this.bots.push(spawn);\n            }\n            else {\n                tries++;\n            }\n        }\n        return this.bots;\n    }\n    spawnBot(botName) {\n        const tile = this.randTile();\n        if (!this.gs.isLand(tile)) {\n            return null;\n        }\n        for (const spawn of this.bots) {\n            if (this.gs.manhattanDist(this.gs.ref(spawn.x, spawn.y), tile) < 30) {\n                return null;\n            }\n        }\n        return {\n            type: "spawn",\n            playerID: this.random.nextID(),\n            name: botName,\n            playerType: _game_Game__WEBPACK_IMPORTED_MODULE_1__.PlayerType.Bot,\n            x: this.gs.x(tile),\n            y: this.gs.y(tile),\n        };\n    }\n    randomBotName() {\n        const prefixIndex = this.random.nextInt(0, _utils_BotNames__WEBPACK_IMPORTED_MODULE_4__.BOT_NAME_PREFIXES.length);\n        const suffixIndex = this.random.nextInt(0, _utils_BotNames__WEBPACK_IMPORTED_MODULE_4__.BOT_NAME_SUFFIXES.length);\n        return `${_utils_BotNames__WEBPACK_IMPORTED_MODULE_4__.BOT_NAME_PREFIXES[prefixIndex]} ${_utils_BotNames__WEBPACK_IMPORTED_MODULE_4__.BOT_NAME_SUFFIXES[suffixIndex]}`;\n    }\n    randTile() {\n        return this.gs.ref(this.random.nextInt(0, this.gs.width()), this.random.nextInt(0, this.gs.height()));\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/BotSpawner.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/CityExecution.ts":
      /*!*********************************************!*\
  !*** ./src/core/execution/CityExecution.ts ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CityExecution: () => (/* binding */ CityExecution)\n/* harmony export */ });\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n\n\nclass CityExecution {\n    constructor(ownerId, tile) {\n        this.ownerId = ownerId;\n        this.tile = tile;\n        this.active = true;\n    }\n    init(mg, ticks) {\n        this.mg = mg;\n        if (!mg.hasPlayer(this.ownerId)) {\n            console.warn(`CityExecution: player ${this.ownerId} not found`);\n            this.active = false;\n            return;\n        }\n        this.player = mg.player(this.ownerId);\n    }\n    tick(ticks) {\n        if (this.city == null) {\n            const spawnTile = this.player.canBuild(_game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.City, this.tile);\n            if (spawnTile == false) {\n                _Consolex__WEBPACK_IMPORTED_MODULE_0__.consolex.warn("cannot build city");\n                this.active = false;\n                return;\n            }\n            this.city = this.player.buildUnit(_game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.City, 0, spawnTile);\n        }\n        if (!this.city.isActive()) {\n            this.active = false;\n            return;\n        }\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/CityExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/ConstructionExecution.ts":
      /*!*****************************************************!*\
  !*** ./src/core/execution/ConstructionExecution.ts ***!
  \*****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConstructionExecution: () => (/* binding */ ConstructionExecution)\n/* harmony export */ });\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _CityExecution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CityExecution */ "./src/core/execution/CityExecution.ts");\n/* harmony import */ var _DefensePostExecution__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefensePostExecution */ "./src/core/execution/DefensePostExecution.ts");\n/* harmony import */ var _SAMLauncherExecution__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SAMLauncherExecution */ "./src/core/execution/SAMLauncherExecution.ts");\n/* harmony import */ var _MIRVExecution__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MIRVExecution */ "./src/core/execution/MIRVExecution.ts");\n/* harmony import */ var _MissileSiloExecution__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MissileSiloExecution */ "./src/core/execution/MissileSiloExecution.ts");\n/* harmony import */ var _NukeExecution__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NukeExecution */ "./src/core/execution/NukeExecution.ts");\n/* harmony import */ var _PortExecution__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PortExecution */ "./src/core/execution/PortExecution.ts");\n/* harmony import */ var _WarshipExecution__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WarshipExecution */ "./src/core/execution/WarshipExecution.ts");\n\n\n\n\n\n\n\n\n\n\nclass ConstructionExecution {\n    constructor(ownerId, tile, constructionType) {\n        this.ownerId = ownerId;\n        this.tile = tile;\n        this.constructionType = constructionType;\n        this.active = true;\n    }\n    init(mg, ticks) {\n        this.mg = mg;\n        if (!mg.hasPlayer(this.ownerId)) {\n            console.warn(`ConstructionExecution: owner ${this.ownerId} not found`);\n            this.active = false;\n            return;\n        }\n        this.player = mg.player(this.ownerId);\n    }\n    tick(ticks) {\n        if (this.construction == null) {\n            const info = this.mg.unitInfo(this.constructionType);\n            if (info.constructionDuration == null) {\n                this.completeConstruction();\n                this.active = false;\n                return;\n            }\n            const spawnTile = this.player.canBuild(this.constructionType, this.tile);\n            if (spawnTile == false) {\n                _Consolex__WEBPACK_IMPORTED_MODULE_0__.consolex.warn(`cannot build ${_game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.Construction}`);\n                this.active = false;\n                return;\n            }\n            this.construction = this.player.buildUnit(_game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.Construction, 0, spawnTile);\n            this.cost = this.mg.unitInfo(this.constructionType).cost(this.player);\n            this.player.removeGold(this.cost);\n            this.construction.setConstructionType(this.constructionType);\n            this.ticksUntilComplete = info.constructionDuration;\n            return;\n        }\n        if (!this.construction.isActive()) {\n            this.active = false;\n            return;\n        }\n        if (this.ticksUntilComplete == 0) {\n            this.player = this.construction.owner();\n            this.construction.delete(false);\n            // refund the cost so player has the gold to build the unit\n            this.player.addGold(this.cost);\n            this.completeConstruction();\n            this.active = false;\n            return;\n        }\n        this.ticksUntilComplete--;\n    }\n    completeConstruction() {\n        const player = this.player;\n        switch (this.constructionType) {\n            case _game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.AtomBomb:\n            case _game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.HydrogenBomb:\n                this.mg.addExecution(new _NukeExecution__WEBPACK_IMPORTED_MODULE_7__.NukeExecution(this.constructionType, player.id(), this.tile));\n                break;\n            case _game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.MIRV:\n                this.mg.addExecution(new _MIRVExecution__WEBPACK_IMPORTED_MODULE_5__.MirvExecution(player.id(), this.tile));\n                break;\n            case _game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.Warship:\n                this.mg.addExecution(new _WarshipExecution__WEBPACK_IMPORTED_MODULE_9__.WarshipExecution(player.id(), this.tile));\n                break;\n            case _game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.Port:\n                this.mg.addExecution(new _PortExecution__WEBPACK_IMPORTED_MODULE_8__.PortExecution(player.id(), this.tile));\n                break;\n            case _game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.MissileSilo:\n                this.mg.addExecution(new _MissileSiloExecution__WEBPACK_IMPORTED_MODULE_6__.MissileSiloExecution(player.id(), this.tile));\n                break;\n            case _game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.DefensePost:\n                this.mg.addExecution(new _DefensePostExecution__WEBPACK_IMPORTED_MODULE_3__.DefensePostExecution(player.id(), this.tile));\n                break;\n            case _game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.SAMLauncher:\n                this.mg.addExecution(new _SAMLauncherExecution__WEBPACK_IMPORTED_MODULE_4__.SAMLauncherExecution(player.id(), this.tile));\n                break;\n            case _game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.City:\n                this.mg.addExecution(new _CityExecution__WEBPACK_IMPORTED_MODULE_2__.CityExecution(player.id(), this.tile));\n                break;\n            default:\n                throw Error(`unit type ${this.constructionType} not supported`);\n        }\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/ConstructionExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/DefensePostExecution.ts":
      /*!****************************************************!*\
  !*** ./src/core/execution/DefensePostExecution.ts ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DefensePostExecution: () => (/* binding */ DefensePostExecution)\n/* harmony export */ });\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n\n\nclass DefensePostExecution {\n    constructor(ownerId, tile) {\n        this.ownerId = ownerId;\n        this.tile = tile;\n        this.active = true;\n    }\n    init(mg, ticks) {\n        this.mg = mg;\n        if (!mg.hasPlayer(this.ownerId)) {\n            console.warn(`DefensePostExectuion: owner ${this.ownerId} not found`);\n            this.active = false;\n            return;\n        }\n        this.player = mg.player(this.ownerId);\n    }\n    tick(ticks) {\n        if (this.post == null) {\n            const spawnTile = this.player.canBuild(_game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.DefensePost, this.tile);\n            if (spawnTile == false) {\n                _Consolex__WEBPACK_IMPORTED_MODULE_0__.consolex.warn("cannot build Defense Post");\n                this.active = false;\n                return;\n            }\n            this.post = this.player.buildUnit(_game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.DefensePost, 0, spawnTile);\n        }\n        if (!this.post.isActive()) {\n            this.active = false;\n            return;\n        }\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/DefensePostExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/DonateExecution.ts":
      /*!***********************************************!*\
  !*** ./src/core/execution/DonateExecution.ts ***!
  \***********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DonateExecution: () => (/* binding */ DonateExecution)\n/* harmony export */ });\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n\nclass DonateExecution {\n    constructor(senderID, recipientID, troops) {\n        this.senderID = senderID;\n        this.recipientID = recipientID;\n        this.troops = troops;\n        this.active = true;\n    }\n    init(mg, ticks) {\n        if (!mg.hasPlayer(this.senderID)) {\n            console.warn(`DonateExecution: sender ${this.senderID} not found`);\n            this.active = false;\n            return;\n        }\n        if (!mg.hasPlayer(this.recipientID)) {\n            console.warn(`DonateExecution recipient ${this.recipientID} not found`);\n            this.active = false;\n            return;\n        }\n        this.sender = mg.player(this.senderID);\n        this.recipient = mg.player(this.recipientID);\n        if (this.troops == null) {\n            this.troops = mg.config().defaultDonationAmount(this.sender);\n        }\n    }\n    tick(ticks) {\n        if (this.sender.canDonate(this.recipient)) {\n            this.sender.donate(this.recipient, this.troops);\n            this.recipient.updateRelation(this.sender, 50);\n        }\n        else {\n            _Consolex__WEBPACK_IMPORTED_MODULE_0__.consolex.warn(`cannot send tropps from ${this.sender} to ${this.recipient}`);\n        }\n        this.active = false;\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/DonateExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/EmbargoExecution.ts":
      /*!************************************************!*\
  !*** ./src/core/execution/EmbargoExecution.ts ***!
  \************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmbargoExecution: () => (/* binding */ EmbargoExecution)\n/* harmony export */ });\nclass EmbargoExecution {\n    constructor(player, targetID, action) {\n        this.player = player;\n        this.targetID = targetID;\n        this.action = action;\n        this.active = true;\n    }\n    init(mg, _) {\n        if (!mg.hasPlayer(this.player.id())) {\n            console.warn(`EmbargoExecution: sender ${this.player.id()} not found`);\n            this.active = false;\n            return;\n        }\n        if (!mg.hasPlayer(this.targetID)) {\n            console.warn(`EmbargoExecution recipient ${this.targetID} not found`);\n            this.active = false;\n            return;\n        }\n    }\n    tick(_) {\n        if (this.action == "start")\n            this.player.addEmbargo(this.targetID);\n        else\n            this.player.stopEmbargo(this.targetID);\n        this.active = false;\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/EmbargoExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/EmojiExecution.ts":
      /*!**********************************************!*\
  !*** ./src/core/execution/EmojiExecution.ts ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmojiExecution: () => (/* binding */ EmojiExecution)\n/* harmony export */ });\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n\n\nclass EmojiExecution {\n    constructor(senderID, recipientID, emoji) {\n        this.senderID = senderID;\n        this.recipientID = recipientID;\n        this.emoji = emoji;\n        this.active = true;\n    }\n    init(mg, ticks) {\n        if (!mg.hasPlayer(this.senderID)) {\n            console.warn(`EmojiExecution: sender ${this.senderID} not found`);\n            this.active = false;\n            return;\n        }\n        if (this.recipientID != _game_Game__WEBPACK_IMPORTED_MODULE_1__.AllPlayers && !mg.hasPlayer(this.recipientID)) {\n            console.warn(`EmojiExecution: recipient ${this.recipientID} not found`);\n            this.active = false;\n            return;\n        }\n        this.requestor = mg.player(this.senderID);\n        this.recipient =\n            this.recipientID == _game_Game__WEBPACK_IMPORTED_MODULE_1__.AllPlayers ? _game_Game__WEBPACK_IMPORTED_MODULE_1__.AllPlayers : mg.player(this.recipientID);\n    }\n    tick(ticks) {\n        if (this.requestor.canSendEmoji(this.recipient)) {\n            this.requestor.sendEmoji(this.recipient, this.emoji);\n            if (this.emoji == "🖕" &&\n                this.recipient != _game_Game__WEBPACK_IMPORTED_MODULE_1__.AllPlayers &&\n                this.recipient.type() == _game_Game__WEBPACK_IMPORTED_MODULE_1__.PlayerType.FakeHuman) {\n                this.recipient.updateRelation(this.requestor, -100);\n            }\n        }\n        else {\n            _Consolex__WEBPACK_IMPORTED_MODULE_0__.consolex.warn(`cannot send emoji from ${this.requestor} to ${this.recipient}`);\n        }\n        this.active = false;\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/EmojiExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/ExecutionManager.ts":
      /*!************************************************!*\
  !*** ./src/core/execution/ExecutionManager.ts ***!
  \************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Executor: () => (/* binding */ Executor)\n/* harmony export */ });\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _AttackExecution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttackExecution */ "./src/core/execution/AttackExecution.ts");\n/* harmony import */ var _SpawnExecution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpawnExecution */ "./src/core/execution/SpawnExecution.ts");\n/* harmony import */ var _BotSpawner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BotSpawner */ "./src/core/execution/BotSpawner.ts");\n/* harmony import */ var _TransportShipExecution__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransportShipExecution */ "./src/core/execution/TransportShipExecution.ts");\n/* harmony import */ var _PseudoRandom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PseudoRandom */ "./src/core/PseudoRandom.ts");\n/* harmony import */ var _FakeHumanExecution__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FakeHumanExecution */ "./src/core/execution/FakeHumanExecution.ts");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Util */ "./src/core/Util.ts");\n/* harmony import */ var _alliance_AllianceRequestExecution__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alliance/AllianceRequestExecution */ "./src/core/execution/alliance/AllianceRequestExecution.ts");\n/* harmony import */ var _alliance_AllianceRequestReplyExecution__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alliance/AllianceRequestReplyExecution */ "./src/core/execution/alliance/AllianceRequestReplyExecution.ts");\n/* harmony import */ var _alliance_BreakAllianceExecution__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./alliance/BreakAllianceExecution */ "./src/core/execution/alliance/BreakAllianceExecution.ts");\n/* harmony import */ var _TargetPlayerExecution__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TargetPlayerExecution */ "./src/core/execution/TargetPlayerExecution.ts");\n/* harmony import */ var _EmojiExecution__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EmojiExecution */ "./src/core/execution/EmojiExecution.ts");\n/* harmony import */ var _DonateExecution__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DonateExecution */ "./src/core/execution/DonateExecution.ts");\n/* harmony import */ var _SetTargetTroopRatioExecution__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SetTargetTroopRatioExecution */ "./src/core/execution/SetTargetTroopRatioExecution.ts");\n/* harmony import */ var _ConstructionExecution__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ConstructionExecution */ "./src/core/execution/ConstructionExecution.ts");\n/* harmony import */ var _validations_username__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../validations/username */ "./src/core/validations/username.ts");\n/* harmony import */ var _NoOpExecution__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./NoOpExecution */ "./src/core/execution/NoOpExecution.ts");\n/* harmony import */ var _EmbargoExecution__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./EmbargoExecution */ "./src/core/execution/EmbargoExecution.ts");\n/* harmony import */ var _RetreatExecution__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./RetreatExecution */ "./src/core/execution/RetreatExecution.ts");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass Executor {\n    constructor(mg, gameID, clientID) {\n        this.mg = mg;\n        this.gameID = gameID;\n        this.clientID = clientID;\n        // private random = new PseudoRandom(999)\n        this.random = null;\n        // Add one to avoid id collisions with bots.\n        this.random = new _PseudoRandom__WEBPACK_IMPORTED_MODULE_5__.PseudoRandom((0,_Util__WEBPACK_IMPORTED_MODULE_7__.simpleHash)(gameID) + 1);\n    }\n    createExecs(turn) {\n        return turn.intents.map((i) => this.createExec(i));\n    }\n    createExec(intent) {\n        let player;\n        if (intent.type != "spawn") {\n            if (!this.mg.hasPlayer(intent.playerID)) {\n                console.warn(`player ${intent.playerID} not found on intent ${intent.type}`);\n                return new _NoOpExecution__WEBPACK_IMPORTED_MODULE_17__.NoOpExecution();\n            }\n            player = this.mg.player(intent.playerID);\n            if (player.clientID() != intent.clientID) {\n                console.warn(`intent ${intent.type} has incorrect clientID ${intent.clientID} for player ${player.name()} with clientID ${player.clientID()}`);\n                return new _NoOpExecution__WEBPACK_IMPORTED_MODULE_17__.NoOpExecution();\n            }\n        }\n        switch (intent.type) {\n            case "attack": {\n                return new _AttackExecution__WEBPACK_IMPORTED_MODULE_1__.AttackExecution(intent.troops, intent.playerID, intent.targetID, null);\n            }\n            case "cancel_attack":\n                return new _RetreatExecution__WEBPACK_IMPORTED_MODULE_19__.RetreatExecution(intent.playerID, intent.attackID);\n            case "spawn":\n                return new _SpawnExecution__WEBPACK_IMPORTED_MODULE_2__.SpawnExecution(new _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerInfo(intent.flag, \n                // Players see their original name, others see a sanitized version\n                intent.clientID == this.clientID\n                    ? (0,_Util__WEBPACK_IMPORTED_MODULE_7__.sanitize)(intent.name)\n                    : (0,_validations_username__WEBPACK_IMPORTED_MODULE_16__.fixProfaneUsername)((0,_Util__WEBPACK_IMPORTED_MODULE_7__.sanitize)(intent.name)), intent.playerType, intent.clientID, intent.playerID), this.mg.ref(intent.x, intent.y));\n            case "boat":\n                return new _TransportShipExecution__WEBPACK_IMPORTED_MODULE_4__.TransportShipExecution(intent.playerID, intent.targetID, this.mg.ref(intent.x, intent.y), intent.troops);\n            case "allianceRequest":\n                return new _alliance_AllianceRequestExecution__WEBPACK_IMPORTED_MODULE_8__.AllianceRequestExecution(intent.playerID, intent.recipient);\n            case "allianceRequestReply":\n                return new _alliance_AllianceRequestReplyExecution__WEBPACK_IMPORTED_MODULE_9__.AllianceRequestReplyExecution(intent.requestor, intent.playerID, intent.accept);\n            case "breakAlliance":\n                return new _alliance_BreakAllianceExecution__WEBPACK_IMPORTED_MODULE_10__.BreakAllianceExecution(intent.playerID, intent.recipient);\n            case "targetPlayer":\n                return new _TargetPlayerExecution__WEBPACK_IMPORTED_MODULE_11__.TargetPlayerExecution(intent.playerID, intent.target);\n            case "emoji":\n                return new _EmojiExecution__WEBPACK_IMPORTED_MODULE_12__.EmojiExecution(intent.playerID, intent.recipient, intent.emoji);\n            case "donate":\n                return new _DonateExecution__WEBPACK_IMPORTED_MODULE_13__.DonateExecution(intent.playerID, intent.recipient, intent.troops);\n            case "troop_ratio":\n                return new _SetTargetTroopRatioExecution__WEBPACK_IMPORTED_MODULE_14__.SetTargetTroopRatioExecution(intent.playerID, intent.ratio);\n            case "embargo":\n                return new _EmbargoExecution__WEBPACK_IMPORTED_MODULE_18__.EmbargoExecution(player, intent.targetID, intent.action);\n            case "build_unit":\n                return new _ConstructionExecution__WEBPACK_IMPORTED_MODULE_15__.ConstructionExecution(intent.playerID, this.mg.ref(intent.x, intent.y), intent.unit);\n            default:\n                throw new Error(`intent type ${intent} not found`);\n        }\n    }\n    spawnBots(numBots) {\n        return new _BotSpawner__WEBPACK_IMPORTED_MODULE_3__.BotSpawner(this.mg, this.gameID)\n            .spawnBots(numBots)\n            .map((i) => this.createExec(i));\n    }\n    fakeHumanExecutions() {\n        const execs = [];\n        for (const nation of this.mg.nations()) {\n            execs.push(new _FakeHumanExecution__WEBPACK_IMPORTED_MODULE_6__.FakeHumanExecution(this.gameID, new _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerInfo(nation.flag || "", nation.name, _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.FakeHuman, null, this.random.nextID(), nation)));\n        }\n        return execs;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/ExecutionManager.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/FakeHumanExecution.ts":
      /*!**************************************************!*\
  !*** ./src/core/execution/FakeHumanExecution.ts ***!
  \**************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FakeHumanExecution: () => (/* binding */ FakeHumanExecution)\n/* harmony export */ });\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _PseudoRandom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PseudoRandom */ "./src/core/PseudoRandom.ts");\n/* harmony import */ var _AttackExecution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AttackExecution */ "./src/core/execution/AttackExecution.ts");\n/* harmony import */ var _TransportShipExecution__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransportShipExecution */ "./src/core/execution/TransportShipExecution.ts");\n/* harmony import */ var _SpawnExecution__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpawnExecution */ "./src/core/execution/SpawnExecution.ts");\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n/* harmony import */ var _NukeExecution__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NukeExecution */ "./src/core/execution/NukeExecution.ts");\n/* harmony import */ var _EmojiExecution__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EmojiExecution */ "./src/core/execution/EmojiExecution.ts");\n/* harmony import */ var _alliance_AllianceRequestReplyExecution__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alliance/AllianceRequestReplyExecution */ "./src/core/execution/alliance/AllianceRequestReplyExecution.ts");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Util */ "./src/core/execution/Util.ts");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Util */ "./src/core/Util.ts");\n/* harmony import */ var _game_GameMap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../game/GameMap */ "./src/core/game/GameMap.ts");\n/* harmony import */ var _ConstructionExecution__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ConstructionExecution */ "./src/core/execution/ConstructionExecution.ts");\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass FakeHumanExecution {\n    constructor(gameID, playerInfo) {\n        this.playerInfo = playerInfo;\n        this.firstMove = true;\n        this.active = true;\n        this.player = null;\n        this.enemy = null;\n        this.lastEnemyUpdateTick = 0;\n        this.lastEmojiSent = new Map();\n        this.random = new _PseudoRandom__WEBPACK_IMPORTED_MODULE_1__.PseudoRandom((0,_Util__WEBPACK_IMPORTED_MODULE_10__.simpleHash)(playerInfo.id) + (0,_Util__WEBPACK_IMPORTED_MODULE_10__.simpleHash)(gameID));\n    }\n    init(mg, ticks) {\n        this.mg = mg;\n        if (this.random.chance(10)) {\n            // this.isTraitor = true\n        }\n    }\n    tick(ticks) {\n        if (this.mg.inSpawnPhase()) {\n            if (ticks % this.random.nextInt(5, 30) == 0) {\n                const rl = this.randomLand();\n                if (rl == null) {\n                    _Consolex__WEBPACK_IMPORTED_MODULE_5__.consolex.warn(`cannot spawn ${this.playerInfo.name}`);\n                    return;\n                }\n                this.mg.addExecution(new _SpawnExecution__WEBPACK_IMPORTED_MODULE_4__.SpawnExecution(this.playerInfo, rl));\n            }\n            return;\n        }\n        if (this.player == null) {\n            this.player = this.mg.players().find((p) => p.id() == this.playerInfo.id);\n            if (this.player == null) {\n                return;\n            }\n        }\n        if (this.firstMove) {\n            this.firstMove = false;\n            this.sendAttack(this.mg.terraNullius());\n            return;\n        }\n        if (!this.player.isAlive()) {\n            this.active = false;\n            return;\n        }\n        if (ticks % this.random.nextInt(40, 80) != 0) {\n            return;\n        }\n        if (this.player.troops() > 100000 &&\n            this.player.targetTroopRatio() > 0.7) {\n            this.player.setTargetTroopRatio(0.7);\n        }\n        this.handleAllianceRequests();\n        this.handleEnemies();\n        this.handleUnits();\n        const enemyborder = Array.from(this.player.borderTiles())\n            .flatMap((t) => this.mg.neighbors(t))\n            .filter((t) => this.mg.isLand(t) && this.mg.ownerID(t) != this.player.smallID());\n        if (enemyborder.length == 0) {\n            if (this.random.chance(5)) {\n                this.sendBoat();\n            }\n            return;\n        }\n        if (this.random.chance(10)) {\n            this.sendBoat();\n            return;\n        }\n        const enemiesWithTN = enemyborder.map((t) => this.mg.playerBySmallID(this.mg.ownerID(t)));\n        if (enemiesWithTN.filter((o) => !o.isPlayer()).length > 0) {\n            this.sendAttack(this.mg.terraNullius());\n            return;\n        }\n        const enemies = enemiesWithTN\n            .filter((o) => o.isPlayer())\n            .map((o) => o)\n            .sort((a, b) => a.troops() - b.troops());\n        if (this.random.chance(20)) {\n            const toAlly = this.random.randElement(enemies);\n            if (this.player.canSendAllianceRequest(toAlly)) {\n                this.player.createAllianceRequest(toAlly);\n                return;\n            }\n        }\n        // 50-50 attack weakest player vs random player\n        const toAttack = this.random.chance(2)\n            ? enemies[0]\n            : this.random.randElement(enemies);\n        if (this.shouldAttack(toAttack)) {\n            this.sendAttack(toAttack);\n        }\n    }\n    shouldAttack(other) {\n        if (this.player.isAlliedWith(other)) {\n            if (this.shouldDiscourageAttack(other)) {\n                return this.random.chance(200);\n            }\n            return this.random.chance(50);\n        }\n        else {\n            if (this.shouldDiscourageAttack(other)) {\n                return this.random.chance(4);\n            }\n            return true;\n        }\n    }\n    shouldDiscourageAttack(other) {\n        if (other.isTraitor()) {\n            return false;\n        }\n        const difficulty = this.mg.config().gameConfig().difficulty;\n        if (difficulty == _game_Game__WEBPACK_IMPORTED_MODULE_0__.Difficulty.Hard || difficulty == _game_Game__WEBPACK_IMPORTED_MODULE_0__.Difficulty.Impossible) {\n            return false;\n        }\n        if (other.type() != _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Human) {\n            return false;\n        }\n        // Only discourage attacks on Humans who are not traitors on easy or medium difficulty.\n        return true;\n    }\n    handleEnemies() {\n        if (this.mg.ticks() - this.lastEnemyUpdateTick > 100) {\n            this.enemy = null;\n        }\n        const target = this.player\n            .allies()\n            .filter((ally) => this.player.relation(ally) == _game_Game__WEBPACK_IMPORTED_MODULE_0__.Relation.Friendly)\n            .filter((ally) => ally.targets().length > 0)\n            .map((ally) => ({ ally: ally, t: ally.targets()[0] }))[0] ?? null;\n        if (target != null &&\n            target.t != this.player &&\n            !this.player.isAlliedWith(target.t)) {\n            this.player.updateRelation(target.ally, -20);\n            this.enemy = target.t;\n            this.lastEnemyUpdateTick = this.mg.ticks();\n            if (target.ally.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Human) {\n                this.mg.addExecution(new _EmojiExecution__WEBPACK_IMPORTED_MODULE_7__.EmojiExecution(this.player.id(), target.ally.id(), "👍"));\n            }\n        }\n        if (this.enemy == null) {\n            const mostHated = this.player.allRelationsSorted()[0] ?? null;\n            if (mostHated != null && mostHated.relation == _game_Game__WEBPACK_IMPORTED_MODULE_0__.Relation.Hostile) {\n                this.enemy = mostHated.player;\n                this.lastEnemyUpdateTick = this.mg.ticks();\n                if (this.enemy.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Human) {\n                    let lastSent = -300;\n                    if (this.lastEmojiSent.has(this.enemy)) {\n                        lastSent = this.lastEmojiSent.get(this.enemy);\n                        this.lastEmojiSent.set(this.enemy, this.mg.ticks());\n                    }\n                    if (this.mg.ticks() - lastSent > 300) {\n                        this.mg.addExecution(new _EmojiExecution__WEBPACK_IMPORTED_MODULE_7__.EmojiExecution(this.player.id(), this.enemy.id(), this.random.randElement(["🤡", "😡"])));\n                    }\n                }\n            }\n        }\n        if (this.player.isAlliedWith(this.enemy)) {\n            this.enemy = null;\n            return;\n        }\n        if (this.enemy) {\n            this.maybeSendNuke(this.enemy);\n            if (this.player.sharesBorderWith(this.enemy)) {\n                this.sendAttack(this.enemy);\n            }\n            else {\n                this.maybeSendBoatAttack(this.enemy);\n            }\n            return;\n        }\n    }\n    maybeSendNuke(other) {\n        if (this.player.units(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MissileSilo).length == 0 ||\n            this.player.gold() <\n                this.mg.config().unitInfo(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.AtomBomb).cost(this.player)) {\n            return;\n        }\n        outer: for (let i = 0; i < 10; i++) {\n            const tile = this.randTerritoryTile(other);\n            if (tile == null) {\n                return;\n            }\n            for (const t of this.mg.bfs(tile, (0,_game_GameMap__WEBPACK_IMPORTED_MODULE_11__.manhattanDistFN)(tile, 15))) {\n                // Make sure we nuke at least 15 tiles in border\n                if (this.mg.owner(t) != other) {\n                    continue outer;\n                }\n            }\n            if (this.player.canBuild(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.AtomBomb, tile)) {\n                this.mg.addExecution(new _NukeExecution__WEBPACK_IMPORTED_MODULE_6__.NukeExecution(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.AtomBomb, this.player.id(), tile));\n                return;\n            }\n        }\n    }\n    maybeSendBoatAttack(other) {\n        const closest = (0,_Util__WEBPACK_IMPORTED_MODULE_9__.closestTwoTiles)(this.mg, Array.from(this.player.borderTiles()).filter((t) => this.mg.isOceanShore(t)), Array.from(other.borderTiles()).filter((t) => this.mg.isOceanShore(t)));\n        if (closest == null) {\n            return;\n        }\n        this.mg.addExecution(new _TransportShipExecution__WEBPACK_IMPORTED_MODULE_3__.TransportShipExecution(this.player.id(), other.id(), closest.y, this.player.troops() / 5));\n    }\n    handleUnits() {\n        const ports = this.player.units(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Port);\n        if (ports.length == 0 && this.player.gold() > this.cost(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Port)) {\n            const oceanTiles = Array.from(this.player.borderTiles()).filter((t) => this.mg.isOceanShore(t));\n            if (oceanTiles.length > 0) {\n                const buildTile = this.random.randElement(oceanTiles);\n                this.mg.addExecution(new _ConstructionExecution__WEBPACK_IMPORTED_MODULE_12__.ConstructionExecution(this.player.id(), buildTile, _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Port));\n            }\n            return;\n        }\n        this.maybeSpawnStructure(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.City, 2, (t) => new _ConstructionExecution__WEBPACK_IMPORTED_MODULE_12__.ConstructionExecution(this.player.id(), t, _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.City));\n        if (this.maybeSpawnWarship()) {\n            return;\n        }\n        this.maybeSpawnStructure(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MissileSilo, 1, (t) => new _ConstructionExecution__WEBPACK_IMPORTED_MODULE_12__.ConstructionExecution(this.player.id(), t, _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MissileSilo));\n    }\n    maybeSpawnStructure(type, maxNum, build) {\n        const units = this.player.units(type);\n        if (units.length >= maxNum) {\n            return;\n        }\n        if (this.player.gold() < this.mg.config().unitInfo(type).cost(this.player)) {\n            return;\n        }\n        const tile = this.randTerritoryTile(this.player);\n        if (tile == null) {\n            return;\n        }\n        const canBuild = this.player.canBuild(type, tile);\n        if (canBuild == false) {\n            return;\n        }\n        this.mg.addExecution(build(tile));\n    }\n    maybeSpawnWarship() {\n        if (!this.random.chance(50)) {\n            return false;\n        }\n        const ports = this.player.units(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Port);\n        const ships = this.player.units(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Warship);\n        if (ports.length > 0 &&\n            ships.length == 0 &&\n            this.player.gold() > this.cost(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Warship)) {\n            const port = this.random.randElement(ports);\n            const targetTile = this.warshipSpawnTile(port.tile());\n            if (targetTile == null) {\n                return false;\n            }\n            const canBuild = this.player.canBuild(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Warship, targetTile);\n            if (canBuild == false) {\n                _Consolex__WEBPACK_IMPORTED_MODULE_5__.consolex.warn("cannot spawn destroyer");\n                return false;\n            }\n            this.mg.addExecution(new _ConstructionExecution__WEBPACK_IMPORTED_MODULE_12__.ConstructionExecution(this.player.id(), targetTile, _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Warship));\n            return true;\n        }\n        return false;\n    }\n    randTerritoryTile(p) {\n        const boundingBox = (0,_Util__WEBPACK_IMPORTED_MODULE_10__.calculateBoundingBox)(this.mg, p.borderTiles());\n        for (let i = 0; i < 100; i++) {\n            const randX = this.random.nextInt(boundingBox.min.x, boundingBox.max.x);\n            const randY = this.random.nextInt(boundingBox.min.y, boundingBox.max.y);\n            if (!this.mg.isOnMap(new _game_Game__WEBPACK_IMPORTED_MODULE_0__.Cell(randX, randY))) {\n                // Sanity check should never happen\n                continue;\n            }\n            const randTile = this.mg.ref(randX, randY);\n            if (this.mg.owner(randTile) == p) {\n                return randTile;\n            }\n        }\n        return null;\n    }\n    warshipSpawnTile(portTile) {\n        const radius = 250;\n        for (let attempts = 0; attempts < 50; attempts++) {\n            const randX = this.random.nextInt(this.mg.x(portTile) - radius, this.mg.x(portTile) + radius);\n            const randY = this.random.nextInt(this.mg.y(portTile) - radius, this.mg.y(portTile) + radius);\n            if (!this.mg.isValidCoord(randX, randY)) {\n                continue;\n            }\n            const tile = this.mg.ref(randX, randY);\n            // Sanity check\n            if (!this.mg.isOcean(tile)) {\n                continue;\n            }\n            return tile;\n        }\n        return null;\n    }\n    cost(type) {\n        return this.mg.unitInfo(type).cost(this.player);\n    }\n    handleAllianceRequests() {\n        for (const req of this.player.incomingAllianceRequests()) {\n            if (req.requestor().isTraitor()) {\n                this.replyToAllianceRequest(req, false);\n                continue;\n            }\n            if (this.player.relation(req.requestor()) < _game_Game__WEBPACK_IMPORTED_MODULE_0__.Relation.Neutral) {\n                this.replyToAllianceRequest(req, false);\n                continue;\n            }\n            const requestorIsMuchLarger = req.requestor().numTilesOwned() > this.player.numTilesOwned() * 3;\n            if (!requestorIsMuchLarger && req.requestor().alliances().length >= 3) {\n                this.replyToAllianceRequest(req, false);\n                continue;\n            }\n            this.replyToAllianceRequest(req, true);\n        }\n    }\n    replyToAllianceRequest(req, accept) {\n        this.mg.addExecution(new _alliance_AllianceRequestReplyExecution__WEBPACK_IMPORTED_MODULE_8__.AllianceRequestReplyExecution(req.requestor().id(), this.player.id(), accept));\n    }\n    sendBoat(tries = 0, oceanShore = null) {\n        if (tries > 10) {\n            return;\n        }\n        if (oceanShore == null) {\n            oceanShore = Array.from(this.player.borderTiles()).filter((t) => this.mg.isOceanShore(t));\n        }\n        if (oceanShore.length == 0) {\n            return;\n        }\n        const src = this.random.randElement(oceanShore);\n        const otherShore = Array.from(this.mg.bfs(src, (0,_game_GameMap__WEBPACK_IMPORTED_MODULE_11__.andFN)((gm, t) => gm.isOcean(t) || gm.isOceanShore(t), (0,_game_GameMap__WEBPACK_IMPORTED_MODULE_11__.manhattanDistFN)(src, 200)))).filter((t) => this.mg.isOceanShore(t) && this.mg.owner(t) != this.player);\n        if (otherShore.length == 0) {\n            return;\n        }\n        for (let i = 0; i < 20; i++) {\n            const dst = this.random.randElement(otherShore);\n            if (this.isSmallIsland(dst)) {\n                continue;\n            }\n            if (this.mg.owner(dst).isPlayer() &&\n                this.player.isAlliedWith(this.mg.owner(dst))) {\n                continue;\n            }\n            this.mg.addExecution(new _TransportShipExecution__WEBPACK_IMPORTED_MODULE_3__.TransportShipExecution(this.player.id(), this.mg.hasOwner(dst) ? this.mg.owner(dst).id() : null, dst, this.player.troops() / 5));\n            return;\n        }\n        this.sendBoat(tries + 1, oceanShore);\n    }\n    randomLand() {\n        const delta = 25;\n        let tries = 0;\n        while (tries < 50) {\n            tries++;\n            const cell = this.playerInfo.nation.cell;\n            const x = this.random.nextInt(cell.x - delta, cell.x + delta);\n            const y = this.random.nextInt(cell.y - delta, cell.y + delta);\n            if (!this.mg.isValidCoord(x, y)) {\n                continue;\n            }\n            const tile = this.mg.ref(x, y);\n            if (this.mg.isLand(tile) && !this.mg.hasOwner(tile)) {\n                if (this.mg.terrainType(tile) == _game_Game__WEBPACK_IMPORTED_MODULE_0__.TerrainType.Mountain &&\n                    this.random.chance(2)) {\n                    continue;\n                }\n                return tile;\n            }\n        }\n        return null;\n    }\n    sendAttack(toAttack) {\n        this.mg.addExecution(new _AttackExecution__WEBPACK_IMPORTED_MODULE_2__.AttackExecution(this.player.troops() / 5, this.player.id(), toAttack.isPlayer() ? toAttack.id() : null));\n    }\n    isSmallIsland(tile) {\n        return (this.mg.bfs(tile, (0,_game_GameMap__WEBPACK_IMPORTED_MODULE_11__.andFN)((gm, t) => gm.isLand(t), (0,_game_GameMap__WEBPACK_IMPORTED_MODULE_11__.manhattanDistFN)(tile, 10))).size < 50);\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return true;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/FakeHumanExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/MIRVExecution.ts":
      /*!*********************************************!*\
  !*** ./src/core/execution/MIRVExecution.ts ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MirvExecution: () => (/* binding */ MirvExecution)\n/* harmony export */ });\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _pathfinding_PathFinding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pathfinding/PathFinding */ "./src/core/pathfinding/PathFinding.ts");\n/* harmony import */ var _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pathfinding/AStar */ "./src/core/pathfinding/AStar.ts");\n/* harmony import */ var _PseudoRandom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PseudoRandom */ "./src/core/PseudoRandom.ts");\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Util */ "./src/core/Util.ts");\n/* harmony import */ var _NukeExecution__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NukeExecution */ "./src/core/execution/NukeExecution.ts");\n\n\n\n\n\n\n\nclass MirvExecution {\n    constructor(senderID, dst) {\n        this.senderID = senderID;\n        this.dst = dst;\n        this.active = true;\n        this.warheadCount = 350;\n    }\n    init(mg, ticks) {\n        if (!mg.hasPlayer(this.senderID)) {\n            console.warn(`MIRVExecution: player ${this.senderID} not found`);\n            this.active = false;\n            return;\n        }\n        this.random = new _PseudoRandom__WEBPACK_IMPORTED_MODULE_3__.PseudoRandom(mg.ticks() + (0,_Util__WEBPACK_IMPORTED_MODULE_5__.simpleHash)(this.senderID));\n        this.mg = mg;\n        this.pathFinder = _pathfinding_PathFinding__WEBPACK_IMPORTED_MODULE_1__.PathFinder.Mini(mg, 10000, true);\n        this.player = mg.player(this.senderID);\n        this.targetPlayer = this.mg.owner(this.dst);\n        this.mg\n            .stats()\n            .increaseNukeCount(this.player.id(), this.targetPlayer.id(), _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MIRV);\n    }\n    tick(ticks) {\n        if (this.nuke == null) {\n            const spawn = this.player.canBuild(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MIRV, this.dst);\n            if (spawn == false) {\n                _Consolex__WEBPACK_IMPORTED_MODULE_4__.consolex.warn(`cannot build MIRV`);\n                this.active = false;\n                return;\n            }\n            this.nuke = this.player.buildUnit(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MIRV, 0, spawn);\n            const x = Math.floor(Math.floor(this.mg.width() / 2));\n            const y = Math.min(this.mg.height(), 50);\n            this.separateDst = this.mg.ref(x, y);\n            this.mg.displayMessage(`⚠️⚠️⚠️ ${this.player.name()} - MIRV LAUNCH DETECTED ⚠️⚠️⚠️`, _game_Game__WEBPACK_IMPORTED_MODULE_0__.MessageType.ERROR, null);\n        }\n        for (let i = 0; i < 4; i++) {\n            const result = this.pathFinder.nextTile(this.nuke.tile(), this.separateDst);\n            switch (result.type) {\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.Completed:\n                    this.nuke.move(result.tile);\n                    this.separate();\n                    this.active = false;\n                    return;\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.NextTile:\n                    this.nuke.move(result.tile);\n                    break;\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.Pending:\n                    break;\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.PathNotFound:\n                    _Consolex__WEBPACK_IMPORTED_MODULE_4__.consolex.warn(`nuke cannot find path from ${this.nuke.tile()} to ${this.dst}`);\n                    this.active = false;\n                    return;\n            }\n        }\n    }\n    separate() {\n        const dsts = [this.dst];\n        let attempts = 1000;\n        while (attempts > 0 && dsts.length < this.warheadCount) {\n            attempts--;\n            const potential = this.randomLand(dsts);\n            if (potential == null) {\n                continue;\n            }\n            dsts.push(potential);\n        }\n        console.log(`dsts: ${dsts.length}`);\n        dsts.sort((a, b) => this.mg.manhattanDist(b, this.dst) - this.mg.manhattanDist(a, this.dst));\n        console.log(`got ${dsts.length} dsts!!`);\n        for (const [i, dst] of dsts.entries()) {\n            this.mg.addExecution(new _NukeExecution__WEBPACK_IMPORTED_MODULE_6__.NukeExecution(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MIRVWarhead, this.senderID, dst, this.nuke.tile(), 15 + Math.floor((i / this.warheadCount) * 5), \n            //   this.random.nextInt(5, 9),\n            this.random.nextInt(0, 15)));\n        }\n        if (this.targetPlayer.isPlayer()) {\n            const alliance = this.player.allianceWith(this.targetPlayer);\n            if (alliance != null) {\n                this.player.breakAlliance(alliance);\n            }\n            if (this.targetPlayer != this.player) {\n                this.targetPlayer.updateRelation(this.player, -100);\n            }\n        }\n        this.nuke.delete(false);\n    }\n    randomLand(taken) {\n        let tries = 0;\n        while (tries < 100) {\n            tries++;\n            const x = this.random.nextInt(0, this.mg.width());\n            const y = this.random.nextInt(0, this.mg.height());\n            if (!this.mg.isValidCoord(x, y)) {\n                continue;\n            }\n            console.log(`got coord ${x}, ${y}`);\n            const tile = this.mg.ref(x, y);\n            if (!this.mg.isLand(tile)) {\n                continue;\n            }\n            const owner = this.mg.owner(tile);\n            if (!owner.isPlayer()) {\n                continue;\n            }\n            if (owner == this.player || this.player.allianceWith(owner)) {\n                continue;\n            }\n            for (const t of taken) {\n                if (this.mg.manhattanDist(tile, t) < 25) {\n                    continue;\n                }\n            }\n            return tile;\n        }\n        console.log("could find place giving up");\n        return null;\n    }\n    owner() {\n        return this.player;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/MIRVExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/MissileSiloExecution.ts":
      /*!****************************************************!*\
  !*** ./src/core/execution/MissileSiloExecution.ts ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MissileSiloExecution: () => (/* binding */ MissileSiloExecution)\n/* harmony export */ });\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n\n\nclass MissileSiloExecution {\n    constructor(_owner, tile) {\n        this._owner = _owner;\n        this.tile = tile;\n        this.active = true;\n    }\n    init(mg, ticks) {\n        if (!mg.hasPlayer(this._owner)) {\n            console.warn(`MissileSiloExecution: owner ${this._owner} not found`);\n            this.active = false;\n            return;\n        }\n        this.mg = mg;\n        this.player = mg.player(this._owner);\n    }\n    tick(ticks) {\n        if (this.silo == null) {\n            if (!this.player.canBuild(_game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.MissileSilo, this.tile)) {\n                _Consolex__WEBPACK_IMPORTED_MODULE_0__.consolex.warn(`player ${this.player} cannot build missile silo at ${this.tile}`);\n                this.active = false;\n                return;\n            }\n            this.silo = this.player.buildUnit(_game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.MissileSilo, 0, this.tile);\n        }\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/MissileSiloExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/NoOpExecution.ts":
      /*!*********************************************!*\
  !*** ./src/core/execution/NoOpExecution.ts ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NoOpExecution: () => (/* binding */ NoOpExecution)\n/* harmony export */ });\nclass NoOpExecution {\n    isActive() {\n        return false;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n    init(mg, ticks) { }\n    tick(ticks) { }\n    owner() {\n        return null;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/NoOpExecution.ts?",
        );

        /***/
      },

    /***/ "./src/core/execution/NukeExecution.ts":
      /*!*********************************************!*\
  !*** ./src/core/execution/NukeExecution.ts ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NukeExecution: () => (/* binding */ NukeExecution)\n/* harmony export */ });\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _PseudoRandom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PseudoRandom */ "./src/core/PseudoRandom.ts");\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n\n\n\nclass NukeExecution {\n    constructor(type, senderID, dst, src, speed = 4, waitTicks = 0) {\n        this.type = type;\n        this.senderID = senderID;\n        this.dst = dst;\n        this.src = src;\n        this.speed = speed;\n        this.waitTicks = waitTicks;\n        this.active = true;\n    }\n    init(mg, ticks) {\n        if (!mg.hasPlayer(this.senderID)) {\n            console.warn(`NukeExecution: sender ${this.senderID} not found`);\n            this.active = false;\n            return;\n        }\n        this.mg = mg;\n        this.player = mg.player(this.senderID);\n        this.random = new _PseudoRandom__WEBPACK_IMPORTED_MODULE_1__.PseudoRandom(ticks);\n    }\n    target() {\n        return this.mg.owner(this.dst);\n    }\n    tick(ticks) {\n        if (this.nuke == null) {\n            const spawn = this.src ?? this.player.canBuild(this.type, this.dst);\n            if (spawn == false) {\n                _Consolex__WEBPACK_IMPORTED_MODULE_2__.consolex.warn(`cannot build Nuke`);\n                this.active = false;\n                return;\n            }\n            this.nuke = this.player.buildUnit(this.type, 0, spawn);\n            if (this.mg.hasOwner(this.dst)) {\n                const target = this.mg.owner(this.dst);\n                if (this.type == _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.AtomBomb) {\n                    this.mg.displayMessage(`${this.player.name()} - atom bomb inbound`, _game_Game__WEBPACK_IMPORTED_MODULE_0__.MessageType.ERROR, target.id());\n                }\n                if (this.type == _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.HydrogenBomb) {\n                    this.mg.displayMessage(`${this.player.name()} - hydrogen bomb inbound`, _game_Game__WEBPACK_IMPORTED_MODULE_0__.MessageType.ERROR, target.id());\n                }\n                this.mg\n                    .stats()\n                    .increaseNukeCount(this.senderID, target.id(), this.nuke.type());\n            }\n        }\n        // make the nuke unactive if it was intercepted\n        if (!this.nuke.isActive()) {\n            console.info(`Nuke destroyed before reaching target`);\n            this.active = false;\n            return;\n        }\n        if (this.waitTicks > 0) {\n            this.waitTicks--;\n            return;\n        }\n        const r = (this.mg.y(this.dst) * this.mg.x(this.dst)) % 10;\n        const s = this.speed + (this.mg.ticks() % r);\n        for (let i = 0; i < this.speed; i++) {\n            const x = this.mg.x(this.nuke.tile());\n            const y = this.mg.y(this.nuke.tile());\n            const dstX = this.mg.x(this.dst);\n            const dstY = this.mg.y(this.dst);\n            // If we\'ve reached the destination, detonate\n            if (x === dstX && y === dstY) {\n                this.detonate();\n                return;\n            }\n            // Calculate next position\n            let nextX = x;\n            let nextY = y;\n            const ratio = Math.floor(1 + Math.abs(dstY - y) / (Math.abs(dstX - x) + 1));\n            if (this.random.chance(ratio) && x != dstX) {\n                if (x < dstX)\n                    nextX++;\n                else if (x > dstX)\n                    nextX--;\n            }\n            else {\n                if (y < dstY)\n                    nextY++;\n                else if (y > dstY)\n                    nextY--;\n            }\n            // Move to next tile\n            const nextTile = this.mg.ref(nextX, nextY);\n            if (nextTile !== undefined) {\n                this.nuke.move(nextTile);\n            }\n            else {\n                _Consolex__WEBPACK_IMPORTED_MODULE_2__.consolex.warn(`invalid tile position ${nextX},${nextY}`);\n                this.active = false;\n                return;\n            }\n        }\n    }\n    detonate() {\n        let magnitude;\n        switch (this.type) {\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MIRVWarhead:\n                magnitude = { inner: 30, outer: 35 };\n                break;\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.AtomBomb:\n                magnitude = { inner: 12, outer: 30 };\n                break;\n            case _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.HydrogenBomb:\n                magnitude = { inner: 80, outer: 100 };\n                break;\n        }\n        const rand = new _PseudoRandom__WEBPACK_IMPORTED_MODULE_1__.PseudoRandom(this.mg.ticks());\n        const toDestroy = this.mg.bfs(this.dst, (_, n) => {\n            const d = this.mg.euclideanDist(this.dst, n);\n            return (d <= magnitude.inner || rand.chance(2)) && d <= magnitude.outer;\n        });\n        const attacked = new Map();\n        for (const tile of toDestroy) {\n            const owner = this.mg.owner(tile);\n            if (owner.isPlayer()) {\n                const mp = this.mg.player(owner.id());\n                mp.relinquish(tile);\n                mp.removeTroops((5 * mp.population()) / mp.numTilesOwned());\n                if (!attacked.has(mp)) {\n                    attacked.set(mp, 0);\n                }\n                const prev = attacked.get(mp);\n                attacked.set(mp, prev + 1);\n            }\n            if (this.mg.isLand(tile)) {\n                this.mg.setFallout(tile, true);\n            }\n        }\n        for (const [other, tilesDestroyed] of attacked) {\n            if (tilesDestroyed > 100 && this.nuke.type() != _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MIRVWarhead) {\n                // Mirv warheads shouldn\'t break alliances\n                const alliance = this.player.allianceWith(other);\n                if (alliance != null) {\n                    this.player.breakAlliance(alliance);\n                }\n                if (other != this.player) {\n                    other.updateRelation(this.player, -100);\n                }\n            }\n        }\n        for (const unit of this.mg.units()) {\n            if (unit.type() != _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.AtomBomb &&\n                unit.type() != _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.HydrogenBomb &&\n                unit.type() != _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MIRVWarhead &&\n                unit.type() != _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MIRV) {\n                if (this.mg.euclideanDist(this.dst, unit.tile()) < magnitude.outer) {\n                    unit.delete();\n                }\n            }\n        }\n        this.active = false;\n        this.nuke.delete(false);\n    }\n    owner() {\n        return this.player;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/NukeExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/PlayerExecution.ts":
      /*!***********************************************!*\
  !*** ./src/core/execution/PlayerExecution.ts ***!
  \***********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerExecution: () => (/* binding */ PlayerExecution)\n/* harmony export */ });\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util */ "./src/core/Util.ts");\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n\n\n\nclass PlayerExecution {\n    constructor(playerID) {\n        this.playerID = playerID;\n        this.ticksPerClusterCalc = 20;\n        this.lastCalc = 0;\n        this.active = true;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n    init(mg, ticks) {\n        if (!mg.hasPlayer(this.playerID)) {\n            console.warn(`PlayerExecution: player ${this.playerID} not found`);\n            this.active = false;\n            return;\n        }\n        this.mg = mg;\n        this.config = mg.config();\n        this.player = mg.player(this.playerID);\n        this.lastCalc =\n            ticks + ((0,_Util__WEBPACK_IMPORTED_MODULE_1__.simpleHash)(this.player.name()) % this.ticksPerClusterCalc);\n    }\n    tick(ticks) {\n        this.player.decayRelations();\n        this.player.units().forEach((u) => {\n            if (u.health() <= 0) {\n                u.delete();\n                return;\n            }\n            u.modifyHealth(1);\n            const tileOwner = this.mg.owner(u.tile());\n            if (u.info().territoryBound) {\n                if (tileOwner.isPlayer()) {\n                    if (tileOwner != this.player) {\n                        this.mg.player(tileOwner.id()).captureUnit(u);\n                    }\n                }\n                else {\n                    u.delete();\n                }\n            }\n        });\n        if (!this.player.isAlive()) {\n            this.player.units().forEach((u) => {\n                if (u.type() != _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.AtomBomb &&\n                    u.type() != _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.HydrogenBomb &&\n                    u.type() != _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MIRVWarhead &&\n                    u.type() != _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MIRV) {\n                    u.delete();\n                }\n            });\n            this.active = false;\n            return;\n        }\n        const popInc = this.config.populationIncreaseRate(this.player);\n        this.player.addWorkers(popInc * (1 - this.player.targetTroopRatio()));\n        this.player.addTroops(popInc * this.player.targetTroopRatio());\n        this.player.addGold(this.config.goldAdditionRate(this.player));\n        const adjustRate = this.config.troopAdjustmentRate(this.player);\n        this.player.addTroops(adjustRate);\n        this.player.removeWorkers(adjustRate);\n        const alliances = Array.from(this.player.alliances());\n        for (const alliance of alliances) {\n            if (this.mg.ticks() - alliance.createdAt() >\n                this.mg.config().allianceDuration()) {\n                alliance.expire();\n            }\n        }\n        if (ticks - this.lastCalc > this.ticksPerClusterCalc) {\n            if (this.player.lastTileChange() > this.lastCalc) {\n                this.lastCalc = ticks;\n                const start = performance.now();\n                this.removeClusters();\n                const end = performance.now();\n                if (end - start > 1000) {\n                    _Consolex__WEBPACK_IMPORTED_MODULE_2__.consolex.log(`player ${this.player.name()}, took ${end - start}ms`);\n                }\n            }\n        }\n    }\n    removeClusters() {\n        const clusters = this.calculateClusters();\n        clusters.sort((a, b) => b.size - a.size);\n        const main = clusters.shift();\n        this.player.largestClusterBoundingBox = (0,_Util__WEBPACK_IMPORTED_MODULE_1__.calculateBoundingBox)(this.mg, main);\n        const surroundedBy = this.surroundedBySamePlayer(main);\n        if (surroundedBy && !this.player.isAlliedWith(surroundedBy)) {\n            this.removeCluster(main);\n        }\n        for (const cluster of clusters) {\n            if (this.isSurrounded(cluster)) {\n                this.removeCluster(cluster);\n            }\n        }\n    }\n    surroundedBySamePlayer(cluster) {\n        const enemies = new Set();\n        for (const tile of cluster) {\n            const isOceanShore = this.mg.isOceanShore(tile);\n            if (this.mg.isOceanShore(tile) && !isOceanShore) {\n                continue;\n            }\n            if (isOceanShore ||\n                this.mg.isOnEdgeOfMap(tile) ||\n                this.mg.neighbors(tile).some((n) => !this.mg.hasOwner(n))) {\n                return false;\n            }\n            this.mg\n                .neighbors(tile)\n                .filter((n) => this.mg.ownerID(n) != this.player.smallID())\n                .forEach((p) => enemies.add(this.mg.ownerID(p)));\n            if (enemies.size != 1) {\n                return false;\n            }\n        }\n        if (enemies.size != 1) {\n            return false;\n        }\n        return this.mg.playerBySmallID(Array.from(enemies)[0]);\n    }\n    isSurrounded(cluster) {\n        const enemyTiles = new Set();\n        for (const tr of cluster) {\n            if (this.mg.isOceanShore(tr) || this.mg.isOnEdgeOfMap(tr)) {\n                return false;\n            }\n            this.mg\n                .neighbors(tr)\n                .filter((n) => this.mg.ownerID(n) != this.player.smallID())\n                .forEach((n) => enemyTiles.add(n));\n        }\n        if (enemyTiles.size == 0) {\n            return false;\n        }\n        const enemyBox = (0,_Util__WEBPACK_IMPORTED_MODULE_1__.calculateBoundingBox)(this.mg, enemyTiles);\n        const clusterBox = (0,_Util__WEBPACK_IMPORTED_MODULE_1__.calculateBoundingBox)(this.mg, cluster);\n        return (0,_Util__WEBPACK_IMPORTED_MODULE_1__.inscribed)(enemyBox, clusterBox);\n    }\n    removeCluster(cluster) {\n        if (Array.from(cluster).some((t) => this.mg.ownerID(t) != this.player.smallID())) {\n            // Other removeCluster operations could change tile owners,\n            // so double check.\n            return;\n        }\n        const capturing = this.getCapturingPlayer(cluster);\n        if (capturing == null) {\n            return;\n        }\n        const firstTile = cluster.values().next().value;\n        const filter = (_, t) => this.mg.ownerID(t) == this.player.smallID();\n        const tiles = this.mg.bfs(firstTile, filter);\n        for (const tile of tiles) {\n            capturing.conquer(tile);\n        }\n    }\n    getCapturingPlayer(cluster) {\n        const neighborsIDs = new Set();\n        for (const t of cluster) {\n            for (const neighbor of this.mg.neighbors(t)) {\n                if (this.mg.ownerID(neighbor) != this.player.smallID()) {\n                    neighborsIDs.add(this.mg.ownerID(neighbor));\n                }\n            }\n        }\n        let largestNeighborAttack = null;\n        let largestTroopCount = 0;\n        for (const id of neighborsIDs) {\n            const neighbor = this.mg.playerBySmallID(id);\n            if (!neighbor.isPlayer()) {\n                continue;\n            }\n            for (const attack of neighbor.outgoingAttacks()) {\n                if (attack.target() == this.player) {\n                    if (attack.troops() > largestTroopCount) {\n                        largestTroopCount = attack.troops();\n                        largestNeighborAttack = neighbor;\n                    }\n                }\n            }\n        }\n        if (largestNeighborAttack != null) {\n            return largestNeighborAttack;\n        }\n        // fall back to getting mode if no attacks\n        const mode = (0,_Util__WEBPACK_IMPORTED_MODULE_1__.getMode)(neighborsIDs);\n        if (!this.mg.playerBySmallID(mode).isPlayer()) {\n            return null;\n        }\n        const capturing = this.mg.playerBySmallID(mode);\n        if (!capturing.isPlayer()) {\n            return null;\n        }\n        return capturing;\n    }\n    calculateClusters() {\n        const seen = new Set();\n        const border = this.player.borderTiles();\n        const clusters = [];\n        for (const tile of border) {\n            if (seen.has(tile)) {\n                continue;\n            }\n            const cluster = new Set();\n            const queue = [tile];\n            seen.add(tile);\n            while (queue.length > 0) {\n                const curr = queue.shift();\n                cluster.add(curr);\n                const neighbors = this.mg.neighborsWithDiag(curr);\n                for (const neighbor of neighbors) {\n                    if (border.has(neighbor) && !seen.has(neighbor)) {\n                        queue.push(neighbor);\n                        seen.add(neighbor);\n                    }\n                }\n            }\n            clusters.push(cluster);\n        }\n        return clusters;\n    }\n    owner() {\n        return this.player;\n    }\n    isActive() {\n        return this.active;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/PlayerExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/PortExecution.ts":
      /*!*********************************************!*\
  !*** ./src/core/execution/PortExecution.ts ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PortExecution: () => (/* binding */ PortExecution)\n/* harmony export */ });\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _pathfinding_PathFinding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pathfinding/PathFinding */ "./src/core/pathfinding/PathFinding.ts");\n/* harmony import */ var _PseudoRandom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PseudoRandom */ "./src/core/PseudoRandom.ts");\n/* harmony import */ var _TradeShipExecution__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TradeShipExecution */ "./src/core/execution/TradeShipExecution.ts");\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n/* harmony import */ var _game_GameMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../game/GameMap */ "./src/core/game/GameMap.ts");\n\n\n\n\n\n\nclass PortExecution {\n    constructor(_owner, tile) {\n        this._owner = _owner;\n        this.tile = tile;\n        this.active = true;\n    }\n    init(mg, ticks) {\n        if (!mg.hasPlayer(this._owner)) {\n            console.warn(`PortExecution: player ${this._owner} not found`);\n            this.active = false;\n            return;\n        }\n        this.mg = mg;\n        this.random = new _PseudoRandom__WEBPACK_IMPORTED_MODULE_2__.PseudoRandom(mg.ticks());\n    }\n    tick(ticks) {\n        if (this.port == null) {\n            // TODO: use canBuild\n            const tile = this.tile;\n            const player = this.mg.player(this._owner);\n            if (!player.canBuild(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Port, tile)) {\n                _Consolex__WEBPACK_IMPORTED_MODULE_4__.consolex.warn(`player ${player} cannot build port at ${this.tile}`);\n                this.active = false;\n                return;\n            }\n            const spawns = Array.from(this.mg.bfs(tile, (0,_game_GameMap__WEBPACK_IMPORTED_MODULE_5__.manhattanDistFN)(tile, 20)))\n                .filter((t) => this.mg.isOceanShore(t) && this.mg.owner(t) == player)\n                .sort((a, b) => this.mg.manhattanDist(a, tile) - this.mg.manhattanDist(b, tile));\n            if (spawns.length == 0) {\n                _Consolex__WEBPACK_IMPORTED_MODULE_4__.consolex.warn(`cannot find spawn for port`);\n                this.active = false;\n                return;\n            }\n            this.port = player.buildUnit(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Port, 0, spawns[0]);\n        }\n        if (!this.port.isActive()) {\n            this.active = false;\n            return;\n        }\n        if (!this.random.chance(this.mg.config().tradeShipSpawnRate())) {\n            return;\n        }\n        const ports = this.mg\n            .players()\n            .filter((p) => p != this.port.owner() && p.canTrade(this.port.owner()))\n            .flatMap((p) => p.units(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Port));\n        if (ports.length == 0) {\n            return;\n        }\n        const port = this.random.randElement(ports);\n        const pf = _pathfinding_PathFinding__WEBPACK_IMPORTED_MODULE_1__.PathFinder.Mini(this.mg, 2500, false);\n        this.mg.addExecution(new _TradeShipExecution__WEBPACK_IMPORTED_MODULE_3__.TradeShipExecution(this.player().id(), this.port, port, pf));\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n    player() {\n        return this.port.owner();\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/PortExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/RetreatExecution.ts":
      /*!************************************************!*\
  !*** ./src/core/execution/RetreatExecution.ts ***!
  \************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RetreatExecution: () => (/* binding */ RetreatExecution)\n/* harmony export */ });\nconst cancelDelay = 2;\nclass RetreatExecution {\n    constructor(playerID, attackID) {\n        this.playerID = playerID;\n        this.attackID = attackID;\n        this.active = true;\n        this.retreatOrdered = false;\n        this.executionDateInSecs = new Date().getTime() / 1000 + cancelDelay;\n    }\n    init(mg, ticks) {\n        if (!mg.hasPlayer(this.playerID)) {\n            console.warn(`RetreatExecution: player ${this.player.id()} not found`);\n            return;\n        }\n        this.player = mg.player(this.playerID);\n    }\n    tick(ticks) {\n        const nowInSecs = new Date().getTime() / 1000;\n        if (!this.retreatOrdered) {\n            this.player.orderRetreat(this.attackID);\n            this.retreatOrdered = true;\n        }\n        if (nowInSecs >= this.executionDateInSecs) {\n            this.player.executeRetreat(this.attackID);\n            this.active = false;\n        }\n    }\n    owner() {\n        return this.player;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/RetreatExecution.ts?",
        );

        /***/
      },

    /***/ "./src/core/execution/SAMLauncherExecution.ts":
      /*!****************************************************!*\
  !*** ./src/core/execution/SAMLauncherExecution.ts ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SAMLauncherExecution: () => (/* binding */ SAMLauncherExecution)\n/* harmony export */ });\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _SAMMissileExecution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SAMMissileExecution */ "./src/core/execution/SAMMissileExecution.ts");\n\n\n\nclass PseudoRandom {\n    constructor(seed) {\n        this.seed = seed;\n    }\n    next() {\n        this.seed = (this.seed * 1664525 + 1013904223) % 0x100000000;\n        return (this.seed >>> 0) / 0x100000000;\n    }\n}\nclass SAMLauncherExecution {\n    constructor(ownerId, tile) {\n        this.ownerId = ownerId;\n        this.tile = tile;\n        this.active = true;\n        this.target = null;\n        this.searchRange = 100;\n        this.missileAttackRate = 50;\n        this.lastMissileAttack = 0;\n        this.pseudoRandom = new PseudoRandom(80085);\n    }\n    init(mg, ticks) {\n        this.mg = mg;\n        if (!mg.hasPlayer(this.ownerId)) {\n            console.warn(`SAMLauncherExecution: owner ${this.ownerId} not found`);\n            this.active = false;\n            return;\n        }\n        this.player = mg.player(this.ownerId);\n    }\n    tick(ticks) {\n        if (this.post == null) {\n            const spawnTile = this.player.canBuild(_game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.SAMLauncher, this.tile);\n            if (spawnTile == false) {\n                _Consolex__WEBPACK_IMPORTED_MODULE_0__.consolex.warn("cannot build SAM Launcher");\n                this.active = false;\n                return;\n            }\n            this.post = this.player.buildUnit(_game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.SAMLauncher, 0, spawnTile);\n        }\n        if (!this.post.isActive()) {\n            this.active = false;\n            return;\n        }\n        const nukes = this.mg\n            .units(_game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.AtomBomb, _game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.HydrogenBomb)\n            .filter((u) => this.mg.manhattanDist(u.tile(), this.post.tile()) < this.searchRange)\n            .filter((u) => u.owner() !== this.player)\n            .filter((u) => !u.owner().isAlliedWith(this.player));\n        this.target =\n            nukes.sort((a, b) => {\n                // Prioritize HydrogenBombs first\n                if (a.type() === _game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.HydrogenBomb &&\n                    b.type() !== _game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.HydrogenBomb) {\n                    return -1;\n                }\n                if (a.type() !== _game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.HydrogenBomb &&\n                    b.type() === _game_Game__WEBPACK_IMPORTED_MODULE_1__.UnitType.HydrogenBomb) {\n                    return 1;\n                }\n                // If both are the same type, sort by distance\n                return (this.mg.manhattanDist(this.post.tile(), a.tile()) -\n                    this.mg.manhattanDist(this.post.tile(), b.tile()));\n            })[0] ?? null;\n        if (this.target != null) {\n            if (this.mg.ticks() - this.lastMissileAttack > this.missileAttackRate) {\n                this.lastMissileAttack = this.mg.ticks();\n                this.mg.addExecution(new _SAMMissileExecution__WEBPACK_IMPORTED_MODULE_2__.SAMMissileExecution(this.post.tile(), this.post.owner(), this.post, this.target, this.mg, this.pseudoRandom.next()));\n            }\n        }\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/SAMLauncherExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/SAMMissileExecution.ts":
      /*!***************************************************!*\
  !*** ./src/core/execution/SAMMissileExecution.ts ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SAMMissileExecution: () => (/* binding */ SAMMissileExecution)\n/* harmony export */ });\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _pathfinding_PathFinding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pathfinding/PathFinding */ "./src/core/pathfinding/PathFinding.ts");\n/* harmony import */ var _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pathfinding/AStar */ "./src/core/pathfinding/AStar.ts");\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n\n\n\n\nclass SAMMissileExecution {\n    constructor(spawn, _owner, ownerUnit, target, mg, pseudoRandom, speed = 6, hittingChance = 0.75) {\n        this.spawn = spawn;\n        this._owner = _owner;\n        this.ownerUnit = ownerUnit;\n        this.target = target;\n        this.mg = mg;\n        this.pseudoRandom = pseudoRandom;\n        this.speed = speed;\n        this.hittingChance = hittingChance;\n        this.active = true;\n    }\n    init(mg, ticks) {\n        this.pathFinder = _pathfinding_PathFinding__WEBPACK_IMPORTED_MODULE_1__.PathFinder.Mini(mg, 2000, true, 10);\n    }\n    tick(ticks) {\n        if (this.missile == null) {\n            this.missile = this._owner.buildUnit(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.SAMMissile, 0, this.spawn);\n        }\n        if (!this.missile.isActive()) {\n            this.active = false;\n            return;\n        }\n        if (!this.target.isActive() ||\n            !this.ownerUnit.isActive() ||\n            this.target.owner() == this.missile.owner()) {\n            this.missile.delete(false);\n            this.active = false;\n            return;\n        }\n        for (let i = 0; i < this.speed; i++) {\n            const result = this.pathFinder.nextTile(this.missile.tile(), this.target.tile(), 3);\n            switch (result.type) {\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.Completed:\n                    this.active = false;\n                    console.log(this.pseudoRandom);\n                    if (this.pseudoRandom < this.hittingChance) {\n                        this.target.delete();\n                        this.mg.displayMessage(`Missile succesfully intercepted ${this.target.type()}`, _game_Game__WEBPACK_IMPORTED_MODULE_0__.MessageType.SUCCESS, this._owner.id());\n                    }\n                    else {\n                        this.mg.displayMessage(`Missile failed to intercept ${this.target.type()}`, _game_Game__WEBPACK_IMPORTED_MODULE_0__.MessageType.ERROR, this._owner.id());\n                    }\n                    this.missile.delete(false);\n                    return;\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.NextTile:\n                    this.missile.move(result.tile);\n                    break;\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.Pending:\n                    return;\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.PathNotFound:\n                    _Consolex__WEBPACK_IMPORTED_MODULE_3__.consolex.log(`Missile ${this.missile} could not find target`);\n                    this.active = false;\n                    this.missile.delete(false);\n                    return;\n            }\n        }\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/SAMMissileExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/SetTargetTroopRatioExecution.ts":
      /*!************************************************************!*\
  !*** ./src/core/execution/SetTargetTroopRatioExecution.ts ***!
  \************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SetTargetTroopRatioExecution: () => (/* binding */ SetTargetTroopRatioExecution)\n/* harmony export */ });\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n\nclass SetTargetTroopRatioExecution {\n    constructor(playerID, targetTroopsRatio) {\n        this.playerID = playerID;\n        this.targetTroopsRatio = targetTroopsRatio;\n        this.active = true;\n    }\n    init(mg, ticks) {\n        if (!mg.hasPlayer(this.playerID)) {\n            console.warn(`SetTargetTRoopRatioExecution: player ${this.playerID} not found`);\n        }\n        this.player = mg.player(this.playerID);\n    }\n    tick(ticks) {\n        if (this.targetTroopsRatio < 0 || this.targetTroopsRatio > 1) {\n            _Consolex__WEBPACK_IMPORTED_MODULE_0__.consolex.warn(`target troop ratio of ${this.targetTroopsRatio} for player ${this.player} invalid`);\n        }\n        else {\n            this.player.setTargetTroopRatio(this.targetTroopsRatio);\n        }\n        this.active = false;\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/SetTargetTroopRatioExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/ShellExecution.ts":
      /*!**********************************************!*\
  !*** ./src/core/execution/ShellExecution.ts ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ShellExecution: () => (/* binding */ ShellExecution)\n/* harmony export */ });\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _pathfinding_PathFinding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pathfinding/PathFinding */ "./src/core/pathfinding/PathFinding.ts");\n/* harmony import */ var _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pathfinding/AStar */ "./src/core/pathfinding/AStar.ts");\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n\n\n\n\nclass ShellExecution {\n    constructor(spawn, _owner, ownerUnit, target) {\n        this.spawn = spawn;\n        this._owner = _owner;\n        this.ownerUnit = ownerUnit;\n        this.target = target;\n        this.active = true;\n    }\n    init(mg, ticks) {\n        this.pathFinder = _pathfinding_PathFinding__WEBPACK_IMPORTED_MODULE_1__.PathFinder.Mini(mg, 2000, true, 10);\n    }\n    tick(ticks) {\n        if (this.shell == null) {\n            this.shell = this._owner.buildUnit(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Shell, 0, this.spawn);\n        }\n        if (!this.shell.isActive()) {\n            this.active = false;\n            return;\n        }\n        if (!this.target.isActive() ||\n            !this.ownerUnit.isActive() ||\n            this.target.owner() == this.shell.owner()) {\n            this.shell.delete(false);\n            this.active = false;\n            return;\n        }\n        for (let i = 0; i < 3; i++) {\n            const result = this.pathFinder.nextTile(this.shell.tile(), this.target.tile(), 3);\n            switch (result.type) {\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.Completed:\n                    this.active = false;\n                    this.target.modifyHealth(-this.shell.info().damage);\n                    this.shell.delete(false);\n                    return;\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.NextTile:\n                    this.shell.move(result.tile);\n                    break;\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.Pending:\n                    return;\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.PathNotFound:\n                    _Consolex__WEBPACK_IMPORTED_MODULE_3__.consolex.log(`Shell ${this.shell} could not find target`);\n                    this.active = false;\n                    this.shell.delete(false);\n                    return;\n            }\n        }\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/ShellExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/SpawnExecution.ts":
      /*!**********************************************!*\
  !*** ./src/core/execution/SpawnExecution.ts ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SpawnExecution: () => (/* binding */ SpawnExecution)\n/* harmony export */ });\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _BotExecution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BotExecution */ "./src/core/execution/BotExecution.ts");\n/* harmony import */ var _PlayerExecution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerExecution */ "./src/core/execution/PlayerExecution.ts");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util */ "./src/core/execution/Util.ts");\n\n\n\n\nclass SpawnExecution {\n    constructor(playerInfo, tile) {\n        this.playerInfo = playerInfo;\n        this.tile = tile;\n        this.active = true;\n    }\n    init(mg, ticks) {\n        this.mg = mg;\n    }\n    tick(ticks) {\n        this.active = false;\n        if (!this.mg.inSpawnPhase()) {\n            this.active = false;\n            return;\n        }\n        const existing = this.mg\n            .players()\n            .find((p) => p.id() == this.playerInfo.id);\n        if (existing) {\n            existing.tiles().forEach((t) => existing.relinquish(t));\n            (0,_Util__WEBPACK_IMPORTED_MODULE_3__.getSpawnTiles)(this.mg, this.tile).forEach((t) => {\n                existing.conquer(t);\n            });\n            return;\n        }\n        const player = this.mg.addPlayer(this.playerInfo, this.mg.config().startManpower(this.playerInfo));\n        (0,_Util__WEBPACK_IMPORTED_MODULE_3__.getSpawnTiles)(this.mg, this.tile).forEach((t) => {\n            player.conquer(t);\n        });\n        this.mg.addExecution(new _PlayerExecution__WEBPACK_IMPORTED_MODULE_2__.PlayerExecution(player.id()));\n        if (player.type() == _game_Game__WEBPACK_IMPORTED_MODULE_0__.PlayerType.Bot) {\n            this.mg.addExecution(new _BotExecution__WEBPACK_IMPORTED_MODULE_1__.BotExecution(player));\n        }\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return true;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/SpawnExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/TargetPlayerExecution.ts":
      /*!*****************************************************!*\
  !*** ./src/core/execution/TargetPlayerExecution.ts ***!
  \*****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TargetPlayerExecution: () => (/* binding */ TargetPlayerExecution)\n/* harmony export */ });\nclass TargetPlayerExecution {\n    constructor(requestorID, targetID) {\n        this.requestorID = requestorID;\n        this.targetID = targetID;\n        this.active = true;\n    }\n    init(mg, ticks) {\n        if (!mg.hasPlayer(this.requestorID)) {\n            console.warn(`TargetPlayerExecution: requestor ${this.requestorID} not found`);\n            this.active = false;\n            return;\n        }\n        if (!mg.hasPlayer(this.targetID)) {\n            console.warn(`TargetPlayerExecution: target ${this.targetID} not found`);\n            this.active = false;\n            return;\n        }\n        this.requestor = mg.player(this.requestorID);\n        this.target = mg.player(this.targetID);\n    }\n    tick(ticks) {\n        if (this.requestor.canTarget(this.target)) {\n            this.requestor.target(this.target);\n            this.target.updateRelation(this.requestor, -40);\n        }\n        this.active = false;\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/TargetPlayerExecution.ts?",
        );

        /***/
      },

    /***/ "./src/core/execution/TradeShipExecution.ts":
      /*!**************************************************!*\
  !*** ./src/core/execution/TradeShipExecution.ts ***!
  \**************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TradeShipExecution: () => (/* binding */ TradeShipExecution)\n/* harmony export */ });\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _client_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client/Utils */ "./src/client/Utils.ts");\n/* harmony import */ var _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pathfinding/AStar */ "./src/core/pathfinding/AStar.ts");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Util */ "./src/core/Util.ts");\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n\n\n\n\n\n\nclass TradeShipExecution {\n    constructor(_owner, srcPort, _dstPort, pathFinder) {\n        this._owner = _owner;\n        this.srcPort = srcPort;\n        this._dstPort = _dstPort;\n        this.pathFinder = pathFinder;\n        this.active = true;\n        this.index = 0;\n        this.wasCaptured = false;\n    }\n    init(mg, ticks) {\n        this.mg = mg;\n        this.origOwner = mg.player(this._owner);\n    }\n    tick(ticks) {\n        if (this.tradeShip == null) {\n            const spawn = this.origOwner.canBuild(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TradeShip, this.srcPort.tile());\n            if (spawn == false) {\n                _Consolex__WEBPACK_IMPORTED_MODULE_4__.consolex.warn(`cannot build trade ship`);\n                this.active = false;\n                return;\n            }\n            this.tradeShip = this.origOwner.buildUnit(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TradeShip, 0, spawn, this._dstPort);\n        }\n        if (!this.tradeShip.isActive()) {\n            this.active = false;\n            return;\n        }\n        if (this.origOwner != this.tradeShip.owner()) {\n            // Store as vairable in case ship is recaptured by previous owner\n            this.wasCaptured = true;\n        }\n        if (!this.wasCaptured &&\n            (!this._dstPort.isActive() ||\n                !this.tradeShip.owner().canTrade(this._dstPort.owner()))) {\n            this.tradeShip.delete(false);\n            this.active = false;\n            return;\n        }\n        if (this.wasCaptured) {\n            const ports = this.tradeShip\n                .owner()\n                .units(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Port)\n                .sort((0,_Util__WEBPACK_IMPORTED_MODULE_3__.distSortUnit)(this.mg, this.tradeShip));\n            if (ports.length == 0) {\n                this.tradeShip.delete(false);\n                this.active = false;\n                return;\n            }\n            else {\n                this._dstPort = ports[0];\n            }\n        }\n        const result = this.pathFinder.nextTile(this.tradeShip.tile(), this._dstPort.tile());\n        switch (result.type) {\n            case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.Completed:\n                this.complete();\n                break;\n            case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.Pending:\n                // Fire unit event to rerender.\n                this.tradeShip.move(this.tradeShip.tile());\n                break;\n            case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.NextTile:\n                this.tradeShip.move(result.tile);\n                break;\n            case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.PathNotFound:\n                _Consolex__WEBPACK_IMPORTED_MODULE_4__.consolex.warn("captured trade ship cannot find route");\n                this.active = false;\n                break;\n        }\n    }\n    complete() {\n        this.active = false;\n        this.tradeShip.delete(false);\n        const gold = this.mg\n            .config()\n            .tradeShipGold(this.mg.manhattanDist(this.srcPort.tile(), this._dstPort.tile()));\n        if (this.wasCaptured) {\n            this.tradeShip.owner().addGold(gold);\n            this.mg.displayMessage(`Received ${(0,_client_Utils__WEBPACK_IMPORTED_MODULE_1__.renderNumber)(gold)} gold from ship captured from ${this.origOwner.displayName()}`, _game_Game__WEBPACK_IMPORTED_MODULE_0__.MessageType.SUCCESS, this.tradeShip.owner().id());\n        }\n        else {\n            this.srcPort.owner().addGold(gold);\n            this._dstPort.owner().addGold(gold);\n            this.mg.displayMessage(`Received ${(0,_client_Utils__WEBPACK_IMPORTED_MODULE_1__.renderNumber)(gold)} gold from trade with ${this.srcPort.owner().displayName()}`, _game_Game__WEBPACK_IMPORTED_MODULE_0__.MessageType.SUCCESS, this._dstPort.owner().id());\n            this.mg.displayMessage(`Received ${(0,_client_Utils__WEBPACK_IMPORTED_MODULE_1__.renderNumber)(gold)} gold from trade with ${this._dstPort.owner().displayName()}`, _game_Game__WEBPACK_IMPORTED_MODULE_0__.MessageType.SUCCESS, this.srcPort.owner().id());\n        }\n        return;\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n    dstPort() {\n        return this._dstPort.tile();\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/TradeShipExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/TransportShipExecution.ts":
      /*!******************************************************!*\
  !*** ./src/core/execution/TransportShipExecution.ts ***!
  \******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TransportShipExecution: () => (/* binding */ TransportShipExecution)\n/* harmony export */ });\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _AttackExecution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttackExecution */ "./src/core/execution/AttackExecution.ts");\n/* harmony import */ var _pathfinding_PathFinding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pathfinding/PathFinding */ "./src/core/pathfinding/PathFinding.ts");\n/* harmony import */ var _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pathfinding/AStar */ "./src/core/pathfinding/AStar.ts");\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Util */ "./src/core/Util.ts");\n\n\n\n\n\n\n\nclass TransportShipExecution {\n    constructor(attackerID, targetID, ref, troops) {\n        this.attackerID = attackerID;\n        this.targetID = targetID;\n        this.ref = ref;\n        this.troops = troops;\n        // TODO: make this configurable\n        this.ticksPerMove = 1;\n        this.active = true;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n    init(mg, ticks) {\n        if (!mg.hasPlayer(this.attackerID)) {\n            console.warn(`TransportShipExecution: attacker ${this.attackerID} not found`);\n            this.active = false;\n            return;\n        }\n        if (this.targetID != null && !mg.hasPlayer(this.targetID)) {\n            console.warn(`TransportShipExecution: target ${this.targetID} not found`);\n            this.active = false;\n            return;\n        }\n        this.lastMove = ticks;\n        this.mg = mg;\n        this.pathFinder = _pathfinding_PathFinding__WEBPACK_IMPORTED_MODULE_2__.PathFinder.Mini(mg, 10000, false, 10);\n        this.attacker = mg.player(this.attackerID);\n        // Notify the target player about the incoming naval invasion\n        if (this.targetID && this.targetID !== mg.terraNullius().id()) {\n            mg.displayMessage(`Naval invasion incoming from ${this.attacker.displayName()}`, _game_Game__WEBPACK_IMPORTED_MODULE_0__.MessageType.WARN, this.targetID);\n        }\n        if (this.attacker.units(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TransportShip).length >=\n            mg.config().boatMaxNumber()) {\n            mg.displayMessage(`No boats available, max ${mg.config().boatMaxNumber()}`, _game_Game__WEBPACK_IMPORTED_MODULE_0__.MessageType.WARN, this.attackerID);\n            this.active = false;\n            this.attacker.addTroops(this.troops);\n            return;\n        }\n        if (this.targetID == null || this.targetID == this.mg.terraNullius().id()) {\n            this.target = mg.terraNullius();\n        }\n        else {\n            this.target = mg.player(this.targetID);\n        }\n        if (this.troops == null) {\n            this.troops = this.mg\n                .config()\n                .boatAttackAmount(this.attacker, this.target);\n        }\n        this.troops = Math.min(this.troops, this.attacker.troops());\n        this.dst = (0,_Util__WEBPACK_IMPORTED_MODULE_5__.targetTransportTile)(this.mg, this.ref);\n        if (this.dst == null) {\n            _Consolex__WEBPACK_IMPORTED_MODULE_4__.consolex.warn(`${this.attacker} cannot send ship to ${this.target}, cannot find attack tile`);\n            this.active = false;\n            return;\n        }\n        const src = this.attacker.canBuild(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TransportShip, this.dst);\n        if (src == false) {\n            _Consolex__WEBPACK_IMPORTED_MODULE_4__.consolex.warn(`can\'t build transport ship`);\n            this.active = false;\n            return;\n        }\n        this.src = src;\n        this.boat = this.attacker.buildUnit(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TransportShip, this.troops, this.src);\n    }\n    tick(ticks) {\n        if (!this.active) {\n            return;\n        }\n        if (!this.boat.isActive()) {\n            this.active = false;\n            return;\n        }\n        if (ticks - this.lastMove < this.ticksPerMove) {\n            return;\n        }\n        this.lastMove = ticks;\n        const result = this.pathFinder.nextTile(this.boat.tile(), this.dst);\n        switch (result.type) {\n            case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_3__.PathFindResultType.Completed:\n                if (this.mg.owner(this.dst) == this.attacker) {\n                    this.attacker.addTroops(this.troops);\n                    this.boat.delete(false);\n                    this.active = false;\n                    return;\n                }\n                if (this.target.isPlayer() && this.attacker.isAlliedWith(this.target)) {\n                    this.target.addTroops(this.troops);\n                }\n                else {\n                    this.attacker.conquer(this.dst);\n                    this.mg.addExecution(new _AttackExecution__WEBPACK_IMPORTED_MODULE_1__.AttackExecution(this.troops, this.attacker.id(), this.targetID, this.dst, false));\n                }\n                this.boat.delete(false);\n                this.active = false;\n                return;\n            case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_3__.PathFindResultType.NextTile:\n                this.boat.move(result.tile);\n                break;\n            case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_3__.PathFindResultType.Pending:\n                break;\n            case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_3__.PathFindResultType.PathNotFound:\n                // TODO: add to poisoned port list\n                _Consolex__WEBPACK_IMPORTED_MODULE_4__.consolex.warn(`path not found tot dst`);\n                this.boat.delete(false);\n                this.active = false;\n                return;\n        }\n    }\n    owner() {\n        return this.attacker;\n    }\n    isActive() {\n        return this.active;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/TransportShipExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/Util.ts":
      /*!************************************!*\
  !*** ./src/core/execution/Util.ts ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closestTwoTiles: () => (/* binding */ closestTwoTiles),\n/* harmony export */   getSpawnTiles: () => (/* binding */ getSpawnTiles)\n/* harmony export */ });\n/* harmony import */ var _game_GameMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/GameMap */ \"./src/core/game/GameMap.ts\");\n\nfunction getSpawnTiles(gm, tile) {\n    return Array.from(gm.bfs(tile, (0,_game_GameMap__WEBPACK_IMPORTED_MODULE_0__.euclDistFN)(tile, 4))).filter((t) => !gm.hasOwner(t) && gm.isLand(t));\n}\nfunction closestTwoTiles(gm, x, y) {\n    const xSorted = Array.from(x).sort((a, b) => gm.x(a) - gm.x(b));\n    const ySorted = Array.from(y).sort((a, b) => gm.x(a) - gm.x(b));\n    if (xSorted.length == 0 || ySorted.length == 0) {\n        return null;\n    }\n    let i = 0;\n    let j = 0;\n    let minDistance = Infinity;\n    let result = { x: xSorted[0], y: ySorted[0] };\n    while (i < xSorted.length && j < ySorted.length) {\n        const currentX = xSorted[i];\n        const currentY = ySorted[j];\n        const distance = Math.abs(gm.x(currentX) - gm.x(currentY)) +\n            Math.abs(gm.y(currentX) - gm.y(currentY));\n        if (distance < minDistance) {\n            minDistance = distance;\n            result = { x: currentX, y: currentY };\n        }\n        // If we're at the end of X, must move Y forward\n        if (i === xSorted.length - 1) {\n            j++;\n        }\n        // If we're at the end of Y, must move X forward\n        else if (j === ySorted.length - 1) {\n            i++;\n        }\n        // Otherwise, move whichever pointer has smaller x value\n        else if (gm.x(currentX) < gm.x(currentY)) {\n            i++;\n        }\n        else {\n            j++;\n        }\n    }\n    return result;\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/Util.ts?",
        );

        /***/
      },

    /***/ "./src/core/execution/WarshipExecution.ts":
      /*!************************************************!*\
  !*** ./src/core/execution/WarshipExecution.ts ***!
  \************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WarshipExecution: () => (/* binding */ WarshipExecution)\n/* harmony export */ });\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _pathfinding_PathFinding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pathfinding/PathFinding */ "./src/core/pathfinding/PathFinding.ts");\n/* harmony import */ var _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pathfinding/AStar */ "./src/core/pathfinding/AStar.ts");\n/* harmony import */ var _PseudoRandom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PseudoRandom */ "./src/core/PseudoRandom.ts");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Util */ "./src/core/Util.ts");\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n/* harmony import */ var _ShellExecution__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShellExecution */ "./src/core/execution/ShellExecution.ts");\n\n\n\n\n\n\n\nclass WarshipExecution {\n    constructor(playerID, patrolCenterTile) {\n        this.playerID = playerID;\n        this.patrolCenterTile = patrolCenterTile;\n        this.active = true;\n        this.warship = null;\n        this.mg = null;\n        this.target = null;\n        // TODO: put in config\n        this.searchRange = 100;\n        this.shellAttackRate = 5;\n        this.lastShellAttack = 0;\n        this.alreadySentShell = new Set();\n    }\n    init(mg, ticks) {\n        if (!mg.hasPlayer(this.playerID)) {\n            console.log(`WarshipExecution: player ${this.playerID} not found`);\n            this.active = false;\n            return;\n        }\n        this.pathfinder = _pathfinding_PathFinding__WEBPACK_IMPORTED_MODULE_1__.PathFinder.Mini(mg, 5000, false);\n        this._owner = mg.player(this.playerID);\n        this.mg = mg;\n        this.patrolTile = this.patrolCenterTile;\n        this.random = new _PseudoRandom__WEBPACK_IMPORTED_MODULE_3__.PseudoRandom(mg.ticks());\n    }\n    tick(ticks) {\n        if (this.warship == null) {\n            const spawn = this._owner.canBuild(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Warship, this.patrolTile);\n            if (spawn == false) {\n                this.active = false;\n                return;\n            }\n            this.warship = this._owner.buildUnit(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Warship, 0, spawn);\n            return;\n        }\n        if (!this.warship.isActive()) {\n            this.active = false;\n            return;\n        }\n        if (this.target != null && !this.target.isActive()) {\n            this.target = null;\n        }\n        const ships = this.mg\n            .units(_game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TransportShip, _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Warship, _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TradeShip)\n            .filter((u) => this.mg.manhattanDist(u.tile(), this.warship.tile()) < 130)\n            .filter((u) => u.owner() != this.warship.owner())\n            .filter((u) => u != this.warship)\n            .filter((u) => !u.owner().isAlliedWith(this.warship.owner()))\n            .filter((u) => !this.alreadySentShell.has(u))\n            .filter((u) => u.type() != _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TradeShip || u.dstPort().owner() != this.owner());\n        this.target =\n            ships.sort((a, b) => {\n                // First compare by Warship type\n                if (a.type() === _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Warship && b.type() !== _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Warship) {\n                    return -1;\n                }\n                if (a.type() !== _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Warship && b.type() === _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Warship) {\n                    return 1;\n                }\n                // Then favor transport ship\n                if (a.type() === _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TransportShip &&\n                    b.type() !== _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TransportShip) {\n                    return -1;\n                }\n                if (a.type() !== _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TransportShip &&\n                    b.type() === _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TransportShip) {\n                    return 1;\n                }\n                // If both are same type, sort by distance\n                return (0,_Util__WEBPACK_IMPORTED_MODULE_4__.distSortUnit)(this.mg, this.warship)(a, b);\n            })[0] ?? null;\n        this.warship.setTarget(this.target);\n        if (this.target == null || this.target.type() != _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TradeShip) {\n            // Patrol unless we are hunting down a tradeship\n            const result = this.pathfinder.nextTile(this.warship.tile(), this.patrolTile);\n            switch (result.type) {\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.Completed:\n                    this.patrolTile = this.randomTile();\n                    break;\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.NextTile:\n                    this.warship.move(result.tile);\n                    break;\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.Pending:\n                    return;\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.PathNotFound:\n                    _Consolex__WEBPACK_IMPORTED_MODULE_5__.consolex.log(`path not found to patrol tile`);\n                    this.patrolTile = this.randomTile();\n                    break;\n            }\n        }\n        if (this.target == null ||\n            !this.target.isActive() ||\n            this.target.owner() == this._owner) {\n            // In case another destroyer captured or destroyed target\n            this.target = null;\n            return;\n        }\n        if (this.target.type() != _game_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TradeShip) {\n            if (this.mg.ticks() - this.lastShellAttack > this.shellAttackRate) {\n                this.lastShellAttack = this.mg.ticks();\n                this.mg.addExecution(new _ShellExecution__WEBPACK_IMPORTED_MODULE_6__.ShellExecution(this.warship.tile(), this.warship.owner(), this.warship, this.target));\n                if (!this.target.hasHealth()) {\n                    // Don\'t send multiple shells to target that can be oneshotted\n                    this.alreadySentShell.add(this.target);\n                    this.target = null;\n                    return;\n                }\n            }\n            // Only hunt down tradeships\n            return;\n        }\n        for (let i = 0; i < 2; i++) {\n            // target is trade ship so capture it.\n            const result = this.pathfinder.nextTile(this.warship.tile(), this.target.tile(), 5);\n            switch (result.type) {\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.Completed:\n                    this.owner().captureUnit(this.target);\n                    this.target = null;\n                    return;\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.NextTile:\n                    this.warship.move(result.tile);\n                    break;\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.Pending:\n                    break;\n                case _pathfinding_AStar__WEBPACK_IMPORTED_MODULE_2__.PathFindResultType.PathNotFound:\n                    _Consolex__WEBPACK_IMPORTED_MODULE_5__.consolex.log(`path not found to target`);\n                    break;\n            }\n        }\n    }\n    owner() {\n        return this._owner;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n    randomTile() {\n        while (true) {\n            const x = this.mg.x(this.patrolCenterTile) +\n                this.random.nextInt(-this.searchRange / 2, this.searchRange / 2);\n            const y = this.mg.y(this.patrolCenterTile) +\n                this.random.nextInt(-this.searchRange / 2, this.searchRange / 2);\n            if (!this.mg.isValidCoord(x, y)) {\n                continue;\n            }\n            const tile = this.mg.ref(x, y);\n            if (!this.mg.isOcean(tile)) {\n                continue;\n            }\n            return tile;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/WarshipExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/WinCheckExecution.ts":
      /*!*************************************************!*\
  !*** ./src/core/execution/WinCheckExecution.ts ***!
  \*************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WinCheckExecution: () => (/* binding */ WinCheckExecution),\n/* harmony export */   WinEvent: () => (/* binding */ WinEvent)\n/* harmony export */ });\nclass WinEvent {\n    constructor(winner) {\n        this.winner = winner;\n    }\n}\nclass WinCheckExecution {\n    constructor() {\n        this.active = true;\n    }\n    init(mg, ticks) {\n        this.mg = mg;\n    }\n    tick(ticks) {\n        if (ticks % 10 != 0) {\n            return;\n        }\n        const sorted = this.mg\n            .players()\n            .sort((a, b) => b.numTilesOwned() - a.numTilesOwned());\n        if (sorted.length == 0) {\n            return;\n        }\n        const max = sorted[0];\n        const numTilesWithoutFallout = this.mg.numLandTiles() - this.mg.numTilesWithFallout();\n        if ((max.numTilesOwned() / numTilesWithoutFallout) * 100 >\n            this.mg.config().percentageTilesOwnedToWin()) {\n            this.mg.setWinner(max);\n            console.log(`${max.name()} has won the game`);\n            this.active = false;\n        }\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/WinCheckExecution.ts?",
        );

        /***/
      },

    /***/ "./src/core/execution/alliance/AllianceRequestExecution.ts":
      /*!*****************************************************************!*\
  !*** ./src/core/execution/alliance/AllianceRequestExecution.ts ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AllianceRequestExecution: () => (/* binding */ AllianceRequestExecution)\n/* harmony export */ });\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Consolex */ "./src/core/Consolex.ts");\n\nclass AllianceRequestExecution {\n    constructor(requestorID, recipientID) {\n        this.requestorID = requestorID;\n        this.recipientID = recipientID;\n        this.active = true;\n        this.mg = null;\n    }\n    init(mg, ticks) {\n        if (!mg.hasPlayer(this.requestorID)) {\n            console.warn(`AllianceRequestExecution requester ${this.requestorID} not found`);\n            this.active = false;\n            return;\n        }\n        if (!mg.hasPlayer(this.recipientID)) {\n            console.warn(`AllianceRequestExecution recipient ${this.recipientID} not found`);\n            this.active = false;\n            return;\n        }\n        this.mg = mg;\n        this.requestor = mg.player(this.requestorID);\n        this.recipient = mg.player(this.recipientID);\n    }\n    tick(ticks) {\n        if (this.requestor.isAlliedWith(this.recipient)) {\n            _Consolex__WEBPACK_IMPORTED_MODULE_0__.consolex.warn("already allied");\n        }\n        else if (!this.requestor.canSendAllianceRequest(this.recipient)) {\n            _Consolex__WEBPACK_IMPORTED_MODULE_0__.consolex.warn("recent or pending alliance request");\n        }\n        else {\n            this.requestor.createAllianceRequest(this.recipient);\n        }\n        this.active = false;\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/alliance/AllianceRequestExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/alliance/AllianceRequestReplyExecution.ts":
      /*!**********************************************************************!*\
  !*** ./src/core/execution/alliance/AllianceRequestReplyExecution.ts ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AllianceRequestReplyExecution: () => (/* binding */ AllianceRequestReplyExecution)\n/* harmony export */ });\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Consolex */ "./src/core/Consolex.ts");\n\nclass AllianceRequestReplyExecution {\n    constructor(requestorID, recipientID, accept) {\n        this.requestorID = requestorID;\n        this.recipientID = recipientID;\n        this.accept = accept;\n        this.active = true;\n        this.mg = null;\n    }\n    init(mg, ticks) {\n        if (!mg.hasPlayer(this.requestorID)) {\n            console.warn(`AllianceRequestReplyExecution requester ${this.requestorID} not found`);\n            this.active = false;\n            return;\n        }\n        if (!mg.hasPlayer(this.recipientID)) {\n            console.warn(`AllianceRequestReplyExecution recipient ${this.recipientID} not found`);\n            this.active = false;\n            return;\n        }\n        this.mg = mg;\n        this.requestor = mg.player(this.requestorID);\n        this.recipient = mg.player(this.recipientID);\n    }\n    tick(ticks) {\n        if (this.requestor.isAlliedWith(this.recipient)) {\n            _Consolex__WEBPACK_IMPORTED_MODULE_0__.consolex.warn("already allied");\n        }\n        else {\n            const request = this.requestor\n                .outgoingAllianceRequests()\n                .find((ar) => ar.recipient() == this.recipient);\n            if (request == null) {\n                _Consolex__WEBPACK_IMPORTED_MODULE_0__.consolex.warn("no alliance request found");\n            }\n            else {\n                if (this.accept) {\n                    request.accept();\n                    this.requestor.updateRelation(this.recipient, 100);\n                    this.recipient.updateRelation(this.requestor, 100);\n                }\n                else {\n                    request.reject();\n                }\n            }\n        }\n        this.active = false;\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/alliance/AllianceRequestReplyExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/alliance/BreakAllianceExecution.ts":
      /*!***************************************************************!*\
  !*** ./src/core/execution/alliance/BreakAllianceExecution.ts ***!
  \***************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BreakAllianceExecution: () => (/* binding */ BreakAllianceExecution)\n/* harmony export */ });\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Consolex */ "./src/core/Consolex.ts");\n\nclass BreakAllianceExecution {\n    constructor(requestorID, recipientID) {\n        this.requestorID = requestorID;\n        this.recipientID = recipientID;\n        this.active = true;\n    }\n    init(mg, ticks) {\n        if (!mg.hasPlayer(this.requestorID)) {\n            console.warn(`BreakAllianceExecution requester ${this.requestorID} not found`);\n            this.active = false;\n            return;\n        }\n        if (!mg.hasPlayer(this.recipientID)) {\n            console.warn(`BreakAllianceExecution: recipient ${this.recipientID} not found`);\n            this.active = false;\n            return;\n        }\n        this.requestor = mg.player(this.requestorID);\n        this.recipient = mg.player(this.recipientID);\n        this.mg = mg;\n    }\n    tick(ticks) {\n        const alliance = this.requestor.allianceWith(this.recipient);\n        if (alliance == null) {\n            _Consolex__WEBPACK_IMPORTED_MODULE_0__.consolex.warn("cant break alliance, not allied");\n        }\n        else {\n            this.requestor.breakAlliance(alliance);\n            this.recipient.updateRelation(this.requestor, -200);\n            for (const player of this.mg.players()) {\n                if (player != this.requestor) {\n                    player.updateRelation(this.requestor, -40);\n                }\n            }\n        }\n        this.active = false;\n    }\n    owner() {\n        return null;\n    }\n    isActive() {\n        return this.active;\n    }\n    activeDuringSpawnPhase() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/alliance/BreakAllianceExecution.ts?',
        );

        /***/
      },

    /***/ "./src/core/execution/utils/BotNames.ts":
      /*!**********************************************!*\
  !*** ./src/core/execution/utils/BotNames.ts ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BOT_NAME_PREFIXES: () => (/* binding */ BOT_NAME_PREFIXES),\n/* harmony export */   BOT_NAME_SUFFIXES: () => (/* binding */ BOT_NAME_SUFFIXES)\n/* harmony export */ });\nconst BOT_NAME_PREFIXES = [\n    "Akkadian",\n    "Babylonian",\n    "Sumerian",\n    "Hittite",\n    "Phoenician",\n    "Canaanite",\n    "Minoan",\n    "Mycenaean",\n    "Etruscan",\n    "Scythian",\n    "Thracian",\n    "Dacian",\n    "Illyrian",\n    "Median",\n    "Chaldean",\n    "Roman",\n    "Greek",\n    "Byzantine",\n    "Persian",\n    "Parthian",\n    "Seleucid",\n    "Ptolemaic",\n    "Palmyrene",\n    "Macedonian",\n    "Carthaginian",\n    "Ming",\n    "Tang",\n    "Song",\n    "Yuan",\n    "Mauryan",\n    "Kushan",\n    "Rajput",\n    "Mughal",\n    "Satavahana",\n    "Vijayanagara",\n    "Egyptian",\n    "Nubian",\n    "Kushite",\n    "Aksumite",\n    "Ethiopian",\n    "Songhai",\n    "Malian",\n    "Ghanaian",\n    "Benin",\n    "Ashanti",\n    "Zulu",\n    "Tuareg",\n    "Berber",\n    "Kanem-Bornu",\n    "Buganda",\n    "Mossi",\n    "Swahili",\n    "Somali",\n    "Wolof",\n    "Umayyad",\n    "Abbasid",\n    "Ayyubid",\n    "Fatimid",\n    "Mamluk",\n    "Seljuk",\n    "Safavid",\n    "Ottoman",\n    "Almoravid",\n    "Almohad",\n    "Rashidun",\n    "Ziyarid",\n    "Frankish",\n    "Visigothic",\n    "Ostrogothic",\n    "Viking",\n    "Norman",\n    "Saxon",\n    "Anglo-Saxon",\n    "Celtic",\n    "Gaulish",\n    "Carolingian",\n    "Merovingian",\n    "Capetian",\n    "Plantagenet",\n    "Tudor",\n    "Stuart",\n    "Habsburg",\n    "Romanov",\n    "Lancaster",\n    "York",\n    "Bourbon",\n    "Napoleonic",\n    "British",\n    "French",\n    "Spanish",\n    "Portuguese",\n    "Dutch",\n    "Russian",\n    "German",\n    "Italian",\n    "Swedish",\n    "Norwegian",\n    "Danish",\n    "Polish",\n    "Hungarian",\n    "Austrian",\n    "Swiss",\n    "Czech",\n    "Slovak",\n    "Serbian",\n    "Croatian",\n    "Bosnian",\n    "Montenegrin",\n    "Bulgarian",\n    "Romanian",\n    "Apache",\n    "Sioux",\n    "Cherokee",\n    "Navajo",\n    "Iroquois",\n    "Inuit",\n    "Arawak",\n    "Carib",\n    "Taino",\n    "Aztec",\n    "Mayan",\n    "Incan",\n    "Mapuche",\n    "Guarani",\n    "Tupi",\n    "Yanomami",\n    "Zuni",\n    "Hopi",\n    "Kiowa",\n    "Comanche",\n    "Shoshone",\n    "Japanese",\n    "Ryukyu",\n    "Ainu",\n    "Cham",\n    "Khmer",\n    "Thai",\n    "Vietnamese",\n    "Burmese",\n    "Balinese",\n    "Malay",\n    "Filipino",\n    "Mongolian",\n    "Korean",\n    "Tibetan",\n    "Manchu",\n    "Uyghur",\n    "Hmong",\n    "Karen",\n    "Pyu",\n    "Hawaiian",\n    "Fijian",\n    "Tongan",\n    "Samoan",\n    "Maori",\n    "Micronesian",\n    "Hebrew",\n    "Armenian",\n    "Georgian",\n    "Phoenician",\n    "Chaldean",\n    "Kurdish",\n    "Turkic",\n    "Kazakh",\n    "Uzbek",\n    "Kyrgyz",\n    "Tajik",\n    "Uighur",\n    "Pashtun",\n    "Baloch",\n    "Afghan",\n    "Persian",\n];\nconst BOT_NAME_SUFFIXES = [\n    "Empire",\n    "Dynasty",\n    "Kingdom",\n    "Queendom",\n    "Sultanate",\n    "Confederation",\n    "Union",\n    "Republic",\n    "Caliphate",\n    "Dominion",\n    "Realm",\n    "State",\n    "Federation",\n    "Territory",\n    "Commonwealth",\n    "League",\n    "Duchy",\n    "Province",\n    "Protectorate",\n    "Colony",\n    "Mandate",\n    "Free State",\n    "Canton",\n    "Region",\n    "Nation",\n    "Assembly",\n    "Hierarchy",\n    "Archduchy",\n    "Grand Duchy",\n    "Metropolis",\n    "Cluster",\n    "Alliance",\n    "Tribunal",\n    "Council",\n    "Confederacy",\n    "Order",\n    "Regime",\n    "Dominion",\n    "Syndicate",\n    "Guild",\n    "Corporation",\n    "Patriarchy",\n    "Matriarchy",\n    "Legion",\n    "Horde",\n    "Clan",\n    "Brotherhood",\n    "Sisterhood",\n    "Ascendancy",\n    "Supremacy",\n    "Province",\n    "Kingdoms",\n    "Tribes",\n    "Dominion",\n    "Assembly",\n    "Republics",\n];\n\n\n//# sourceURL=webpack://openfront-client/./src/core/execution/utils/BotNames.ts?',
        );

        /***/
      },

    /***/ "./src/core/game/AllianceImpl.ts":
      /*!***************************************!*\
  !*** ./src/core/game/AllianceImpl.ts ***!
  \***************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AllianceImpl: () => (/* binding */ AllianceImpl)\n/* harmony export */ });\nclass AllianceImpl {\n    constructor(mg, requestor_, recipient_, createdAtTick_) {\n        this.mg = mg;\n        this.requestor_ = requestor_;\n        this.recipient_ = recipient_;\n        this.createdAtTick_ = createdAtTick_;\n    }\n    other(player) {\n        if (this.requestor_ == player) {\n            return this.recipient_;\n        }\n        return this.requestor_;\n    }\n    requestor() {\n        return this.requestor_;\n    }\n    recipient() {\n        return this.recipient_;\n    }\n    createdAt() {\n        return this.createdAtTick_;\n    }\n    expire() {\n        this.mg.expireAlliance(this);\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/game/AllianceImpl.ts?",
        );

        /***/
      },

    /***/ "./src/core/game/AllianceRequestImpl.ts":
      /*!**********************************************!*\
  !*** ./src/core/game/AllianceRequestImpl.ts ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AllianceRequestImpl: () => (/* binding */ AllianceRequestImpl)\n/* harmony export */ });\n/* harmony import */ var _GameUpdates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameUpdates */ "./src/core/game/GameUpdates.ts");\n\nclass AllianceRequestImpl {\n    constructor(requestor_, recipient_, tickCreated, game) {\n        this.requestor_ = requestor_;\n        this.recipient_ = recipient_;\n        this.tickCreated = tickCreated;\n        this.game = game;\n    }\n    requestor() {\n        return this.requestor_;\n    }\n    recipient() {\n        return this.recipient_;\n    }\n    createdAt() {\n        return this.tickCreated;\n    }\n    accept() {\n        this.game.acceptAllianceRequest(this);\n    }\n    reject() {\n        this.game.rejectAllianceRequest(this);\n    }\n    toUpdate() {\n        return {\n            type: _GameUpdates__WEBPACK_IMPORTED_MODULE_0__.GameUpdateType.AllianceRequest,\n            requestorID: this.requestor_.smallID(),\n            recipientID: this.recipient_.smallID(),\n            createdAt: this.tickCreated,\n        };\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/game/AllianceRequestImpl.ts?',
        );

        /***/
      },

    /***/ "./src/core/game/AttackImpl.ts":
      /*!*************************************!*\
  !*** ./src/core/game/AttackImpl.ts ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AttackImpl: () => (/* binding */ AttackImpl)\n/* harmony export */ });\nclass AttackImpl {\n    constructor(_id, _target, _attacker, _troops, _sourceTile) {\n        this._id = _id;\n        this._target = _target;\n        this._attacker = _attacker;\n        this._troops = _troops;\n        this._sourceTile = _sourceTile;\n        this._isActive = true;\n        this._retreating = false;\n        this._retreated = false;\n    }\n    sourceTile() {\n        return this._sourceTile;\n    }\n    target() {\n        return this._target;\n    }\n    attacker() {\n        return this._attacker;\n    }\n    troops() {\n        return this._troops;\n    }\n    setTroops(troops) {\n        this._troops = troops;\n    }\n    isActive() {\n        return this._isActive;\n    }\n    id() {\n        return this._id;\n    }\n    delete() {\n        if (this._target.isPlayer()) {\n            this._target._incomingAttacks = this._target._incomingAttacks.filter((a) => a != this);\n        }\n        this._attacker._outgoingAttacks = this._attacker._outgoingAttacks.filter((a) => a != this);\n        this._isActive = false;\n    }\n    orderRetreat() {\n        this._retreating = true;\n    }\n    executeRetreat() {\n        this._retreated = true;\n    }\n    retreating() {\n        return this._retreating;\n    }\n    retreated() {\n        return this._retreated;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/game/AttackImpl.ts?",
        );

        /***/
      },

    /***/ "./src/core/game/DefensePostGrid.ts":
      /*!******************************************!*\
  !*** ./src/core/game/DefensePostGrid.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DefenseGrid: () => (/* binding */ DefenseGrid)\n/* harmony export */ });\nclass DefenseGrid {\n    constructor(gm, searchRange) {\n        this.gm = gm;\n        this.searchRange = searchRange;\n        this.cellSize = 100;\n        this.grid = Array(Math.ceil(gm.height() / this.cellSize))\n            .fill(null)\n            .map(() => Array(Math.ceil(gm.width() / this.cellSize))\n            .fill(null)\n            .map(() => new Set()));\n    }\n    // Get grid coordinates from pixel coordinates\n    getGridCoords(x, y) {\n        return [Math.floor(x / this.cellSize), Math.floor(y / this.cellSize)];\n    }\n    // Add a defense unit to the grid\n    addDefense(unit) {\n        const tile = unit.tile();\n        const [gridX, gridY] = this.getGridCoords(this.gm.x(tile), this.gm.y(tile));\n        if (this.isValidCell(gridX, gridY)) {\n            this.grid[gridY][gridX].add(unit);\n        }\n    }\n    // Remove a defense unit from the grid\n    removeDefense(unit) {\n        const tile = unit.tile();\n        const [gridX, gridY] = this.getGridCoords(this.gm.x(tile), this.gm.y(tile));\n        if (this.isValidCell(gridX, gridY)) {\n            this.grid[gridY][gridX].delete(unit);\n        }\n    }\n    isValidCell(gridX, gridY) {\n        return (gridX >= 0 &&\n            gridX < this.grid[0].length &&\n            gridY >= 0 &&\n            gridY < this.grid.length);\n    }\n    // Get all defense units within range of a point\n    // Returns [unit, distanceSquared] pairs for efficient filtering\n    nearbyDefenses(tile) {\n        const x = this.gm.x(tile);\n        const y = this.gm.y(tile);\n        const [gridX, gridY] = this.getGridCoords(x, y);\n        const cellsToCheck = Math.ceil(this.searchRange / this.cellSize);\n        const nearby = [];\n        // Pre-calculate range bounds for efficiency\n        const startGridX = Math.max(0, gridX - cellsToCheck);\n        const endGridX = Math.min(this.grid[0].length - 1, gridX + cellsToCheck);\n        const startGridY = Math.max(0, gridY - cellsToCheck);\n        const endGridY = Math.min(this.grid.length - 1, gridY + cellsToCheck);\n        // Squared range for faster comparison (avoid sqrt)\n        const rangeSquared = this.searchRange * this.searchRange;\n        for (let cy = startGridY; cy <= endGridY; cy++) {\n            for (let cx = startGridX; cx <= endGridX; cx++) {\n                for (const unit of this.grid[cy][cx]) {\n                    const tileX = this.gm.x(unit.tile());\n                    const tileY = this.gm.y(unit.tile());\n                    const dx = tileX - x;\n                    const dy = tileY - y;\n                    const distSquared = dx * dx + dy * dy;\n                    if (distSquared <= rangeSquared) {\n                        nearby.push(unit);\n                    }\n                }\n            }\n        }\n        return nearby;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/game/DefensePostGrid.ts?",
        );

        /***/
      },

    /***/ "./src/core/game/Game.ts":
      /*!*******************************!*\
  !*** ./src/core/game/Game.ts ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AllPlayers: () => (/* binding */ AllPlayers),\n/* harmony export */   Cell: () => (/* binding */ Cell),\n/* harmony export */   Difficulty: () => (/* binding */ Difficulty),\n/* harmony export */   GameMapType: () => (/* binding */ GameMapType),\n/* harmony export */   GameType: () => (/* binding */ GameType),\n/* harmony export */   MessageType: () => (/* binding */ MessageType),\n/* harmony export */   Nation: () => (/* binding */ Nation),\n/* harmony export */   PlayerInfo: () => (/* binding */ PlayerInfo),\n/* harmony export */   PlayerType: () => (/* binding */ PlayerType),\n/* harmony export */   Relation: () => (/* binding */ Relation),\n/* harmony export */   TerrainType: () => (/* binding */ TerrainType),\n/* harmony export */   UnitType: () => (/* binding */ UnitType)\n/* harmony export */ });\nconst AllPlayers = "AllPlayers";\nvar Difficulty;\n(function (Difficulty) {\n    Difficulty["Easy"] = "Easy";\n    Difficulty["Medium"] = "Medium";\n    Difficulty["Hard"] = "Hard";\n    Difficulty["Impossible"] = "Impossible";\n})(Difficulty || (Difficulty = {}));\nvar GameMapType;\n(function (GameMapType) {\n    GameMapType["World"] = "World";\n    GameMapType["Europe"] = "Europe";\n    GameMapType["Mena"] = "Mena";\n    GameMapType["NorthAmerica"] = "North America";\n    GameMapType["Oceania"] = "Oceania";\n    GameMapType["BlackSea"] = "Black Sea";\n    GameMapType["Africa"] = "Africa";\n    GameMapType["Asia"] = "Asia";\n    GameMapType["Mars"] = "Mars";\n})(GameMapType || (GameMapType = {}));\nvar GameType;\n(function (GameType) {\n    GameType["Singleplayer"] = "Singleplayer";\n    GameType["Public"] = "Public";\n    GameType["Private"] = "Private";\n})(GameType || (GameType = {}));\nvar UnitType;\n(function (UnitType) {\n    UnitType["TransportShip"] = "Transport";\n    UnitType["Warship"] = "Warship";\n    UnitType["Shell"] = "Shell";\n    UnitType["SAMMissile"] = "SAMMissile";\n    UnitType["Port"] = "Port";\n    UnitType["AtomBomb"] = "Atom Bomb";\n    UnitType["HydrogenBomb"] = "Hydrogen Bomb";\n    UnitType["TradeShip"] = "Trade Ship";\n    UnitType["MissileSilo"] = "Missile Silo";\n    UnitType["DefensePost"] = "Defense Post";\n    UnitType["SAMLauncher"] = "SAM Launcher";\n    UnitType["City"] = "City";\n    UnitType["MIRV"] = "MIRV";\n    UnitType["MIRVWarhead"] = "MIRV Warhead";\n    UnitType["Construction"] = "Construction";\n})(UnitType || (UnitType = {}));\nvar Relation;\n(function (Relation) {\n    Relation[Relation["Hostile"] = 0] = "Hostile";\n    Relation[Relation["Distrustful"] = 1] = "Distrustful";\n    Relation[Relation["Neutral"] = 2] = "Neutral";\n    Relation[Relation["Friendly"] = 3] = "Friendly";\n})(Relation || (Relation = {}));\nclass Nation {\n    constructor(flag, name, cell, strength) {\n        this.flag = flag;\n        this.name = name;\n        this.cell = cell;\n        this.strength = strength;\n    }\n}\nclass Cell {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n        this.strRepr = `Cell[${this.x},${this.y}]`;\n    }\n    pos() {\n        return {\n            x: this.x,\n            y: this.y,\n        };\n    }\n    toString() {\n        return this.strRepr;\n    }\n}\nvar TerrainType;\n(function (TerrainType) {\n    TerrainType[TerrainType["Plains"] = 0] = "Plains";\n    TerrainType[TerrainType["Highland"] = 1] = "Highland";\n    TerrainType[TerrainType["Mountain"] = 2] = "Mountain";\n    TerrainType[TerrainType["Lake"] = 3] = "Lake";\n    TerrainType[TerrainType["Ocean"] = 4] = "Ocean";\n})(TerrainType || (TerrainType = {}));\nvar PlayerType;\n(function (PlayerType) {\n    PlayerType["Bot"] = "BOT";\n    PlayerType["Human"] = "HUMAN";\n    PlayerType["FakeHuman"] = "FAKEHUMAN";\n})(PlayerType || (PlayerType = {}));\nclass PlayerInfo {\n    constructor(flag, name, playerType, \n    // null if bot.\n    clientID, \n    // TODO: make player id the small id\n    id, nation) {\n        this.flag = flag;\n        this.name = name;\n        this.playerType = playerType;\n        this.clientID = clientID;\n        this.id = id;\n        this.nation = nation;\n    }\n}\nvar MessageType;\n(function (MessageType) {\n    MessageType[MessageType["SUCCESS"] = 0] = "SUCCESS";\n    MessageType[MessageType["INFO"] = 1] = "INFO";\n    MessageType[MessageType["WARN"] = 2] = "WARN";\n    MessageType[MessageType["ERROR"] = 3] = "ERROR";\n})(MessageType || (MessageType = {}));\n\n\n//# sourceURL=webpack://openfront-client/./src/core/game/Game.ts?',
        );

        /***/
      },

    /***/ "./src/core/game/GameImpl.ts":
      /*!***********************************!*\
  !*** ./src/core/game/GameImpl.ts ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameImpl: () => (/* binding */ GameImpl),\n/* harmony export */   createGame: () => (/* binding */ createGame)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _GameUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameUpdates */ "./src/core/game/GameUpdates.ts");\n/* harmony import */ var _PlayerImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerImpl */ "./src/core/game/PlayerImpl.ts");\n/* harmony import */ var _TerraNulliusImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TerraNulliusImpl */ "./src/core/game/TerraNulliusImpl.ts");\n/* harmony import */ var _AllianceRequestImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AllianceRequestImpl */ "./src/core/game/AllianceRequestImpl.ts");\n/* harmony import */ var _AllianceImpl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AllianceImpl */ "./src/core/game/AllianceImpl.ts");\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n/* harmony import */ var _DefensePostGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DefensePostGrid */ "./src/core/game/DefensePostGrid.ts");\n/* harmony import */ var _StatsImpl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StatsImpl */ "./src/core/game/StatsImpl.ts");\n\n\n\n\n\n\n\n\n\nfunction createGame(gameMap, miniGameMap, nationMap, config) {\n    return new GameImpl(gameMap, miniGameMap, nationMap, config);\n}\nclass GameImpl {\n    constructor(_map, miniGameMap, nationMap, _config) {\n        this._map = _map;\n        this.miniGameMap = miniGameMap;\n        this._config = _config;\n        this._ticks = 0;\n        this.unInitExecs = [];\n        this.nations_ = [];\n        this._players = new Map();\n        this._playersBySmallID = [];\n        this.execs = [];\n        this.allianceRequests = [];\n        this.alliances_ = [];\n        this.nextPlayerID = 1;\n        this._nextUnitID = 1;\n        this.updates = createGameUpdatesMap();\n        this._stats = new _StatsImpl__WEBPACK_IMPORTED_MODULE_8__.StatsImpl();\n        this._terraNullius = new _TerraNulliusImpl__WEBPACK_IMPORTED_MODULE_3__.TerraNulliusImpl();\n        this._width = _map.width();\n        this._height = _map.height();\n        this.nations_ = nationMap.nations.map((n) => new _Game__WEBPACK_IMPORTED_MODULE_0__.Nation(n.flag || "", n.name, new _Game__WEBPACK_IMPORTED_MODULE_0__.Cell(n.coordinates[0], n.coordinates[1]), n.strength));\n        this.defenseGrid = new _DefensePostGrid__WEBPACK_IMPORTED_MODULE_7__.DefenseGrid(this._map, this._config.defensePostRange());\n    }\n    isOnEdgeOfMap(ref) {\n        return this._map.isOnEdgeOfMap(ref);\n    }\n    owner(ref) {\n        return this.playerBySmallID(this.ownerID(ref));\n    }\n    playerBySmallID(id) {\n        if (id == 0) {\n            return this.terraNullius();\n        }\n        return this._playersBySmallID[id - 1];\n    }\n    map() {\n        return this._map;\n    }\n    miniMap() {\n        return this.miniGameMap;\n    }\n    addUpdate(update) {\n        this.updates[update.type].push(update);\n    }\n    nextUnitID() {\n        const old = this._nextUnitID;\n        this._nextUnitID++;\n        return old;\n    }\n    setFallout(tile, value) {\n        if (value && this.hasOwner(tile)) {\n            throw Error(`cannot set fallout, tile ${tile} has owner`);\n        }\n        if (this._map.hasFallout(tile)) {\n            return;\n        }\n        this._map.setFallout(tile, value);\n        this.addUpdate({\n            type: _GameUpdates__WEBPACK_IMPORTED_MODULE_1__.GameUpdateType.Tile,\n            update: this.toTileUpdate(tile),\n        });\n    }\n    units(...types) {\n        return Array.from(this._players.values()).flatMap((p) => p.units(...types));\n    }\n    unitInfo(type) {\n        return this.config().unitInfo(type);\n    }\n    nations() {\n        return this.nations_;\n    }\n    createAllianceRequest(requestor, recipient) {\n        if (requestor.isAlliedWith(recipient)) {\n            _Consolex__WEBPACK_IMPORTED_MODULE_6__.consolex.log("cannot request alliance, already allied");\n            return;\n        }\n        if (recipient\n            .incomingAllianceRequests()\n            .find((ar) => ar.requestor() == requestor) != null) {\n            _Consolex__WEBPACK_IMPORTED_MODULE_6__.consolex.log(`duplicate alliance request from ${requestor.name()}`);\n            return;\n        }\n        const correspondingReq = requestor\n            .incomingAllianceRequests()\n            .find((ar) => ar.requestor() == recipient);\n        if (correspondingReq != null) {\n            _Consolex__WEBPACK_IMPORTED_MODULE_6__.consolex.log(`got corresponding alliance requests, accepting`);\n            correspondingReq.accept();\n            return;\n        }\n        const ar = new _AllianceRequestImpl__WEBPACK_IMPORTED_MODULE_4__.AllianceRequestImpl(requestor, recipient, this._ticks, this);\n        this.allianceRequests.push(ar);\n        this.addUpdate(ar.toUpdate());\n        return ar;\n    }\n    acceptAllianceRequest(request) {\n        this.allianceRequests = this.allianceRequests.filter((ar) => ar != request);\n        const alliance = new _AllianceImpl__WEBPACK_IMPORTED_MODULE_5__.AllianceImpl(this, request.requestor(), request.recipient(), this._ticks);\n        this.alliances_.push(alliance);\n        request.requestor().pastOutgoingAllianceRequests.push(request);\n        this.addUpdate({\n            type: _GameUpdates__WEBPACK_IMPORTED_MODULE_1__.GameUpdateType.AllianceRequestReply,\n            request: request.toUpdate(),\n            accepted: true,\n        });\n    }\n    rejectAllianceRequest(request) {\n        this.allianceRequests = this.allianceRequests.filter((ar) => ar != request);\n        request.requestor().pastOutgoingAllianceRequests.push(request);\n        this.addUpdate({\n            type: _GameUpdates__WEBPACK_IMPORTED_MODULE_1__.GameUpdateType.AllianceRequestReply,\n            request: request.toUpdate(),\n            accepted: false,\n        });\n    }\n    hasPlayer(id) {\n        return this._players.has(id);\n    }\n    config() {\n        return this._config;\n    }\n    inSpawnPhase() {\n        return this._ticks <= this.config().numSpawnPhaseTurns();\n    }\n    ticks() {\n        return this._ticks;\n    }\n    executeNextTick() {\n        this.updates = createGameUpdatesMap();\n        this.execs.forEach((e) => {\n            if (e.isActive() &&\n                (!this.inSpawnPhase() || e.activeDuringSpawnPhase())) {\n                e.tick(this._ticks);\n            }\n        });\n        const inited = [];\n        const unInited = [];\n        this.unInitExecs.forEach((e) => {\n            if (!this.inSpawnPhase() || e.activeDuringSpawnPhase()) {\n                e.init(this, this._ticks);\n                inited.push(e);\n            }\n            else {\n                unInited.push(e);\n            }\n        });\n        this.removeInactiveExecutions();\n        this.execs.push(...inited);\n        this.unInitExecs = unInited;\n        for (const player of this._players.values()) {\n            // Players change each to so always add them\n            this.addUpdate(player.toUpdate());\n        }\n        if (this.ticks() % 10 == 0) {\n            this.addUpdate({\n                type: _GameUpdates__WEBPACK_IMPORTED_MODULE_1__.GameUpdateType.Hash,\n                tick: this.ticks(),\n                hash: this.hash(),\n            });\n        }\n        this._ticks++;\n        return this.updates;\n    }\n    hash() {\n        let hash = 1;\n        this._players.forEach((p) => {\n            hash += p.hash();\n        });\n        return hash;\n    }\n    terraNullius() {\n        return this._terraNullius;\n    }\n    removeInactiveExecutions() {\n        const activeExecs = [];\n        for (const exec of this.execs) {\n            if (this.inSpawnPhase()) {\n                if (exec.activeDuringSpawnPhase()) {\n                    if (exec.isActive()) {\n                        activeExecs.push(exec);\n                    }\n                }\n                else {\n                    activeExecs.push(exec);\n                }\n            }\n            else {\n                if (exec.isActive()) {\n                    activeExecs.push(exec);\n                }\n            }\n        }\n        this.execs = activeExecs;\n    }\n    players() {\n        return Array.from(this._players.values()).filter((p) => p.isAlive());\n    }\n    allPlayers() {\n        return Array.from(this._players.values());\n    }\n    executions() {\n        return [...this.execs, ...this.unInitExecs];\n    }\n    addExecution(...exec) {\n        this.unInitExecs.push(...exec);\n    }\n    removeExecution(exec) {\n        this.execs = this.execs.filter((execution) => execution !== exec);\n        this.unInitExecs = this.unInitExecs.filter((execution) => execution !== exec);\n    }\n    playerView(id) {\n        return this.player(id);\n    }\n    addPlayer(playerInfo, manpower) {\n        const player = new _PlayerImpl__WEBPACK_IMPORTED_MODULE_2__.PlayerImpl(this, this.nextPlayerID, playerInfo, manpower);\n        this._playersBySmallID.push(player);\n        this.nextPlayerID++;\n        this._players.set(playerInfo.id, player);\n        return player;\n    }\n    player(id) {\n        if (!this._players.has(id)) {\n            throw new Error(`Player with id ${id} not found`);\n        }\n        return this._players.get(id);\n    }\n    playerByClientID(id) {\n        for (const [pID, player] of this._players) {\n            if (player.clientID() == id) {\n                return player;\n            }\n        }\n        return null;\n    }\n    isOnMap(cell) {\n        return (cell.x >= 0 &&\n            cell.x < this._width &&\n            cell.y >= 0 &&\n            cell.y < this._height);\n    }\n    neighborsWithDiag(tile) {\n        const x = this.x(tile);\n        const y = this.y(tile);\n        const ns = [];\n        for (let dx = -1; dx <= 1; dx++) {\n            for (let dy = -1; dy <= 1; dy++) {\n                if (dx === 0 && dy === 0)\n                    continue; // Skip the center tile\n                const newX = x + dx;\n                const newY = y + dy;\n                if (newX >= 0 &&\n                    newX < this._width &&\n                    newY >= 0 &&\n                    newY < this._height) {\n                    ns.push(this._map.ref(newX, newY));\n                }\n            }\n        }\n        return ns;\n    }\n    conquer(owner, tile) {\n        if (!this.isLand(tile)) {\n            throw Error(`cannot conquer water`);\n        }\n        const previousOwner = this.owner(tile);\n        if (previousOwner.isPlayer()) {\n            previousOwner._lastTileChange = this._ticks;\n            previousOwner._tiles.delete(tile);\n            previousOwner._borderTiles.delete(tile);\n        }\n        this._map.setOwnerID(tile, owner.smallID());\n        owner._tiles.add(tile);\n        owner._lastTileChange = this._ticks;\n        this.updateBorders(tile);\n        this._map.setFallout(tile, false);\n        this.addUpdate({\n            type: _GameUpdates__WEBPACK_IMPORTED_MODULE_1__.GameUpdateType.Tile,\n            update: this.toTileUpdate(tile),\n        });\n    }\n    relinquish(tile) {\n        if (!this.hasOwner(tile)) {\n            throw new Error(`Cannot relinquish tile because it is unowned`);\n        }\n        if (this.isWater(tile)) {\n            throw new Error("Cannot relinquish water");\n        }\n        const previousOwner = this.owner(tile);\n        previousOwner._lastTileChange = this._ticks;\n        previousOwner._tiles.delete(tile);\n        previousOwner._borderTiles.delete(tile);\n        this._map.setOwnerID(tile, 0);\n        this.updateBorders(tile);\n        this.addUpdate({\n            type: _GameUpdates__WEBPACK_IMPORTED_MODULE_1__.GameUpdateType.Tile,\n            update: this.toTileUpdate(tile),\n        });\n    }\n    updateBorders(tile) {\n        const tiles = [];\n        tiles.push(tile);\n        this.neighbors(tile).forEach((t) => tiles.push(t));\n        for (const t of tiles) {\n            if (!this.hasOwner(t)) {\n                continue;\n            }\n            if (this.calcIsBorder(t)) {\n                this.owner(t)._borderTiles.add(t);\n            }\n            else {\n                this.owner(t)._borderTiles.delete(t);\n            }\n        }\n    }\n    calcIsBorder(tile) {\n        if (!this.hasOwner(tile)) {\n            return false;\n        }\n        for (const neighbor of this.neighbors(tile)) {\n            const bordersEnemy = this.owner(tile) != this.owner(neighbor);\n            if (bordersEnemy) {\n                return true;\n            }\n        }\n        return false;\n    }\n    target(targeter, target) {\n        this.addUpdate({\n            type: _GameUpdates__WEBPACK_IMPORTED_MODULE_1__.GameUpdateType.TargetPlayer,\n            playerID: targeter.smallID(),\n            targetID: target.smallID(),\n        });\n    }\n    breakAlliance(breaker, alliance) {\n        let other = null;\n        if (alliance.requestor() == breaker) {\n            other = alliance.recipient();\n        }\n        else {\n            other = alliance.requestor();\n        }\n        if (!breaker.isAlliedWith(other)) {\n            throw new Error(`${breaker} not allied with ${other}, cannot break alliance`);\n        }\n        if (!other.isTraitor()) {\n            breaker.isTraitor_ = true;\n        }\n        const breakerSet = new Set(breaker.alliances());\n        const alliances = other.alliances().filter((a) => breakerSet.has(a));\n        if (alliances.length != 1) {\n            throw new Error(`must have exactly one alliance, have ${alliances.length}`);\n        }\n        this.alliances_ = this.alliances_.filter((a) => a != alliances[0]);\n        this.addUpdate({\n            type: _GameUpdates__WEBPACK_IMPORTED_MODULE_1__.GameUpdateType.BrokeAlliance,\n            traitorID: breaker.smallID(),\n            betrayedID: other.smallID(),\n        });\n    }\n    expireAlliance(alliance) {\n        const p1Set = new Set(alliance.recipient().alliances());\n        const alliances = alliance\n            .requestor()\n            .alliances()\n            .filter((a) => p1Set.has(a));\n        if (alliances.length != 1) {\n            throw new Error(`cannot expire alliance: must have exactly one alliance, have ${alliances.length}`);\n        }\n        this.alliances_ = this.alliances_.filter((a) => a != alliances[0]);\n        this.addUpdate({\n            type: _GameUpdates__WEBPACK_IMPORTED_MODULE_1__.GameUpdateType.AllianceExpired,\n            player1ID: alliance.requestor().smallID(),\n            player2ID: alliance.recipient().smallID(),\n        });\n    }\n    sendEmojiUpdate(msg) {\n        this.addUpdate({\n            type: _GameUpdates__WEBPACK_IMPORTED_MODULE_1__.GameUpdateType.Emoji,\n            emoji: msg,\n        });\n    }\n    setWinner(winner) {\n        this.addUpdate({\n            type: _GameUpdates__WEBPACK_IMPORTED_MODULE_1__.GameUpdateType.Win,\n            winnerID: winner.smallID(),\n        });\n    }\n    displayMessage(message, type, playerID) {\n        let id = null;\n        if (playerID != null) {\n            id = this.player(playerID).smallID();\n        }\n        this.addUpdate({\n            type: _GameUpdates__WEBPACK_IMPORTED_MODULE_1__.GameUpdateType.DisplayEvent,\n            messageType: type,\n            message: message,\n            playerID: id,\n        });\n    }\n    addDefensePost(dp) {\n        this.defenseGrid.addDefense(dp);\n    }\n    removeDefensePost(dp) {\n        this.defenseGrid.removeDefense(dp);\n    }\n    nearbyDefensePosts(tile) {\n        return this.defenseGrid.nearbyDefenses(tile);\n    }\n    ref(x, y) {\n        return this._map.ref(x, y);\n    }\n    x(ref) {\n        return this._map.x(ref);\n    }\n    y(ref) {\n        return this._map.y(ref);\n    }\n    cell(ref) {\n        return this._map.cell(ref);\n    }\n    width() {\n        return this._map.width();\n    }\n    height() {\n        return this._map.height();\n    }\n    numLandTiles() {\n        return this._map.numLandTiles();\n    }\n    isValidCoord(x, y) {\n        return this._map.isValidCoord(x, y);\n    }\n    isLand(ref) {\n        return this._map.isLand(ref);\n    }\n    isOceanShore(ref) {\n        return this._map.isOceanShore(ref);\n    }\n    isOcean(ref) {\n        return this._map.isOcean(ref);\n    }\n    isShoreline(ref) {\n        return this._map.isShoreline(ref);\n    }\n    magnitude(ref) {\n        return this._map.magnitude(ref);\n    }\n    ownerID(ref) {\n        return this._map.ownerID(ref);\n    }\n    hasOwner(ref) {\n        return this._map.hasOwner(ref);\n    }\n    setOwnerID(ref, playerId) {\n        return this._map.setOwnerID(ref, playerId);\n    }\n    hasFallout(ref) {\n        return this._map.hasFallout(ref);\n    }\n    isBorder(ref) {\n        return this._map.isBorder(ref);\n    }\n    neighbors(ref) {\n        return this._map.neighbors(ref);\n    }\n    isWater(ref) {\n        return this._map.isWater(ref);\n    }\n    isLake(ref) {\n        return this._map.isLake(ref);\n    }\n    isShore(ref) {\n        return this._map.isShore(ref);\n    }\n    cost(ref) {\n        return this._map.cost(ref);\n    }\n    terrainType(ref) {\n        return this._map.terrainType(ref);\n    }\n    forEachTile(fn) {\n        return this._map.forEachTile(fn);\n    }\n    manhattanDist(c1, c2) {\n        return this._map.manhattanDist(c1, c2);\n    }\n    euclideanDist(c1, c2) {\n        return this._map.euclideanDist(c1, c2);\n    }\n    bfs(tile, filter) {\n        return this._map.bfs(tile, filter);\n    }\n    toTileUpdate(tile) {\n        return this._map.toTileUpdate(tile);\n    }\n    updateTile(tu) {\n        return this._map.updateTile(tu);\n    }\n    numTilesWithFallout() {\n        return this._map.numTilesWithFallout();\n    }\n    stats() {\n        return this._stats;\n    }\n}\n// Or a more dynamic approach that will catch new enum values:\nconst createGameUpdatesMap = () => {\n    const map = {};\n    Object.values(_GameUpdates__WEBPACK_IMPORTED_MODULE_1__.GameUpdateType)\n        .filter((key) => !isNaN(Number(key))) // Filter out reverse mappings\n        .forEach((key) => {\n        map[key] = [];\n    });\n    return map;\n};\n\n\n//# sourceURL=webpack://openfront-client/./src/core/game/GameImpl.ts?',
        );

        /***/
      },

    /***/ "./src/core/game/GameMap.ts":
      /*!**********************************!*\
  !*** ./src/core/game/GameMap.ts ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameMapImpl: () => (/* binding */ GameMapImpl),\n/* harmony export */   andFN: () => (/* binding */ andFN),\n/* harmony export */   euclDistFN: () => (/* binding */ euclDistFN),\n/* harmony export */   manhattanDistFN: () => (/* binding */ manhattanDistFN)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/core/game/Game.ts");\n\nclass GameMapImpl {\n    // Bit 15 still reserved\n    constructor(width, height, terrainData, numLandTiles_) {\n        this.numLandTiles_ = numLandTiles_;\n        this._numTilesWithFallout = 0;\n        if (terrainData.length !== width * height) {\n            throw new Error(`Terrain data length ${terrainData.length} doesn\'t match dimensions ${width}x${height}`);\n        }\n        this.width_ = width;\n        this.height_ = height;\n        this.terrain = terrainData;\n        this.state = new Uint16Array(width * height);\n    }\n    numTilesWithFallout() {\n        return this._numTilesWithFallout;\n    }\n    ref(x, y) {\n        if (!this.isValidCoord(x, y)) {\n            throw new Error(`Invalid coordinates: ${x},${y}`);\n        }\n        return y * this.width_ + x;\n    }\n    x(ref) {\n        return ref % this.width_;\n    }\n    y(ref) {\n        return Math.floor(ref / this.width_);\n    }\n    cell(ref) {\n        return new _Game__WEBPACK_IMPORTED_MODULE_0__.Cell(this.x(ref), this.y(ref));\n    }\n    width() {\n        return this.width_;\n    }\n    height() {\n        return this.height_;\n    }\n    numLandTiles() {\n        return this.numLandTiles_;\n    }\n    isValidCoord(x, y) {\n        return x >= 0 && x < this.width_ && y >= 0 && y < this.height_;\n    }\n    // Terrain getters (immutable)\n    isLand(ref) {\n        return Boolean(this.terrain[ref] & (1 << GameMapImpl.IS_LAND_BIT));\n    }\n    isOceanShore(ref) {\n        return (this.isLand(ref) && this.neighbors(ref).some((tr) => this.isOcean(tr)));\n    }\n    isOcean(ref) {\n        return Boolean(this.terrain[ref] & (1 << GameMapImpl.OCEAN_BIT));\n    }\n    isShoreline(ref) {\n        return Boolean(this.terrain[ref] & (1 << GameMapImpl.SHORELINE_BIT));\n    }\n    magnitude(ref) {\n        return this.terrain[ref] & GameMapImpl.MAGNITUDE_MASK;\n    }\n    // State getters and setters (mutable)\n    ownerID(ref) {\n        return this.state[ref] & GameMapImpl.PLAYER_ID_MASK;\n    }\n    hasOwner(ref) {\n        return this.ownerID(ref) != 0;\n    }\n    setOwnerID(ref, playerId) {\n        if (playerId > GameMapImpl.PLAYER_ID_MASK) {\n            throw new Error(`Player ID ${playerId} exceeds maximum value ${GameMapImpl.PLAYER_ID_MASK}`);\n        }\n        this.state[ref] =\n            (this.state[ref] & ~GameMapImpl.PLAYER_ID_MASK) | playerId;\n    }\n    hasFallout(ref) {\n        return Boolean(this.state[ref] & (1 << GameMapImpl.FALLOUT_BIT));\n    }\n    setFallout(ref, value) {\n        const existingFallout = this.hasFallout(ref);\n        if (value) {\n            if (!existingFallout) {\n                this._numTilesWithFallout++;\n                this.state[ref] |= 1 << GameMapImpl.FALLOUT_BIT;\n            }\n        }\n        else {\n            if (existingFallout) {\n                this._numTilesWithFallout--;\n                this.state[ref] &= ~(1 << GameMapImpl.FALLOUT_BIT);\n            }\n        }\n    }\n    isOnEdgeOfMap(ref) {\n        const x = this.x(ref);\n        const y = this.y(ref);\n        return x == 0 || x == this.width() - 1 || y == 0 || y == this.height() - 1;\n    }\n    isBorder(ref) {\n        return this.neighbors(ref).some((tr) => this.ownerID(tr) != this.ownerID(ref));\n    }\n    hasDefenseBonus(ref) {\n        return Boolean(this.state[ref] & (1 << GameMapImpl.DEFENSE_BONUS_BIT));\n    }\n    setDefenseBonus(ref, value) {\n        if (value) {\n            this.state[ref] |= 1 << GameMapImpl.DEFENSE_BONUS_BIT;\n        }\n        else {\n            this.state[ref] &= ~(1 << GameMapImpl.DEFENSE_BONUS_BIT);\n        }\n    }\n    // Helper methods\n    isWater(ref) {\n        return !this.isLand(ref);\n    }\n    isLake(ref) {\n        return !this.isLand(ref) && !this.isOcean(ref);\n    }\n    isShore(ref) {\n        return this.isLand(ref) && this.isShoreline(ref);\n    }\n    cost(ref) {\n        return this.magnitude(ref) < 10 ? 2 : 1;\n    }\n    terrainType(ref) {\n        if (this.isLand(ref)) {\n            const magnitude = this.magnitude(ref);\n            if (magnitude < 10)\n                return _Game__WEBPACK_IMPORTED_MODULE_0__.TerrainType.Plains;\n            if (magnitude < 20)\n                return _Game__WEBPACK_IMPORTED_MODULE_0__.TerrainType.Highland;\n            return _Game__WEBPACK_IMPORTED_MODULE_0__.TerrainType.Mountain;\n        }\n        return this.isOcean(ref) ? _Game__WEBPACK_IMPORTED_MODULE_0__.TerrainType.Ocean : _Game__WEBPACK_IMPORTED_MODULE_0__.TerrainType.Lake;\n    }\n    neighbors(ref) {\n        const neighbors = [];\n        const w = this.width_;\n        if (ref >= w)\n            neighbors.push(ref - w);\n        if (ref < (this.height_ - 1) * w)\n            neighbors.push(ref + w);\n        if (ref % w !== 0)\n            neighbors.push(ref - 1);\n        if (ref % w !== w - 1)\n            neighbors.push(ref + 1);\n        for (const n of neighbors) {\n            this.ref(this.x(n), this.y(n));\n        }\n        return neighbors;\n    }\n    forEachTile(fn) {\n        for (let x = 0; x < this.width_; x++) {\n            for (let y = 0; y < this.height_; y++) {\n                fn(this.ref(x, y));\n            }\n        }\n    }\n    manhattanDist(c1, c2) {\n        return (Math.abs(this.x(c1) - this.x(c2)) + Math.abs(this.y(c1) - this.y(c2)));\n    }\n    euclideanDist(c1, c2) {\n        return Math.sqrt(Math.pow(this.x(c1) - this.x(c2), 2) +\n            Math.pow(this.y(c1) - this.y(c2), 2));\n    }\n    bfs(tile, filter) {\n        const seen = new Set();\n        const q = [];\n        q.push(tile);\n        while (q.length > 0) {\n            const curr = q.pop();\n            for (const n of this.neighbors(curr)) {\n                if (!seen.has(n) && filter(this, n)) {\n                    seen.add(n);\n                    q.push(n);\n                }\n            }\n        }\n        return seen;\n    }\n    toTileUpdate(tile) {\n        // Pack the tile reference and state into a bigint\n        // Format: [32 bits for tile reference][16 bits for state]\n        return (BigInt(tile) << 16n) | BigInt(this.state[tile]);\n    }\n    updateTile(tu) {\n        // Extract tile reference and state from the TileUpdate\n        // Last 16 bits are state, rest is tile reference\n        const tileRef = Number(tu >> 16n);\n        const state = Number(tu & 0xffffn);\n        const existingFallout = this.hasFallout(tileRef);\n        this.state[tileRef] = state;\n        const newFallout = this.hasFallout(tileRef);\n        if (existingFallout && !newFallout) {\n            this._numTilesWithFallout--;\n        }\n        if (!existingFallout && newFallout) {\n            this._numTilesWithFallout++;\n        }\n        return tileRef;\n    }\n}\n// Terrain bits (Uint8Array)\nGameMapImpl.IS_LAND_BIT = 7;\nGameMapImpl.SHORELINE_BIT = 6;\nGameMapImpl.OCEAN_BIT = 5;\nGameMapImpl.MAGNITUDE_OFFSET = 4; // Uses bits 3-7 (5 bits)\nGameMapImpl.MAGNITUDE_MASK = 0x1f; // 11111 in binary\n// State bits (Uint16Array)\nGameMapImpl.PLAYER_ID_OFFSET = 0; // Uses bits 0-11 (12 bits)\nGameMapImpl.PLAYER_ID_MASK = 0xfff;\nGameMapImpl.FALLOUT_BIT = 13;\nGameMapImpl.DEFENSE_BONUS_BIT = 14;\nfunction euclDistFN(root, dist) {\n    return (gm, n) => {\n        // shifts the root tile’s coordinates by -0.5 so that its “center”\n        // center becomes the corner of four pixels rather than the middle of one pixel.\n        // just makes things based off even pixels instead of odd. Used to use 9x9 icons now 10x10 icons etc...\n        const rootX = gm.x(root) - 0.5;\n        const rootY = gm.y(root) - 0.5;\n        const dx = gm.x(n) - rootX;\n        const dy = gm.y(n) - rootY;\n        return Math.sqrt(dx * dx + dy * dy) <= dist;\n    };\n}\nfunction manhattanDistFN(root, dist) {\n    return (gm, n) => gm.manhattanDist(root, n) <= dist;\n}\nfunction andFN(x, y) {\n    return (gm, tile) => x(gm, tile) && y(gm, tile);\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/game/GameMap.ts?',
        );

        /***/
      },

    /***/ "./src/core/game/GameUpdates.ts":
      /*!**************************************!*\
  !*** ./src/core/game/GameUpdates.ts ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameUpdateType: () => (/* binding */ GameUpdateType)\n/* harmony export */ });\nvar GameUpdateType;\n(function (GameUpdateType) {\n    GameUpdateType[GameUpdateType["Tile"] = 0] = "Tile";\n    GameUpdateType[GameUpdateType["Unit"] = 1] = "Unit";\n    GameUpdateType[GameUpdateType["Player"] = 2] = "Player";\n    GameUpdateType[GameUpdateType["DisplayEvent"] = 3] = "DisplayEvent";\n    GameUpdateType[GameUpdateType["AllianceRequest"] = 4] = "AllianceRequest";\n    GameUpdateType[GameUpdateType["AllianceRequestReply"] = 5] = "AllianceRequestReply";\n    GameUpdateType[GameUpdateType["BrokeAlliance"] = 6] = "BrokeAlliance";\n    GameUpdateType[GameUpdateType["AllianceExpired"] = 7] = "AllianceExpired";\n    GameUpdateType[GameUpdateType["TargetPlayer"] = 8] = "TargetPlayer";\n    GameUpdateType[GameUpdateType["Emoji"] = 9] = "Emoji";\n    GameUpdateType[GameUpdateType["Win"] = 10] = "Win";\n    GameUpdateType[GameUpdateType["Hash"] = 11] = "Hash";\n})(GameUpdateType || (GameUpdateType = {}));\n\n\n//# sourceURL=webpack://openfront-client/./src/core/game/GameUpdates.ts?',
        );

        /***/
      },

    /***/ "./src/core/game/PlayerImpl.ts":
      /*!*************************************!*\
  !*** ./src/core/game/PlayerImpl.ts ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerImpl: () => (/* binding */ PlayerImpl)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _GameUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameUpdates */ "./src/core/game/GameUpdates.ts");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/core/Util.ts");\n/* harmony import */ var _UnitImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UnitImpl */ "./src/core/game/UnitImpl.ts");\n/* harmony import */ var _client_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client/Utils */ "./src/client/Utils.ts");\n/* harmony import */ var _GameMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GameMap */ "./src/core/game/GameMap.ts");\n/* harmony import */ var _AttackImpl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AttackImpl */ "./src/core/game/AttackImpl.ts");\n/* harmony import */ var _PseudoRandom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PseudoRandom */ "./src/core/PseudoRandom.ts");\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n\n\n\n\n\n\n\n\n\n\nclass Donation {\n    constructor(recipient, tick) {\n        this.recipient = recipient;\n        this.tick = tick;\n    }\n}\nclass PlayerImpl {\n    constructor(mg, _smallID, playerInfo, startTroops) {\n        this.mg = mg;\n        this._smallID = _smallID;\n        this.playerInfo = playerInfo;\n        this._lastTileChange = 0;\n        this.isTraitor_ = false;\n        this.embargoes = new Set();\n        this._borderTiles = new Set();\n        this._units = [];\n        this._tiles = new Set();\n        this.pastOutgoingAllianceRequests = [];\n        this.targets_ = [];\n        this.outgoingEmojis_ = [];\n        this.sentDonations = [];\n        this.relations = new Map();\n        this._incomingAttacks = [];\n        this._outgoingAttacks = [];\n        this._flag = playerInfo.flag;\n        this._name = playerInfo.name;\n        this._targetTroopRatio = 95n;\n        this._troops = (0,_Util__WEBPACK_IMPORTED_MODULE_2__.toInt)(startTroops);\n        this._workers = 0n;\n        this._gold = 0n;\n        this._displayName = this._name; // processName(this._name)\n        this._pseudo_random = new _PseudoRandom__WEBPACK_IMPORTED_MODULE_7__.PseudoRandom((0,_Util__WEBPACK_IMPORTED_MODULE_2__.simpleHash)(this.playerInfo.id));\n    }\n    toUpdate() {\n        const outgoingAllianceRequests = this.outgoingAllianceRequests().map((ar) => ar.recipient().id());\n        return {\n            type: _GameUpdates__WEBPACK_IMPORTED_MODULE_1__.GameUpdateType.Player,\n            clientID: this.clientID(),\n            flag: this.flag(),\n            name: this.name(),\n            displayName: this.displayName(),\n            id: this.id(),\n            smallID: this.smallID(),\n            playerType: this.type(),\n            isAlive: this.isAlive(),\n            tilesOwned: this.numTilesOwned(),\n            gold: Number(this._gold),\n            population: this.population(),\n            workers: this.workers(),\n            troops: this.troops(),\n            targetTroopRatio: this.targetTroopRatio(),\n            allies: this.alliances().map((a) => a.other(this).smallID()),\n            embargoes: this.embargoes,\n            isTraitor: this.isTraitor(),\n            targets: this.targets().map((p) => p.smallID()),\n            outgoingEmojis: this.outgoingEmojis(),\n            outgoingAttacks: this._outgoingAttacks.map((a) => ({\n                attackerID: a.attacker().smallID(),\n                targetID: a.target().smallID(),\n                troops: a.troops(),\n                id: a.id(),\n                retreating: a.retreating(),\n            })),\n            incomingAttacks: this._incomingAttacks.map((a) => ({\n                attackerID: a.attacker().smallID(),\n                targetID: a.target().smallID(),\n                troops: a.troops(),\n                id: a.id(),\n                retreating: a.retreating(),\n            })),\n            outgoingAllianceRequests: outgoingAllianceRequests,\n            stats: this.mg.stats().getPlayerStats(this.id()),\n        };\n    }\n    smallID() {\n        return this._smallID;\n    }\n    flag() {\n        return this._flag;\n    }\n    name() {\n        return this._name;\n    }\n    displayName() {\n        return this._displayName;\n    }\n    clientID() {\n        return this.playerInfo.clientID;\n    }\n    id() {\n        return this.playerInfo.id;\n    }\n    type() {\n        return this.playerInfo.playerType;\n    }\n    units(...types) {\n        if (types.length == 0) {\n            return this._units;\n        }\n        const ts = new Set(types);\n        return this._units.filter((u) => ts.has(u.type()));\n    }\n    unitsIncludingConstruction(type) {\n        const units = this.units(type);\n        units.push(...this.units(_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Construction).filter((u) => u.constructionType() == type));\n        return units;\n    }\n    sharesBorderWith(other) {\n        for (const border of this._borderTiles) {\n            for (const neighbor of this.mg.map().neighbors(border)) {\n                if (this.mg.map().ownerID(neighbor) == other.smallID()) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    }\n    numTilesOwned() {\n        return this._tiles.size;\n    }\n    tiles() {\n        return new Set(this._tiles.values());\n    }\n    borderTiles() {\n        return this._borderTiles;\n    }\n    neighbors() {\n        const ns = new Set();\n        for (const border of this.borderTiles()) {\n            for (const neighbor of this.mg.map().neighbors(border)) {\n                if (this.mg.map().isLake(neighbor)) {\n                    const owner = this.mg.map().ownerID(neighbor);\n                    if (owner != this.smallID()) {\n                        ns.add(this.mg.playerBySmallID(owner));\n                    }\n                }\n            }\n        }\n        return Array.from(ns);\n    }\n    isPlayer() {\n        return true;\n    }\n    setTroops(troops) {\n        this._troops = (0,_Util__WEBPACK_IMPORTED_MODULE_2__.toInt)(troops);\n    }\n    conquer(tile) {\n        this.mg.conquer(this, tile);\n    }\n    orderRetreat(id) {\n        const attack = this._outgoingAttacks.filter((attack) => attack.id() == id);\n        if (!attack || !attack[0]) {\n            _Consolex__WEBPACK_IMPORTED_MODULE_8__.consolex.warn(`Didn\'t find outgoing attack with id ${id}`);\n            return;\n        }\n        attack[0].orderRetreat();\n    }\n    executeRetreat(id) {\n        const attack = this._outgoingAttacks.filter((attack) => attack.id() == id);\n        // Execution is delayed so it\'s not an error that the attack does not exist.\n        if (!attack || !attack[0]) {\n            return;\n        }\n        attack[0].executeRetreat();\n    }\n    relinquish(tile) {\n        if (this.mg.owner(tile) != this) {\n            throw new Error(`Cannot relinquish tile not owned by this player`);\n        }\n        this.mg.relinquish(tile);\n    }\n    info() {\n        return this.playerInfo;\n    }\n    isAlive() {\n        return this._tiles.size > 0;\n    }\n    executions() {\n        return this.mg\n            .executions()\n            .filter((exec) => exec.owner().id() == this.id());\n    }\n    incomingAllianceRequests() {\n        return this.mg.allianceRequests.filter((ar) => ar.recipient() == this);\n    }\n    outgoingAllianceRequests() {\n        return this.mg.allianceRequests.filter((ar) => ar.requestor() == this);\n    }\n    alliances() {\n        return this.mg.alliances_.filter((a) => a.requestor() == this || a.recipient() == this);\n    }\n    allies() {\n        return this.alliances().map((a) => a.other(this));\n    }\n    isAlliedWith(other) {\n        if (other == this) {\n            return false;\n        }\n        return this.allianceWith(other) != null;\n    }\n    allianceWith(other) {\n        if (other == this) {\n            return null;\n        }\n        return this.alliances().find((a) => a.recipient() == other || a.requestor() == other);\n    }\n    canSendAllianceRequest(other) {\n        if (other == this) {\n            return false;\n        }\n        if (this.isAlliedWith(other)) {\n            return false;\n        }\n        const hasPending = this.incomingAllianceRequests().find((ar) => ar.requestor() == other) !=\n            null ||\n            this.outgoingAllianceRequests().find((ar) => ar.recipient() == other) !=\n                null;\n        if (hasPending) {\n            return false;\n        }\n        const recent = this.pastOutgoingAllianceRequests\n            .filter((ar) => ar.recipient() == other)\n            .sort((a, b) => b.createdAt() - a.createdAt());\n        if (recent.length == 0) {\n            return true;\n        }\n        const delta = this.mg.ticks() - recent[0].createdAt();\n        return delta >= this.mg.config().allianceRequestCooldown();\n    }\n    breakAlliance(alliance) {\n        this.mg.breakAlliance(this, alliance);\n    }\n    isTraitor() {\n        return this.isTraitor_;\n    }\n    createAllianceRequest(recipient) {\n        if (this.isAlliedWith(recipient)) {\n            throw new Error(`cannot create alliance request, already allies`);\n        }\n        return this.mg.createAllianceRequest(this, recipient);\n    }\n    relation(other) {\n        if (other == this) {\n            throw new Error(`cannot get relation with self: ${this}`);\n        }\n        if (this.relations.has(other)) {\n            return this.relationFromValue(this.relations.get(other));\n        }\n        return _Game__WEBPACK_IMPORTED_MODULE_0__.Relation.Neutral;\n    }\n    relationFromValue(relationValue) {\n        if (relationValue < -50) {\n            return _Game__WEBPACK_IMPORTED_MODULE_0__.Relation.Hostile;\n        }\n        if (relationValue < 0) {\n            return _Game__WEBPACK_IMPORTED_MODULE_0__.Relation.Distrustful;\n        }\n        if (relationValue < 50) {\n            return _Game__WEBPACK_IMPORTED_MODULE_0__.Relation.Neutral;\n        }\n        return _Game__WEBPACK_IMPORTED_MODULE_0__.Relation.Friendly;\n    }\n    allRelationsSorted() {\n        return Array.from(this.relations, ([k, v]) => ({ player: k, relation: v }))\n            .sort((a, b) => a.relation - b.relation)\n            .map((r) => ({\n            player: r.player,\n            relation: this.relationFromValue(r.relation),\n        }));\n    }\n    updateRelation(other, delta) {\n        if (other == this) {\n            throw new Error(`cannot update relation with self: ${this}`);\n        }\n        let relation = 0;\n        if (this.relations.has(other)) {\n            relation = this.relations.get(other);\n        }\n        const newRelation = (0,_Util__WEBPACK_IMPORTED_MODULE_2__.within)(relation + delta, -100, 100);\n        this.relations.set(other, newRelation);\n    }\n    decayRelations() {\n        this.relations.forEach((r, p) => {\n            const sign = -1 * Math.sign(r);\n            const delta = 0.05;\n            r += sign * delta;\n            if (Math.abs(r) < delta * 2) {\n                r = 0;\n            }\n            this.relations.set(p, r);\n        });\n    }\n    canTarget(other) {\n        if (this == other) {\n            return false;\n        }\n        if (this.isAlliedWith(other)) {\n            return false;\n        }\n        for (const t of this.targets_) {\n            if (this.mg.ticks() - t.tick < this.mg.config().targetCooldown()) {\n                return false;\n            }\n        }\n        return true;\n    }\n    target(other) {\n        this.targets_.push({ tick: this.mg.ticks(), target: other });\n        this.mg.target(this, other);\n    }\n    targets() {\n        return this.targets_\n            .filter((t) => this.mg.ticks() - t.tick < this.mg.config().targetDuration())\n            .map((t) => t.target);\n    }\n    transitiveTargets() {\n        const ts = this.alliances()\n            .map((a) => a.other(this))\n            .flatMap((ally) => ally.targets());\n        ts.push(...this.targets());\n        return [...new Set(ts)];\n    }\n    sendEmoji(recipient, emoji) {\n        if (recipient == this) {\n            throw Error(`Cannot send emoji to oneself: ${this}`);\n        }\n        const msg = {\n            message: emoji,\n            senderID: this.smallID(),\n            recipientID: recipient == _Game__WEBPACK_IMPORTED_MODULE_0__.AllPlayers ? recipient : recipient.smallID(),\n            createdAt: this.mg.ticks(),\n        };\n        this.outgoingEmojis_.push(msg);\n        this.mg.sendEmojiUpdate(msg);\n    }\n    outgoingEmojis() {\n        return this.outgoingEmojis_\n            .filter((e) => this.mg.ticks() - e.createdAt <\n            this.mg.config().emojiMessageDuration())\n            .sort((a, b) => b.createdAt - a.createdAt);\n    }\n    canSendEmoji(recipient) {\n        const recipientID = recipient == _Game__WEBPACK_IMPORTED_MODULE_0__.AllPlayers ? _Game__WEBPACK_IMPORTED_MODULE_0__.AllPlayers : recipient.smallID();\n        const prevMsgs = this.outgoingEmojis_.filter((msg) => msg.recipientID == recipientID);\n        for (const msg of prevMsgs) {\n            if (this.mg.ticks() - msg.createdAt <\n                this.mg.config().emojiMessageCooldown()) {\n                return false;\n            }\n        }\n        return true;\n    }\n    canDonate(recipient) {\n        if (!this.isAlliedWith(recipient)) {\n            return false;\n        }\n        for (const donation of this.sentDonations) {\n            if (donation.recipient == recipient) {\n                if (this.mg.ticks() - donation.tick <\n                    this.mg.config().donateCooldown()) {\n                    return false;\n                }\n            }\n        }\n        return true;\n    }\n    donate(recipient, troops) {\n        this.sentDonations.push(new Donation(recipient, this.mg.ticks()));\n        recipient.addTroops(this.removeTroops(troops));\n        this.mg.displayMessage(`Sent ${(0,_client_Utils__WEBPACK_IMPORTED_MODULE_4__.renderTroops)(troops)} troops to ${recipient.name()}`, _Game__WEBPACK_IMPORTED_MODULE_0__.MessageType.INFO, this.id());\n        this.mg.displayMessage(`Recieved ${(0,_client_Utils__WEBPACK_IMPORTED_MODULE_4__.renderTroops)(troops)} troops from ${this.name()}`, _Game__WEBPACK_IMPORTED_MODULE_0__.MessageType.SUCCESS, recipient.id());\n    }\n    hasEmbargoAgainst(other) {\n        return this.embargoes.has(other.id());\n    }\n    canTrade(other) {\n        return !other.hasEmbargoAgainst(this) && !this.hasEmbargoAgainst(other);\n    }\n    addEmbargo(other) {\n        this.embargoes.add(other);\n    }\n    stopEmbargo(other) {\n        this.embargoes.delete(other);\n    }\n    tradingPartners() {\n        return this.mg\n            .players()\n            .filter((other) => other != this && this.canTrade(other));\n    }\n    gold() {\n        return Number(this._gold);\n    }\n    addGold(toAdd) {\n        this._gold += (0,_Util__WEBPACK_IMPORTED_MODULE_2__.toInt)(toAdd);\n    }\n    removeGold(toRemove) {\n        if (toRemove > this._gold) {\n            throw Error(`Player ${this} does not enough gold (${toRemove} vs ${this._gold}))`);\n        }\n        this._gold -= (0,_Util__WEBPACK_IMPORTED_MODULE_2__.toInt)(toRemove);\n    }\n    population() {\n        return Number(this._troops + this._workers);\n    }\n    workers() {\n        return Math.max(1, Number(this._workers));\n    }\n    addWorkers(toAdd) {\n        this._workers += (0,_Util__WEBPACK_IMPORTED_MODULE_2__.toInt)(toAdd);\n    }\n    removeWorkers(toRemove) {\n        this._workers = (0,_Util__WEBPACK_IMPORTED_MODULE_2__.maxInt)(1n, this._workers - (0,_Util__WEBPACK_IMPORTED_MODULE_2__.toInt)(toRemove));\n    }\n    targetTroopRatio() {\n        return Number(this._targetTroopRatio) / 100;\n    }\n    setTargetTroopRatio(target) {\n        if (target < 0 || target > 1) {\n            throw new Error(`invalid targetTroopRatio ${target} set on player ${PlayerImpl}`);\n        }\n        this._targetTroopRatio = (0,_Util__WEBPACK_IMPORTED_MODULE_2__.toInt)(target * 100);\n    }\n    troops() {\n        return Number(this._troops);\n    }\n    addTroops(troops) {\n        if (troops < 0) {\n            this.removeTroops(-1 * troops);\n            return;\n        }\n        this._troops += (0,_Util__WEBPACK_IMPORTED_MODULE_2__.toInt)(troops);\n    }\n    removeTroops(troops) {\n        if (troops <= 1) {\n            return 0;\n        }\n        const toRemove = (0,_Util__WEBPACK_IMPORTED_MODULE_2__.minInt)(this._troops, (0,_Util__WEBPACK_IMPORTED_MODULE_2__.toInt)(troops));\n        this._troops -= toRemove;\n        return Number(toRemove);\n    }\n    captureUnit(unit) {\n        if (unit.owner() == this) {\n            throw new Error(`Cannot capture unit, ${this} already owns ${unit}`);\n        }\n        const prev = unit.owner();\n        prev._units = prev._units.filter((u) => u != unit);\n        unit._owner = this;\n        this._units.push(unit);\n        this.mg.addUpdate(unit.toUpdate());\n        this.mg.displayMessage(`${unit.type()} captured by ${this.displayName()}`, _Game__WEBPACK_IMPORTED_MODULE_0__.MessageType.ERROR, prev.id());\n        this.mg.displayMessage(`Captured ${unit.type()} from ${prev.displayName()}`, _Game__WEBPACK_IMPORTED_MODULE_0__.MessageType.SUCCESS, this.id());\n    }\n    buildUnit(type, troops, spawnTile, dstPort) {\n        const cost = this.mg.unitInfo(type).cost(this);\n        const b = new _UnitImpl__WEBPACK_IMPORTED_MODULE_3__.UnitImpl(type, this.mg, spawnTile, troops, this.mg.nextUnitID(), this, dstPort);\n        this._units.push(b);\n        this.removeGold(cost);\n        this.removeTroops(troops);\n        this.mg.addUpdate(b.toUpdate());\n        if (type == _Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.DefensePost) {\n            this.mg.addDefensePost(b);\n        }\n        return b;\n    }\n    canBuild(unitType, targetTile) {\n        const cost = this.mg.unitInfo(unitType).cost(this);\n        if (!this.isAlive() || this.gold() < cost) {\n            return false;\n        }\n        switch (unitType) {\n            case _Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MIRV:\n                return this.nukeSpawn(targetTile);\n            case _Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.AtomBomb:\n            case _Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.HydrogenBomb:\n                return this.nukeSpawn(targetTile);\n            case _Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MIRVWarhead:\n                return targetTile;\n            case _Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Port:\n                return this.portSpawn(targetTile);\n            case _Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Warship:\n                return this.warshipSpawn(targetTile);\n            case _Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Shell:\n            case _Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.SAMMissile:\n                return targetTile;\n            case _Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TransportShip:\n                return this.transportShipSpawn(targetTile);\n            case _Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TradeShip:\n                return this.tradeShipSpawn(targetTile);\n            case _Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MissileSilo:\n            case _Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.DefensePost:\n            case _Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.SAMLauncher:\n            case _Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.City:\n            case _Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Construction:\n                return this.landBasedStructureSpawn(targetTile);\n            default:\n                (0,_Util__WEBPACK_IMPORTED_MODULE_2__.assertNever)(unitType);\n        }\n    }\n    nukeSpawn(tile) {\n        const spawns = this.units(_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MissileSilo)\n            .map((u) => u)\n            .sort((0,_Util__WEBPACK_IMPORTED_MODULE_2__.distSortUnit)(this.mg, tile));\n        if (spawns.length == 0) {\n            return false;\n        }\n        return spawns[0].tile();\n    }\n    portSpawn(tile) {\n        const spawns = Array.from(this.mg.bfs(tile, (0,_GameMap__WEBPACK_IMPORTED_MODULE_5__.manhattanDistFN)(tile, 20)))\n            .filter((t) => this.mg.owner(t) == this && this.mg.isOceanShore(t))\n            .sort((a, b) => this.mg.manhattanDist(a, tile) - this.mg.manhattanDist(b, tile));\n        if (spawns.length == 0) {\n            return false;\n        }\n        return spawns[0];\n    }\n    warshipSpawn(tile) {\n        if (!this.mg.isOcean(tile)) {\n            return false;\n        }\n        const spawns = this.units(_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Port).sort((a, b) => this.mg.manhattanDist(a.tile(), tile) -\n            this.mg.manhattanDist(b.tile(), tile));\n        if (spawns.length == 0) {\n            return false;\n        }\n        return spawns[0].tile();\n    }\n    landBasedStructureSpawn(tile) {\n        if (this.mg.owner(tile) != this) {\n            return false;\n        }\n        return tile;\n    }\n    transportShipSpawn(targetTile) {\n        if (!this.mg.isShore(targetTile)) {\n            return false;\n        }\n        const spawn = (0,_Util__WEBPACK_IMPORTED_MODULE_2__.closestShoreFromPlayer)(this.mg, this, targetTile);\n        if (spawn == null) {\n            return false;\n        }\n        return spawn;\n    }\n    tradeShipSpawn(targetTile) {\n        const spawns = this.units(_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Port).filter((u) => u.tile() == targetTile);\n        if (spawns.length == 0) {\n            return false;\n        }\n        return spawns[0].tile();\n    }\n    lastTileChange() {\n        return this._lastTileChange;\n    }\n    hash() {\n        return ((0,_Util__WEBPACK_IMPORTED_MODULE_2__.simpleHash)(this.id()) * (this.population() + this.numTilesOwned()) +\n            this._units.reduce((acc, unit) => acc + unit.hash(), 0));\n    }\n    toString() {\n        return `Player:{name:${this.info().name},clientID:${this.info().clientID},isAlive:${this.isAlive()},troops:${this._troops},numTileOwned:${this.numTilesOwned()}}]`;\n    }\n    playerProfile() {\n        const rel = {\n            relations: Object.fromEntries(this.allRelationsSorted().map(({ player, relation }) => [\n                player.smallID(),\n                relation,\n            ])),\n            alliances: this.alliances().map((a) => a.other(this).smallID()),\n        };\n        return rel;\n    }\n    canBoat(tile) {\n        if (this.units(_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TransportShip).length >=\n            this.mg.config().boatMaxNumber()) {\n            return false;\n        }\n        const dst = (0,_Util__WEBPACK_IMPORTED_MODULE_2__.targetTransportTile)(this.mg, tile);\n        if (dst == null) {\n            return false;\n        }\n        const other = this.mg.owner(tile);\n        if (other == this) {\n            return false;\n        }\n        if (other.isPlayer() && this.allianceWith(other)) {\n            return false;\n        }\n        if (this.mg.isOceanShore(dst)) {\n            let myPlayerBordersOcean = false;\n            for (const bt of this.borderTiles()) {\n                if (this.mg.isOceanShore(bt)) {\n                    myPlayerBordersOcean = true;\n                    break;\n                }\n            }\n            let otherPlayerBordersOcean = false;\n            if (!this.mg.hasOwner(tile)) {\n                otherPlayerBordersOcean = true;\n            }\n            else {\n                for (const bt of other.borderTiles()) {\n                    if (this.mg.isOceanShore(bt)) {\n                        otherPlayerBordersOcean = true;\n                        break;\n                    }\n                }\n            }\n            if (myPlayerBordersOcean && otherPlayerBordersOcean) {\n                return this.canBuild(_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TransportShip, dst) != false;\n            }\n            else {\n                return false;\n            }\n        }\n        // Now we are boating in a lake, so do a bfs from target until we find\n        // a border tile owned by the player\n        const tiles = this.mg.bfs(dst, (0,_GameMap__WEBPACK_IMPORTED_MODULE_5__.andFN)((0,_GameMap__WEBPACK_IMPORTED_MODULE_5__.manhattanDistFN)(dst, 300), (_, t) => this.mg.isLake(t) || this.mg.isShore(t)));\n        const sorted = Array.from(tiles).sort((a, b) => this.mg.manhattanDist(dst, a) - this.mg.manhattanDist(dst, b));\n        for (const t of sorted) {\n            if (this.mg.owner(t) == this) {\n                return this.canBuild(_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.TransportShip, dst) != false;\n            }\n        }\n        return false;\n    }\n    createAttack(target, troops, sourceTile) {\n        const attack = new _AttackImpl__WEBPACK_IMPORTED_MODULE_6__.AttackImpl(this._pseudo_random.nextID(), target, this, troops, sourceTile);\n        this._outgoingAttacks.push(attack);\n        if (target.isPlayer()) {\n            target._incomingAttacks.push(attack);\n        }\n        return attack;\n    }\n    outgoingAttacks() {\n        return this._outgoingAttacks;\n    }\n    incomingAttacks() {\n        return this._incomingAttacks;\n    }\n    canAttack(tile) {\n        if (this.mg.hasOwner(tile) &&\n            this.mg.config().numSpawnPhaseTurns() +\n                this.mg.config().spawnImmunityDuration() >\n                this.mg.ticks()) {\n            return false;\n        }\n        if (this.mg.owner(tile) == this) {\n            return false;\n        }\n        if (this.mg.hasOwner(tile) &&\n            this.isAlliedWith(this.mg.owner(tile))) {\n            return false;\n        }\n        if (!this.mg.isLand(tile)) {\n            return false;\n        }\n        if (this.mg.hasOwner(tile)) {\n            return this.sharesBorderWith(this.mg.owner(tile));\n        }\n        else {\n            for (const t of this.mg.bfs(tile, (0,_GameMap__WEBPACK_IMPORTED_MODULE_5__.andFN)((gm, t) => !gm.hasOwner(t) && gm.isLand(t), (0,_GameMap__WEBPACK_IMPORTED_MODULE_5__.manhattanDistFN)(tile, 200)))) {\n                for (const n of this.mg.neighbors(t)) {\n                    if (this.mg.owner(n) == this) {\n                        return true;\n                    }\n                }\n            }\n            return false;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/game/PlayerImpl.ts?',
        );

        /***/
      },

    /***/ "./src/core/game/StatsImpl.ts":
      /*!************************************!*\
  !*** ./src/core/game/StatsImpl.ts ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StatsImpl: () => (/* binding */ StatsImpl)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/core/game/Game.ts");\n\nclass StatsImpl {\n    constructor() {\n        this.data = {};\n    }\n    _createUserData(sender, target) {\n        if (!this.data[sender]) {\n            this.data[sender] = { sentNukes: {} };\n        }\n        if (!this.data[sender].sentNukes[target]) {\n            this.data[sender].sentNukes[target] = {\n                [_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MIRV]: 0,\n                [_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.MIRVWarhead]: 0,\n                [_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.AtomBomb]: 0,\n                [_Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.HydrogenBomb]: 0,\n            };\n        }\n    }\n    increaseNukeCount(sender, target, type) {\n        this._createUserData(sender, target);\n        this.data[sender].sentNukes[target][type]++;\n    }\n    getPlayerStats(player) {\n        return this.data[player];\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/game/StatsImpl.ts?',
        );

        /***/
      },

    /***/ "./src/core/game/TerraNulliusImpl.ts":
      /*!*******************************************!*\
  !*** ./src/core/game/TerraNulliusImpl.ts ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TerraNulliusImpl: () => (/* binding */ TerraNulliusImpl)\n/* harmony export */ });\nclass TerraNulliusImpl {\n    constructor() { }\n    smallID() {\n        return 0;\n    }\n    clientID() {\n        return "TERRA_NULLIUS_CLIENT_ID";\n    }\n    id() {\n        return null;\n    }\n    isPlayer() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/game/TerraNulliusImpl.ts?',
        );

        /***/
      },

    /***/ "./src/core/game/TerrainMapFileLoader.ts":
      /*!***********************************************!*\
  !*** ./src/core/game/TerrainMapFileLoader.ts ***!
  \***********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   terrainMapFileLoader: () => (/* binding */ terrainMapFileLoader)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/core/game/Game.ts");\n\n// Mapping from GameMap enum values to file names\nconst MAP_FILE_NAMES = {\n    [_Game__WEBPACK_IMPORTED_MODULE_0__.GameMapType.World]: "WorldMap",\n    [_Game__WEBPACK_IMPORTED_MODULE_0__.GameMapType.Europe]: "Europe",\n    [_Game__WEBPACK_IMPORTED_MODULE_0__.GameMapType.Mena]: "Mena",\n    [_Game__WEBPACK_IMPORTED_MODULE_0__.GameMapType.NorthAmerica]: "NorthAmerica",\n    [_Game__WEBPACK_IMPORTED_MODULE_0__.GameMapType.Oceania]: "Oceania",\n    [_Game__WEBPACK_IMPORTED_MODULE_0__.GameMapType.BlackSea]: "BlackSea",\n    [_Game__WEBPACK_IMPORTED_MODULE_0__.GameMapType.Africa]: "Africa",\n    [_Game__WEBPACK_IMPORTED_MODULE_0__.GameMapType.Asia]: "Asia",\n    [_Game__WEBPACK_IMPORTED_MODULE_0__.GameMapType.Mars]: "Mars",\n};\nclass GameMapLoader {\n    constructor() {\n        this.maps = new Map();\n        this.loadingPromises = new Map();\n    }\n    async getMapData(map) {\n        const cachedMap = this.maps.get(map);\n        if (cachedMap?.bin && cachedMap?.nationMap) {\n            return cachedMap;\n        }\n        if (!this.loadingPromises.has(map)) {\n            this.loadingPromises.set(map, this.loadMapData(map));\n        }\n        const data = await this.loadingPromises.get(map);\n        this.maps.set(map, data);\n        return data;\n    }\n    async loadMapData(map) {\n        const fileName = MAP_FILE_NAMES[map];\n        if (!fileName) {\n            throw new Error(`No file name mapping found for map: ${map}`);\n        }\n        const [binModule, miniBinModule, infoModule] = await Promise.all([\n            __webpack_require__("./resources/maps lazy recursive !!./node_modules/binary-loader/index.js! ^\\\\.\\\\/.*\\\\.bin$")(`./${fileName}.bin`),\n            __webpack_require__("./resources/maps lazy recursive !!./node_modules/binary-loader/index.js! ^\\\\.\\\\/.*Mini\\\\.bin$")(`./${fileName}Mini.bin`),\n            __webpack_require__("./resources/maps lazy recursive ^\\\\.\\\\/.*\\\\.json$")(`./${fileName}.json`),\n        ]);\n        return {\n            mapBin: binModule.default,\n            miniMapBin: miniBinModule.default,\n            nationMap: infoModule.default,\n        };\n    }\n    isMapLoaded(map) {\n        const mapData = this.maps.get(map);\n        return !!mapData?.bin && !!mapData?.nationMap;\n    }\n    getLoadedMaps() {\n        return Array.from(this.maps.keys()).filter((map) => this.isMapLoaded(map));\n    }\n}\nconst terrainMapFileLoader = new GameMapLoader();\n\n\n//# sourceURL=webpack://openfront-client/./src/core/game/TerrainMapFileLoader.ts?',
        );

        /***/
      },

    /***/ "./src/core/game/TerrainMapLoader.ts":
      /*!*******************************************!*\
  !*** ./src/core/game/TerrainMapLoader.ts ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadTerrainFromFile: () => (/* binding */ loadTerrainFromFile),\n/* harmony export */   loadTerrainMap: () => (/* binding */ loadTerrainMap)\n/* harmony export */ });\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n/* harmony import */ var _GameMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameMap */ "./src/core/game/GameMap.ts");\n/* harmony import */ var _TerrainMapFileLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TerrainMapFileLoader */ "./src/core/game/TerrainMapFileLoader.ts");\n\n\n\nconst loadedMaps = new Map();\nasync function loadTerrainMap(map) {\n    if (loadedMaps.has(map)) {\n        return loadedMaps.get(map);\n    }\n    const mapFiles = await _TerrainMapFileLoader__WEBPACK_IMPORTED_MODULE_2__.terrainMapFileLoader.getMapData(map);\n    const gameMap = await loadTerrainFromFile(mapFiles.mapBin);\n    const miniGameMap = await loadTerrainFromFile(mapFiles.miniMapBin);\n    const result = {\n        nationMap: mapFiles.nationMap,\n        gameMap: gameMap,\n        miniGameMap: miniGameMap,\n    };\n    loadedMaps.set(map, result);\n    return result;\n}\nasync function loadTerrainFromFile(fileData) {\n    const width = (fileData.charCodeAt(1) << 8) | fileData.charCodeAt(0);\n    const height = (fileData.charCodeAt(3) << 8) | fileData.charCodeAt(2);\n    if (fileData.length != width * height + 4) {\n        throw new Error(`Invalid data: buffer size ${fileData.length} incorrect for ${width}x${height} terrain plus 4 bytes for dimensions.`);\n    }\n    // Store raw data in Uint8Array\n    const rawData = new Uint8Array(width * height);\n    let numLand = 0;\n    // Copy data starting after the header\n    for (let i = 0; i < width * height; i++) {\n        const packedByte = fileData.charCodeAt(i + 4);\n        rawData[i] = packedByte;\n        if (packedByte & 0b10000000)\n            numLand++;\n    }\n    return new _GameMap__WEBPACK_IMPORTED_MODULE_1__.GameMapImpl(width, height, rawData, numLand);\n}\nfunction logBinaryAsAscii(data, length = 8) {\n    _Consolex__WEBPACK_IMPORTED_MODULE_0__.consolex.log("Binary data (1 = set bit, 0 = unset bit):");\n    for (let i = 0; i < Math.min(length, data.length); i++) {\n        const byte = data.charCodeAt(i);\n        let byteString = "";\n        for (let j = 7; j >= 0; j--) {\n            byteString += byte & (1 << j) ? "1" : "0";\n        }\n        _Consolex__WEBPACK_IMPORTED_MODULE_0__.consolex.log(`Byte ${i}: ${byteString}`);\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/game/TerrainMapLoader.ts?',
        );

        /***/
      },

    /***/ "./src/core/game/UnitImpl.ts":
      /*!***********************************!*\
  !*** ./src/core/game/UnitImpl.ts ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UnitImpl: () => (/* binding */ UnitImpl)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _GameUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameUpdates */ "./src/core/game/GameUpdates.ts");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/core/Util.ts");\n\n\n\n\nclass UnitImpl {\n    constructor(_type, mg, _tile, _troops, _id, _owner, _dstPort) {\n        this._type = _type;\n        this.mg = mg;\n        this._tile = _tile;\n        this._troops = _troops;\n        this._id = _id;\n        this._owner = _owner;\n        this._dstPort = _dstPort;\n        this._active = true;\n        this._lastTile = null;\n        // Currently only warship use it\n        this._target = null;\n        this._constructionType = undefined;\n        // default to 60% health (or 1.2 is no health specified)\n        this._health = (0,_Util__WEBPACK_IMPORTED_MODULE_2__.toInt)((this.mg.unitInfo(_type).maxHealth ?? 2) * 0.6);\n        this._lastTile = _tile;\n    }\n    id() {\n        return this._id;\n    }\n    toUpdate() {\n        return {\n            type: _GameUpdates__WEBPACK_IMPORTED_MODULE_1__.GameUpdateType.Unit,\n            unitType: this._type,\n            id: this._id,\n            troops: this._troops,\n            ownerID: this._owner.smallID(),\n            isActive: this._active,\n            pos: this._tile,\n            lastPos: this._lastTile,\n            health: this.hasHealth() ? Number(this._health) : undefined,\n            constructionType: this._constructionType,\n            targetId: this.target() ? this.target().id() : null,\n        };\n    }\n    type() {\n        return this._type;\n    }\n    lastTile() {\n        return this._lastTile;\n    }\n    move(tile) {\n        if (tile == null) {\n            throw new Error("tile cannot be null");\n        }\n        this._lastTile = this._tile;\n        this._tile = tile;\n        this.mg.addUpdate(this.toUpdate());\n    }\n    setTroops(troops) {\n        this._troops = troops;\n    }\n    troops() {\n        return this._troops;\n    }\n    health() {\n        return Number(this._health);\n    }\n    hasHealth() {\n        return this.info().maxHealth != undefined;\n    }\n    tile() {\n        return this._tile;\n    }\n    owner() {\n        return this._owner;\n    }\n    info() {\n        return this.mg.unitInfo(this._type);\n    }\n    setOwner(newOwner) {\n        const oldOwner = this._owner;\n        oldOwner._units = oldOwner._units.filter((u) => u != this);\n        this._owner = newOwner;\n        this.mg.addUpdate(this.toUpdate());\n        this.mg.displayMessage(`Your ${this.type()} was captured by ${newOwner.displayName()}`, _Game__WEBPACK_IMPORTED_MODULE_0__.MessageType.ERROR, oldOwner.id());\n    }\n    modifyHealth(delta) {\n        this._health = (0,_Util__WEBPACK_IMPORTED_MODULE_2__.withinInt)(this._health + (0,_Util__WEBPACK_IMPORTED_MODULE_2__.toInt)(delta), 0n, (0,_Util__WEBPACK_IMPORTED_MODULE_2__.toInt)(this.info().maxHealth ?? 1));\n    }\n    delete(displayMessage = true) {\n        if (!this.isActive()) {\n            throw new Error(`cannot delete ${this} not active`);\n        }\n        this._owner._units = this._owner._units.filter((b) => b != this);\n        this._active = false;\n        this.mg.addUpdate(this.toUpdate());\n        if (this.type() == _Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.DefensePost) {\n            this.mg.removeDefensePost(this);\n        }\n        if (displayMessage) {\n            this.mg.displayMessage(`Your ${this.type()} was destroyed`, _Game__WEBPACK_IMPORTED_MODULE_0__.MessageType.ERROR, this.owner().id());\n        }\n    }\n    isActive() {\n        return this._active;\n    }\n    constructionType() {\n        if (this.type() != _Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Construction) {\n            throw new Error(`Cannot get construction type on ${this.type()}`);\n        }\n        return this._constructionType;\n    }\n    setConstructionType(type) {\n        if (this.type() != _Game__WEBPACK_IMPORTED_MODULE_0__.UnitType.Construction) {\n            throw new Error(`Cannot set construction type on ${this.type()}`);\n        }\n        this._constructionType = type;\n        this.mg.addUpdate(this.toUpdate());\n    }\n    hash() {\n        return this.tile() + (0,_Util__WEBPACK_IMPORTED_MODULE_2__.simpleHash)(this.type()) * this._id;\n    }\n    toString() {\n        return `Unit:${this._type},owner:${this.owner().name()}`;\n    }\n    dstPort() {\n        return this._dstPort;\n    }\n    setTarget(target) {\n        this._target = target;\n    }\n    target() {\n        return this._target;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/game/UnitImpl.ts?',
        );

        /***/
      },

    /***/ "./src/core/pathfinding/AStar.ts":
      /*!***************************************!*\
  !*** ./src/core/pathfinding/AStar.ts ***!
  \***************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PathFindResultType: () => (/* binding */ PathFindResultType)\n/* harmony export */ });\nvar PathFindResultType;\n(function (PathFindResultType) {\n    PathFindResultType[PathFindResultType["NextTile"] = 0] = "NextTile";\n    PathFindResultType[PathFindResultType["Pending"] = 1] = "Pending";\n    PathFindResultType[PathFindResultType["Completed"] = 2] = "Completed";\n    PathFindResultType[PathFindResultType["PathNotFound"] = 3] = "PathNotFound";\n})(PathFindResultType || (PathFindResultType = {}));\n\n\n//# sourceURL=webpack://openfront-client/./src/core/pathfinding/AStar.ts?',
        );

        /***/
      },

    /***/ "./src/core/pathfinding/MiniAStar.ts":
      /*!*******************************************!*\
  !*** ./src/core/pathfinding/MiniAStar.ts ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MiniAStar: () => (/* binding */ MiniAStar)\n/* harmony export */ });\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/Game */ "./src/core/game/Game.ts");\n/* harmony import */ var _SerialAStar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SerialAStar */ "./src/core/pathfinding/SerialAStar.ts");\n\n\n// TODO: test this, get it work\nclass MiniAStar {\n    constructor(gameMap, miniMap, src, dst, canMove, iterations, maxTries) {\n        this.gameMap = gameMap;\n        this.miniMap = miniMap;\n        this.src = src;\n        this.dst = dst;\n        this.canMove = canMove;\n        this.iterations = iterations;\n        this.maxTries = maxTries;\n        const miniSrc = this.miniMap.ref(Math.floor(gameMap.x(src) / 2), Math.floor(gameMap.y(src) / 2));\n        const miniDst = this.miniMap.ref(Math.floor(gameMap.x(dst) / 2), Math.floor(gameMap.y(dst) / 2));\n        this.aStar = new _SerialAStar__WEBPACK_IMPORTED_MODULE_1__.SerialAStar(miniSrc, miniDst, canMove, iterations, maxTries, this.miniMap);\n    }\n    compute() {\n        return this.aStar.compute();\n    }\n    reconstructPath() {\n        const upscaled = upscalePath(this.aStar\n            .reconstructPath()\n            .map((tr) => new _game_Game__WEBPACK_IMPORTED_MODULE_0__.Cell(this.miniMap.x(tr), this.miniMap.y(tr))));\n        upscaled.push(new _game_Game__WEBPACK_IMPORTED_MODULE_0__.Cell(this.gameMap.x(this.dst), this.gameMap.y(this.dst)));\n        return upscaled.map((c) => this.gameMap.ref(c.x, c.y));\n    }\n}\nfunction upscalePath(path, scaleFactor = 2) {\n    // Scale up each point\n    const scaledPath = path.map((point) => new _game_Game__WEBPACK_IMPORTED_MODULE_0__.Cell(point.x * scaleFactor, point.y * scaleFactor));\n    const smoothPath = [];\n    for (let i = 0; i < scaledPath.length - 1; i++) {\n        const current = scaledPath[i];\n        const next = scaledPath[i + 1];\n        // Add the current point\n        smoothPath.push(current);\n        // Always interpolate between scaled points\n        const dx = next.x - current.x;\n        const dy = next.y - current.y;\n        // Calculate number of steps needed\n        const distance = Math.max(Math.abs(dx), Math.abs(dy));\n        const steps = distance;\n        // Add intermediate points\n        for (let step = 1; step < steps; step++) {\n            smoothPath.push(new _game_Game__WEBPACK_IMPORTED_MODULE_0__.Cell(Math.round(current.x + (dx * step) / steps), Math.round(current.y + (dy * step) / steps)));\n        }\n    }\n    // Add the last point\n    if (scaledPath.length > 0) {\n        smoothPath.push(scaledPath[scaledPath.length - 1]);\n    }\n    return smoothPath;\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/pathfinding/MiniAStar.ts?',
        );

        /***/
      },

    /***/ "./src/core/pathfinding/PathFinding.ts":
      /*!*********************************************!*\
  !*** ./src/core/pathfinding/PathFinding.ts ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PathFinder: () => (/* binding */ PathFinder)\n/* harmony export */ });\n/* harmony import */ var _AStar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AStar */ "./src/core/pathfinding/AStar.ts");\n/* harmony import */ var _MiniAStar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MiniAStar */ "./src/core/pathfinding/MiniAStar.ts");\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n\n\n\nclass PathFinder {\n    constructor(game, newAStar) {\n        this.game = game;\n        this.newAStar = newAStar;\n        this.curr = null;\n        this.dst = null;\n        this.computeFinished = true;\n    }\n    static Mini(game, iterations, canMoveOnLand, maxTries = 20) {\n        return new PathFinder(game, (curr, dst) => {\n            return new _MiniAStar__WEBPACK_IMPORTED_MODULE_1__.MiniAStar(game.map(), game.miniMap(), curr, dst, (tr) => {\n                if (canMoveOnLand) {\n                    return true;\n                }\n                return game.miniMap().isWater(tr);\n            }, iterations, maxTries);\n        });\n    }\n    nextTile(curr, dst, dist = 1) {\n        if (curr == null) {\n            _Consolex__WEBPACK_IMPORTED_MODULE_2__.consolex.error("curr is null");\n        }\n        if (dst == null) {\n            _Consolex__WEBPACK_IMPORTED_MODULE_2__.consolex.error("dst is null");\n        }\n        if (this.game.manhattanDist(curr, dst) < dist) {\n            return { type: _AStar__WEBPACK_IMPORTED_MODULE_0__.PathFindResultType.Completed, tile: curr };\n        }\n        if (this.computeFinished) {\n            if (this.shouldRecompute(curr, dst)) {\n                this.curr = curr;\n                this.dst = dst;\n                this.path = null;\n                this.aStar = this.newAStar(curr, dst);\n                this.computeFinished = false;\n                return this.nextTile(curr, dst);\n            }\n            else {\n                return { type: _AStar__WEBPACK_IMPORTED_MODULE_0__.PathFindResultType.NextTile, tile: this.path.shift() };\n            }\n        }\n        switch (this.aStar.compute()) {\n            case _AStar__WEBPACK_IMPORTED_MODULE_0__.PathFindResultType.Completed:\n                this.computeFinished = true;\n                this.path = this.aStar.reconstructPath();\n                // Remove the start tile\n                this.path.shift();\n                return this.nextTile(curr, dst);\n            case _AStar__WEBPACK_IMPORTED_MODULE_0__.PathFindResultType.Pending:\n                return { type: _AStar__WEBPACK_IMPORTED_MODULE_0__.PathFindResultType.Pending };\n            case _AStar__WEBPACK_IMPORTED_MODULE_0__.PathFindResultType.PathNotFound:\n                return { type: _AStar__WEBPACK_IMPORTED_MODULE_0__.PathFindResultType.PathNotFound };\n        }\n    }\n    shouldRecompute(curr, dst) {\n        if (this.path == null || this.curr == null || this.dst == null) {\n            return true;\n        }\n        const dist = this.game.manhattanDist(curr, dst);\n        let tolerance = 10;\n        if (dist > 50) {\n            tolerance = 10;\n        }\n        else if (dist > 25) {\n            tolerance = 5;\n        }\n        else {\n            tolerance = 0;\n        }\n        if (this.game.manhattanDist(this.dst, dst) > tolerance) {\n            return true;\n        }\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/pathfinding/PathFinding.ts?',
        );

        /***/
      },

    /***/ "./src/core/pathfinding/SerialAStar.ts":
      /*!*********************************************!*\
  !*** ./src/core/pathfinding/SerialAStar.ts ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SerialAStar: () => (/* binding */ SerialAStar)\n/* harmony export */ });\n/* harmony import */ var _datastructures_js_priority_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datastructures-js/priority-queue */ "./node_modules/@datastructures-js/priority-queue/index.js");\n/* harmony import */ var _datastructures_js_priority_queue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_datastructures_js_priority_queue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AStar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AStar */ "./src/core/pathfinding/AStar.ts");\n/* harmony import */ var _Consolex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Consolex */ "./src/core/Consolex.ts");\n\n\n\nclass SerialAStar {\n    constructor(src, dst, canMove, iterations, maxTries, gameMap) {\n        this.src = src;\n        this.dst = dst;\n        this.canMove = canMove;\n        this.iterations = iterations;\n        this.maxTries = maxTries;\n        this.gameMap = gameMap;\n        this.fwdOpenSet = new _datastructures_js_priority_queue__WEBPACK_IMPORTED_MODULE_0__.PriorityQueue((a, b) => a.fScore - b.fScore);\n        this.bwdOpenSet = new _datastructures_js_priority_queue__WEBPACK_IMPORTED_MODULE_0__.PriorityQueue((a, b) => a.fScore - b.fScore);\n        this.fwdCameFrom = new Map();\n        this.bwdCameFrom = new Map();\n        this.fwdGScore = new Map();\n        this.bwdGScore = new Map();\n        this.meetingPoint = null;\n        this.completed = false;\n        // Initialize forward search\n        this.fwdGScore.set(src, 0);\n        this.fwdOpenSet.enqueue({ tile: src, fScore: this.heuristic(src, dst) });\n        // Initialize backward search\n        this.bwdGScore.set(dst, 0);\n        this.bwdOpenSet.enqueue({ tile: dst, fScore: this.heuristic(dst, src) });\n    }\n    compute() {\n        if (this.completed)\n            return _AStar__WEBPACK_IMPORTED_MODULE_1__.PathFindResultType.Completed;\n        this.maxTries -= 1;\n        let iterations = this.iterations;\n        while (!this.fwdOpenSet.isEmpty() && !this.bwdOpenSet.isEmpty()) {\n            iterations--;\n            if (iterations <= 0) {\n                if (this.maxTries <= 0) {\n                    return _AStar__WEBPACK_IMPORTED_MODULE_1__.PathFindResultType.PathNotFound;\n                }\n                return _AStar__WEBPACK_IMPORTED_MODULE_1__.PathFindResultType.Pending;\n            }\n            // Process forward search\n            const fwdCurrent = this.fwdOpenSet.dequeue().tile;\n            if (this.bwdGScore.has(fwdCurrent)) {\n                // We found a meeting point!\n                this.meetingPoint = fwdCurrent;\n                this.completed = true;\n                return _AStar__WEBPACK_IMPORTED_MODULE_1__.PathFindResultType.Completed;\n            }\n            this.expandTileRef(fwdCurrent, true);\n            // Process backward search\n            const bwdCurrent = this.bwdOpenSet.dequeue().tile;\n            if (this.fwdGScore.has(bwdCurrent)) {\n                // We found a meeting point!\n                this.meetingPoint = bwdCurrent;\n                this.completed = true;\n                return _AStar__WEBPACK_IMPORTED_MODULE_1__.PathFindResultType.Completed;\n            }\n            this.expandTileRef(bwdCurrent, false);\n        }\n        return this.completed\n            ? _AStar__WEBPACK_IMPORTED_MODULE_1__.PathFindResultType.Completed\n            : _AStar__WEBPACK_IMPORTED_MODULE_1__.PathFindResultType.PathNotFound;\n    }\n    expandTileRef(current, isForward) {\n        for (const neighbor of this.gameMap.neighbors(current)) {\n            if (neighbor != (isForward ? this.dst : this.src) &&\n                !this.canMove(neighbor))\n                continue;\n            const gScore = isForward ? this.fwdGScore : this.bwdGScore;\n            const openSet = isForward ? this.fwdOpenSet : this.bwdOpenSet;\n            const cameFrom = isForward ? this.fwdCameFrom : this.bwdCameFrom;\n            const tentativeGScore = gScore.get(current) + this.gameMap.cost(neighbor);\n            if (!gScore.has(neighbor) || tentativeGScore < gScore.get(neighbor)) {\n                cameFrom.set(neighbor, current);\n                gScore.set(neighbor, tentativeGScore);\n                const fScore = tentativeGScore +\n                    this.heuristic(neighbor, isForward ? this.dst : this.src);\n                openSet.enqueue({ tile: neighbor, fScore: fScore });\n            }\n        }\n    }\n    heuristic(a, b) {\n        // TODO use wrapped\n        try {\n            return (1.1 * Math.abs(this.gameMap.x(a) - this.gameMap.x(b)) +\n                Math.abs(this.gameMap.y(a) - this.gameMap.y(b)));\n        }\n        catch {\n            _Consolex__WEBPACK_IMPORTED_MODULE_2__.consolex.log("uh oh");\n        }\n    }\n    reconstructPath() {\n        if (!this.meetingPoint)\n            return [];\n        // Reconstruct path from start to meeting point\n        const fwdPath = [this.meetingPoint];\n        let current = this.meetingPoint;\n        while (this.fwdCameFrom.has(current)) {\n            current = this.fwdCameFrom.get(current);\n            fwdPath.unshift(current);\n        }\n        // Reconstruct path from meeting point to goal\n        current = this.meetingPoint;\n        while (this.bwdCameFrom.has(current)) {\n            current = this.bwdCameFrom.get(current);\n            fwdPath.push(current);\n        }\n        return fwdPath;\n    }\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/pathfinding/SerialAStar.ts?',
        );

        /***/
      },

    /***/ "./src/core/validations/username.ts":
      /*!******************************************!*\
  !*** ./src/core/validations/username.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MAX_USERNAME_LENGTH: () => (/* binding */ MAX_USERNAME_LENGTH),\n/* harmony export */   MIN_USERNAME_LENGTH: () => (/* binding */ MIN_USERNAME_LENGTH),\n/* harmony export */   fixProfaneUsername: () => (/* binding */ fixProfaneUsername),\n/* harmony export */   isProfaneUsername: () => (/* binding */ isProfaneUsername),\n/* harmony export */   sanitizeUsername: () => (/* binding */ sanitizeUsername),\n/* harmony export */   validateUsername: () => (/* binding */ validateUsername)\n/* harmony export */ });\n/* harmony import */ var obscenity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! obscenity */ "./node_modules/obscenity/dist/index.mjs");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util */ "./src/core/Util.ts");\n\n\nconst matcher = new obscenity__WEBPACK_IMPORTED_MODULE_0__.RegExpMatcher({\n    ...obscenity__WEBPACK_IMPORTED_MODULE_0__.englishDataset.build(),\n    ...obscenity__WEBPACK_IMPORTED_MODULE_0__.englishRecommendedTransformers,\n});\nconst MIN_USERNAME_LENGTH = 3;\nconst MAX_USERNAME_LENGTH = 27;\nconst validPattern = /^[a-zA-Z0-9_\\[\\] 🐈🍀üÜ]+$/u;\nconst shadowNames = [\n    "NicePeopleOnly",\n    "BeKindPlz",\n    "LearningManners",\n    "StayClassy",\n    "BeNicer",\n    "NeedHugs",\n    "MakeFriends",\n];\nfunction fixProfaneUsername(username) {\n    if (isProfaneUsername(username)) {\n        return shadowNames[(0,_Util__WEBPACK_IMPORTED_MODULE_1__.simpleHash)(username) % shadowNames.length];\n    }\n    return username;\n}\nfunction isProfaneUsername(username) {\n    return matcher.hasMatch(username);\n}\nfunction validateUsername(username) {\n    if (typeof username !== "string") {\n        return { isValid: false, error: "Username must be a string." };\n    }\n    if (username.length < MIN_USERNAME_LENGTH) {\n        return {\n            isValid: false,\n            error: `Username must be at least ${MIN_USERNAME_LENGTH} characters long.`,\n        };\n    }\n    if (username.length > MAX_USERNAME_LENGTH) {\n        return {\n            isValid: false,\n            error: `Username must not exceed ${MAX_USERNAME_LENGTH} characters.`,\n        };\n    }\n    if (!validPattern.test(username)) {\n        return {\n            isValid: false,\n            error: "Username can only contain letters, numbers, spaces, underscores, and [square brackets].",\n        };\n    }\n    // All checks passed\n    return { isValid: true };\n}\nfunction sanitizeUsername(str) {\n    const sanitized = str\n        .replace(/[^a-zA-Z0-9_\\[\\] 🐈🍀]/gu, "")\n        .slice(0, MAX_USERNAME_LENGTH);\n    return sanitized.padEnd(MIN_USERNAME_LENGTH, "x");\n}\n\n\n//# sourceURL=webpack://openfront-client/./src/core/validations/username.ts?',
        );

        /***/
      },

    /***/ "./src/core/worker/Worker.worker.ts":
      /*!******************************************!*\
  !*** ./src/core/worker/Worker.worker.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameRunner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameRunner */ "./src/core/GameRunner.ts");\n\nconst ctx = self;\nlet gameRunner = null;\nfunction gameUpdate(gu) {\n    sendMessage({\n        type: "game_update",\n        gameUpdate: gu,\n    });\n}\nfunction sendMessage(message) {\n    ctx.postMessage(message);\n}\nctx.addEventListener("message", async (e) => {\n    const message = e.data;\n    switch (message.type) {\n        case "heartbeat":\n            (await gameRunner).executeNextTick();\n            break;\n        case "init":\n            try {\n                gameRunner = (0,_GameRunner__WEBPACK_IMPORTED_MODULE_0__.createGameRunner)(message.gameID, message.gameConfig, message.clientID, gameUpdate).then((gr) => {\n                    sendMessage({\n                        type: "initialized",\n                        id: message.id,\n                    });\n                    return gr;\n                });\n            }\n            catch (error) {\n                console.error("Failed to initialize game runner:", error);\n                throw error;\n            }\n            break;\n        case "turn":\n            if (!gameRunner) {\n                throw new Error("Game runner not initialized");\n            }\n            try {\n                const gr = await gameRunner;\n                await gr.addTurn(message.turn);\n            }\n            catch (error) {\n                console.error("Failed to process turn:", error);\n                throw error;\n            }\n            break;\n        case "player_actions":\n            if (!gameRunner) {\n                throw new Error("Game runner not initialized");\n            }\n            try {\n                const actions = (await gameRunner).playerActions(message.playerID, message.x, message.y);\n                sendMessage({\n                    type: "player_actions_result",\n                    id: message.id,\n                    result: actions,\n                });\n            }\n            catch (error) {\n                console.error("Failed to check borders:", error);\n                throw error;\n            }\n            break;\n        case "player_profile":\n            if (!gameRunner) {\n                throw new Error("Game runner not initialized");\n            }\n            try {\n                const profile = (await gameRunner).playerProfile(message.playerID);\n                sendMessage({\n                    type: "player_profile_result",\n                    id: message.id,\n                    result: profile,\n                });\n            }\n            catch (error) {\n                console.error("Failed to check borders:", error);\n                throw error;\n            }\n            break;\n        default:\n            console.warn("Unknown message :", message);\n    }\n});\n// Error handling\nctx.addEventListener("error", (error) => {\n    console.error("Worker error:", error);\n});\nctx.addEventListener("unhandledrejection", (event) => {\n    console.error("Unhandled promise rejection in worker:", event);\n});\n\n\n//# sourceURL=webpack://openfront-client/./src/core/worker/Worker.worker.ts?',
        );

        /***/
      },

    /***/ "./resources/maps lazy recursive !!./node_modules/binary-loader/index.js! ^\\.\\/.*Mini\\.bin$":
      /*!**********************************************************************************************************!*\
  !*** ./resources/maps/ lazy !!./node_modules/binary-loader/index.js! ^\.\/.*Mini\.bin$ namespace object ***!
  \**********************************************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var map = {\n\t"./AfricaMini.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/AfricaMini.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_AfricaMini_bin"\n\t],\n\t"./AsiaMini.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/AsiaMini.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_AsiaMini_bin"\n\t],\n\t"./BlackSeaMini.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/BlackSeaMini.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_BlackSeaMini_bin"\n\t],\n\t"./EuropeMini.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/EuropeMini.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_EuropeMini_bin"\n\t],\n\t"./MarsMini.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/MarsMini.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_MarsMini_bin"\n\t],\n\t"./MenaMini.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/MenaMini.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_MenaMini_bin"\n\t],\n\t"./NorthAmericaMini.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/NorthAmericaMini.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_NorthAmericaMini_bin"\n\t],\n\t"./OceaniaMini.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/OceaniaMini.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_OceaniaMini_bin"\n\t],\n\t"./WorldMapMini.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/WorldMapMini.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_WorldMapMini_bin"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error("Cannot find module \'" + req + "\'");\n\t\t\te.code = \'MODULE_NOT_FOUND\';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__.t(id, 7 | 16);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = "./resources/maps lazy recursive !!./node_modules/binary-loader/index.js! ^\\\\.\\\\/.*Mini\\\\.bin$";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://openfront-client/_^\\.\\/.*Mini\\.bin$_namespace_object?./resources/maps/_lazy_!!./node_modules/binary-loader/index.js',
        );

        /***/
      },

    /***/ "./resources/maps lazy recursive !!./node_modules/binary-loader/index.js! ^\\.\\/.*\\.bin$":
      /*!******************************************************************************************************!*\
  !*** ./resources/maps/ lazy !!./node_modules/binary-loader/index.js! ^\.\/.*\.bin$ namespace object ***!
  \******************************************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var map = {\n\t"./Africa.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/Africa.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_Africa_bin"\n\t],\n\t"./AfricaMini.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/AfricaMini.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_AfricaMini_bin"\n\t],\n\t"./Asia.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/Asia.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_Asia_bin"\n\t],\n\t"./AsiaMini.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/AsiaMini.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_AsiaMini_bin"\n\t],\n\t"./BlackSea.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/BlackSea.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_BlackSea_bin"\n\t],\n\t"./BlackSeaMini.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/BlackSeaMini.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_BlackSeaMini_bin"\n\t],\n\t"./Europe.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/Europe.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_Europe_bin"\n\t],\n\t"./EuropeMini.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/EuropeMini.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_EuropeMini_bin"\n\t],\n\t"./Mars.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/Mars.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_Mars_bin"\n\t],\n\t"./MarsMini.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/MarsMini.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_MarsMini_bin"\n\t],\n\t"./Mena.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/Mena.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_Mena_bin"\n\t],\n\t"./MenaMini.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/MenaMini.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_MenaMini_bin"\n\t],\n\t"./NorthAmerica.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/NorthAmerica.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_NorthAmerica_bin"\n\t],\n\t"./NorthAmericaMini.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/NorthAmericaMini.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_NorthAmericaMini_bin"\n\t],\n\t"./Oceania.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/Oceania.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_Oceania_bin"\n\t],\n\t"./OceaniaMini.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/OceaniaMini.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_OceaniaMini_bin"\n\t],\n\t"./WorldMap.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/WorldMap.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_WorldMap_bin"\n\t],\n\t"./WorldMapMini.bin": [\n\t\t"./node_modules/binary-loader/index.js!./resources/maps/WorldMapMini.bin",\n\t\t"node_modules_binary-loader_index_js_resources_maps_WorldMapMini_bin"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error("Cannot find module \'" + req + "\'");\n\t\t\te.code = \'MODULE_NOT_FOUND\';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__.t(id, 7 | 16);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = "./resources/maps lazy recursive !!./node_modules/binary-loader/index.js! ^\\\\.\\\\/.*\\\\.bin$";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://openfront-client/_^\\.\\/.*\\.bin$_namespace_object?./resources/maps/_lazy_!!./node_modules/binary-loader/index.js',
        );

        /***/
      },

    /***/ "./resources/maps lazy recursive ^\\.\\/.*\\.json$":
      /*!**************************************************************!*\
  !*** ./resources/maps/ lazy ^\.\/.*\.json$ namespace object ***!
  \**************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var map = {\n\t"./Africa.json": [\n\t\t"./resources/maps/Africa.json",\n\t\t"resources_maps_Africa_json"\n\t],\n\t"./Asia.json": [\n\t\t"./resources/maps/Asia.json",\n\t\t"resources_maps_Asia_json"\n\t],\n\t"./BlackSea.json": [\n\t\t"./resources/maps/BlackSea.json",\n\t\t"resources_maps_BlackSea_json"\n\t],\n\t"./Europe.json": [\n\t\t"./resources/maps/Europe.json",\n\t\t"resources_maps_Europe_json"\n\t],\n\t"./Mars.json": [\n\t\t"./resources/maps/Mars.json",\n\t\t"resources_maps_Mars_json"\n\t],\n\t"./Mena.json": [\n\t\t"./resources/maps/Mena.json",\n\t\t"resources_maps_Mena_json"\n\t],\n\t"./NorthAmerica.json": [\n\t\t"./resources/maps/NorthAmerica.json",\n\t\t"resources_maps_NorthAmerica_json"\n\t],\n\t"./Oceania.json": [\n\t\t"./resources/maps/Oceania.json",\n\t\t"resources_maps_Oceania_json"\n\t],\n\t"./WorldMap.json": [\n\t\t"./resources/maps/WorldMap.json",\n\t\t"resources_maps_WorldMap_json"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error("Cannot find module \'" + req + "\'");\n\t\t\te.code = \'MODULE_NOT_FOUND\';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__.t(id, 3 | 16);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = "./resources/maps lazy recursive ^\\\\.\\\\/.*\\\\.json$";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://openfront-client/./resources/maps/_lazy_^\\.\\/.*\\.json$_namespace_object?',
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ var execOptions = {
      id: moduleId,
      module: module,
      factory: __webpack_modules__[moduleId],
      require: __webpack_require__,
    };
    /******/ __webpack_require__.i.forEach(function (handler) {
      handler(execOptions);
    });
    /******/ module = execOptions.module;
    /******/ execOptions.factory.call(
      module.exports,
      module,
      module.exports,
      execOptions.require,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = __webpack_module_cache__;
  /******/
  /******/ // expose the module execution interceptor
  /******/ __webpack_require__.i = [];
  /******/
  /******/ // the startup function
  /******/ __webpack_require__.x = () => {
    /******/ // Load entry module and return exports
    /******/ var __webpack_exports__ = __webpack_require__.O(
      undefined,
      ["vendors"],
      () => __webpack_require__("./src/core/worker/Worker.worker.ts"),
    );
    /******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
    /******/ return __webpack_exports__;
    /******/
  };
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/chunk loaded */
  /******/ (() => {
    /******/ var deferred = [];
    /******/ __webpack_require__.O = (result, chunkIds, fn, priority) => {
      /******/ if (chunkIds) {
        /******/ priority = priority || 0;
        /******/ for (
          var i = deferred.length;
          i > 0 && deferred[i - 1][2] > priority;
          i--
        )
          deferred[i] = deferred[i - 1];
        /******/ deferred[i] = [chunkIds, fn, priority];
        /******/ return;
        /******/
      }
      /******/ var notFulfilled = Infinity;
      /******/ for (var i = 0; i < deferred.length; i++) {
        /******/ var [chunkIds, fn, priority] = deferred[i];
        /******/ var fulfilled = true;
        /******/ for (var j = 0; j < chunkIds.length; j++) {
          /******/ if (
            (priority & (1 === 0) || notFulfilled >= priority) &&
            Object.keys(__webpack_require__.O).every((key) =>
              __webpack_require__.O[key](chunkIds[j]),
            )
          ) {
            /******/ chunkIds.splice(j--, 1);
            /******/
          } else {
            /******/ fulfilled = false;
            /******/ if (priority < notFulfilled) notFulfilled = priority;
            /******/
          }
          /******/
        }
        /******/ if (fulfilled) {
          /******/ deferred.splice(i--, 1);
          /******/ var r = fn();
          /******/ if (r !== undefined) result = r;
          /******/
        }
        /******/
      }
      /******/ return result;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/create fake namespace object */
  /******/ (() => {
    /******/ var getProto = Object.getPrototypeOf
      ? (obj) => Object.getPrototypeOf(obj)
      : (obj) => obj.__proto__;
    /******/ var leafPrototypes;
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 16: return value when it's Promise-like
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function (value, mode) {
      /******/ if (mode & 1) value = this(value);
      /******/ if (mode & 8) return value;
      /******/ if (typeof value === "object" && value) {
        /******/ if (mode & 4 && value.__esModule) return value;
        /******/ if (mode & 16 && typeof value.then === "function")
          return value;
        /******/
      }
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ var def = {};
      /******/ leafPrototypes = leafPrototypes || [
        null,
        getProto({}),
        getProto([]),
        getProto(getProto),
      ];
      /******/ for (
        var current = mode & 2 && value;
        typeof current == "object" && !~leafPrototypes.indexOf(current);
        current = getProto(current)
      ) {
        /******/ Object.getOwnPropertyNames(current).forEach(
          (key) => (def[key] = () => value[key]),
        );
        /******/
      }
      /******/ def["default"] = () => value;
      /******/ __webpack_require__.d(ns, def);
      /******/ return ns;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/ensure chunk */
  /******/ (() => {
    /******/ __webpack_require__.f = {};
    /******/ // This file contains only the entry chunk.
    /******/ // The chunk loading function for additional chunks
    /******/ __webpack_require__.e = (chunkId) => {
      /******/ return Promise.all(
        Object.keys(__webpack_require__.f).reduce((promises, key) => {
          /******/ __webpack_require__.f[key](chunkId, promises);
          /******/ return promises;
          /******/
        }, []),
      );
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/get javascript chunk filename */
  /******/ (() => {
    /******/ // This function allow to reference async chunks and sibling chunks for the entrypoint
    /******/ __webpack_require__.u = (chunkId) => {
      /******/ // return url for filenames based on template
      /******/ return (
        "js/" +
        chunkId +
        "." +
        {
          "node_modules_binary-loader_index_js_resources_maps_Africa_bin":
            "83eb82ae7108bee10f6b",
          "node_modules_binary-loader_index_js_resources_maps_AfricaMini_bin":
            "29a711bfcaa0c4426dc1",
          "node_modules_binary-loader_index_js_resources_maps_Asia_bin":
            "7326d1ba6a73b665e1ba",
          "node_modules_binary-loader_index_js_resources_maps_AsiaMini_bin":
            "66b47a79f2c0448e596c",
          "node_modules_binary-loader_index_js_resources_maps_BlackSea_bin":
            "6f15d2330f3e76f728bc",
          "node_modules_binary-loader_index_js_resources_maps_BlackSeaMini_bin":
            "9eae9ecb60214b5082d0",
          "node_modules_binary-loader_index_js_resources_maps_Europe_bin":
            "a13e4b7ee4adb53126b9",
          "node_modules_binary-loader_index_js_resources_maps_EuropeMini_bin":
            "e37d306fafdb348ac0ab",
          "node_modules_binary-loader_index_js_resources_maps_Mars_bin":
            "80b49e42d2bc997f991c",
          "node_modules_binary-loader_index_js_resources_maps_MarsMini_bin":
            "4d4ecc580de0c34db300",
          "node_modules_binary-loader_index_js_resources_maps_Mena_bin":
            "2a2f12607720ce8edaf5",
          "node_modules_binary-loader_index_js_resources_maps_MenaMini_bin":
            "4e4e9a443f1d2ea498f8",
          "node_modules_binary-loader_index_js_resources_maps_NorthAmerica_bin":
            "fcda5cef29dfe76bf017",
          "node_modules_binary-loader_index_js_resources_maps_NorthAmericaMini_bin":
            "9b633125e05c503f74e4",
          "node_modules_binary-loader_index_js_resources_maps_Oceania_bin":
            "e22796616bf65488d368",
          "node_modules_binary-loader_index_js_resources_maps_OceaniaMini_bin":
            "c36ff58d622db51ae9a9",
          "node_modules_binary-loader_index_js_resources_maps_WorldMap_bin":
            "e53cc71628d26704d24c",
          "node_modules_binary-loader_index_js_resources_maps_WorldMapMini_bin":
            "decc63058b50b0412565",
          resources_maps_Africa_json: "121e1f87f702dec635b5",
          resources_maps_Asia_json: "ea468e37678a363d243a",
          resources_maps_BlackSea_json: "bfdd463f445f42eb0f30",
          resources_maps_Europe_json: "6ea3dcef2dd09185d599",
          resources_maps_Mars_json: "f1f7119f7be61fe38c71",
          resources_maps_Mena_json: "6240036732b60ab76e55",
          resources_maps_NorthAmerica_json: "c2a5a6320d6c0fc5b43b",
          resources_maps_Oceania_json: "01717c44445412c2ba66",
          resources_maps_WorldMap_json: "915449304055e0690a4f",
          vendors: "f41b3eae754ed9f9e00c",
        }[chunkId] +
        ".js"
      );
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/get javascript update chunk filename */
  /******/ (() => {
    /******/ // This function allow to reference all chunks
    /******/ __webpack_require__.hu = (chunkId) => {
      /******/ // return url for filenames based on template
      /******/ return (
        "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js"
      );
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/get update manifest filename */
  /******/ (() => {
    /******/ __webpack_require__.hmrF = () =>
      "e5eab6034bd9525e4c62." + __webpack_require__.h() + ".hot-update.json";
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/getFullHash */
  /******/ (() => {
    /******/ __webpack_require__.h = () => "abf62720440bf42a93ca";
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hot module replacement */
  /******/ (() => {
    /******/ var currentModuleData = {};
    /******/ var installedModules = __webpack_require__.c;
    /******/
    /******/ // module and require creation
    /******/ var currentChildModule;
    /******/ var currentParents = [];
    /******/
    /******/ // status
    /******/ var registeredStatusHandlers = [];
    /******/ var currentStatus = "idle";
    /******/
    /******/ // while downloading
    /******/ var blockingPromises = 0;
    /******/ var blockingPromisesWaiting = [];
    /******/
    /******/ // The update info
    /******/ var currentUpdateApplyHandlers;
    /******/ var queuedInvalidatedModules;
    /******/
    /******/ __webpack_require__.hmrD = currentModuleData;
    /******/
    /******/ __webpack_require__.i.push(function (options) {
      /******/ var module = options.module;
      /******/ var require = createRequire(options.require, options.id);
      /******/ module.hot = createModuleHotObject(options.id, module);
      /******/ module.parents = currentParents;
      /******/ module.children = [];
      /******/ currentParents = [];
      /******/ options.require = require;
      /******/
    });
    /******/
    /******/ __webpack_require__.hmrC = {};
    /******/ __webpack_require__.hmrI = {};
    /******/
    /******/ function createRequire(require, moduleId) {
      /******/ var me = installedModules[moduleId];
      /******/ if (!me) return require;
      /******/ var fn = function (request) {
        /******/ if (me.hot.active) {
          /******/ if (installedModules[request]) {
            /******/ var parents = installedModules[request].parents;
            /******/ if (parents.indexOf(moduleId) === -1) {
              /******/ parents.push(moduleId);
              /******/
            }
            /******/
          } else {
            /******/ currentParents = [moduleId];
            /******/ currentChildModule = request;
            /******/
          }
          /******/ if (me.children.indexOf(request) === -1) {
            /******/ me.children.push(request);
            /******/
          }
          /******/
        } else {
          /******/ console.warn(
            /******/ "[HMR] unexpected require(" +
              /******/ request +
              /******/ ") from disposed module " +
              /******/ moduleId,
            /******/
          );
          /******/ currentParents = [];
          /******/
        }
        /******/ return require(request);
        /******/
      };
      /******/ var createPropertyDescriptor = function (name) {
        /******/ return {
          /******/ configurable: true,
          /******/ enumerable: true,
          /******/ get: function () {
            /******/ return require[name];
            /******/
          },
          /******/ set: function (value) {
            /******/ require[name] = value;
            /******/
          },
          /******/
        };
        /******/
      };
      /******/ for (var name in require) {
        /******/ if (
          Object.prototype.hasOwnProperty.call(require, name) &&
          name !== "e"
        ) {
          /******/ Object.defineProperty(
            fn,
            name,
            createPropertyDescriptor(name),
          );
          /******/
        }
        /******/
      }
      /******/ fn.e = function (chunkId, fetchPriority) {
        /******/ return trackBlockingPromise(require.e(chunkId, fetchPriority));
        /******/
      };
      /******/ return fn;
      /******/
    }
    /******/
    /******/ function createModuleHotObject(moduleId, me) {
      /******/ var _main = currentChildModule !== moduleId;
      /******/ var hot = {
        /******/ // private stuff
        /******/ _acceptedDependencies: {},
        /******/ _acceptedErrorHandlers: {},
        /******/ _declinedDependencies: {},
        /******/ _selfAccepted: false,
        /******/ _selfDeclined: false,
        /******/ _selfInvalidated: false,
        /******/ _disposeHandlers: [],
        /******/ _main: _main,
        /******/ _requireSelf: function () {
          /******/ currentParents = me.parents.slice();
          /******/ currentChildModule = _main ? undefined : moduleId;
          /******/ __webpack_require__(moduleId);
          /******/
        },
        /******/
        /******/ // Module API
        /******/ active: true,
        /******/ accept: function (dep, callback, errorHandler) {
          /******/ if (dep === undefined) hot._selfAccepted = true;
          /******/ else if (typeof dep === "function") hot._selfAccepted = dep;
          /******/ else if (typeof dep === "object" && dep !== null) {
            /******/ for (var i = 0; i < dep.length; i++) {
              /******/ hot._acceptedDependencies[dep[i]] =
                callback || function () {};
              /******/ hot._acceptedErrorHandlers[dep[i]] = errorHandler;
              /******/
            }
            /******/
          } else {
            /******/ hot._acceptedDependencies[dep] =
              callback || function () {};
            /******/ hot._acceptedErrorHandlers[dep] = errorHandler;
            /******/
          }
          /******/
        },
        /******/ decline: function (dep) {
          /******/ if (dep === undefined) hot._selfDeclined = true;
          /******/ else if (typeof dep === "object" && dep !== null)
            /******/ for (var i = 0; i < dep.length; i++)
              /******/ hot._declinedDependencies[dep[i]] = true;
          /******/ else hot._declinedDependencies[dep] = true;
          /******/
        },
        /******/ dispose: function (callback) {
          /******/ hot._disposeHandlers.push(callback);
          /******/
        },
        /******/ addDisposeHandler: function (callback) {
          /******/ hot._disposeHandlers.push(callback);
          /******/
        },
        /******/ removeDisposeHandler: function (callback) {
          /******/ var idx = hot._disposeHandlers.indexOf(callback);
          /******/ if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
          /******/
        },
        /******/ invalidate: function () {
          /******/ this._selfInvalidated = true;
          /******/ switch (currentStatus) {
            /******/ case "idle":
              /******/ currentUpdateApplyHandlers = [];
              /******/ Object.keys(__webpack_require__.hmrI).forEach(
                function (key) {
                  /******/ __webpack_require__.hmrI[key](
                    /******/ moduleId,
                    /******/ currentUpdateApplyHandlers,
                    /******/
                  );
                  /******/
                },
              );
              /******/ setStatus("ready");
              /******/ break;
            /******/ case "ready":
              /******/ Object.keys(__webpack_require__.hmrI).forEach(
                function (key) {
                  /******/ __webpack_require__.hmrI[key](
                    /******/ moduleId,
                    /******/ currentUpdateApplyHandlers,
                    /******/
                  );
                  /******/
                },
              );
              /******/ break;
            /******/ case "prepare":
            /******/ case "check":
            /******/ case "dispose":
            /******/ case "apply":
              /******/ (queuedInvalidatedModules =
                queuedInvalidatedModules || []).push(
                /******/ moduleId,
                /******/
              );
              /******/ break;
            /******/ default: // ignore requests in error states
              /******/ /******/ break;
            /******/
          }
          /******/
        },
        /******/
        /******/ // Management API
        /******/ check: hotCheck,
        /******/ apply: hotApply,
        /******/ status: function (l) {
          /******/ if (!l) return currentStatus;
          /******/ registeredStatusHandlers.push(l);
          /******/
        },
        /******/ addStatusHandler: function (l) {
          /******/ registeredStatusHandlers.push(l);
          /******/
        },
        /******/ removeStatusHandler: function (l) {
          /******/ var idx = registeredStatusHandlers.indexOf(l);
          /******/ if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
          /******/
        },
        /******/
        /******/ // inherit from previous dispose call
        /******/ data: currentModuleData[moduleId],
        /******/
      };
      /******/ currentChildModule = undefined;
      /******/ return hot;
      /******/
    }
    /******/
    /******/ function setStatus(newStatus) {
      /******/ currentStatus = newStatus;
      /******/ var results = [];
      /******/
      /******/ for (var i = 0; i < registeredStatusHandlers.length; i++)
        /******/ results[i] = registeredStatusHandlers[i].call(null, newStatus);
      /******/
      /******/ return Promise.all(results).then(function () {});
      /******/
    }
    /******/
    /******/ function unblock() {
      /******/ if (--blockingPromises === 0) {
        /******/ setStatus("ready").then(function () {
          /******/ if (blockingPromises === 0) {
            /******/ var list = blockingPromisesWaiting;
            /******/ blockingPromisesWaiting = [];
            /******/ for (var i = 0; i < list.length; i++) {
              /******/ list[i]();
              /******/
            }
            /******/
          }
          /******/
        });
        /******/
      }
      /******/
    }
    /******/
    /******/ function trackBlockingPromise(promise) {
      /******/ switch (currentStatus) {
        /******/ case "ready":
          /******/ setStatus("prepare");
        /******/ /* fallthrough */
        /******/ case "prepare":
          /******/ blockingPromises++;
          /******/ promise.then(unblock, unblock);
          /******/ return promise;
        /******/ default:
          /******/ return promise;
        /******/
      }
      /******/
    }
    /******/
    /******/ function waitForBlockingPromises(fn) {
      /******/ if (blockingPromises === 0) return fn();
      /******/ return new Promise(function (resolve) {
        /******/ blockingPromisesWaiting.push(function () {
          /******/ resolve(fn());
          /******/
        });
        /******/
      });
      /******/
    }
    /******/
    /******/ function hotCheck(applyOnUpdate) {
      /******/ if (currentStatus !== "idle") {
        /******/ throw new Error("check() is only allowed in idle status");
        /******/
      }
      /******/ return setStatus("check")
        /******/ .then(__webpack_require__.hmrM)
        /******/ .then(function (update) {
          /******/ if (!update) {
            /******/ return setStatus(
              applyInvalidatedModules() ? "ready" : "idle",
            ).then(
              /******/ function () {
                /******/ return null;
                /******/
              },
              /******/
            );
            /******/
          }
          /******/
          /******/ return setStatus("prepare").then(function () {
            /******/ var updatedModules = [];
            /******/ currentUpdateApplyHandlers = [];
            /******/
            /******/ return Promise.all(
              /******/ Object.keys(__webpack_require__.hmrC).reduce(function (
                /******/ promises,
                /******/ key,
                /******/
              ) {
                /******/ __webpack_require__.hmrC[key](
                  /******/ update.c,
                  /******/ update.r,
                  /******/ update.m,
                  /******/ promises,
                  /******/ currentUpdateApplyHandlers,
                  /******/ updatedModules,
                  /******/
                );
                /******/ return promises;
                /******/
              }, []),
              /******/
            ).then(function () {
              /******/ return waitForBlockingPromises(function () {
                /******/ if (applyOnUpdate) {
                  /******/ return internalApply(applyOnUpdate);
                  /******/
                }
                /******/ return setStatus("ready").then(function () {
                  /******/ return updatedModules;
                  /******/
                });
                /******/
              });
              /******/
            });
            /******/
          });
          /******/
        });
      /******/
    }
    /******/
    /******/ function hotApply(options) {
      /******/ if (currentStatus !== "ready") {
        /******/ return Promise.resolve().then(function () {
          /******/ throw new Error(
            /******/ "apply() is only allowed in ready status (state: " +
              /******/ currentStatus +
              /******/ ")",
            /******/
          );
          /******/
        });
        /******/
      }
      /******/ return internalApply(options);
      /******/
    }
    /******/
    /******/ function internalApply(options) {
      /******/ options = options || {};
      /******/
      /******/ applyInvalidatedModules();
      /******/
      /******/ var results = currentUpdateApplyHandlers.map(function (handler) {
        /******/ return handler(options);
        /******/
      });
      /******/ currentUpdateApplyHandlers = undefined;
      /******/
      /******/ var errors = results
        /******/ .map(function (r) {
          /******/ return r.error;
          /******/
        })
        /******/ .filter(Boolean);
      /******/
      /******/ if (errors.length > 0) {
        /******/ return setStatus("abort").then(function () {
          /******/ throw errors[0];
          /******/
        });
        /******/
      }
      /******/
      /******/ // Now in "dispose" phase
      /******/ var disposePromise = setStatus("dispose");
      /******/
      /******/ results.forEach(function (result) {
        /******/ if (result.dispose) result.dispose();
        /******/
      });
      /******/
      /******/ // Now in "apply" phase
      /******/ var applyPromise = setStatus("apply");
      /******/
      /******/ var error;
      /******/ var reportError = function (err) {
        /******/ if (!error) error = err;
        /******/
      };
      /******/
      /******/ var outdatedModules = [];
      /******/ results.forEach(function (result) {
        /******/ if (result.apply) {
          /******/ var modules = result.apply(reportError);
          /******/ if (modules) {
            /******/ for (var i = 0; i < modules.length; i++) {
              /******/ outdatedModules.push(modules[i]);
              /******/
            }
            /******/
          }
          /******/
        }
        /******/
      });
      /******/
      /******/ return Promise.all([disposePromise, applyPromise]).then(
        function () {
          /******/ // handle errors in accept handlers and self accepted module load
          /******/ if (error) {
            /******/ return setStatus("fail").then(function () {
              /******/ throw error;
              /******/
            });
            /******/
          }
          /******/
          /******/ if (queuedInvalidatedModules) {
            /******/ return internalApply(options).then(function (list) {
              /******/ outdatedModules.forEach(function (moduleId) {
                /******/ if (list.indexOf(moduleId) < 0) list.push(moduleId);
                /******/
              });
              /******/ return list;
              /******/
            });
            /******/
          }
          /******/
          /******/ return setStatus("idle").then(function () {
            /******/ return outdatedModules;
            /******/
          });
          /******/
        },
      );
      /******/
    }
    /******/
    /******/ function applyInvalidatedModules() {
      /******/ if (queuedInvalidatedModules) {
        /******/ if (!currentUpdateApplyHandlers)
          currentUpdateApplyHandlers = [];
        /******/ Object.keys(__webpack_require__.hmrI).forEach(function (key) {
          /******/ queuedInvalidatedModules.forEach(function (moduleId) {
            /******/ __webpack_require__.hmrI[key](
              /******/ moduleId,
              /******/ currentUpdateApplyHandlers,
              /******/
            );
            /******/
          });
          /******/
        });
        /******/ queuedInvalidatedModules = undefined;
        /******/ return true;
        /******/
      }
      /******/
    }
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ __webpack_require__.p = "/";
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/importScripts chunk loading */
  /******/ (() => {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded chunks
    /******/ // "1" means "already loaded"
    /******/ var installedChunks = (__webpack_require__.hmrS_importScripts =
      __webpack_require__.hmrS_importScripts || {
        /******/ src_core_worker_Worker_worker_ts: 1,
        /******/
      });
    /******/
    /******/ // importScripts chunk loading
    /******/ var installChunk = (data) => {
      /******/ var [chunkIds, moreModules, runtime] = data;
      /******/ for (var moduleId in moreModules) {
        /******/ if (__webpack_require__.o(moreModules, moduleId)) {
          /******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
          /******/
        }
        /******/
      }
      /******/ if (runtime) runtime(__webpack_require__);
      /******/ while (chunkIds.length)
        /******/ installedChunks[chunkIds.pop()] = 1;
      /******/ parentChunkLoadingFunction(data);
      /******/
    };
    /******/ __webpack_require__.f.i = (chunkId, promises) => {
      /******/ // "1" is the signal for "already loaded"
      /******/ if (!installedChunks[chunkId]) {
        /******/ if (true) {
          // all chunks have JS
          /******/ importScripts(
            __webpack_require__.p + __webpack_require__.u(chunkId),
          );
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
    /******/ var chunkLoadingGlobal = (self["webpackChunkopenfront_client"] =
      self["webpackChunkopenfront_client"] || []);
    /******/ var parentChunkLoadingFunction =
      chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
    /******/ chunkLoadingGlobal.push = installChunk;
    /******/
    /******/ function loadUpdateChunk(chunkId, updatedModulesList) {
      /******/ var success = false;
      /******/ self["webpackHotUpdateopenfront_client"] = (
        _,
        moreModules,
        runtime,
      ) => {
        /******/ for (var moduleId in moreModules) {
          /******/ if (__webpack_require__.o(moreModules, moduleId)) {
            /******/ currentUpdate[moduleId] = moreModules[moduleId];
            /******/ if (updatedModulesList) updatedModulesList.push(moduleId);
            /******/
          }
          /******/
        }
        /******/ if (runtime) currentUpdateRuntime.push(runtime);
        /******/ success = true;
        /******/
      };
      /******/ // start update chunk loading
      /******/ importScripts(
        __webpack_require__.p + __webpack_require__.hu(chunkId),
      );
      /******/ if (!success)
        throw new Error("Loading update chunk failed for unknown reason");
      /******/
    }
    /******/
    /******/ var currentUpdateChunks;
    /******/ var currentUpdate;
    /******/ var currentUpdateRemovedChunks;
    /******/ var currentUpdateRuntime;
    /******/ function applyHandler(options) {
      /******/ if (__webpack_require__.f)
        delete __webpack_require__.f.importScriptsHmr;
      /******/ currentUpdateChunks = undefined;
      /******/ function getAffectedModuleEffects(updateModuleId) {
        /******/ var outdatedModules = [updateModuleId];
        /******/ var outdatedDependencies = {};
        /******/
        /******/ var queue = outdatedModules.map(function (id) {
          /******/ return {
            /******/ chain: [id],
            /******/ id: id,
            /******/
          };
          /******/
        });
        /******/ while (queue.length > 0) {
          /******/ var queueItem = queue.pop();
          /******/ var moduleId = queueItem.id;
          /******/ var chain = queueItem.chain;
          /******/ var module = __webpack_require__.c[moduleId];
          /******/ if (
            /******/ !module ||
            /******/ (module.hot._selfAccepted && !module.hot._selfInvalidated)
            /******/
          )
            /******/ continue;
          /******/ if (module.hot._selfDeclined) {
            /******/ return {
              /******/ type: "self-declined",
              /******/ chain: chain,
              /******/ moduleId: moduleId,
              /******/
            };
            /******/
          }
          /******/ if (module.hot._main) {
            /******/ return {
              /******/ type: "unaccepted",
              /******/ chain: chain,
              /******/ moduleId: moduleId,
              /******/
            };
            /******/
          }
          /******/ for (var i = 0; i < module.parents.length; i++) {
            /******/ var parentId = module.parents[i];
            /******/ var parent = __webpack_require__.c[parentId];
            /******/ if (!parent) continue;
            /******/ if (parent.hot._declinedDependencies[moduleId]) {
              /******/ return {
                /******/ type: "declined",
                /******/ chain: chain.concat([parentId]),
                /******/ moduleId: moduleId,
                /******/ parentId: parentId,
                /******/
              };
              /******/
            }
            /******/ if (outdatedModules.indexOf(parentId) !== -1) continue;
            /******/ if (parent.hot._acceptedDependencies[moduleId]) {
              /******/ if (!outdatedDependencies[parentId])
                /******/ outdatedDependencies[parentId] = [];
              /******/ addAllToSet(outdatedDependencies[parentId], [moduleId]);
              /******/ continue;
              /******/
            }
            /******/ delete outdatedDependencies[parentId];
            /******/ outdatedModules.push(parentId);
            /******/ queue.push({
              /******/ chain: chain.concat([parentId]),
              /******/ id: parentId,
              /******/
            });
            /******/
          }
          /******/
        }
        /******/
        /******/ return {
          /******/ type: "accepted",
          /******/ moduleId: updateModuleId,
          /******/ outdatedModules: outdatedModules,
          /******/ outdatedDependencies: outdatedDependencies,
          /******/
        };
        /******/
      }
      /******/
      /******/ function addAllToSet(a, b) {
        /******/ for (var i = 0; i < b.length; i++) {
          /******/ var item = b[i];
          /******/ if (a.indexOf(item) === -1) a.push(item);
          /******/
        }
        /******/
      }
      /******/
      /******/ // at begin all updates modules are outdated
      /******/ // the "outdated" status can propagate to parents if they don't accept the children
      /******/ var outdatedDependencies = {};
      /******/ var outdatedModules = [];
      /******/ var appliedUpdate = {};
      /******/
      /******/ var warnUnexpectedRequire = function warnUnexpectedRequire(
        module,
      ) {
        /******/ console.warn(
          /******/ "[HMR] unexpected require(" +
            module.id +
            ") to disposed module",
          /******/
        );
        /******/
      };
      /******/
      /******/ for (var moduleId in currentUpdate) {
        /******/ if (__webpack_require__.o(currentUpdate, moduleId)) {
          /******/ var newModuleFactory = currentUpdate[moduleId];
          /******/ /** @type {TODO} */
          /******/ var result = newModuleFactory
            ? /******/ getAffectedModuleEffects(moduleId)
            : /******/ {
                /******/ type: "disposed",
                /******/ moduleId: moduleId,
                /******/
              };
          /******/ /** @type {Error|false} */
          /******/ var abortError = false;
          /******/ var doApply = false;
          /******/ var doDispose = false;
          /******/ var chainInfo = "";
          /******/ if (result.chain) {
            /******/ chainInfo =
              "\nUpdate propagation: " + result.chain.join(" -> ");
            /******/
          }
          /******/ switch (result.type) {
            /******/ case "self-declined":
              /******/ if (options.onDeclined) options.onDeclined(result);
              /******/ if (!options.ignoreDeclined)
                /******/ abortError = new Error(
                  /******/ "Aborted because of self decline: " +
                    /******/ result.moduleId +
                    /******/ chainInfo,
                  /******/
                );
              /******/ break;
            /******/ case "declined":
              /******/ if (options.onDeclined) options.onDeclined(result);
              /******/ if (!options.ignoreDeclined)
                /******/ abortError = new Error(
                  /******/ "Aborted because of declined dependency: " +
                    /******/ result.moduleId +
                    /******/ " in " +
                    /******/ result.parentId +
                    /******/ chainInfo,
                  /******/
                );
              /******/ break;
            /******/ case "unaccepted":
              /******/ if (options.onUnaccepted) options.onUnaccepted(result);
              /******/ if (!options.ignoreUnaccepted)
                /******/ abortError = new Error(
                  /******/ "Aborted because " +
                    moduleId +
                    " is not accepted" +
                    chainInfo,
                  /******/
                );
              /******/ break;
            /******/ case "accepted":
              /******/ if (options.onAccepted) options.onAccepted(result);
              /******/ doApply = true;
              /******/ break;
            /******/ case "disposed":
              /******/ if (options.onDisposed) options.onDisposed(result);
              /******/ doDispose = true;
              /******/ break;
            /******/ default:
              /******/ throw new Error("Unexception type " + result.type);
            /******/
          }
          /******/ if (abortError) {
            /******/ return {
              /******/ error: abortError,
              /******/
            };
            /******/
          }
          /******/ if (doApply) {
            /******/ appliedUpdate[moduleId] = newModuleFactory;
            /******/ addAllToSet(outdatedModules, result.outdatedModules);
            /******/ for (moduleId in result.outdatedDependencies) {
              /******/ if (
                __webpack_require__.o(result.outdatedDependencies, moduleId)
              ) {
                /******/ if (!outdatedDependencies[moduleId])
                  /******/ outdatedDependencies[moduleId] = [];
                /******/ addAllToSet(
                  /******/ outdatedDependencies[moduleId],
                  /******/ result.outdatedDependencies[moduleId],
                  /******/
                );
                /******/
              }
              /******/
            }
            /******/
          }
          /******/ if (doDispose) {
            /******/ addAllToSet(outdatedModules, [result.moduleId]);
            /******/ appliedUpdate[moduleId] = warnUnexpectedRequire;
            /******/
          }
          /******/
        }
        /******/
      }
      /******/ currentUpdate = undefined;
      /******/
      /******/ // Store self accepted outdated modules to require them later by the module system
      /******/ var outdatedSelfAcceptedModules = [];
      /******/ for (var j = 0; j < outdatedModules.length; j++) {
        /******/ var outdatedModuleId = outdatedModules[j];
        /******/ var module = __webpack_require__.c[outdatedModuleId];
        /******/ if (
          /******/ module &&
          /******/ (module.hot._selfAccepted || module.hot._main) &&
          /******/ // removed self-accepted modules should not be required
          /******/ appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
          /******/ // when called invalidate self-accepting is not possible
          /******/ !module.hot._selfInvalidated
          /******/
        ) {
          /******/ outdatedSelfAcceptedModules.push({
            /******/ module: outdatedModuleId,
            /******/ require: module.hot._requireSelf,
            /******/ errorHandler: module.hot._selfAccepted,
            /******/
          });
          /******/
        }
        /******/
      }
      /******/
      /******/ var moduleOutdatedDependencies;
      /******/
      /******/ return {
        /******/ dispose: function () {
          /******/ currentUpdateRemovedChunks.forEach(function (chunkId) {
            /******/ delete installedChunks[chunkId];
            /******/
          });
          /******/ currentUpdateRemovedChunks = undefined;
          /******/
          /******/ var idx;
          /******/ var queue = outdatedModules.slice();
          /******/ while (queue.length > 0) {
            /******/ var moduleId = queue.pop();
            /******/ var module = __webpack_require__.c[moduleId];
            /******/ if (!module) continue;
            /******/
            /******/ var data = {};
            /******/
            /******/ // Call dispose handlers
            /******/ var disposeHandlers = module.hot._disposeHandlers;
            /******/ for (j = 0; j < disposeHandlers.length; j++) {
              /******/ disposeHandlers[j].call(null, data);
              /******/
            }
            /******/ __webpack_require__.hmrD[moduleId] = data;
            /******/
            /******/ // disable module (this disables requires from this module)
            /******/ module.hot.active = false;
            /******/
            /******/ // remove module from cache
            /******/ delete __webpack_require__.c[moduleId];
            /******/
            /******/ // when disposing there is no need to call dispose handler
            /******/ delete outdatedDependencies[moduleId];
            /******/
            /******/ // remove "parents" references from all children
            /******/ for (j = 0; j < module.children.length; j++) {
              /******/ var child = __webpack_require__.c[module.children[j]];
              /******/ if (!child) continue;
              /******/ idx = child.parents.indexOf(moduleId);
              /******/ if (idx >= 0) {
                /******/ child.parents.splice(idx, 1);
                /******/
              }
              /******/
            }
            /******/
          }
          /******/
          /******/ // remove outdated dependency from module children
          /******/ var dependency;
          /******/ for (var outdatedModuleId in outdatedDependencies) {
            /******/ if (
              __webpack_require__.o(outdatedDependencies, outdatedModuleId)
            ) {
              /******/ module = __webpack_require__.c[outdatedModuleId];
              /******/ if (module) {
                /******/ moduleOutdatedDependencies =
                  /******/ outdatedDependencies[outdatedModuleId];
                /******/ for (
                  j = 0;
                  j < moduleOutdatedDependencies.length;
                  j++
                ) {
                  /******/ dependency = moduleOutdatedDependencies[j];
                  /******/ idx = module.children.indexOf(dependency);
                  /******/ if (idx >= 0) module.children.splice(idx, 1);
                  /******/
                }
                /******/
              }
              /******/
            }
            /******/
          }
          /******/
        },
        /******/ apply: function (reportError) {
          /******/ // insert new code
          /******/ for (var updateModuleId in appliedUpdate) {
            /******/ if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
              /******/ __webpack_require__.m[updateModuleId] =
                appliedUpdate[updateModuleId];
              /******/
            }
            /******/
          }
          /******/
          /******/ // run new runtime modules
          /******/ for (var i = 0; i < currentUpdateRuntime.length; i++) {
            /******/ currentUpdateRuntime[i](__webpack_require__);
            /******/
          }
          /******/
          /******/ // call accept handlers
          /******/ for (var outdatedModuleId in outdatedDependencies) {
            /******/ if (
              __webpack_require__.o(outdatedDependencies, outdatedModuleId)
            ) {
              /******/ var module = __webpack_require__.c[outdatedModuleId];
              /******/ if (module) {
                /******/ moduleOutdatedDependencies =
                  /******/ outdatedDependencies[outdatedModuleId];
                /******/ var callbacks = [];
                /******/ var errorHandlers = [];
                /******/ var dependenciesForCallbacks = [];
                /******/ for (
                  var j = 0;
                  j < moduleOutdatedDependencies.length;
                  j++
                ) {
                  /******/ var dependency = moduleOutdatedDependencies[j];
                  /******/ var acceptCallback =
                    /******/ module.hot._acceptedDependencies[dependency];
                  /******/ var errorHandler =
                    /******/ module.hot._acceptedErrorHandlers[dependency];
                  /******/ if (acceptCallback) {
                    /******/ if (callbacks.indexOf(acceptCallback) !== -1)
                      continue;
                    /******/ callbacks.push(acceptCallback);
                    /******/ errorHandlers.push(errorHandler);
                    /******/ dependenciesForCallbacks.push(dependency);
                    /******/
                  }
                  /******/
                }
                /******/ for (var k = 0; k < callbacks.length; k++) {
                  /******/ try {
                    /******/ callbacks[k].call(
                      null,
                      moduleOutdatedDependencies,
                    );
                    /******/
                  } catch (err) {
                    /******/ if (typeof errorHandlers[k] === "function") {
                      /******/ try {
                        /******/ errorHandlers[k](err, {
                          /******/ moduleId: outdatedModuleId,
                          /******/ dependencyId: dependenciesForCallbacks[k],
                          /******/
                        });
                        /******/
                      } catch (err2) {
                        /******/ if (options.onErrored) {
                          /******/ options.onErrored({
                            /******/ type: "accept-error-handler-errored",
                            /******/ moduleId: outdatedModuleId,
                            /******/ dependencyId: dependenciesForCallbacks[k],
                            /******/ error: err2,
                            /******/ originalError: err,
                            /******/
                          });
                          /******/
                        }
                        /******/ if (!options.ignoreErrored) {
                          /******/ reportError(err2);
                          /******/ reportError(err);
                          /******/
                        }
                        /******/
                      }
                      /******/
                    } else {
                      /******/ if (options.onErrored) {
                        /******/ options.onErrored({
                          /******/ type: "accept-errored",
                          /******/ moduleId: outdatedModuleId,
                          /******/ dependencyId: dependenciesForCallbacks[k],
                          /******/ error: err,
                          /******/
                        });
                        /******/
                      }
                      /******/ if (!options.ignoreErrored) {
                        /******/ reportError(err);
                        /******/
                      }
                      /******/
                    }
                    /******/
                  }
                  /******/
                }
                /******/
              }
              /******/
            }
            /******/
          }
          /******/
          /******/ // Load self accepted modules
          /******/ for (
            var o = 0;
            o < outdatedSelfAcceptedModules.length;
            o++
          ) {
            /******/ var item = outdatedSelfAcceptedModules[o];
            /******/ var moduleId = item.module;
            /******/ try {
              /******/ item.require(moduleId);
              /******/
            } catch (err) {
              /******/ if (typeof item.errorHandler === "function") {
                /******/ try {
                  /******/ item.errorHandler(err, {
                    /******/ moduleId: moduleId,
                    /******/ module: __webpack_require__.c[moduleId],
                    /******/
                  });
                  /******/
                } catch (err1) {
                  /******/ if (options.onErrored) {
                    /******/ options.onErrored({
                      /******/ type: "self-accept-error-handler-errored",
                      /******/ moduleId: moduleId,
                      /******/ error: err1,
                      /******/ originalError: err,
                      /******/
                    });
                    /******/
                  }
                  /******/ if (!options.ignoreErrored) {
                    /******/ reportError(err1);
                    /******/ reportError(err);
                    /******/
                  }
                  /******/
                }
                /******/
              } else {
                /******/ if (options.onErrored) {
                  /******/ options.onErrored({
                    /******/ type: "self-accept-errored",
                    /******/ moduleId: moduleId,
                    /******/ error: err,
                    /******/
                  });
                  /******/
                }
                /******/ if (!options.ignoreErrored) {
                  /******/ reportError(err);
                  /******/
                }
                /******/
              }
              /******/
            }
            /******/
          }
          /******/
          /******/ return outdatedModules;
          /******/
        },
        /******/
      };
      /******/
    }
    /******/ __webpack_require__.hmrI.importScripts = function (
      moduleId,
      applyHandlers,
    ) {
      /******/ if (!currentUpdate) {
        /******/ currentUpdate = {};
        /******/ currentUpdateRuntime = [];
        /******/ currentUpdateRemovedChunks = [];
        /******/ applyHandlers.push(applyHandler);
        /******/
      }
      /******/ if (!__webpack_require__.o(currentUpdate, moduleId)) {
        /******/ currentUpdate[moduleId] = __webpack_require__.m[moduleId];
        /******/
      }
      /******/
    };
    /******/ __webpack_require__.hmrC.importScripts = function (
      /******/ chunkIds,
      /******/ removedChunks,
      /******/ removedModules,
      /******/ promises,
      /******/ applyHandlers,
      /******/ updatedModulesList,
      /******/
    ) {
      /******/ applyHandlers.push(applyHandler);
      /******/ currentUpdateChunks = {};
      /******/ currentUpdateRemovedChunks = removedChunks;
      /******/ currentUpdate = removedModules.reduce(function (obj, key) {
        /******/ obj[key] = false;
        /******/ return obj;
        /******/
      }, {});
      /******/ currentUpdateRuntime = [];
      /******/ chunkIds.forEach(function (chunkId) {
        /******/ if (
          /******/ __webpack_require__.o(installedChunks, chunkId) &&
          /******/ installedChunks[chunkId] !== undefined
          /******/
        ) {
          /******/ promises.push(loadUpdateChunk(chunkId, updatedModulesList));
          /******/ currentUpdateChunks[chunkId] = true;
          /******/
        } else {
          /******/ currentUpdateChunks[chunkId] = false;
          /******/
        }
        /******/
      });
      /******/ if (__webpack_require__.f) {
        /******/ __webpack_require__.f.importScriptsHmr = function (
          chunkId,
          promises,
        ) {
          /******/ if (
            /******/ currentUpdateChunks &&
            /******/ __webpack_require__.o(currentUpdateChunks, chunkId) &&
            /******/ !currentUpdateChunks[chunkId]
            /******/
          ) {
            /******/ promises.push(loadUpdateChunk(chunkId));
            /******/ currentUpdateChunks[chunkId] = true;
            /******/
          }
          /******/
        };
        /******/
      }
      /******/
    };
    /******/
    /******/ __webpack_require__.hmrM = () => {
      /******/ if (typeof fetch === "undefined")
        throw new Error("No browser support: need fetch API");
      /******/ return fetch(
        __webpack_require__.p + __webpack_require__.hmrF(),
      ).then((response) => {
        /******/ if (response.status === 404) return; // no update available
        /******/ if (!response.ok)
          throw new Error(
            "Failed to fetch update manifest " + response.statusText,
          );
        /******/ return response.json();
        /******/
      });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/startup chunk dependencies */
  /******/ (() => {
    /******/ var next = __webpack_require__.x;
    /******/ __webpack_require__.x = () => {
      /******/ return __webpack_require__.e("vendors").then(next);
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // module cache are used so entry inlining is disabled
  /******/ // run startup
  /******/ var __webpack_exports__ = __webpack_require__.x();
  /******/
  /******/
})();
