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

Promise.all([
    getResource('resource1'),
    getResource('resource2'),
    getResource('resource3')
]).then(arrayData => {
    arrayData.forEach(element => console.log(element))
    console.log('¡Completado!');
})