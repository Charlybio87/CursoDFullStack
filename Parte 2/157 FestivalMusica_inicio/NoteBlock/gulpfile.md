<!-- ejemplo complilacion -->
const { series, parallel } = require ('gulp');

function css( done ) {
    console.log('compilando... SASS');
    done();
}

function javascript( done ) {
    console.log('compilando JavaScript');
    done();
}

function minificarHTML( done ) {
    console.log('Minificando...');
    done();
}
<!-- se ejecutan por terminal en forma individual, serie o paralelo -->

exports.css = css;
exports.javascript = javascript;
exports.default = series( css, javascript, minificarHTML );
exports.default = parallel( css, javascript, minificarHTML );

<!-- compilando app.scss a app.css -->
> nota: para poder realizar el compilado (utilizando Gulp para compilar Sass) del archivo app.scss se tuvo que agregar al package.json sass (terminal--> npm i --save-dev sass), ya que las nuevas actualizaciones no reconcen a gulp-sass por obsoleto y directamente se pasar a llamar a sass

// importacion
const { series, src, dest } = require ('gulp'); //paquete gulp tiene mucho elementos (mutiples funciones), y con series import esa funcion
const sass = require('gulp-sass')(require('sass')); //gulp-sass es una funcion 

> Aquí, estamos cargando gulp-sass y pasando la implementación de Sass como argumento. Esto permite que gulp-sass utilice Dart Sass para compilar tus archivos Sass.

const { series, src, dest, watch } = ...

> se agrega la funcion watch. Esta funcion nos permite automatizarel proceso, cada vez que realicemos un cambio en el archivo que le facilitamos (o que escuche) en gulp, al guardarlo, se ejecuta las funciones como la compilacion de la misma entregandonos un archivo app.css con los cambios efectuados en app.scss. (NOS EVITA REALIZAR ESTE PASO CADA VEZ QUE MODIFIQUEMOS EL ARCHIVO) ❗Importante... para salir de modo watch o tarea (terminal--> ctrl + c) para ingresar de nuevo a esta tarea es ejecutar gulp watchArchivos
 