const usuarios = [
  { id: 1, nombre: 'Ana', edad: 30, activo: true, hobbies: ['leer', 'correr'] },
  { id: 2, nombre: 'Luis', edad: 25, activo: false, hobbies: ['gaming'] },
  { id: 3, nombre: 'María', edad: 35, activo: true, hobbies: ['yoga', 'cocinar', 'viajar'] },
  { id: 4, nombre: 'Pedro', edad: 28, activo: true, hobbies: [] },
];

// TAREAS — resuelve cada una usando lo que aprendiste:

// 1. Imprime los nombres de todos los usuarios activos.
//    Pista: filter + map.
const usuariosActivos = usuarios.filter(u => u.activo);
const nombresActivos = usuariosActivos.map(u => u.nombre);
console.log(nombresActivos);

// 2. Crea un nuevo array donde cada usuario tenga una propiedad extra
//    "esJoven" = true si edad < 30, false si no. NO mutes el original.
//    Pista: map + spread.
const usuariosConEsJoven = usuarios.map(u => ({
    ...u,
    esJoven: u.edad < 30
}));
console.log(usuariosConEsJoven);

// 3. Calcula la edad promedio de los usuarios activos.
//    Pista: filter + reduce (o filter + map + un cálculo).
const edadPromedio = usuariosActivos.reduce((acc, u) => acc + u.edad, 0) / usuariosActivos.length;
console.log(edadPromedio);

// 4. Crea una función async llamada "obtenerSaludo" que reciba un nombre
//    y devuelva (después de 1 segundo) el string `Hola, ${nombre}!`.
//    Llámala con await desde otra función async y console.log el resultado.
//    Pista: para simular el delay usa: 
//    await new Promise(resolve => setTimeout(resolve, 1000));
async function obtenerSaludo(nombre) {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return `Hola, ${nombre}`;
    } catch (error) {
        console.error(error);
    }
}

async function mandarSaludo(nombre) {
    try {
        const saludo = await obtenerSaludo(nombre);
        console.log(saludo);
    } catch (error) {
        console.error(error);
    }
}

mandarSaludo('Claude');

// 5. Dado este objeto:
const config = { tema: 'oscuro', idioma: null };
//    Crea una variable "idiomaFinal" que use 'es' como default
//    si idioma es null/undefined.
//    Pista: ??
const idiomaFinal = config.idioma ?? 'es';
console.log(idiomaFinal);

// 6. Dado:
const datos = { usuario: { perfil: null } };
//    Accede a datos.usuario.perfil.avatar SIN que crashee.
//    Pista: ?.
console.log(datos.usuario.perfil?.avatar);