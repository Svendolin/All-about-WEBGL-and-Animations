namespace RacingGame {
  export class Manager { // Klassen immer Gross am Anfang
    // Properties darin mit access modifiers (private, public etc)
    private engine: Engine;
    private player: Player;
    private level: Level;
    private utils: Utils;

    private _gameState: number;

    constructor() {
      this.engine = new Engine(this);
      this.player = new Player(this);
      this.level = new Level(this);
      this.utils = new Utils(this);
      this.initListeners();
      console.log("Manager initialized");
    }

    // get Methode:
    get gameState(): number {
      return this._gameState
    }
    set gameState(pnewState: number) {
      if (pnewState === 0) {

      }
      else if (pnewState === 1) {

      }
      this._gameState = pnewState;
    }



    public initListeners() {
      window.addEventListener("keydown", (event) => {
        console.log(event);
        switch (event.key) {
          case "ArrowDown":
            break;
          case "":
            break;
        }
      });
      
    }
  }
}