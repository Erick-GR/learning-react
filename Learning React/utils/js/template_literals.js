/*
    Template literales: son strings con interpolación y soporte para múltiples líneas, usando backticks (``) en lugar de comillas.
*/

const nombre = 'Ana';
const edad = 30;

// Vieja escuela (concatenación)
const saludo = 'Hola ' + nombre + ', tienes ' + edad + ' años';

// Template literal
const saludo = `Hola ${nombre}, tienes ${edad} años`;

// Multi-línea, sin caracteres raros
const html = `
  <div>
    <h1>${nombre}</h1>
  </div>
`;