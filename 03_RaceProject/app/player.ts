/* player.ts = Spieleraktionen zu definieren */

// Für Typescript Mapping:
/// <reference path="../typings/node_modules/@types/three/index.d.ts" />

namespace RacingGame { // Mit Namespace kapseln. So wird die Überdatei immer "RacingGame" heissen und keine Konflikte auslösen (z.B gleichgenannte Klassen über mehrere Files hinweg)
  // Import + Export ist die andere Variante (Kennen wir aus Angular)
  export class Player {  // Mit "export" werden Klassen für andere Dateien verfügbar gemacht
    // private properties:
    private refManager: Manager; // ref-benannt (Pascal Special), weil dieser auf pManager referenziert ist
    private score: number;  // Standard sind alle Properties "public". Somit wäre diese Property auch ausserhalb der Klasse Player nutzbar
    // Im Gegensatz zu private bzw protected, was primär verhindert, das wir AUS VERSEHEN etwas verändert
    private speed: number; // Tempo bestimmen
    public speedChanges: number; // Zu wechselndes Tempo bestimmen
    private refPlayerModel: THREE.Object3D; // Default Objekt der externen library aus Three.js bereits importiert in typings > node_modules

    // Konstruktor beschreibt den Wert, ohne die Ursprungsdefinition zu ändern. Zeile 4 könnten wir bereits "private score: number = 0" definieren.
    // Diesen Kennen wir auch in PHP als "Grundbauplan"
    constructor(pManager: Manager) {
      this.refManager = pManager;
      this.reset();
    }

    // Score und Speed zurücksetzen als reset()-Methode
    public reset() { // Mit "this" auf das entsprechende Objekt zurückgreifen
      this.score = 0;
      this.speed = 0;
      this.speedChanges = 0;
      if (this.refPlayerModel !== undefined) {
        this.refPlayerModel.position.z = 0;
        this.refPlayerModel.position.x = 0;

      }
    }

    // Methode (Funktion in einer Klasse, Public = default, daher kann es getrost weggelassen werden)
    public setPlayerModel(pmodel: THREE.Object3D) {
      this.refPlayerModel = pmodel;
      // this.refPlayerModel.position.x += 2;
    }

    // Position des Autos auf der X-Achse verschieben (LI RE)
    public moveCarX(moveValue: number) {
      if ((moveValue > 0 && this.refPlayerModel.position.x <= 0) ||
        (moveValue < 0 && this.refPlayerModel.position.x >= 0)) {
        this.refPlayerModel.position.x += moveValue;
      }
    }

    // Position des Autos auf der Z-Achse verschieben (VO Rü)
    public moveCarZ() {
      if (this.refManager.gameState === GameState.Running) {
        if (this.speedChanges !== 0) {
          this.speed += this.speedChanges;

          if (this.speed < 0) {
            this.speed = 0;
            this.speedChanges = 0;
          }
        }
        if (this.refPlayerModel.position.z > -1110) {
          this.refPlayerModel.position.z -= (this.speed * 0.01); // Pro Aufruf der Methode 0.01 nach vorne schieben
        }
        else {
          this.refManager.gameState = GameState.Finished;
        }
        this.updateSpeedScore();
        // Innerhalb moveCarZ aufrufen:
        this.checkCollisions();  
      }
    }

    public updateSpeedScore() {
        document.querySelector("#speedData").innerHTML = "" + this.speed.toFixed(1);
        document.querySelector("#scoreData").innerHTML = "" + this.score.toFixed(1);
    }

    // Kollision checken als checkCollisions()-Methode
    public checkCollisions() {
      for (let i = 0; i < this.refManager.level.dataMap.length; i++) {
        let tempLevelObj = this.refManager.level.dataMap[i];

        if (tempLevelObj.visible &&
          tempLevelObj.position.x === this.refPlayerModel.position.x &&
          tempLevelObj.position.z > this.refPlayerModel.position.z &&
          tempLevelObj.position.z < this.refPlayerModel.position.z + 10) {
          tempLevelObj.visible = false;
          if (tempLevelObj.name === "Barrier") {
            this.speed /= 2; // Bei einem Crash mit der Barrier soll die Geschwindigkeit /2 gedrosselt werden

          }
          else {
            this.score += this.speed;
          }
        }
      }

    }
  }

}