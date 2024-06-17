/** Mas Metodos Arrays **/

const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];

const carritos =[
    {nombre: 'monitor 20' , precio: 500},
    {nombre: 'monitor 30' , precio: 300},
    {nombre: 'monitor 40' , precio: 200},
    {nombre: 'tablet 20' , precio: 50},
    {nombre: 'tablet 10' , precio: 45},
    {nombre: 'tablet 8' , precio: 30},
    {nombre: 'celular SG' , precio: 200},
    {nombre: 'celular MT' , precio: 500},
];

let resultado;

// Metodo forEach
meses.forEach(function(mes) {
    console.log(mes);
    if (mes == 'Marzo') {
        console.log('Marzo si existe.');
    }
});

// Metodo includes
resultado = meses.includes('Marzo');
console.log(resultado);

// Metodo some
resultado = carritos.some(function(producto) {
    return producto.nombre == 'celular SG'
});
resultado = carritos.some(producto => producto.nombre == 'celular SG') // forma simplificada
console.log(resultado);

// Metodo Reduce

resultado = carritos.reduce(function (total,producto) {
    return total + producto.precio
    return total + producto.nombre
}, 0);
resultado = carritos.reduce((total,producto) => total + producto.precio, 0); // forma simplificada
console.log(resultado);

// metodo filter
resultado = carritos.filter(function(producto){
    return producto.precio > 400
});
resultado = carritos.filter((producto) => producto.precio > 400);
console.log(resultado);
resultado = carritos.filter((producto) => producto.nombre == 'tablet 10');
console.log(resultado);