import React, { useCallback } from 'react';

const handleClick = useCallback(() => {
    console.log("click");
}, []);
// "Devuelve la misma función entre renders, mientras las dependencias no cambien."

