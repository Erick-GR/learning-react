/*
    Optional chaining y Nullish coalesching

    Dos pequeñas joyas que evitan crashes por valores null/undefined.
*/

// Optional chaining (?.): permite acceder a propiedades de objetos sin lanzar un error si alguna 
// parte de la cadena es null o undefined.
const usuario = null;

// Esto crashea: "Cannot read property 'nombre' of null"
const nombre = usuario.nombre;

// Esto NO crashea
const nombre = usuario?.nombre; // undefined

// Encadenado
const ciudad = usuario?.direccion?.ciudad; // undefined sin crashear

// En llamadas
const resultado = obj.metodo?.(); // llama solo si existe



// Nullish coalescing (??): operador que devuelve el valor de la izquierda si no es null ni undefined,
const config = null;
const valor = config ?? 'default'; // 'default'

const algo = 0;
const valor2 = algo ?? 100; // 0 (porque 0 NO es null/undefined)
const valor3 = algo || 100; // 100 (|| considera 0 como "falsy")