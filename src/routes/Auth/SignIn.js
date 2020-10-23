import React from 'react';
import { Link } from 'react-router-dom'
import SignInForm from '../../Containers/Form/SignInForm';
import './Auth.css'

const siginIn = (props) => {
    return (
        <main className="Auth">
            <h1>Sign In</h1>
            <SignInForm
                signInHandler={props.signInHandler}
            />
            <p>Do not have an account? <Link to="/signup">join Us!</Link></p>
        </main>
    )
};

export default siginIn;