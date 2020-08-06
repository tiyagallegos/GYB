


const baseURL = '/api/users';


function getRequests() {
    return fetch(baseURL).then(response => response.json());
}

function createRequest(data, id) {
    return fetch(baseURL + `/${id}` + "/requests", {
        method: 'POST',
        headers: {
            'Content-type': 'Application/json'
        }, 
        body: JSON.stringify(data)
    }).then(response => response.json());
}

function updateDoneRequest(id) {
    return fetch(baseURL + "/" + id, {
        method: 'PUT'
    }).then(response => response.json());
}

function removeRequest(id) {
    return fetch(baseURL + "/" + id + "/requests", {
        method: 'DELETE'
    }).then(response => response.json());
}

function updateRequest(id, data) {
    console.log(data)
    return fetch(baseURL + "/" + id + "/requests/edit", {
        method: 'PUT',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
}

export default { getRequests, createRequest, updateDoneRequest, removeRequest, updateRequest }