/* player.ts = Level building initialisieren */
// Für Typescript Mapping:
/// <reference path="../typings/node_modules/@types/three/index.d.ts" />
var RacingGame;
(function (RacingGame) {
    class Level {
        constructor(pManager) {
            this.dataMap = [];
            this.refManager = pManager;
        }
        // Methode, neue Level zu erzeugen (kennen wir engine.ts)
        createLevel() {
            for (let i = 0; i < this.dataMap.length; i++) {
                this.refManager.engine.scene.remove(this.dataMap[i]); // 3D Objekt definieren, was wir aus der Szene löschen möchten
            }
            this.dataMap = [];
            // Alternative zu OBEN, 2te Variante:
            /* while (this.dataMap.length > 0) {
              this.refManager.engine.scene.remove(this.dataMap.pop());
            } */
            // 1) Barrieren und Dollar erscheinen lassen
            this.refDollarModel.visible = true;
            this.refBarrierModel.visible = true;
            let xvalues = [-6, 0, 6]; // Die Zahlen sind mitte der linken spur, mittlerer Spur und rechter Spur
            // 2) Objekte klonen und generieren - Viele Objekte mit einer FOR-Schlaufe generieren
            // Auf der Z-Achse geht - nach hinten: -10 = Startpunkt / -1100 = Endpunkt / Statt ++ oder -- alle 12 Punkte nach Hinten ist -=
            for (let zValue = -10; zValue > -1100; zValue -= 12) { // zValue = - 12 | -= ist die Kurzform davon
                let tempObject; // temporäres Objekt als Variable definieren
                // Zeige entweder DOLLAR oder BARRIER Objekte:
                if (Math.random() >= 0.5) { // Math.random() = 0-0.99999 Wert. Somit 0.5 die Hälfte von zwei Objekten :D
                    tempObject = this.refDollarModel.clone();
                }
                else {
                    tempObject = this.refBarrierModel.clone();
                }
                tempObject.position.set(xvalues[Math.floor(Math.random() * xvalues.length)], 0, zValue);
                this.refManager.engine.scene.add(tempObject);
                this.dataMap.push(tempObject);
            }
            // 3) Objekte klonen
            this.refDollarModel.visible = false;
            this.refBarrierModel.visible = false;
        }
    }
    RacingGame.Level = Level;
})(RacingGame || (RacingGame = {}));
//# sourceMappingURL=level.js.map