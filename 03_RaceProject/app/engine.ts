/* engine.ts = Um das Spiel zu rendern */
/// <reference path="../typings/node_modules/@types/three/index.d.ts" />





namespace RacingGame {
  export class Engine { // (Klassen immer Gross am Anfang)
    // INFO 1: Properties können wir mit Access Modifiers benennen (private oder public)
    private refManager: Manager;
    public scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    
    constructor(pManager: Manager) {
      this.refManager = pManager;
      // Methode aufrufen
      this.init3DScene();

    }

    // INFO 2: Methoden können wir ebenfalls mit Access Modifiers benennen (private oder public)
    // Methode, um 3D Scene zu initialisieren (Funktionen in einer Klasse = Methoden)
    private init3DScene() {
      this.scene = new THREE.Scene();
      // Neue Kamera erzeugen
      this.camera = new THREE.PerspectiveCamera(70,
        window.innerWidth / window.innerHeight,
        0.1,
        2500);

      //Kamera positionieren
      this.camera.position.set(0,8,18);

      // Kamera setzen (wo schaut sie hin?)
      this.camera.lookAt(0,0,0);

      // Kamera der Szene "beisetzen"
      // this.scene.add(this.camera);
      
      // Licht setzen:
      let lightD = new THREE.DirectionalLight(0xffffff, 3);
      lightD.position.set(0, 10, 5);
      this.scene.add(lightD);

      // WEBGL-Renderer, der die untenstehende Szene berechnet:
      this.renderer = new THREE.WebGLRenderer({antialias: true});
      this.resizeEngine();
      document.body.appendChild(this.renderer.domElement);

      // Lokale Variable (Mit LOADER laden wir alle Objekte)
      let loader = new THREE.ObjectLoader();
      loader.load("media/models/models_combined.json", 
      // WHY Arrow Function aus ES6? => so können wir mit this. direkt auf "Engine" zugreifen, sobald eben loader geladen wurde
      (object: any) => {
        this.scene.add(object); // Objekt der Szene hinzufügen


        // Referenz vom Auto als zwischenvariable speichern, um...
        let refCar = this.scene.getObjectByName("car");
        this.refManager.player.setPlayerModel(refCar);
        // ...Kamera dem Auto hinzufügen:
        refCar.add(this.camera);

        // Barriers und Dollarmodelle erzeugen
        this.refManager.level.refDollarModel = this.scene.getObjectByName("Collectible");
        this.refManager.level.refBarrierModel = this.scene.getObjectByName("Barrier");
        this.refManager.level.createLevel(); // Methode Create Level aufrufen

        //set material properties
        let mainMaterial1 = (<any>this.scene.getObjectByName("Path")).material; // (path = Strasse)
        // Mapping der Achse Ränderns (T und S)
        mainMaterial1.map.wrapS = THREE.RepeatWrapping;
        mainMaterial1.map.wrapT = THREE.RepeatWrapping;
        mainMaterial1.map.repeat.set( 1, 1 ); // Grössen sollen sich dadurch nicht verändern


        this.refManager.gameState = GameState.Start; // enum aus manager.ts der Szene beifügen
        this.render(); // Was somit beduetet, dass loader geladen wurde, referenziert auf die Engine, so wird "render()" aufgerufen
        console.log(this.refManager.gameState);
      });

      // Hintergrund (lokale Variable erzeugen)
      let skyboxloader = new THREE.CubeTextureLoader();
      this.scene.background = skyboxloader.load([
        "media/skybox/night_px.jpg",
        "media/skybox/night_nx.jpg",
        "media/skybox/night_py.jpg",
        "media/skybox/night_ny.jpg",
        "media/skybox/night_pz.jpg",
        "media/skybox/night_nz.jpg"
      ]);
    }

    // 3D Szene:
    resizeEngine() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // Render-Methode (Bild jederzeit rendern)
    render = () => {
      // 1ste und schönste Variante:
      window.requestAnimationFrame(this.render);
      // Die Fortbewegung nach Z (vorne / hinten) rendern.
      this.refManager.player.moveCarZ();

      // 2te Variante: window.requestAnimationFrame(this.render.bind(this));
      this.renderer.render(this.scene, this.camera); // Wir sagen in Three.js immer, aus welcher Szene wir welche Kamera rendern wollen
      // this.camera.position.x += 0.01; = Verschiebt konstant unsere kamera nach rechts
    }
  }
}
