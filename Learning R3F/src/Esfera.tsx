import React from 'react';

function Esfera() {
    return (
        <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="red" metalness={0.3} roughness={0.4} />
        </mesh>
    );
}

export default Esfera;