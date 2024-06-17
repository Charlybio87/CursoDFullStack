/** Arreglos o Arrays**/

// const meses1 = new Array('Enero','Febrero','Marzo','Abril','Mayo');
// console.log(meses1);
// console.table(meses1);

// const numeros = [10,20,30,40,50];
// console.log(numeros);
// console.table(numeros);

// const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];
// console.log(meses);
// console.table(meses);

// const arreglo = ["hola", 10, true, "si", null, {nombre: "Juan",trabajo: "programador"}, [1,2,3]];

// console.log(numeros[4]);
// console.table(arreglo);
// console.table(arreglo.length);

// numeros.forEach( function(numeros) {
//     console.log(numeros);
// })

// Metodos para Arrays
const numeros = [10,20,30,40,50];
numeros[5] = 60;
numeros.push(70,80);
numeros.unshift(0,-10,-20);
console.log(numeros);
console.table(numeros);

const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];
// meses.pop(); //elimina el ultimo
// console.log(meses);
// console.table(meses);

// meses.shift(); //elimina el primero
// console.log(meses);
// console.table(meses);

// meses.splice(2,2); //elimina x:posicion y:cantidad
// console.log(meses);
// console.table(meses);

// Rest operator o Spread operator

const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo);

const nuevoArreglo1 = ['diciembre',...meses];
console.log(nuevoArreglo1);
