import React from 'react';
import { Link } from 'react-router-dom'
import SignForm from '../../Containers/Form/SignForm/SignForm';
import './Auth.css'
import { RedirectWhenAuth } from '../../Helper/Protected';

const siginIn = (props) => {
    return (
        <RedirectWhenAuth>
        <main className="Auth">
            <h1>Sign In</h1>
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