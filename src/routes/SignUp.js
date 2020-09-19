import React from 'react';
import SignUpForm from '../Containers/Form/SignUpForm';
import Aux from '../Helper/Auxillury';

const signUp = (props) => {
    return (
        <Aux>
            <h2>Sign Up</h2>
            <SignUpForm
                fields={['email', 'password', 'passwordConfirmation']}
                route="signup"
            />
        </Aux>
    )
};

export default signUp;