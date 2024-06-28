/** QuerySelector**/

//QuerySelector
const heading = document.querySelector('.header__texto h2');// retorna 0 o 1 elemento 
console.log(heading);
heading.textContent = 'Nuevo Heading'; 

//QuerySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces); // nos trae todos los enlaces
console.log(enlaces[0]); // traemos un enlace especifico

/* para ACCEDER a las propiedades se usa la sintaxis de punto "." */
enlaces[0].textContent = 'Nuevo texto para Enlace';
//enlaces[0].href = "http://www.youtube.com";
enlaces[1].classList.add('nueva-clase');
//enlaces[2].classList.remove('navegacion__enlace');

//getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);
//Ya no es utilizada getElementById

/** createElement**/

// Generar un nuevo enlace 
const nuevoEnlace = document.createElement('A');
// ejemplo: <a href="nuevo-enlace.html" class="nuevo-enlace">Un nuevo Enlace</a>

//agregar el href
nuevoEnlace.href = 'nuevo-enlaces.html';
//agregar el texto
nuevoEnlace.textContent = 'Un nuevo Enlace';
//agregar el clase
nuevoEnlace.classList.add('navegacion__enlace');

console.log(nuevoEnlace);

//agrega al documento
/* querySelector selecciona la primera clase señalada */
const navegacion = document.querySelector('.navegacion');
/* appendChild nos permite agrear una variable y insertarla en otro lugar */
navegacion.appendChild(nuevoEnlace);

/** Eventos */

console.log(1);

window.addEventListener('load',function() {
    //load(evento) espera a que JS y los archivos dependientesde HTML esten listos/descargados
    console.log(2);
})
window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){
    //Solo espera por el HTML, pero no espera CSS o imagenes
    console.log(4);
})

console.log(5);

// function imprimir() {
//     console.log(2);
// }

window.onscroll = function() {
    console.log('scrolling...');
};
console.clear();

/* Seleccionar elementos y asociarlos a eventos */

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(e) { //e: evento
//     // console.log(e.target);
//     console.log(e);//permite ver todos los objetos asociados a ese evento
//     e.preventDefault();//asegura que la acción predeterminada no se llevará a cabo.
//     console.log('Enviando formulario');
// });

/* Eventos de los Inputs y Textarea */

const datos = { // Objeto Global
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre =document.querySelector('#nombre');
const email =document.querySelector('#email');
const mensaje =document.querySelector('#mensaje');

// nombre.addEventListener('input', function(e){//'change' no tiempo real,
//     console.log('Escribiendo...');
//     console.log(e.target.value);
// });
// email.addEventListener('input', function(e){//'change' no tiempo real,
//     console.log('Escribiendo...');
//     console.log(e.target.value);
// });
// mensaje.addEventListener('input', function(e){//'change' no tiempo real,
//     console.log('Escribiendo...');
//     console.log(e.target.value);
// });
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    // console.log('Escribiendo...');
    // console.log(e);
    datos[e.target.id] = e.target.value; //nos permite cargar el objeto global
    console.log(datos);
}


/** Evento de Submit */ 
// 
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    // Validacion de Formulario

    const { nombre, email, mensaje} = datos; // se extrae y crean 3 variables, que vienen de datos

    if (nombre === '' || email === '' || mensaje === '') {
    //console.log('Todos los campos son obligatorios.');
        // mostrarError('Todos los campos son obligatorios.');
        mostrarAlerta('Todos los campos son obligatorios.', true);
        
        return;
    }
    // console.log(nombre);
    // console.log(email);
    // console.log(mensaje);

    // Enviar el Formulario
    // mostrarMensaje('Mensaje enviado correctamente.');
    mostrarAlerta('Mensaje enviado correctamente.');

    // console.log('Enviando Formulario');
});

// // Mostrar por pantalla Error
// function mostrarError (mensaje) {
//     // console.log(mensaje);
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');

//     formulario.appendChild(error);
//     console.log(error);

//     // Desaparezca despues de 5 segundos
//     setTimeout(() => {
//         error.remove(); //elimina un elemento html
//     }, 5000);
// }

// // Mostrar por pantalla Envio Correcto
// function mostrarMensaje (mensaje) {
//     const correcto = document.createElement('P');
//     correcto.textContent = mensaje;
//     correcto.classList.add('correcto');

//     formulario.appendChild(correcto);

//     // Desaparezca despues de 5 segundos
//     setTimeout(() => {
//         correcto.remove(); //elimina un elemento html
//     }, 5000);
// }

/* Mostrar por pantalla de Error y Envio Correcto (Refactory de Codigo)*/

function mostrarAlerta(mensaje,error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto')
    }
    
    formulario.appendChild(alerta);

// Desaparezca despues de 5 segundos
    setTimeout(() => {
        alerta.remove(); //elimina un elemento html
    }, 2500);
}
