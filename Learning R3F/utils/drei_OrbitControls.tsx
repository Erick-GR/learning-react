import { OrbitControls } from '@react-three/drei';

<Canvas>
    <Escena />
    <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minDistance={2}
        maxDistance={50}
        target={[0, 0, 0]}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
    />
</Canvas>

