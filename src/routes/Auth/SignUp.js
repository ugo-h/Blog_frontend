import React from 'react';
import SignForm from '../../Containers/Form/SignForm/SignForm';

const signUp = (props) => {
    return (
        <main className="Auth">  
            <h1>Sign Up</h1>
            <SignForm 
                fields={["name", "email", "password", "passwordConfirm"]}
                route="/signup" 
                signInHandler={props.signInHandler}
            />
        </main>
    )
};

export default signUp;