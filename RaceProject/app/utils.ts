// Das Modul braucht den Pfad:
/// <reference path="../typings/node_modules/@types/three/index.d.ts" />

namespace RacingGame {
  export class Utils { // Klassen immer Gross am Anfang

    private refManager: Manager;
    constructor(pManager: Manager) {
      this.refManager = pManager;

    }
  }
}