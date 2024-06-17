/** Tipos de Datos**/
// String o cadenas de textos

const productos = "Monitor de 20\"";
const productos2 = String('Monitor de 30"') ;
const productos3 = new String('Monitor de 30 pulgadas') ;
const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Comnpleto.';

console.log('1. ' + productos);
console.log('2. ' + typeof productos);
console.log('3. ' + productos2);
console.log('4. ' + typeof productos2);
console.log('5. ' + productos3);
console.log('6. ' + typeof productos3);

// Propiedad length retorna el tamaño
console.log('7. ' + productos.length);

// Método indexOf('') retorna la posicion
console.log('8. ' + tweet.indexOf('JavaScript'));

// Método includes('') retona true o false
console.log('9. ' + tweet.includes('curso'));
console.log('10. ' + tweet.includes('tablet'));