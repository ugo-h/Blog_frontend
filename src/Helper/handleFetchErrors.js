import { url } from '../config';

export  function getErrorMsgFromCode(code, root='Page') {
    let errorMsg;
    switch(code) {
        case 404: 
        errorMsg = `${root} not found`;
        break;
        case 503:
        errorMsg = 'Sorry, the service is currently unavailable. Please, try agan later.';
        break;
        default: ;
    }
    return errorMsg;
}

export async function sendRequestWithFallback(route, fallback) {
    const res =  await handleErrors(async() => await fetch(`${url}${route}`), fallback);
    if(!res || res.status > 300 || res.status < 200) {
        const status = res? res.status : 503;
        fallback(status);
        return { data: null, isSuccessful: false };
    }
    const data = await res.json();
    return { data, isSuccessful: !!data };
}
async function handleErrors(action, fallback) {
    try{
        return await action();
    } catch(error){
        fallback();
        return null;
    };
};