import * as THREE from 'three';

// OrbitControls - para controlar la cámara con el mouse
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;     // suavizado al soltar el mouse
controls.dampingFactor = 0.05;
controls.target.set(0, 0, 0);      // alrededor de qué punto orbitar
controls.minDistance = 2;            // qué tan cerca puede acercarse el zoom
controls.maxDistance = 50;
controls.maxPolarAngle = Math.PI / 2;  // no permite ir abajo del horizonte

// En el loop:
function animate() {
    requestAnimationFrame(animate);
    controls.update();             // ← obligatorio si enableDamping = true
    renderer.render(scene, camera);
}