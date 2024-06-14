/** Metodos de Objeto**/
"use strict" // modo estricto, restringe a javascript a ejecutar el codigo con buenas practicas

// Objeto
const producto = { // Objeto: producto // {propiedades}
    nombreProducto : "monitor de 20",
    precio : 300,
    disponible : true
} //estructuta

producto.imagen = 'imagen.jpg';

console.log(producto);

// Object.freeze
//Object.freeze(producto); // fija al objeto (no se puede modifica, agrega ni eliminar propiedades)
// producto.time = '30min';
// console.log(producto);
console.log(Object.isFrozen(producto));

// Object.seal
Object.seal(producto); // fija al objeto (permite modificar pero no eliminar o agregar)
console.log(Object.isSealed(producto));
producto.precio = 'Nuevo Precio';
console.log(producto.precio);
console.log(producto);

