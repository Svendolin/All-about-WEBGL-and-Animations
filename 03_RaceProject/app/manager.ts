/* manager.ts = Um das Spiel zu managen */

/// <reference path="../typings/node_modules/@types/three/index.d.ts" />
/// <reference path="../typings/node_modules/@types/jquery/index.d.ts" />



namespace RacingGame {
  export class Manager { // Klassen immer Gross am Anfang
    // Properties darin mit access modifiers (private, public etc)
    private engine: Engine;
    public player: Player; // so können wir in engine.ts auf den Player zugreifen
    private level: Level;
    private utils: Utils;

    private _gameState: number;

    constructor() {
      this.gameState = GameState.Init; // enum Wert von unten zuweisen. Was das ist, wird unten erklärt (-1)
      this.engine = new Engine(this);
      this.player = new Player(this);
      this.level = new Level(this);
      this.utils = new Utils(this);
      this.initListeners();
     
      console.log("Manager initialized");
    }

    // get + set Variable, um CODE auszuführen:
    // Als "number" definiert, deshalb funktioniert 0,1,2 etc für dessen Status
    // Weil das doof ist, definieren wir alles mit Text als enum Wert
    get gameState(): number { 
      return this._gameState
    } 
    set gameState(pnewState: number) {
      if (pnewState === GameState.Start) { // enum Wert 0
        this.player.reset();
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



    public initListeners() {
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

          case "r":
            this.gameState = GameState.Start;
            break;

          case "C":
            break;

          case " ":
            this.gameState = GameState.Running;
            break;
        }
      });
      
    }
  }

  // enum definieren (Text einer Nummer zuordnen, nummerischer Wert)
  // Mit "export" machen wir es mehreren Files zugängig
  export enum GameState {
    Init = -1,
    Start = 0,
    Running = 1,
    Finished = 2
  }
}