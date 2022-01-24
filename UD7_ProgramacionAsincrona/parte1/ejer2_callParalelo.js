const asyncRequest = require('../parte1/async_request');

function print(resourcesFound) {
    if (Object.keys(resourcesFound).includes('resource1')) {
        printResource(resourcesFound['resource1']);
        resourcesFound['resource1'] = undefined;

        if (Object.keys(resourcesFound).includes('resource2')) {
            printResource(resourcesFound['resource2']);
            resourcesFound['resource2'] = undefined;

            if (Object.keys(resourcesFound).includes('resource3')) {
                printResource(resourcesFound['resource3']);
                console.log('¡Completado!');
            }
        }
    }
}

function printResource(data) {
    if (data) console.log(data)
}

function searchResources(resources) {
    let resourcesFound = {};

    resources.forEach(resource => {
        asyncRequest(resource, (data) => {
            resourcesFound[resource] = data;
            print(resourcesFound);
        })
    });
}

let resources = ['resource1', 'resource2', 'resource3'];
searchResources(resources);