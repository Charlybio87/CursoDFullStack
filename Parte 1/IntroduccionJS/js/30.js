/** PROMISES **/
const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = false;
    if (auth) {
        resolve('Usuario Autenticado'); // EL PROMISE SE CUMPLE
    } else {
        reject('No se pudo iniciar sesion') // el promise no se cumple
    }
});
console.log(usuarioAutenticado);
usuarioAutenticado
    .then(result => console.log(result))
    .catch((err) => console.log(err))

// En los pomises existen 3 valores:
// Pedding: No se ha cumplido pero tampoco se ha rechazado
// Fulfilled: Ya se cumplio
// Rejected: Se ha rechazado o no se pudo cumplir