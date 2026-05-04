import * as THREE from 'three';

// 1. CREAR LA ESCENA
const scene = new THREE.Scene();

// 2. CREAR LA CÁMARA
const camera = new THREE.PerspectiveCamera(
    75,                                      // FOV (campo de visión en grados)
    window.innerWidth / window.innerHeight,  // aspect ratio
    0.1,                                     // near plane (lo más cercano que se ve)
    1000                                     // far plane (lo más lejano que se ve)
);
camera.position.set(0, 5, 10);  // posicionar la cámara en el espacio
camera.lookAt(0, 0, 0);

// 3. CREAR EL RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);  // el canvas se mete al DOM

// 4. CREAR UN OBJETO (mesh = geometry + material)
const geometry_1 = new THREE.BoxGeometry(1, 1, 1);
const material_1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube_1 = new THREE.Mesh(geometry_1, material_1);
scene.add(cube_1);

const geometry_2 = new THREE.BoxGeometry(1, 2, 1);
const material_2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube_2 = new THREE.Mesh(geometry_2, material_2);
cube_2.position.add(new THREE.Vector3(-3, 0, 0));
scene.add(cube_2);

const geometry_3 = new THREE.BoxGeometry(1, 1, 2);
const material_3 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube_3 = new THREE.Mesh(geometry_3, material_3);
cube_3.position.add(new THREE.Vector3(3, 0, 0));
scene.add(cube_3);

// Geometrías compartidas
const geometry_shared = new THREE.BoxGeometry(1, 1, 1);
const material_code = [
    new THREE.MeshBasicMaterial({ color: 0xffff00 }),
    new THREE.MeshBasicMaterial({ color: 0xff00ff }),
    new THREE.MeshBasicMaterial({ color: 0x00ffff }),]

for  (let i = 0; i < 3; i++) {
    const cube = new THREE.Mesh(geometry_shared, material_code[i]);
    cube.position.set(-6 + i * 6, 3, 0);
    scene.add(cube);
};


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
    
    // This is frame based rotation, it will be faster or slower depending on the frame rate
    cube_1.rotation.x += 0.01;
    cube_1.rotation.y += 0.01;
    cube_1.rotation.z += 0.01;

    
    cube_2.rotation.x += 1 * delta;
    cube_2.rotation.y += 3 * delta;

    cube_3.rotation.x += 0.03;
    cube_3.rotation.y += 0.03;

    renderer.render(scene, camera);
}
animate();