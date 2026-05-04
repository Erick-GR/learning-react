/*
    HRML real dentro del 3D
*/
import { Html } from '@react-three/drei';

<mesh position={[0, 2, 0]}>
    <boxGeometry />
    <meshStandardMaterial color="orange" />
    
    <Html distanceFactor={10}>
        <div style={{ background: 'white', padding: '5px' }}>
            Soy un cubo
        </div>
    </Html>
</mesh>

/*
<Html> te permite renderizar HTML normal (divs, botones, formularios) anclado a una posición 3D. El HTML se mueve, escala y oclude correctamente.
Casos de uso típicos:

Tooltips que aparecen sobre objetos al hacer hover.
Labels de bounding boxes ("Vehículo: 95% confianza").
Controles UI que parecen estar "en" el mundo 3D.
Formularios asociados a objetos.

Props importantes:

distanceFactor: escala el HTML según distancia a la cámara (más lejos = más chico).
occlude: array de objetos que pueden ocultar el HTML (cuando están delante).
transform: el HTML se transforma en 3D (rota con la escena).
position o anclar a un mesh padre.

*/