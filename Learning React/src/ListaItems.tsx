import React, { useState } from 'react';

interface Item {
    id: number;
    text: string;
};

function ListaItems() {
    const [items, setItems] = useState<Item[]>([]);
    const [text, setText] = useState("");

    const agregarItem = () => {
        if (text.trim() === "") return; // No agregar items vacíos
        const newItem: Item = {
            id: Date.now(),
            text // Simplificado porque se llaman igual, es lo mismo que escribir text: text
        };
        // setItems([...items, newItem]);
        setItems(prev => [...prev, newItem]); // Alternativa usando función de actualización
        setText("");
    };

    const eliminarItem = (id: number) => {
        setItems(prev => prev.filter(item => item.id !== id));
    }

    return (
        <>
            {/* {items.length === 0 ? (<p>No hay items</p>) : (
                <ul>
                    {items.map(
                        (item) => 
                            <li key={item.id}>
                                {item.text}
                                <button onClick={() => eliminarItem(item.id)}>Eliminar</button>
                            </li>
                        )
                    }
                </ul>
            )} */}
            {/* Otra opción */}
            {items.length === 0 && <p>No hay items</p>}
            {items.length > 0 && (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.text}
                            <button onClick={() => eliminarItem(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
            <br />
            {/* Create an input tag to add new items */}
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={agregarItem}>Agregar</button>

        </>
    )
}

export default ListaItems;