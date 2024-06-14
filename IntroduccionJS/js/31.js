/** Notificacion API**/
const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    Notification.requestPermission()
    .then((resultado) => {
        console.log('El resultado es: ' , resultado );
        if(Notification.permission == 'granted') {
            new Notification("Tiene una deuda pendiente: ", {
                icon: 'img/mrc.png',
                body: 'Marabunta Rugby Club'
            });
        }
    })
});

// const boton = document.querySelector('#boton');
// boton.addEventListener('click', () => {
//     Notification.requestPermission()
//     .then((resultado) => console.log('El resultado es: ' , resultado ))
//     // .catch((error) => {
//     //     console.log('Nos tira un ${Error}');
//     // });
// })

// if(Notification.permission == 'granted') {
//     new Notification('Esta es una notificacion', {
//         icon:'img/blog1.webp',
//         body:'Codigo para tomar Cafe'
//     })
// }

/** ejemplo de mdn web doc */

// function notifyMe() {
//     // Comprobamos si el navegador soporta las notificaciones
//     if (!("Notification" in window)) {
//       alert(
//         "Este navegador no es compatible con las notificaciones de escritorio",
//       );
//     }
  
//     // Comprobamos si los permisos han sido concedidos anteriormente
//     else if (Notification.permission === "granted") {
//       // Si es correcto, lanzamos una notificación
//       var notification = new Notification("¡Hola!");
//     }
  
//     // Si no, pedimos permiso para la notificación
//     else if (Notification.permission !== "denied") {
//       Notification.requestPermission().then(function (permission) {
//         // Si el usuario nos lo concede, creamos la notificación
//         if (permission === "granted") {
//           var notification = new Notification("¡Hola!");
//         }
//       });
//     }
  
//     // Por último, si el usuario ha denegado el permiso,
//     // y quiere ser respetuoso, no hay necesidad de molestarlo.
//   }