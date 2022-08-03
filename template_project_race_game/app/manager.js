var RacingGame;
(function (RacingGame) {
    class Manager {
        constructor() {
            this.engine = new RacingGame.Engine(this);
            this.player = new RacingGame.Player(this);
            this.level = new RacingGame.Level(this);
            this.utils = new RacingGame.Utils(this);
            console.log("Manager initialized");
        }
        initListeners() {
            window.addEventListener("keydown", (event) => {
                console.log(event);
                switch (event.key) {
                    case "ArrowDown":
                        break;
                    case "ArrowUp":
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