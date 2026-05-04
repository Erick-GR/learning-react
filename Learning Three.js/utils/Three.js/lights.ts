import * as THREE from 'three';

// Ambient Light
// Ilumina todo uniformemente, sin sombras, sin dirección. Útil para que las zonas oscuras no se vean negras puras.
const ambient = new THREE.AmbientLight(0xffffff, 0.5);
//                                     color    intensidad (0-1+)
scene.add(ambient);


// DirectionalLight - Luz paralela direccional
// Como el sol: rayos paralelos, intensidad uniforme sin importar distancia. La dirección se calcula desde position hasta target (default origen).
const dir = new THREE.DirectionalLight(0xffffff, 1);
dir.position.set(5, 10, 5);
scene.add(dir);


// PointLight - Bombilla
// Emite en todas direcciones desde un punto. Intensidad cae con la distancia.
const point = new THREE.PointLight(0xffaa00, 2, 50);
//                                 color    intensidad  distancia max
point.position.set(0, 5, 0);
scene.add(point);


// SpotLight - Linterna/foco cónico
// Un cono de luz desde un punto. Para los faros de un coche, por ejemplo.
const spot = new THREE.SpotLight(0xffffff, 1, 100, Math.PI / 4);
//                              color    int   dist   ángulo (radianes)
spot.position.set(0, 10, 0);
scene.add(spot);


// Setup típico
// Luz ambiental suave para que las sombras no sean negras
scene.add(new THREE.AmbientLight(0xffffff, 0.3));

// Luz direccional principal (el "sol")
const sun = new THREE.DirectionalLight(0xffffff, 0.8);
sun.position.set(10, 20, 10);
scene.add(sun);