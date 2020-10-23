import React from 'react';
import { Link } from 'react-router-dom'
import SignForm from '../../Containers/Form/SignForm/SignForm';
import './Auth.css'

const siginIn = (props) => {
    return (
        <main className="Auth">
            <h1>Sign In</h1>
            <SignForm
                fields={["email", "password"]}
                route="/signin"
                signInHandler={props.signInHandler}
            />
            <p>Do not have an account? <Link to="/signup">join Us!</Link></p>
        </main>
    )
};

export default siginIn;