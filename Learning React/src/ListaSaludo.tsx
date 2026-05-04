import React from 'react';
import { Persona } from './types';
import Saludo from './saludo';

interface ListaPersonas {
    personas: Persona[];
}

function ListaSaludos({ personas }: ListaPersonas) {
    return (
        <div>
            {personas.map((persona, index) => (
                <Saludo key={index} {...persona} />
            ))}
        </div>
    );
}

export default ListaSaludos;