// 1. Define una interface "Producto" con:
//    - id (number)
//    - nombre (string)
//    - precio (number)
//    - descuento (number, opcional)
//    - categoria (debe ser solo "comida" | "ropa" | "electronica")
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    descuento?: number;
    categoria: "comida" | "ropa" | "electronica";
}

// 2. Crea un array tipado de productos con 3 ejemplos.
const productos: Producto[] = [
    { id: 1, nombre: "Hamburguesa", precio: 50, categoria: "comida" },
    { id: 2, nombre: "Camiseta", precio: 200, descuento: 20, categoria: "ropa" },
    { id: 3, nombre: "Smartphone", precio: 5000, categoria: "electronica" }
];
console.log(productos);

// 3. Escribe una función tipada "precioFinal" que reciba un Producto
//    y devuelva un number con el precio aplicando el descuento si existe.
//    (Si no hay descuento, regresa el precio normal.)
function precioFinal(producto: Producto): number {
    if (producto.descuento) {
        return producto.precio - (producto.precio * producto.descuento / 100);
    }
    return producto.precio;
    // OR
    const descuento = producto.descuento ?? 0; // si no existe, descuento = 0
    return producto.precio - (producto.precio * descuento / 100);
    
};
console.log(precioFinal(productos[0])); // 50
console.log(precioFinal(productos[1])); // 160

// 4. Usa map para crear un array con los nombres de productos cuya
//    categoria sea "electronica". Tipa explícitamente el resultado.
const nombresElectronica: string[] = productos.filter(p => p.categoria === "electronica").map(p => p.nombre);
console.log(nombresElectronica); // ["Smartphone"]

// 5. (Bonus opcional, si te late) Escribe una función generic "ultimo"
//    que reciba un array de cualquier tipo T y devuelva su último elemento.
function ultimo<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1];
};
console.log(ultimo(productos)); // { id: 3, nombre: "Smartphone", precio: 5000, categoria: "electronica" }