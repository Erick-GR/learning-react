/*
    Hook clave: useFrame
    Equivalente a tu function animate() en Three.js puro, pero por componente.
*/
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function CuboGirando() {
    const meshRef = useRef<THREE.Mesh>(null);
    
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.5 * delta;
        }
    });
    
    return (
        <mesh ref={meshRef}>
            <boxGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
}

/*
Lo que recibe el callback de useFrame:
- state: { clock, camera, scene, viewport, ... }
- delta: tiempo en segundos desde el último frame (útil para animaciones suaves)
*/