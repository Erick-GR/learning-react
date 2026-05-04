import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function CuboOrbitando({ radio, velocidad, color }: { radio: number; velocidad: number; color: string }) {
    const ref = useRef<THREE.Mesh>(null);
    
    useFrame((state) => {
        if (ref.current) {
            const t = state.clock.getElapsedTime();
            ref.current.position.x = Math.cos(t * velocidad) * radio;
            ref.current.position.z = Math.sin(t * velocidad) * radio;
            ref.current.rotation.y += 0.01;
        }
    });
    
    return (
        <mesh ref={ref}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
}

function Escena() {
    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 20, 10]} intensity={0.8} />
            
            {/* Esfera central */}
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="red" metalness={0.3} roughness={0.4} />
            </mesh>
            
            {/* Cubos orbitando */}
            <CuboOrbitando radio={3} velocidad={1} color="green" />
            <CuboOrbitando radio={5} velocidad={0.5} color="blue" />
            <CuboOrbitando radio={7} velocidad={0.25} color="yellow" />
            
            {/* Helpers */}
            <gridHelper args={[20, 20]} />
            <axesHelper args={[5]} />
        </>
    );
}

export default function App() {
    return (
        <Canvas camera={{ position: [0, 5, 15], fov: 75 }}>
            <Escena />
        </Canvas>
    );
}