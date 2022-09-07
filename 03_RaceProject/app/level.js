/* player.ts = Level building initialisieren */
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
            // 1) Barrieren und Dollar erscheinen lassen
            this.refDollarModel.visible = true;
            this.refBarrierModel.visible = true;
            let xvalues = [-6, 0, 6];
            // 2) Objekte klonen und generieren - Viele Objekte mit einer FOR-Schlaufe generieren
            for (let zValue = -10; zValue > -1100; zValue -= 12) {
                let tempDollar = this.refDollarModel.clone();
                tempDollar.position.set(xvalues[Math.floor(Math.random() * xvalues.length)], 0, zValue);
                this.refManager.engine.scene.add(tempDollar);
            }
            // 3) Objekte klonen
            this.refDollarModel.visible = false;
            this.refBarrierModel.visible = false;
        }
    }
    RacingGame.Level = Level;
})(RacingGame || (RacingGame = {}));
//# sourceMappingURL=level.js.map