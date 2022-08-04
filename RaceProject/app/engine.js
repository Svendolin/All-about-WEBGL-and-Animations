/// <reference path="../typings/node_modules/@types/three/index.d.ts" />
var RacingGame;
(function (RacingGame) {
    class Engine {
        constructor(pManager) {
            // Render-Methode:
            this.render = () => {
                // 1ste und schönste Variante:
                window.requestAnimationFrame(this.render);
                // 2te Variante: window.requestAnimationFrame(this.render.bind(this));
                this.renderer.render(this.scene, this.camera); // Wir sagen in Three.js immer, aus welcher Szene wir welche Kamera rendern wollen
                // this.camera.position.x += 0.01; = Verschiebt konstant unsere kamera nach rechts
            };
            this.refManager = pManager;
            // Methode aufrufen
            this.init3DScene();
        }
        // INFO 2: Methoden können wir ebenfalls mit Access Modifiers benennen (private oder public)
        // Methode, um 3D Scene zu initialisieren (Funktionen in einer Klasse = Methoden)
        init3DScene() {
            this.scene = new THREE.Scene();
            // Neue Kamera erzeugen
            this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 2500);
            //Kamera positionieren
            this.camera.position.set(0, 8, 18);
            // Kamera setzen (wo schaut sie hin?)
            this.camera.lookAt(0, 0, 0);
            // Kamera der Szene "beisetzen"
            this.scene.add(this.camera);
            // Licht setzen:
            let lightD = new THREE.DirectionalLight(0xffffff, 3);
            lightD.position.set(0, 10, 5);
            this.scene.add(lightD);
            // WEBGL-Renderer, der die untenstehende Szene berechnet:
            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.resizeEngine();
            document.body.appendChild(this.renderer.domElement);
            // Lokale Variable:
            let loader = new THREE.ObjectLoader();
            loader.load("media/models/models_combined.json", 
            // WHY Arrow Function aus ES6? => so können wir mit this. direkt auf "Engine" zugreifen, sobald eben loader geladen wurde
            (object) => {
                this.scene.add(object); // Objekt der Szene hinzufügen
                this.refManager.player.setPlayerModel(this.scene.getObjectByName("car"));
                this.render(); // Was somit beduetet, dass loader geladen wurde, referenziert auf die Engine, so wird "render()" aufgerufen
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
    }
    RacingGame.Engine = Engine;
})(RacingGame || (RacingGame = {}));
//# sourceMappingURL=engine.js.map