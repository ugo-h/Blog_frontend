import { url } from '../../config';

async function handleErrors(action, fallback) {
    try{
        return await action();
    } catch(error){
        fallback();
        return null;
    };
};

export async function sendRequestWithFallback(route, fallback) {
    const res =  await handleErrors(async() => await fetch(`${url}${route}`), fallback);
    if(res.status > 300 || res.status < 200) {
        fallback();
        return null;
    }
    return res;
}