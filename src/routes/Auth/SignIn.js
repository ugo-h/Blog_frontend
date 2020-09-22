import React from 'react';
import { Link } from 'react-router-dom'
import SignInForm from '../../Containers/Form/SignInForm';

const siginIn = (props) => {
    return (
        <main>
            <h1>Sign In</h1>
            <SignInForm
                fields={{'email':'Email', 'password':'password'}}
                route='signin'
                signInHandler={props.signInHandler}
            />
            <p>Do not have an account? <Link to="/signup">join Us!</Link></p>
        </main>
    )
};

export default siginIn;