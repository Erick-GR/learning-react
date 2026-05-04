import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { max } from 'three/tsl';

/*
    UTILS
*/
// 1. CREAR LA ESCENA
const scene = new THREE.Scene();

// 2. CREAR LA CÁMARA
const camera = new THREE.PerspectiveCamera(
    75,                                      // FOV (campo de visión en grados)
    window.innerWidth / window.innerHeight,  // aspect ratio
    0.1,                                     // near plane (lo más cercano que se ve)
    1000                                     // far plane (lo más lejano que se ve)
);
camera.position.set(0, 5, 15);  // posicionar la cámara en el espacio

// 3. CREAR EL RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);  // el canvas se mete al DOM

// Luces
const ambient = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xffffff, 0.8);
sun.position.set(10, 20, 10);
scene.add(sun);


// Controles de cámara
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.target.set(0, 0, 0); 
controls.update();

// Helpers
const axes = new THREE.AxesHelper(5);
scene.add(axes);

const grid = new THREE.GridHelper(20, 20);
scene.add(grid);

// Suscribir a resize para que el canvas se ajuste al tamaño de la ventana
window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

const clock = new THREE.Clock();  // para medir el tiempo entre frames (delta time)


/*
    POINT CLOUD
*/
const numPoints = 5000;

const positions = new Float32Array(numPoints * 3);
const colors = new Float32Array(numPoints * 3);
const origin = 0;
const armAmplitude = 0.5;

for (let i = 0; i < numPoints; i++) {
    const angle = 0.01 * i;
    const r = origin + armAmplitude * angle;
    positions[i * 3]     = Math.cos(angle) * r + (Math.random() - 0.5) * 2;  // x
    positions[i * 3 + 2] = Math.sin(angle) * r + (Math.random() - 0.5) * 2;  // z
    positions[i * 3 + 1] = (Math.random() - 0.5) * 2;  // y

    const maxAngle = 0.01 * numPoints;
    colors[i * 3]     = 1 - r / maxAngle;  // r
    colors[i * 3 + 1] = r / maxAngle;  // g
    colors[i * 3 + 2] = Math.random();  // b
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({
    vertexColors: true,
    size: 0.05,
});

const pointCloud = new THREE.Points(geometry, material);
scene.add(pointCloud);

// Bounding boxes
const geo = new THREE.BoxGeometry(1.5, 1.5, 2);
const edges = new THREE.EdgesGeometry(geo);
const lines = new THREE.LineSegments(
    edges, 
    new THREE.LineBasicMaterial({ color: 0xff0000 })
);
lines.position.set(0, 0, 0.75);
// scene.add(lines);

const geo2 = new THREE.BoxGeometry(2, 1, 3);
const mat2 = new THREE.MeshBasicMaterial({ 
    color: 0xff0000, 
    wireframe: true 
});
const box2 = new THREE.Mesh(geo2, mat2);
box2.position.set(5, 0, 5);
box2.rotation.y = -Math.PI / 4;
// scene.add(box2);

const grupoBox = new THREE.Group();
grupoBox.add(lines);
grupoBox.add(box2);
scene.add(grupoBox);

function animate() {
    requestAnimationFrame(animate);  // pide al navegador la siguiente iteración
    controls.update();   
    const delta = clock.getDelta();  // ← obligatorio si enableDamping = true

    pointCloud.rotation.y += 0.05 * delta;
    grupoBox.rotation.y += 0.05 * delta;

    renderer.render(scene, camera);
}
animate();