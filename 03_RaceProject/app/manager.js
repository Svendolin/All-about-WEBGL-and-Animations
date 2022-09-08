/* manager.ts = Um das Spiel zu managen */
// Für Typescript Mapping:
/// <reference path="../typings/node_modules/@types/three/index.d.ts" />
/// <reference path="../typings/node_modules/@types/jquery/index.d.ts" />
var RacingGame;
(function (RacingGame) {
    class Manager {
        constructor() {
            this.gameState = GameState.Init; // enum Wert von unten zuweisen. Was das ist, wird unten erklärt (-1)
            this.engine = new RacingGame.Engine(this);
            this.player = new RacingGame.Player(this);
            this.level = new RacingGame.Level(this);
            this.utils = new RacingGame.Utils(this);
            this.initListeners();
            console.log("Manager initialized");
        }
        // get + set Variable, um CODE auszuführen:
        // Als "number" definiert, deshalb funktioniert 0,1,2 etc für dessen Status
        // Weil das doof ist, definieren wir alles mit Text als enum Wert
        get gameState() {
            return this._gameState;
        }
        set gameState(pnewState) {
            if (pnewState === GameState.Start) { // enum Wert 0
                this.player.reset();
                this.level.createLevel();
                $(".menuInfo").show();
                $(".rankingInfo").hide();
            }
            else if (pnewState === GameState.Running) { // enum Wert 1
                $(".menuInfo").hide();
                $(".rankingInfo").hide();
            }
            else if (pnewState === GameState.Finished) { // enum Wert 2
                $(".menuInfo").hide();
                $(".rankingInfo").show();
            }
            this._gameState = pnewState;
            console.log(this._gameState);
        }
        initListeners() {
            window.addEventListener("keydown", (event) => {
                console.log(event);
                switch (event.key) {
                    case "ArrowDown":
                        if (this.gameState === GameState.Running) {
                            this.player.speedChanges = -2; // Rückwärts pro Klick langsamer
                        }
                        break;
                    case "ArrowUp":
                        if (this.gameState === GameState.Running) {
                            this.player.speedChanges = 1; // Vorwärts pro Klick schneller
                        }
                        break;
                    case "ArrowLeft":
                        this.player.moveCarX(-6);
                        break;
                    case "ArrowRight":
                        this.player.moveCarX(6);
                        break;
                    case "r":
                        this.gameState = GameState.Start;
                        break;
                    case "c":
                        // Damit sollte C nur funktionieren, wenn das Auto am Start steht ===. Sonst kann C nicht mehr gedrückt werden
                        if (this.gameState === GameState.Start) {
                            this.level.createLevel();
                        }
                        break;
                    case " ":
                        this.gameState = GameState.Running;
                        break;
                }
            });
            window.addEventListener("keyup", event => {
                if (this.gameState === GameState.Running) {
                    switch (event.key) {
                        case "ArrowUp":
                        case "ArrowDown":
                            this.player.speedChanges = -0.1;
                            break;
                    }
                }
            });
        }
    }
    RacingGame.Manager = Manager;
    // enum definieren (Text einer Nummer zuordnen, nummerischer Wert)
    // Mit "export" machen wir es mehreren Files zugängig
    let GameState;
    (function (GameState) {
        GameState[GameState["Init"] = -1] = "Init";
        GameState[GameState["Start"] = 0] = "Start";
        GameState[GameState["Running"] = 1] = "Running";
        GameState[GameState["Finished"] = 2] = "Finished";
    })(GameState = RacingGame.GameState || (RacingGame.GameState = {}));
})(RacingGame || (RacingGame = {}));
//# sourceMappingURL=manager.js.map