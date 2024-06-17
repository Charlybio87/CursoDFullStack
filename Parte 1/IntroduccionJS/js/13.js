/** Unir dos objetos con spread operator**/

// Objeto
const producto = { 
    nombreProducto : "monitor de 20",
    precio : 300,
    disponible : true
} 
const medidas = { 
    peso : '1kg',
    medida : '1m'
} 

const nuevoProducto = {...producto , ...medidas};

console.log(nuevoProducto);
console.log(producto);
