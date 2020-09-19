import React from 'react';
import SignInForm from '../Containers/Form/SignInForm';

const siginIn = (props) => {
    return (
        <div>
            <h2>Sign In</h2>
            <SignInForm
                fields={['email', 'password']}
                route='signin'
                signInHandler={props.signInHandler}
            />
        </div>
    )
};

export default siginIn;