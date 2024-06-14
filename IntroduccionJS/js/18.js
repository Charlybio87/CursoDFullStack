/**Funciones con parametros y argumentos **/

function sumarA(num1=0 , num2=0) {
    console.log(num1 +num2);
}
sumarA();
sumarA(1);
sumarA(10,10);
sumarA(10,20);
sumarA(10,30);

const sumar1 = function (numero1=0 , numero2=0) {
    console.log(numero1 + numero2);
}
sumar1();
sumar1(10);
sumar1(10,10);
sumar1(10,50);
