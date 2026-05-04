import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

interface CuboOrbitandoProps {
    radio: number;
    velocidad: number;
    color: string;
}

function CuboOrbitando({ radio, velocidad, color }: CuboOrbitandoProps) {
    const ref = React.useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (ref.current) {
            const tiempo = state.clock.getElapsedTime();
            const x = radio * Math.cos(tiempo * velocidad);
            const z = radio * Math.sin(tiempo * velocidad);
            ref.current.position.set(x, 0, z);

            ref.current.rotation.y += velocidad**2 * delta; // Rota el cubo sobre su propio eje Y a una velocidad constante
        }  
    });

    return (
        <mesh ref={ref}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} />

            <Html distanceFactor={20}>
                <div style={{ background: 'white', padding: '4px', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                    Cubo {color}
                </div>
            </Html>
        </mesh>
    );
}

export default CuboOrbitando;