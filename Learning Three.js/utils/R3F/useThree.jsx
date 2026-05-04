/*
    useThree
    Te da acceso a la scene, camera, renderer y otros internals:
*/

import { useThree } from '@react-three/fiber';

function MiComponente() {
    const { camera, scene, gl, size } = useThree();
    
    // Tienes acceso a la cámara, escena, renderer
    // gl es el WebGLRenderer
    // size es { width, height } del canvas
    
    useEffect(() => {
        camera.position.set(0, 5, 10);
        camera.lookAt(0, 0, 0);
    }, [camera]);
    
    return null;  // este componente solo manipula, no renderiza nada visual
}