/*
    useEffect

    ¿qué pasa cuando necesitas hacer cosas que no son puras? Por ejemplo:

    Hacer fetch a una API.
    Suscribirte a un evento del DOM (window.addEventListener).
    Cambiar el document.title.
    Iniciar un setInterval.
    Cargar un modelo 3D con Three.js.

    Estas operaciones tienen efectos en el mundo fuera de React (red, DOM, timers, recursos). Si las haces en el cuerpo del componente, se disparan en cada render:
*/

// Sintaxis básica
import { useEffect } from 'react';

function MiComponente() {
    useEffect(() => {
        // Código aquí adentro = "efecto"
        // Se ejecuta DESPUÉS de cada render por default
        console.log("Render terminó");
    });
    
    return <div>...</div>;
}

// ---> Dependency array
// Esto controla cuándo se ejecuta el efecto.

// Escenario 1: Sin dependency array
useEffect(() => {
    console.log("Cada render");
});
// Se ejecuta SIEMPRE, en cada render
// Casi nunca quieres esto

// Escenario 2: Con dependency array vacío
useEffect(() => {
    console.log("Solo la primera vez (mount)");
}, []);
// Se ejecuta UNA vez, cuando el componente se "monta" (aparece)
// Útil para: cargar datos iniciales, suscribirte a eventos globales

// Escenario 3: Con dependencies específicas
useEffect(() => {
    console.log(`El id cambió a ${id}`);
}, [id]);
// Se ejecuta al montar Y cada vez que `id` cambie
// Útil para: reaccionar a cambios de props/estado


// ---> Ejemplo práctico: Fetch de datos desde API
import { useState, useEffect } from 'react';

interface Usuario {
    id: number;
    nombre: string;
}

function PerfilUsuario({ id }: { id: number }) {
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [cargando, setCargando] = useState(true);
    
    useEffect(() => {
        setCargando(true);
        fetch(`/api/usuarios/${id}`)
            .then(res => res.json())
            .then(data => {
                setUsuario(data);
                setCargando(false);
            });
    }, [id]);  // ← se vuelve a llamar si cambia el id
    
    if (cargando) return <p>Cargando...</p>;
    if (!usuario) return <p>No encontrado</p>;
    
    return <p>{usuario.nombre}</p>;
}


// ---> Limpieza de efectos
// Algunos efectos necesitan "limpiarse" para evitar fugas de memoria o comportamientos extraños.

useEffect(() => {
    const handler = () => console.log("resize");
    window.addEventListener('resize', handler);
    
    // Función de cleanup:
    return () => {
        window.removeEventListener('resize', handler);
    };
}, []);

// En este ejemplo, el efecto se ejecuta solo al montar, y la función de limpieza se ejecuta al desmontar (cuando el componente desaparece).
useEffect(() => {
    const id = setInterval(() => console.log(`Hola ${nombre}`), 1000);
    return () => clearInterval(id);
}, [nombre]);
// Aquí, el intervalo se reinicia cada vez que `nombre` cambia, y se limpia el intervalo anterior para evitar múltiples intervalos corriendo al mismo tiempo.



// ---> Trampas clásicas
// 1. Olvidar el dependency array
// Sin array, se ejecuta en cada render. Si el efecto causa un setState, eso causa otro render, que causa otro efecto, que causa otro setState... loop infinito.
useEffect(() => {
    fetch('/api/datos').then(...);
});  // ❌ sin []

// 2. Mentirle a react sobre las dependencias
// Esto causa bugs sutiles: el efecto usa el valor de usuario del primer render y nunca se actualiza, aunque usuario cambie. ESLint te avisa con la regla react-hooks/exhaustive-deps.
// Regla de oro: todo lo que usas dentro del efecto y viene de afuera (props, estado, otras variables) debe estar en el array.
useEffect(() => {
    console.log(usuario.nombre);  // usa "usuario"
}, []);  // ❌ pero no lo declaras como dependencia

// 3. Crear loops infinito con efectos que actualizan estado sin control
const [datos, setDatos] = useState([]);

useEffect(() => {
    setDatos([...datos, 'nuevo']);  // ❌ modifica datos
}, [datos]);  // ❌ depende de datos → loop infinito

// Solución
useEffect(() => {
    setDatos(prev => [...prev, 'nuevo']);
}, []);  // sin depender de datos

// 4. Funciones asíncronas directamente en useEffect
// No puedes hacer `useEffect(async () => { ... })` porque useEffect espera que la función de efecto devuelva una función de limpieza o nada, no una promesa. En su lugar, define la función asíncrona dentro del efecto y luego llámala.
useEffect(async () => { ... }, []);  // ❌

// Solución:
useEffect(() => {
    const cargar = async () => {
        const res = await fetch('/api/datos');
        const data = await res.json();
        setDatos(data);
    };
    cargar();
}, []);