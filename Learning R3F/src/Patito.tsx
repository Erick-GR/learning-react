import { useGLTF } from '@react-three/drei';

function Patito() {
    const { scene } = useGLTF('https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF-Binary/Duck.glb');
    return <primitive object={scene} position={[0, 1, -5]} scale={[1, 1, 1]} />;
}

export default Patito;