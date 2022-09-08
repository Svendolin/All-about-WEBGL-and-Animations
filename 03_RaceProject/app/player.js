/* player.ts = Spieleraktionen zu definieren */
// Für Typescript Mapping:
/// <reference path="../typings/node_modules/@types/three/index.d.ts" />
var RacingGame;
(function (RacingGame) {
    // Import + Export ist die andere Variante (Kennen wir aus Angular)
    class Player {
        // Konstruktor beschreibt den Wert, ohne die Ursprungsdefinition zu ändern. Zeile 4 könnten wir bereits "private score: number = 0" definieren.
        // Diesen Kennen wir auch in PHP als "Grundbauplan"
        constructor(pManager) {
            this.refManager = pManager;
            this.reset();
        }
        // Score und Speed zurücksetzen als reset()-Methode
        reset() {
            this.score = 0;
            this.speed = 0;
            this.speedChanges = 0;
            if (this.refPlayerModel !== undefined) {
                this.refPlayerModel.position.z = 0;
                this.refPlayerModel.position.x = 0;
            }
        }
        // Methode (Funktion in einer Klasse, Public = default, daher kann es getrost weggelassen werden)
        setPlayerModel(pmodel) {
            this.refPlayerModel = pmodel;
            // this.refPlayerModel.position.x += 2;
        }
        // Position des Autos auf der X-Achse verschieben (LI RE)
        moveCarX(moveValue) {
            if ((moveValue > 0 && this.refPlayerModel.position.x <= 0) ||
                (moveValue < 0 && this.refPlayerModel.position.x >= 0)) {
                this.refPlayerModel.position.x += moveValue;
            }
        }
        // Position des Autos auf der Z-Achse verschieben (VO Rü)
        moveCarZ() {
            if (this.refManager.gameState === RacingGame.GameState.Running) {
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
                    this.refManager.gameState = RacingGame.GameState.Finished;
                }
                this.updateSpeedScore();
                // Innerhalb moveCarZ aufrufen:
                this.checkCollisions();
            }
        }
        updateSpeedScore() {
            document.querySelector("#speedData").innerHTML = "" + this.speed.toFixed(1);
            document.querySelector("#scoreData").innerHTML = "" + this.score.toFixed(1);
        }
        // Kollision checken als checkCollisions()-Methode
        checkCollisions() {
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
    RacingGame.Player = Player;
})(RacingGame || (RacingGame = {}));
//# sourceMappingURL=player.js.map