/** Objetos **/

const nombreProducto = "Monitor de 20"; 
const precio = 300;
const disponible = true;

const producto = { // Objeto: producto // {propiedades}
    nombreProducto : "monitor de 20",
    precio : 300,
    disponible : true
}

console.log(producto);
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto["disponible"]);

// Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';
console.log(producto)

// Eliminar propiedades
delete producto.precio
console.log(producto);