/** Destructuring de Objetos**/

// Objeto
const producto = { // Objeto: producto // {propiedades}
    nombreProducto : "monitor de 20",
    precio : 300,
    disponible : true
} //estructuta

// Forma anterior
const precioProducto = producto.precio;
console.log(precioProducto);
// nombreProducto = producto.nombreProducto;
// console.log(nombreProducto);
// console.log(typeof nombreProducto);
// console.log(typeof producto.nombreProducto);

// Destructuring (sacar de una estructura)
const {precio, nombreProducto} = producto;
console.log(precio);
console.log(nombreProducto);
