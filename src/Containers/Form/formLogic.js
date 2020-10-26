import {url} from '../../config';

export async function sendFormRequest(route, body) {
    body = JSON.stringify(body);
    const res = await fetch(`${url}${route}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },    
        body
    });
    const data = await res.json();
    return data;
    
}

export function processErrors(errors) {
    const errorsObj = {};
    errors.forEach(error => {
        const name = error.param;
        const msg = error.msg;
        errorsObj[name] = msg;
    });
    return errorsObj;
}

export function createFieldsFromArray(arr) {
    const fields = {};
    arr.forEach(name => fields[name] = '');
    return fields;
}

export function createEmptyErrorFields(fields) {
    const errors = {};
    for(const key in fields) {
        errors[key] = '';
    }
    return errors;
}

export async function sendRequestWithUserToken(route, body, token) {
    body = JSON.stringify(body);
    const res = await fetch(`${url}${route}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
        },    
        body
    });
    const data = await res.json();
    return data;
}

