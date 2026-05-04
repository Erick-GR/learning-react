/*
    Buffer Geometry: es la geometría de bajo nivel en Three.js. Internamente, todas las geometrías 
    (BoxGeometry, SphereGeometry, etc.) son BufferGeometry — solo que pre-construidas.

    Una BufferGeometry tiene atributos (typed arrays) que describen los vértices:

    position: 3 floats por vértice (x, y, z).
    color: 3 floats por vértice (r, g, b) — opcional.
    normal: vector normal — para iluminación.
    uv: coordenadas de textura.
*/

// EJEMPLO - Point Cloud desde cero

const numPoints = 10000;

// 1. Crear un Float32Array con las posiciones
//    Formato: [x0, y0, z0, x1, y1, z1, x2, y2, z2, ...]
const positions = new Float32Array(numPoints * 3);

for (let i = 0; i < numPoints; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 10;  // x
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;  // y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;  // z
}

// 2. Crear la BufferGeometry y asignar el atributo
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//                                                                       ^
//                                          3 floats por vértice (x,y,z)

// 3. Material para puntos
const material = new THREE.PointsMaterial({
    color: 0x00ffff,
    size: 0.05,
});

// 4. Crear el objeto Points (NO un Mesh)
const pointCloud = new THREE.Points(geometry, material);
scene.add(pointCloud);



// Utilizar los colores del set
const colors = new Float32Array(numPoints * 3);

for (let i = 0; i < numPoints; i++) {
    colors[i * 3]     = Math.random();  // r
    colors[i * 3 + 1] = Math.random();  // g
    colors[i * 3 + 2] = Math.random();  // b
}

geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,  // ← clave: dile que use el atributo color
});


/*
    Bounding box
*/

// OPCION A - BoxGeometry con material wireframe
const geo = new THREE.BoxGeometry(width, height, depth);
const mat = new THREE.MeshBasicMaterial({ 
    color: 0xff0000, 
    wireframe: true 
});
const box = new THREE.Mesh(geo, mat);
box.position.set(x, y, z);
scene.add(box);


// OPCNION B - LineSegments
const geo = new THREE.BoxGeometry(width, height, depth);
const edges = new THREE.EdgesGeometry(geo);  // extrae solo las aristas
const lines = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: 0xff0000 })
);
lines.position.set(x, y, z);
scene.add(lines);