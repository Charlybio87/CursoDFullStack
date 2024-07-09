// importacion
const { series, src, dest, watch } = require ('gulp'); //paquete gulp tiene mucho elementos (mutiples funciones), y con series import esa funcion
const sass = require('gulp-sass')(require('sass')); //gulp-sass es una funcion 


// funcion que compila SASS
function css(  ) {
    return src('src/scss/app.scss') // direccion de la hoja de estilo
        .pipe( sass({
            outputStyle : 'expanded'
        })) 
        //.pipe( sass({}) ) // ejecucion de (funcion or paquete importado)
        .pipe ( dest('./build/css') ) // guardar (tarea or la hoja de estilos or ...)
}
function minificarcss() {
    return src('src/scss/app.scss')
        .pipe( sass({
            outputStyle : 'compressed'
        })) 
        .pipe ( dest('./build/css') )
}
function watchArchivos() {
    watch('src/scss/**/*.scss',css ) // escucha los cambios (archivo) al cambiar, luego, ejecuta funcion css.
} // * = la carpeta actual.- ** = todos los archivos con esa extensión.


exports.css = css;
exports.minificarcss = minificarcss;
exports.watchArchivos = watchArchivos;