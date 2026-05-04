/*
    Antes
    // THREE.JS PURO (imperativo)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 'orange' });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(2, 0, 0);
    scene.add(mesh);
*/

// Con R3F (declarativo)
// R3F (declarativo)
<mesh position={[2, 0, 0]}>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="orange" />
</mesh>

/*
Las piezas son las mismas, solo se ven distintas:

THREE.Mesh → <mesh>
THREE.BoxGeometry → <boxGeometry>
THREE.MeshStandardMaterial → <meshStandardMaterial>
*/

// ---> Reglas de mapeo
// 1. Constructor → prop args
// OLD
new THREE.BoxGeometry(1, 2, 3)
// NEW
<boxGeometry args={[1, 2, 3]} />

// 2. Propiedades → props
// OLD
mesh.position.set(2, 0, 0);
mesh.rotation.y = Math.PI / 4;
mesh.scale.set(2, 2, 2);
// NEW
<mesh position={[2, 0, 0]} rotation={[0, Math.PI / 4, 0]} scale={[2, 2, 2]} />

// 3. Hijos → composición JSX
// OLD
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
// NEW
<scene>
    <mesh>...</mesh>
</scene>


// ---> Canvas: el componente raíz de R3F
// <Canvas> viene de @react-three/fiber y es el equivalente de "scene + camera + renderer + render loop" todo junto.
import { Canvas } from '@react-three/fiber';

function App() {
    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 20, 10]} intensity={0.8} />
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="orange" />
            </mesh>
        </Canvas>
    );
}

// Configurar la cámara
<Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
    {/* ... */}
</Canvas>

// REGLAS IMPORTANTES DE CANVAS
// 1. Solo elementos R3F dentro de <Canvas>
<Canvas>
    <mesh>...</mesh>          {/* ✅ R3F element */}
    <div>Hola</div>            {/* ❌ HTML element, ¡no se renderiza! */}
</Canvas>

// 2. HTML normal va afuera de <Canvas>
function App() {
    return (
        <div>
            <h1>Mi App</h1>
            <Canvas>
                <mesh>...</mesh>
            </Canvas>
            <button>Botón fuera del 3D</button>
        </div>
    );
}

// 3.Los hooks de R3F useFrame, useThree, etc. solo funcionan dentro de <Canvas>
function MiCubo() {
    const ref = useRef();
    useFrame(() => { /* ... */ });  // ✅ funciona
    return <mesh ref={ref}>...</mesh>;
}

function App() {
    return (
        <Canvas>
            <MiCubo />  {/* ✅ MiCubo está dentro de Canvas */}
        </Canvas>
    );
}

function MiCubo() {
    useFrame(() => { ... });  // ❌ ERROR: no está dentro de Canvas
    return <div>...</div>;
}

function App() {
    return <MiCubo />;  // sin Canvas
}