


const baseURL = '/api/escorts';


function getEscorts() {
    return fetch(baseURL).then(response => response.json());
}

function createEscort(data) {
    return fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-type': 'Application/json'
        }, 
        body: JSON.stringify(data)
    }).then(response => response.json());
}

function updateDoneEscort(id) {
    return fetch(baseURL + "/" + id, {
        method: 'PUT'
    }).then(response => response.json());
}

function removeEscort(id) {
    return fetch(baseURL + "/" + id, {
        method: 'DELETE'
    }).then(response => response.json());
}

function updateEscort(id, data) {
    console.log(data)
    return fetch(baseURL + "/" + id + "/edit", {
        method: 'PUT',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
}

export default { getEscorts, createEscort, removeEscort, updateDoneEscort, updateEscort }