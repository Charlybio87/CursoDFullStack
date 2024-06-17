/** THIS **/

const reservacion = {
    nombre: 'Juan',
    apellido: 'De la Torre',
    total: 5000,
    pagado: false,
    informacion: function() {
        if (this.pagado === false) {
            console.log(`El clietne ${this.apellido} ${this.nombre} debe pagar: ${this.total}`);    
        } else {
            console.log(`El clietne ${this.apellido} ${this.nombre}`);    
        }        
    }
}
reservacion.informacion();