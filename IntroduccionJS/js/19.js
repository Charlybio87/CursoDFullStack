/** Uso de Return **/

// function sumarA(num1=0 , num2=0) {
//     return num1 +num2;
// }
// const  resultadoA = sumarA(10,2);
// console.log(resultadoA);

// const sumar1 = function (numero1=0 , numero2=0) {
//     return numero1 + numero2;
// }
// const resultado1 = sumar1(20,30)
// console.log(resultado1);

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}
function agregarImpuesto(total) {
    return 1.15 * total;
}
total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalAPagar = agregarImpuesto(total);

console.log(`El total a pagar con impuestos es de: $${totalAPagar}`);