const asyncRequest = require('../parte1/async_request');

function print(resourcesFound) {
    if (includeResource(resourcesFound, 'resource1')) {
        printResource(resourcesFound['resource1']);
        resourcesFound['resource1'] = undefined;

        if (includeResource(resourcesFound, 'resource2')) {
            printResource(resourcesFound['resource2']);
            resourcesFound['resource2'] = undefined;

            if (includeResource(resourcesFound, 'resource3')) {
                printResource(resourcesFound['resource3']);
                console.log('¡Completado!');
            }
        }
    }
}

function includeResource(resourcesFound, resourceSearch) {
    return Object.keys(resourcesFound).includes(resourceSearch);
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