/*
    Map, filter, reduce
    Extras:
        find, sort, slice, splice, concat, join, indexOf, lastIndexOf, includes, forEach, every, some, reverse, flat, flatMap, fill, copyWithin, entries, keys, values.
*/

// Map: transforma cada elemento de un array y devuelve un nuevo array con los resultados
const numeros = [1, 2, 3, 4];
const dobles = numeros.map(n => n * 2); // [2, 4, 6, 8]

const usuarios = [
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Luis', edad: 25 }
];
const nombres = usuarios.map(u => u.nombre); // ['Ana', 'Luis']

// Filter: crea un nuevo array con los elementos que cumplen una condición
const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter(n => n % 2 === 0); // [2, 4, 6]

// Reduce: acumula un valor a partir de los elementos de un array, aplicando una función reductora
const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((acc, n) => acc + n, 0); // 10
//                              ^^^             ^^
//                       acumulador        valor inicial

/*
    Por qué son importantes en react?
    Map te permite renderizar listas
    Ejemplo:
        const items = ['manzana', 'pera', 'uva'];

        return (
        <ul>
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
        );
*/