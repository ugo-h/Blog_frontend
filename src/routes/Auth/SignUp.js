import React from 'react';
import SignForm from '../../Containers/Form/SignForm/SignForm';
import { RedirectWhenAuth } from '../../Helper/Protected';

const signUp = (props) => {
    return (
        <RedirectWhenAuth>
        <main className="Auth Util__main Util__card">  
            <h1 className="title">Sign Up</h1>
            <SignForm 
                fields={["name", "email", "password", "passwordConfirm"]}
                route="/signup" 
            />
        </main>
        </RedirectWhenAuth>
    )
};

export default signUp;