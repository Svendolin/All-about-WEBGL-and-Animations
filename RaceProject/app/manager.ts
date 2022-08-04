namespace RacingGame {
  export class Manager { // Klassen immer Gross am Anfang
    private engine: Engine;
    private player: Player;
    private level: Level;
    private utils: Utils;

    constructor() {
      this.engine = new Engine(this);
      this.player = new Player(this);
      this.level = new Level(this);
      this.utils = new Utils(this);
      console.log("Manager initialized");

    }

    public initListeners() {
      window.addEventListener("keydown", (event) => {
        console.log(event);
        switch (event.key) {
          case "ArrowDown":
            break;
          case "ArrowUp":
            break;
          case "ArrowLeft":
            break;
          case "ArrowRight":
            break;
          case "c":
            break;
          case "":
            break;
        }
      });
    }
  }
}