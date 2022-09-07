/* player.ts = Level building initialisieren */

/// <reference path="../typings/node_modules/@types/three/index.d.ts" />

namespace RacingGame {
  export class Level { // Klassen immer Gross am Anfang

    private refManager: Manager;
    private dataMap: Array<THREE.Object3D> = [];
    
    // Referenzobjekt
    public refDollarModel: THREE.Object3D;
    public refBarrierModel: THREE.Object3D;

    constructor(pManager: Manager) {
      this.refManager = pManager;

    }

    // Methode, neue Level zu erzeugen (kennen wir engine.ts)
    public createLevel() {
      // 1) Barrieren und Dollar erscheinen lassen
      this.refDollarModel.visible = true;
      this.refBarrierModel.visible = true;

      let xvalues = [-6, 0, 6];
      // 2) Objekte klonen und generieren - Viele Objekte mit einer FOR-Schlaufe generieren
      for(let zValue = -10; zValue > -1100; zValue -= 12) {
        let tempDollar = this.refDollarModel.clone();
        tempDollar.position.set(xvalues[Math.floor(Math.random() * xvalues.length)], 0, zValue);
        this.refManager.engine.scene.add(tempDollar);
      }
      
      // 3) Objekte klonen
      this.refDollarModel.visible = false;
      this.refBarrierModel.visible = false;

    } 
  }
}