/* 
    Destructuring: te permite extraer valores de objetos o arrays y asignarlos a variables de manera más concisa.
*/
// Objectos
const persona = { nombre: 'Ana', edad: 30, ciudad: 'CDMX' };

// Sin destructuring (tedioso)
const nombre = persona.nombre;
const edad = persona.edad;

// Con destructuring (limpio)
const { nombre, edad } = persona;
console.log(nombre); // 'Ana'

// Renombrar mientras destructuras
const { nombre: nombreUsuario } = persona;

// Valor por defecto si no existe
const { pais = 'México' } = persona;

// Arrays
const colores = ['rojo', 'verde', 'azul'];
const [primero, segundo] = colores;
console.log(primero); // 'rojo'

/* 
    Son importantes porque los hooks de react devuelven array, y el destructuring es la forma más común de acceder a sus valores.
    Ejemplo con useState:
    const [count, setCount] = useState(0);

    También los props de un componente se pueden destructurar para acceder a sus valores de forma más limpia:
    const MiComponente = ({ titulo, descripcion }) => {
        return (
            <div>
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
            </div>
        );
    };
*/