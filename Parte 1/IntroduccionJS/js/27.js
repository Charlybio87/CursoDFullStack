/** POO **/

// Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
// function Producto(nombre,precio,disponible) { //(PARAMETROS)
//     this.nombre = nombre;
//     this.precio = precio;
//     this.disponible = disponible;
// }

// const producto2 = new Producto('Monitor de 40"',800,true); //(ARGUMENTOS)
// const producto3 = new Producto('Laptop',300,false);

// console.log('El producto '+producto2.nombre+' tiene un precio de: '+producto2.precio);
// console.log(producto3);
// console.clear();

//Protypes

function Producto(nombre,precio) { //(PARAMETROS)
    this.nombre = nombre;
    this.precio = precio;
}
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: ${this.precio}$.`;
}

function Cliente(nombre,apellido) { //(PARAMETROS)
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function() {
    return `El cliente ${this.nombre} ${this.apellido}.`;
}

const producto2 = new Producto('Monitor de 40"',800); //(ARGUMENTOS)
const producto3 = new Producto('Laptop',300);
const cliente = new Cliente('Carlos A.','Ribas');



console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(cliente.formatearCliente());