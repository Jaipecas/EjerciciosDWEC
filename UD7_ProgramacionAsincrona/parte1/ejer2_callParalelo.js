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

const resource1 = getResource('resource1');
const resource2 = getResource('resource2');
const resource3 = getResource('resource3');

resource1
    .then((data) => {
        console.log(`El valor del recurso 1 es: ${data}`);
        return resource2;
    })
    .then((data) => {
        console.log(`El valor del recurso 2 es: ${data}`);
        return resource3;
    })
    .then((data) => {
        console.log(`El valor del recurso 3 es: ${data}`);
        console.log('Conmpletado');
    });