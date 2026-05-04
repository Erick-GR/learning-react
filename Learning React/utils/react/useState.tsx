/*
    useState
*/
import React, { useState } from 'react';

// El contador no va a funcionar
function Contador() {
  let count = 0;  // ❌ esto se reinicia a 0 en cada render
  
  return (
    <button onClick={() => count++}>{count}</button>
  );
}

// solución usando useState

function Contador() {
  const [count, setCount] = useState(0);
  //     ^^^^^  ^^^^^^^^             ^
  //   valor    setter      valor inicial
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicks: {count}
    </button>
  );
}

// Tipando con TypeScript
const [count, setCount] = useState<number>(0);
// El generic <number> es opcional aquí, TS infiere desde el valor inicial

const [usuario, setUsuario] = useState<Usuario | null>(null);
// Aquí SÍ necesitas el generic, porque null solo no le dice a TS qué tipo es


// ------
// TRAMPA 1: Mutación en lugar de reemplazo
const [usuario, setUsuario] = useState({ nombre: 'Ana', edad: 30 });

// ❌ MAL: muta el objeto, mismo referencia
usuario.edad = 31;
setUsuario(usuario);  // React: "es el mismo objeto, no re-renderizo"

// ✅ BIEN: nuevo objeto
setUsuario({ ...usuario, edad: 31 });

// Con arrays
const [items, setItems] = useState([1, 2, 3]);

// ❌ MAL
items.push(4);
setItems(items);

// ✅ BIEN
setItems([...items, 4]);

// Eliminar:
setItems(items.filter(i => i !== 2));

// Modificar uno:
setItems(items.map(i => i === 2 ? 22 : i));

// TRAMPA 2: Estado obsoleto
function Contador() {
  const [count, setCount] = useState(0);
  
  const incrementarTresVeces = () => {
    setCount(count + 1); // ❌ MAL
    setCount(count + 1); // ❌ MAL
    setCount(count + 1); // ❌ MAL
    // ¿Cuánto vale count al final? Spoiler: 1, no 3.
  };

  // Lo correcto es usar la función de actualización con el valor previo:
  const incrementarTresVeces = () => {
    setCount(prev => prev + 1);  // prev = 0, devuelve 1
    setCount(prev => prev + 1);  // prev = 1, devuelve 2
    setCount(prev => prev + 1);  // prev = 2, devuelve 3
    };
}

// TRAMPA 3: Estado redundante / derivable
// ❌ MAL: estado redundante
const [items, setItems] = useState([...]);
const [count, setCount] = useState(0);  // count siempre debería ser items.length

// Cada vez que modificas items, también tienes que modificar count → bugs.

// ✅ BIEN: deriva, no guardes
const [items, setItems] = useState([...]);
const count = items.length;  // se recalcula en cada render, gratis
