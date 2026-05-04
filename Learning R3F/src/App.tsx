import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';

import Escena from './Escena';

function App() {
    return (
        <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
            <Suspense fallback={null}>
                <Escena />
            </Suspense>
            <OrbitControls />
            <Stats />
        </Canvas>
    );
}

export default App;