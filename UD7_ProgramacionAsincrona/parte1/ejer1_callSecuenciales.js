const asyncRequest = require('../parte1/async_request');

function getResource(resource) {

    return new Promise((resolve, reject) => {
        try {
            asyncRequest(resource, (data) => resolve(data));
        } catch (error) {
            reject('Fallo al obtener recurso');
        }
    })
}

getResource('resource1')
    .then((data) => {
        console.log(`El valor del recurso 1 es: ${data}`);
        return getResource('resource2');
    })
    .then((data) => {
        console.log(`El valor del recurso 2 es: ${data}`);
        return getResource('resource3');
    })
    .then((data) => {
        console.log(`El valor del recurso 2 es: ${data}`);
        console.log('¡Completado!'); 
    });