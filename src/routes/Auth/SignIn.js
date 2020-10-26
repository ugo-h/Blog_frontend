import React from 'react';
import { Link } from 'react-router-dom'
import SignForm from '../../Containers/Form/SignForm/SignForm';
import { RedirectWhenAuth } from '../../Helper/Protected';

const siginIn = (props) => {
    return (
        <RedirectWhenAuth>
        <main className="Auth Util__main Util__card">
            <h1  className="title">Sign In</h1>
            <SignForm
                fields={["email", "password"]}
                route="/signin"
            />
            <p>Do not have an account? <Link to="/signup">join Us!</Link></p>
        </main>
        </RedirectWhenAuth>
    )
};

export default siginIn;