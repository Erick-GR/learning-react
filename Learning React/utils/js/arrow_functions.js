/* 
    Tres formas de escribir funciones en JavaScript:
*/
// Función tradicional
function suma(a, b) {
    return a + b;
}

// Arrow function equivalente
const suma = (a, b) => {
    return a + b;
}

// Arrow function con retorno implícito (cuando solo hay una expresión)
const suma = (a, b) => a + b;

// Un solo parámetro: paréntesis opcionales
const doble = x => x * 2;

// Sin parámetros: paréntesis obligatorios
const saludo = () => '¡Hola, mundo!';