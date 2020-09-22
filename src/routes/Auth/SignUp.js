import React from 'react';
import SignUpForm from '../../Containers/Form/SignUpForm';

const signUp = (props) => {
    return (
        <main>
            <h1>Sign Up</h1>
            <SignUpForm
                fields={{'name':'', 'email':'Email', 'password':'password', 'passwordConfirmation': 'password'}}
                route="signup"
            />
        </main>
    )
};

export default signUp;