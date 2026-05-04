/*
    Async, wait and promises are all related to handling asynchronous operations in JavaScript.

    JS es single-threaded, lo que significa que solo puede ejecutar una tarea a la vez. 
    Pero muchas operaciones (red, archivos, timers) son lentas. Si JS se "esperara" de forma síncrona, todo se congelaría. 
    Solución: operaciones asíncronas que regresan una Promise.
*/

// Una Promise representa "un valor que existirá en el futuro". Tres estados: pendiente, cumplida (resolved), rechazada (rejected).
// Forma vieja
fetch('/api/usuarios')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Forma moderna con async/await
async function cargarUsuarios() {
  try {
    const response = await fetch('/api/usuarios');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
/*
    Reglas clave:
    await solo funciona dentro de funciones marcadas async.
    await "pausa" la ejecución hasta que la Promise se resuelva.
    Una función async siempre devuelve una Promise.

    Para el reto:
        el dataset PandaSet son archivos remotos. Los vas a cargar con fetch o 
        con loaders de Three (que también son async). Vas a usar async/await o 
        useEffect con funciones async para esto.
*/

