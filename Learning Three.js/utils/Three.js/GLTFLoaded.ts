/*
    GLTF (GL Transmission Format) es el "JPEG del 3D". Es el formato universal moderno para modelos 3D web. 
    Lleva geometría, materiales, animaciones, texturas — todo en un archivo (.glb binario) o un conjunto de archivos (.gltf JSON + assets).
*/
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

loader.load(
    'modelo.glb',
    (gltf) => {
        // CALLBACK DE ÉXITO
        // gltf.scene es el objeto raíz cargado
        scene.add(gltf.scene);
        
        // gltf.animations son las animaciones (si tiene)
        // gltf.cameras son las cámaras del archivo
    },
    (progress) => {
        // CALLBACK DE PROGRESO (opcional)
        console.log(`${(progress.loaded / progress.total) * 100}%`);
    },
    (error) => {
        // CALLBACK DE ERROR
        console.error(error);
    }
);

// API moderna con Promesas (más limpia)
const gltf = await loader.loadAsync('modelo.glb');
scene.add(gltf.scene);

/*
    Otros laodesr
    TextureLoader: cargar imágenes como texturas (PNG, JPG).
    OBJLoader: formato OBJ clásico (en examples/jsm/loaders/).
    FBXLoader: formato FBX de Autodesk.
    PLYLoader: para nubes de puntos
*/


// EJEMPLO
const loader = new GLTFLoader();

const gltf = await loader.loadAsync('https://threejs.org/examples/models/gltf/Duck/glTF/Duck.gltf');
const duck = gltf.scene;

// Centrar el modelo
const box = new THREE.Box3().setFromObject(duck);
const center = box.getCenter(new THREE.Vector3());
duck.position.sub(center);  // mueve para que el centro del modelo esté en el origen

scene.add(duck);

/*
Trucos útiles:

Box3 calcula el bounding box de cualquier objeto.
traverse() recorre todo el árbol de un objeto cargado:
*/

duck.traverse((child) => {
      if (child.isMesh) {
          child.material.metalness = 0.5;  // modificar materiales después de cargar
      }
  });