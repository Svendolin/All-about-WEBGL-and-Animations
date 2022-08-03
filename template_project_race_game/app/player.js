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
        // Kollision checken als checkCollisions()-Methode
        checkCollisions() {
        }
    }
    RacingGame.Player = Player;
})(RacingGame || (RacingGame = {}));
//# sourceMappingURL=player.js.map