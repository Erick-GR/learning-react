// Esto es lo que hemos hecho en Canvas
<Canvas camera={{ position: [0, 5, 10], fov: 75 }}></Canvas>

// Pero también podemos usar la cámara de Drei, que es un wrapper de la cámara de R3F con algunas funcionalidades extra.
<Canvas>
    <PerspectiveCamera makeDefault position={[0, 5, 10]} fov={75} />
    <Escena />
</Canvas>

/*
¿Cuándo usar cuál?

Forma A para casos simples. Es más concisa.
Forma B cuando necesitas:

Cambiar entre múltiples cámaras dinámicamente.
Que la cámara sea un componente con su propia lógica (animaciones, props, refs).
Que la cámara siga a un objeto dinámicamente.
*/