/** Metodo de Propiedad **/

const reproductor = {
    reproducir : function (id) {
        console.log(`Reproduciendo Canción con el ID: ${id}`);
    },
    pausar : function () {
        console.log('Pausando...');
    },
    crearPlaylist : function (nombre) {
        console.log(`Crear la lista: ${nombre}`);
    },
    reproducirPlaylist : function (nombre) {
        console.log(`Reproduciendo la lista: ${nombre}`);
    },
}
reproductor.borrarCancion = function(id){
    console.log(`Eliminando la canción: ${id}`);
}
console.log(reproductor);
reproductor.reproducir(3201);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy Metal');