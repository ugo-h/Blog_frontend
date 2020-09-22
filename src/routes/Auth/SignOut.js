import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function SignOut(props) {
    useEffect((props) => {
        props.signOutHandler();
    }, [])
    return (
       <Redirect to="/"/>
    )
};

export default SignOut;