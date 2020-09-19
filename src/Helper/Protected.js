import React from 'react';
import { Redirect } from 'react-router-dom';
import Aux from './Auxillury';

function Protected(props) {
  return(
    <Aux>
    {
        !props.isAuthenticated?
        props.children
        :<Redirect to="/"/>
    }
    </Aux>
  )
}

export default Protected;