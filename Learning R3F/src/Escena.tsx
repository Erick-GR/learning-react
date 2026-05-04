import Esfera from './Esfera';
import Piso from './Piso';
import CuboOrbitando from './CuboOrbitando';
import Patito from './Patito';

function Escena() {
    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 20, 10]} intensity={0.8} />

            <Esfera />
            <Piso />
            <CuboOrbitando radio={5} velocidad={1} color="red" />
            <CuboOrbitando radio={3} velocidad={1.5} color="green" />
            <CuboOrbitando radio={7} velocidad={0.25} color="orange" />
            <Patito />
           <gridHelper args={[20, 20]} /> 
           <axesHelper args={[5]} />
        </>
    );
}

export default Escena;