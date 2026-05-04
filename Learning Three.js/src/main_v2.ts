import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// 1. CREAR LA ESCENA
const scene = new THREE.Scene();

// 2. CREAR LA CÁMARA
const camera = new THREE.PerspectiveCamera(
    75,                                      // FOV (campo de visión en grados)
    window.innerWidth / window.innerHeight,  // aspect ratio
    0.1,                                     // near plane (lo más cercano que se ve)
    1000                                     // far plane (lo más lejano que se ve)
);
camera.position.set(0, 2, 5);  // posicionar la cámara en el espacio

// 3. CREAR EL RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);  // el canvas se mete al DOM

// 4. CREAR UN OBJETO (mesh = geometry + material)
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xff0000, metalness: 0.3, roughness: 0.4 
});
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphereMesh);


const floorGeometry = new THREE.PlaneGeometry(20, 20);
const floorMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x808080, metalness: 0.2, roughness: 0.8
});
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.rotation.x = -Math.PI / 2;  // rotar para que quede horizontal
floorMesh.position.y = -1;
scene.add(floorMesh);

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterials = [
    new THREE.MeshStandardMaterial({ color: 0x00ff00, metalness: 0.5, roughness: 0.3 }),
    new THREE.MeshStandardMaterial({ color: 0x0000ff, metalness: 0.5, roughness: 0.3 }),
    new THREE.MeshStandardMaterial({ color: 0xffff00, metalness: 0.5, roughness: 0.3 }),
];
// const cubes: THREE.Mesh[] = [];
const grupo = new THREE.Group();
for (let i = 0; i < 3; i++) {
    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterials[i]);
    // cubeMesh.position.set(0, 0, -i * 5 - 3);
    // scene.add(cubeMesh);
    // cubes.push(cubeMesh);
    grupo.add(cubeMesh);
}
scene.add(grupo);

// 
const radios = [3, 5, 7];
const velocidades = [1, 0.5, 0.25];


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

// 5. EL RENDER LOOP (game loop)
function animate() {
    requestAnimationFrame(animate);  // pide al navegador la siguiente iteración
    const delta = clock.getDelta();  // tiempo en segundos desde el último frame
    const t = clock.getElapsedTime();  // tiempo total desde que empezó el programa (en segundos)
    controls.update();             // ← obligatorio si enableDamping = true

    grupo.children.forEach((cube, i) => {
        const angulo = t * velocidades[i];
        cube.position.x = Math.cos(angulo) * radios[i];
        cube.position.z = Math.sin(angulo) * radios[i];
        cube.rotation.x += 0.0;
        cube.rotation.y += 1 * delta;
    });


    renderer.render(scene, camera);
}
animate();