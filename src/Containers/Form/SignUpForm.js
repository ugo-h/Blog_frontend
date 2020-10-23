import React from 'react';
import FormTemplate from './FormTemplate/FormTemplate';

const signUp = () => (
    <FormTemplate 
        fields={{'name':'', 'email':'Email', 'password':'password', 'passwordConfirmation': 'password'}}
        route="signup"
    />
)

export default signUp;