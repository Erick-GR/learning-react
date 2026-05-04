/*
    ¿Por qué existe TypeScript?
    JavaScript es dinámicamente tipado: una variable puede ser cualquier cosa, en cualquier momento.

    TypeScript = JavaScript + tipos estáticos. Tú declaras qué tipo es cada cosa, y un compilador (el "type checker") revisa todo tu código antes de correrlo:

    Beneficios reales:

    Errores antes de runtime.
    Autocompletado mucho mejor en VS Code (sabe qué propiedades tiene cada objeto).
    Documentación implícita: leer tipos te dice cómo usar una función.
    Refactorizar es seguro: si renombras una propiedad, TS te avisa de todos los lugares rotos.

    Costo: más sintaxis, curva de aprendizaje. Pero pagar ese costo vale absolutamente la pena en proyectos serios.
*/

// ---> Primitivos
let nombre: string = "Ana";
let edad: number = 30;
let activo: boolean = true;
let nada: null = null;
let indefinido: undefined = undefined;

let edad = 30; // TS infiere que es un number

// ---> Arrays
let numeros: number[] = [1, 2, 3];
let nombres: Array<string> = ["Ana", "Luis"];

// ---> Objetos
// Type alias
type Usuario = {
  id: number;
  nombre: string;
  edad: number;
  activo: boolean;
};

const ana: Usuario = { id: 1, nombre: "Ana", edad: 30, activo: true };

// Interfaces
interface Usuario {
  id: number;
  nombre: string;
  edad: number;
  activo: boolean;
}

const ana: Usuario = { id: 1, nombre: "Ana", edad: 30, activo: true };

/* 
    ¿Cuál usar? Honestamente, en 95% de casos da igual. Convención común en React: interface para props de componentes, 
    type para todo lo demás. Sigue eso y no te preocupes.
*/
// Propiedades opcionales ?
interface Usuario {
  id: number;
  nombre: string;
  email?: string;  // puede no existir
}

// Readonly
interface Punto {
  readonly x: number;
  readonly y: number;
}

// ---> Funciones
function suma(a: number, b: number): number {
  return a + b;
}

// Arrow function tipada
const suma = (a: number, b: number): number => a + b;

// Tipo de la función como variable
type Operacion = (a: number, b: number) => number;
const resta: Operacion = (a, b) => a - b;

// Funciones con parámetros opcionales
function saludar(nombre: string, prefijo?: string): string {
  return `${prefijo ?? 'Hola'}, ${nombre}`;
}

// ---> Uniont types y literal types
// Union type: una variable puede ser de varios tipos
let id: string | number;
id = "abc";   // ok
id = 123;     // ok
id = true;    // ❌ error

// Literal type: una variable solo puede ser un valor específico
type Direccion = "norte" | "sur" | "este" | "oeste";
let dir: Direccion = "norte";  // ok
dir = "arriba";                 // ❌ error

// ---> Generics
// Función genérica para crear un array de cualquier tipo
// Generics = "tipos como parámetros". Permiten escribir código reutilizable que funciona con cualquier tipo, manteniendo seguridad de tipos.
// Sin generic — solo funciona con number
function primero(arr: number[]): number {
  return arr[0];
}

// Con generic — funciona con cualquier tipo, T es el "parámetro"
function primero<T>(arr: T[]): T {
  return arr[0];
}

const n = primero([1, 2, 3]);        // T = number
const s = primero(["a", "b", "c"]);  // T = string

/*
    Así se ven en react
    const [count, setCount] = useState<number>(0);
//                              ^^^^^^^^
//                          generic: el estado es number
*/

// ---> any, unknown, y la escapatoria pragmática
// any: desactiva el chequeo de tipos, básicamente como JavaScript normal. Evitar usarlo.
let cosa: any = 5;
cosa = "hola";
cosa.metodoQueNoExiste();  // TS no se queja

// unknown: tipo seguro para "no sé qué es esto". No puedes usarlo sin chequear su tipo primero.
let algo: unknown = 5;
algo = "hola";
if (typeof algo === "string") {
    console.log(algo.toUpperCase());  // TS sabe que aquí algo es string
} else {
    console.log("No es un string");
}

// ---> sintaxis as, A veces tú sabes más que TypeScript sobre qué tipo es algo. Le dices "confía en mí":
const elemento = document.getElementById("canvas") as HTMLCanvasElement;
// TS por sí solo solo sabe que es HTMLElement | null
// con `as` le dices "es específicamente un canvas"