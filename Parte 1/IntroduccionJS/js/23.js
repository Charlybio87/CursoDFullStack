/** ForEach and Map*/

const carrito = [
    {nombre: 'monitor 20' , precio: 500},
    {nombre: 'monitor 30' , precio: 300},
    {nombre: 'monitor 40' , precio: 200},
    {nombre: 'tablet 20' , precio: 50},
    {nombre: 'tablet 10' , precio: 45},
    {nombre: 'tablet 8' , precio: 30},
    {nombre: 'celular SG' , precio: 200},
    {nombre: 'celular MT' , precio: 500},
];

// forEach

//  carrito.forEach(function(producto) {
//     console.log(producto)
//  });
carrito.forEach( producto => console.log(producto.nombre));

// map
carrito.map( producto => console.log(producto.nombre));

const newArreglo = carrito.map ( producto => producto.precio );
console.log(newArreglo);
const newArreglo1 = carrito.map ( producto => `${producto.precio}$ - ${producto.nombre}` );
console.log(newArreglo1);



 