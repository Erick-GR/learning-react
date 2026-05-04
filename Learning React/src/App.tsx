import React from 'react';
import Saludo from './saludo';
import ListaSaludos from './ListaSaludo';
import Contador from './Contador';
import Toggle from './Toggle';
import ListaItems from './ListaItems';
import RelojDigital from './RelojDigital';
import TamanoVentana from './TamanoVentana';
import BuscadorUsuario from './BuscadorUsuario';
import InputAutoFoco from './InputAutoFoco';
import ContadorRenders from './ContadorRenders';
import Misterio from './Misterio';
import BuscadorConDebounce from './BuscadorConDebounce';
import Card from './Card';

function App() {
  const [mountBuscadorUsuario, setMountBuscadorUsuario] = React.useState(true);

  return (
    <div>
        <h1>¡Hola, React!</h1>
        <p>Mi primer componente.</p>
        {/* <br /> */}
        <Saludo nombre="Erick" edad={32} />
        <Saludo nombre="Fer" edad={29} />
        <Saludo nombre="René" edad={28} prefijo="Sr." />

        <ListaSaludos personas={[
            { nombre: "Ignacio", edad: 30 },
            { nombre: "Maria", edad: 39, prefijo: "Sra." },
            { nombre: "Alejandro", edad: 18 }
        ]} />

        <Contador />

        <Toggle />

        <ListaItems />

        <RelojDigital />

        <TamanoVentana />

        <button onClick={() => setMountBuscadorUsuario(prev => !prev)}>
            {mountBuscadorUsuario ? "Ocultar" : "Mostrar"} Buscador de Usuario
        </button>
        {mountBuscadorUsuario && <BuscadorUsuario />}

        <InputAutoFoco />

        <ContadorRenders />
        <Misterio />

        <BuscadorConDebounce />

        <Card titulo="Título de la Tarjeta">
            <p>Este es el contenido de la tarjeta. Puede ser cualquier cosa: texto, imágenes, otros componentes...</p>
        </Card>
    </div>
  );
}

export default App;