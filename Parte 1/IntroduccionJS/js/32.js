/** Async Await**/

/** Metodos de retraso
 * permite que la funcion o fragmento se demore hasta su ejecucion
 * pasado un tiempo/intervalo **/

// setTimeout(function() {
//     console.log('¡Hola después de 3 segundos!');
//   }, 3000); // Se ejecutará después de 3 segundos

// setInterval(function() {
//     console.log('¡Hola después de 3 segundos!');
//   }, 3000); // Se ejecutará después de 3 segundos

// function descagarnNuevosClintes() {
//     return new Promise( resolve => {
//         console.console.log('Descargando clientes... espere...');
//     })
// }
console.clear();
function descagarNuevosClintes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');

        // retardo time descargar de datos
        setTimeout( () => {
            resolve('Clientes han sido descargados');
        }, 4000); // Se ejecutará después de 4 segundos
        
    });
}

function descagarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando Pedidos... espere...');

        // retardo time descargar de datos
        setTimeout( () => {
            resolve('Pedidos han sido descargados');
        }, 2000); // 
        
    });
}

async function app() {
    try {
        // const clientes = await descagarNuevosClintes(); 
        // const pedidos = await descagarUltimosPedidos(); // se bloquea hasta que await anterior finalice time total de espera: 6000
        // console.log(clientes);
        // console.log(pedidos);
        const resultado = await Promise.all([descagarNuevosClintes(), descagarUltimosPedidos()]) // a traves de un arreglo de promise nos permite la ejecucion de ambas a la vez, time total de espera: 4000
        console.log(resultado[0]);
        console.log(resultado[1]);
        console.log('Es codigo se bloquea hasta que la promesa se resuelva.');
    } catch (error) {
        console.log(error);
    }
}

app();
console.log('Es codigo no se bloquea.');