import React from 'react';
import { error as Error } from './Error/Error';
import Spinner from './Spinner/Spinner';

export function withErrors(content, errorHandler) {
    if(errorHandler.hasErrors) {
        return <Error code={errorHandler.code} msg={errorHandler.msg || ''}/>
    } else {
        return content;
    }
}

export function withSpinner(content, isLoading, size='') {
    return isLoading? <Spinner size={size}/>: content;
}

export function handleFetchError(errorHandler, errorSetter) {
    errorHandler.code = '';
    errorHandler.msg = 'Sorry, the server is currently unavailable. Please, try again later.';
    errorHandler.hasErrors = true;
    errorSetter({ errorHandler, isLoading: false });
}

export function handleServerError(res, errorHandler, errorSetter) {
    errorHandler.code = res.status;
    errorHandler.msg = '';
    errorHandler.hasErrors = true;
    errorSetter({ errorHandler, isLoading: false });
}