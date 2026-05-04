import React from 'react';

interface CardProps {
    children: React.ReactNode;  // tipo estándar para "cualquier JSX"
}

function MiCard({ children }: CardProps) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

function App() {
    return (
        <MiCard>
            <h2>Hola, soy un título dentro de la tarjeta</h2>
            <p>Y este es un párrafo dentro de la tarjeta.</p>
        </MiCard>
    );
}

// Permite que un componente sea un wrapper genérico sin saber qué le metas adentro. Composición pura. Es una forma de reutilizar componentes sin necesidad de herencia. 
// En este caso, MiCard puede contener cualquier contenido que se le pase como children, lo que lo hace muy flexible y reutilizable.

// ---> Conexión con  Three.js y R3F
<Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <mesh>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
    </mesh>
</Canvas>