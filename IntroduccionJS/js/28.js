/** Clases **/


class Producto{ //CLASE
    constructor(nombre, precio){ //CONSTRUCTOR
        this.nombre = nombre;
        this.precio = precio;
        }
        formatearProducto() { //METODO
            return `El producto ${this.nombre} tiene un precio de: ${this.precio}$`;
        }
        retornarPrecio() {
            if (this.nombre != 'Monitor') {
                this.nombre = NaN;
                this.precio = 0;
            } 
            return `El precio del producto ${this.nombre} es $${this.precio}.`;
        }
        obtenerPrecio(){
            console.log(this.precio);
        }
}

const producto2 = new Producto('Monitor',800);
console.log(producto2.formatearProducto());
console.log(producto2.retornarPrecio());
console.log(producto2.obtenerPrecio());

//HERENCIA
/*class Libro{
    constructor(nombre, precio,isbn) {
        this.nombre = nombre;
        this.precio = precio;
        this.isbn = isbn;
    }
}*/
class Libro extends Producto {
    constructor(nombre, precio,isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto() { //METODO
        return `${super.formatearProducto() } y su ISBN es: ${this.isbn}.`;
    }
    obtenerPrecio() {
        super.obtenerPrecio();
        console.log('Y si hay en existencia');
    }
}

const libro = new Libro('JavaScript la Revolucion', 1200, '23124312');
console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());