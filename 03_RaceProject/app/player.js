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
        }
        // Methode (Funktion in einer Klasse, Public = default, daher kann es getrost weggelassen werden)
        setPlayerModel(pmodel) {
            this.refPlayerModel = pmodel;
            // this.refPlayerModel.position.x += 2;
        }
        // Position des Autos auf der X-Achse verschieben
        moveCarX(moveValue) {
            if ((moveValue > 0 && this.refPlayerModel.position.x <= 0) ||
                (moveValue < 0 && this.refPlayerModel.position.x >= 0)) {
                this.refPlayerModel.position.x += moveValue;
            }
        }
        // Kollision checken als checkCollisions()-Methode
        checkCollisions() {
        }
    }
    RacingGame.Player = Player;
})(RacingGame || (RacingGame = {}));
//# sourceMappingURL=player.js.map