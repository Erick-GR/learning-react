
// OLD - en Three
const loader = new GLTFLoader();
const gltf = await loader.loadAsync('modelo.glb');
scene.add(gltf.scene);

// NEW - con Drei
import { useGLTF } from '@react-three/drei';

function MiModelo() {
    const { scene } = useGLTF('/models/duck.glb');
    return <primitive object={scene} />;
}


// Y el loading?
// Utilizamos Suspense de React para mostrar un fallback mientras se carga el modelo:
import { Suspense } from 'react';

<Canvas>
    <Suspense fallback={null}>
        <MiModelo />
    </Suspense>
</Canvas>

/*
Si el modelo está cargando, <MiModelo> "suspende" el render. Suspense muestra el fallback (ej. un spinner, o null para nada). Cuando el modelo carga, automáticamente reemplaza.
Cache automático: drei cachea modelos. Si llamas useGLTF('/models/duck.glb') desde 100 componentes, se carga solo una vez.
*/

// Pre-loading
useGLTF.preload('/models/duck.glb');