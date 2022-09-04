/// <reference path="../typings/node_modules/@types/three/index.d.ts" />
var RacingGame;
(function (RacingGame) {
    class Manager {
        constructor() {
            this.engine = new RacingGame.Engine(this);
            this.player = new RacingGame.Player(this);
            this.level = new RacingGame.Level(this);
            this.utils = new RacingGame.Utils(this);
            this.initListeners();
            console.log("Manager initialized");
        }
        // get Methode:
        get gameState() {
            return this._gameState;
        }
        set gameState(pnewState) {
            if (pnewState === 0) {
            }
            else if (pnewState === 1) {
            }
            this._gameState = pnewState;
        }
        initListeners() {
            window.addEventListener("keydown", (event) => {
                console.log(event);
                switch (event.key) {
                    case "ArrowDown":
                        break;
                    case "ArrowUp":
                        break;
                    case "ArrowLeft":
                        this.player.moveCarX(-6);
                        break;
                    case "ArrowRight":
                        this.player.moveCarX(6);
                        break;
                    case "C":
                        break;
                    case "":
                        break;
                }
            });
        }
    }
    RacingGame.Manager = Manager;
})(RacingGame || (RacingGame = {}));
//# sourceMappingURL=manager.js.map