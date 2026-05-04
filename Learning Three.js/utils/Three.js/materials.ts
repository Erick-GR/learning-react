import * as THREE from 'three';

// Materiales reactivos a luces

// MeshLambertMaterial - sin reflejos especulares (mate)
new THREE.MeshLambertMaterial({ color: 0x00ff00 });

// MeshPhongMaterial - con reflejos especulares (plástico/brilloso)
new THREE.MeshPhongMaterial({ color: 0x00ff00, shininess: 100 });

// MeshStandardMaterial - PBR (Physically-Based Rendering) moderno, lo más realista
new THREE.MeshStandardMaterial({ 
    color: 0x00ff00, 
    metalness: 0.5,    // 0=no metal, 1=todo metal
    roughness: 0.3,    // 0=espejo, 1=mate
});


// Sombras (costosas)
renderer.shadowMap.enabled = true;
sun.castShadow = true;
mesh.castShadow = true;
mesh.receiveShadow = true;