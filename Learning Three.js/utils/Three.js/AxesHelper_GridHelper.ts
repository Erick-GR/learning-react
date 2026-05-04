import * as THREE from 'three';

// Cuando programas 3D, necesitas ver tus ejes. Three.js trae helpers visuales:

const axes = new THREE.AxesHelper(5);  // 5 unidades de largo
scene.add(axes);
// X = rojo, Y = verde, Z = azul

const grid = new THREE.GridHelper(20, 20);  // 20 unidades, 20 divisiones
scene.add(grid);
// Plano XZ (Y=0)

// Visualizar dirección y posición de una luz direccional
scene.add(new THREE.DirectionalLightHelper(sun, 2));

// Visualizar punto de luz
scene.add(new THREE.PointLightHelper(point, 1));