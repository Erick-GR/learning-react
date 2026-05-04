/* 
    Spread operator: ... (three dots) is used to expand an iterable (like an array or object) into individual elements.
    Rest operator: ... (three dots) is also used to collect multiple elements into a single array or object.
*/

// Spread: expande elementos de un array u objeto
// Copiar arrays
const a = [1, 2, 3];
const b = [...a, 4, 5]; // [1, 2, 3, 4, 5]

// Copiar y modificar objetos
const usuario = { nombre: 'Ana', edad: 30 };
const usuarioActualizado = { ...usuario, edad: 31 };
// { nombre: 'Ana', edad: 31 }
// las propiedades posteriores sobrescriben anteriores

// Combinar arrays
const combinado = [...a, ...b];


// Rest: recolecta/agrupa elementos en un array u objeto
function sumarTodos(...numeros) {  // rest: agrupa todos los args
  return numeros.reduce((acc, n) => acc + n, 0);
}
sumarTodos(1, 2, 3, 4); // 10

// En destructuring
const [primero, ...resto] = [1, 2, 3, 4];
// primero = 1, resto = [2, 3, 4]

const { nombre, ...otrosCampos } = { nombre: 'Ana', edad: 30, ciudad: 'CDMX' };
// nombre = 'Ana', otrosCampos = { edad: 30, ciudad: 'CDMX' }


/* 
    Es importante para actualizar estados inmutablemente (sin mutar el original) constantemente
    Ejemplo con useState:
    // MAL (muta)
    usuario.edad = 31;
    setUsuario(usuario);

    // BIEN (crea nuevo objeto)
    setUsuario({ ...usuario, edad: 31 });
*/