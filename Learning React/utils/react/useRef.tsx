/*
    useRef

    A veces necesitas otra cosa: una variable que persista entre renders, pero que no cause re-renders cuando la cambias, y que puedas leer y mutar libremente.

    Ejemplos de cuándo lo necesitas:

    Guardar el ID de un setInterval para poder cancelarlo después.
    Guardar el valor anterior de un prop para compararlo con el actual.
    Mantener un contador interno que no quieres mostrar al usuario.
    Acceso directo a un elemento del DOM (un <input> para enfocarlo, un <canvas> para dibujarle).
    En R3F: referencias directas a objetos 3D (un mesh, una cámara, controls) para manipularlos imperativamente.
*/

// Sintaxis
import { useRef } from 'react';

function MiComponente() {
    const miRef = useRef<number>(0);
    //     ^^^^^                ^
    //     ref               valor inicial
    
    // Acceder al valor:
    console.log(miRef.current);  // 0
    
    // Modificar:
    miRef.current = 42;  // ¡no causa re-render!
}
// useRef devuelve un objeto con una sola propiedad: .current. Tú lees y escribes esa propiedad libremente.

// Dos grandes categorías de uso:
// 1. Acceder a elementos del DOM
// React te da una forma de obtener una referencia a un elemento HTML real renderizado.

import { useRef, useEffect } from 'react';

function CampoConFoco() {
    const inputRef = useRef<HTMLInputElement>(null);
    //                     ^^^^^^^^^^^^^^^^^^      
    //              tipo del elemento DOM
    
    useEffect(() => {
        // Después del render, el ref.current apunta al <input> real
        inputRef.current?.focus();
    }, []);
    
    return <input ref={inputRef} type="text" />;
    //            ^^^^^^^^^^^^^
    //     React asigna el elemento DOM aquí
}
/*
Tipos comunes para refs de DOM:

HTMLInputElement (un <input>)
HTMLDivElement (un <div>)
HTMLButtonElement, HTMLCanvasElement, etc.
*/

// 2. Guardar valores mutables que no causan re-render
function Cronometro() {
    const [segundos, setSegundos] = useState(0);
    const intervalId = useRef<number | null>(null);
    
    const iniciar = () => {
        if (intervalId.current !== null) return;  // ya está corriendo
        intervalId.current = window.setInterval(() => {
            setSegundos(prev => prev + 1);
        }, 1000);
    };
    
    const detener = () => {
        if (intervalId.current === null) return;
        clearInterval(intervalId.current);
        intervalId.current = null;
    };
    
    return (
        <div>
            <p>{segundos}s</p>
            <button onClick={iniciar}>Iniciar</button>
            <button onClick={detener}>Detener</button>
        </div>
    );
}

// Cambiar un useRef no dispara re-renders


// ---> Conexión con el reto
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Cubo() {
    const meshRef = useRef<THREE.Mesh>(null);
    //                    ^^^^^^^^^^^
    //                tipo del objeto Three.js
    
    useFrame((state, delta) => {
        // Se ejecuta CADA FRAME (60fps)
        if (meshRef.current) {
            meshRef.current.rotation.x += delta;
            meshRef.current.rotation.y += delta;
        }
    });
    
    return (
        <mesh ref={meshRef}>
            <boxGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
}