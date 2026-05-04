import React from 'react';

interface CardProps {
    titulo: string;
    children: React.ReactNode;  // tipo estándar para "cualquier JSX"
}

function Card({ titulo, children }: CardProps) {
    return (
        <div className="card" style={{ border: '1px solid #000000', padding: '16px', borderRadius: '8px', margin: '16px' }}>
            <h2>{titulo}</h2>
            {children}
        </div>
    )
}

export default Card;