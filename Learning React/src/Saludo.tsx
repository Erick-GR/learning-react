import React from 'react';
import { Persona } from './types';

function Saludo({ nombre, edad, prefijo }: Persona) {   
    return <p>Hola, {prefijo ?? ""} {nombre}. Tienes {edad} años.</p>   
            {/* <p>Hola, {nombre}. Tienes {edad} años.</p> */}
}

export default Saludo;