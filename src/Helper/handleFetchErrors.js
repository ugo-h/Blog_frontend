import { url } from '../config';

export async function sendRequestWithFallback(route, fallback) {
    const res =  await handleErrors(async() => await fetch(`${url}${route}`), fallback);
    if(!res || res.status > 300 || res.status < 200) {
        fallback(res.status);
        return { data: null, isSuccessful: false, code: res.code};
    }
    const data = await res.json();
    return { data, isSuccessful: !!data, code: res.code};
}
async function handleErrors(action, fallback) {
    try{
        return await action();
    } catch(error){
        fallback();
        return null;
    };
};