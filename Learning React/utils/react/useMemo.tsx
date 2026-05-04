import React, { useMemo } from 'react';

const itemsOrdenados = useMemo(() => {
    return items.slice().sort((a, b) => a.precio - b.precio);
}, [items]);
// "Calcula esto solo si items cambió. Si no, devuelve el resultado cacheado del render anterior."

