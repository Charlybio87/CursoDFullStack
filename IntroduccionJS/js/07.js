/** Orden de las operaciones **/

let resultado;

resultado = 20 + 30 * 2;
resultado = ( 120 + 302 + 455) * 0.2;
resultado1 = (( 120 + 302 + 455) - resultado )* 1.05;


console.log(resultado + '$ ' + "aplicando 20% de descuento.");
console.log("valor: " + Math.round(resultado1)+ '$' + " incluye iva.");

/* Incremento */
// Incrementos +1
let puntaje = 10;
console.log(puntaje);

puntaje++; // 11
console.log(puntaje);
console.log(puntaje++); // muestra el numero (11) y luego incrementa (12)
console.log(puntaje); //12
++puntaje; //13
console.log(puntaje);
console.log(++puntaje); //14 muestra el numero incrementado

// Incrementos +##
let puntos = 10;
puntos +=10; // puntos + 10 = puntos (se guardo el resultado)
console.log(puntos);
console.log(puntos);
