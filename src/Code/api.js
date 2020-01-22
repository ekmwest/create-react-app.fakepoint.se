import config from './config';

const GET = (url, cb) => {
    fetch(`${config.apiUrl}${url}`, config.defaultHeaders)
        .then(res => res.json())
        .then(data => cb(data))
        .catch(err => console.log(`Error: ${err}`));
};

const POST = (url, obj, cb) => {
    fetch(`${config.apiUrl}${url}`, {
        method: 'POST',
        headers: config.defaultHeaders.headers,
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(data => cb(data))
        .catch(err => console.log(`Error: ${err}`));
};

const DELETE = (url, cb) => {
    fetch(`${config.apiUrl}${url}`, {
        method: 'DELETE',
        headers: config.defaultHeaders.headers
    })
        .then(res => res.json())
        .then(data => cb(data))
        .catch(err => console.log(`Error: ${err}`));
}

export default {
    get: GET,
    post: POST,
    delete: DELETE
};
