/** ESTRUCTURA DE CONTROL */

//if - else if
const efectivo = 600;
const carritos = 800;

if (efectivo > carritos) {
    console.log('El cliente puede pagar.');
} else if (efectivo === carritos){
    console.log('El cliente puede pagar');
} else {
    console.log('El cliente no tiene fondos suficiente.');
}
console. clear();

//Switch
const metodoPago = 'Tarjeta';
switch (metodoPago) {
    case 'Tarjeta':
        console.log('Puede abonar la cuota.');
        break;
    case 'Efectivo':
        console.log('Puede abonar la cuota.');
        break;
    default:
        console.log('No se encuentra forma de pago.');
        break;
}
console. clear();

//for
for (let i = 1; i < 11; i++) {
    if (i % 2 == 0) {
        console.log(`${i} es par`);
    } else{
        console.log(`${i} es impar`);
    }
}
 
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

for (let i = 0; i < carrito.length; i++) {
    console.log( carrito[i].nombre);
}
console. clear();

//While loop
let i = 0;
while (i < 10) {
    if (i % 2 == 0) {
        console.log(`${i} es PAR.`);
    }
    i++;
}

i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
