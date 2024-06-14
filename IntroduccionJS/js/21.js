/** Arrow Function **/

const sumarDos = function(m1 , m2){
    return console.log(m1 + m2)
};
sumarDos(10,5);

const sumar2 = (n1 , n2) => console.log(n1 + n2);
sumar2(10,5);

const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];
const carritos = [
    {nombre: 'monitor 20' , precio: 500},
    {nombre: 'monitor 30' , precio: 300},
    {nombre: 'monitor 40' , precio: 200},
    {nombre: 'tablet 20' , precio: 50},
    {nombre: 'tablet 10' , precio: 45},
    {nombre: 'tablet 8' , precio: 30},
    {nombre: 'celular SG' , precio: 200},
    {nombre: 'celular MT' , precio: 500},
];

// meses.forEach(function(mes) {
//     console.log(mes);
//     if (mes == 'Marzo') {
//         console.log('Marzo si existe.');
//     }
// });
meses.forEach(mes => {
    if (mes == 'Marzo') {
        console.log('Marzo si existe.');
    }
});
let resultado;

// resultado = carritos.some(function(producto) {
//     return producto.nombre == 'celular SG'
// });
resultado = carritos.some(producto => producto.nombre === 'celular SG')
console.log(resultado);

// resultado = carritos.reduce(function (total,producto) {
//     return total + producto.precio
//     return total + producto.nombre
// }, 0);
resultado = carritos.reduce((total,producto) => total + producto.precio, 0);
console.log(resultado);


