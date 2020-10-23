import React from 'react';
import SignUpForm from '../../Containers/Form/SignUpForm';

const signUp = (props) => {
    return (
        <main className="Auth">  
            <h1>Sign Up</h1>
            <SignUpForm/>
        </main>
    )
};

export default signUp;