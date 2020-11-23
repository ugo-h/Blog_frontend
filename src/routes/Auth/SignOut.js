import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import withAuth from '../../Context/authHoc';
import { Protected } from '../../Helper/Protected';

function SignOut(props) {
    useEffect(() => {
        props.context.setToken('');
    })
    return (
        <Protected>
            <Redirect to="/auth/signin"/>
       </Protected>
    )
};

export default withAuth(SignOut);