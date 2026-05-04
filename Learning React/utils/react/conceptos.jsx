// ---> Componentes: función que devuelve una descripción de UI. Pueden recibir props (propiedades) como argumentos.
function Saludo({ nombre }) {
  return <h1>Hola, {nombre}</h1>;
}

// Componente principal que usa el componente Saludo
function App() {
  return (
    <div>
      <Saludo nombre="Ana" />
      <Saludo nombre="Luis" />
    </div>
  );
}

// ---> Props: son los argumentos que se pasan a los componentes. Se reciben como un objeto.
<Saludo nombre="Ana" edad={30} />;
//      ^^^^^^^^^^^^ ^^^^^^^^
//         props

// ---> JSX: es una sintaxis que permite escribir HTML dentro de JavaScript. Se compila a llamadas a React.createElement.
<h1 className="titulo">Hola</h1>;
