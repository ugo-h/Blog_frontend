import React from 'react';
import { Link } from 'react-router-dom';
import SignForm from '../../Containers/Form/SignForm/SignForm';
import { RedirectWhenAuth } from '../../Helper/Protected';

const signUp = (props) => {
    return (
        <RedirectWhenAuth>
        <main className="Auth Util__main Util__card">  
            <h1 className="title">Sign Up</h1>
            <SignForm 
                fields={["name", "email", "password", "password-confirmation"]}
                route="/signup" 
            />
            <p>Already have an account? <Link to="/auth/signin">Sign In!</Link></p>
        </main>
        </RedirectWhenAuth>
    )
};

export default signUp;