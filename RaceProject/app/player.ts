namespace RacingGame { // Mit Namespace kapseln. So wird die Überdatei immer "RacingGame" heissen und keine Konflikte auslösen (z.B gleichgenannte Klassen über mehrere Files hinweg)
                       // Import + Export ist die andere Variante (Kennen wir aus Angular)
  export class Player {  // Mit "export" werden Klassen für andere Dateien verfügbar gemacht
    private refManager: Manager; // ref-benannt (Pascal Special), weil dieser auf pManager referenziert ist
    private score: number;  // Standard sind alle Properties "public". Somit wäre diese Property auch ausserhalb der Klasse Player nutzbar
                            // Im Gegensatz zu private bzw protected, was primär verhindert, das wir AUS VERSEHEN etwas verändert
    private speed: number;
    private refPlayerModel: THREE.Object3D; // Default Objekt der externen library aus Three.js bereits importiert in typings > node_modules

    // Konstruktor beschreibt den Wert, ohne die Ursprungsdefinition zu ändern. Zeile 4 könnten wir bereits "private score: number = 0" definieren.
    // Diesen Kennen wir auch in PHP als "Grundbauplan"
    constructor(pManager: Manager ) {
      this.refManager = pManager;
      this.reset();
    }

    // Score und Speed zurücksetzen als reset()-Methode
    public reset() { // Mit "this" auf das entsprechende Objekt zurückgreifen
      this.score = 0;
      this.speed = 0;
    }
    // Kollision checken als checkCollisions()-Methode
    public checkCollisions() {

    }
  }

}