import React from 'react';
import { Redirect } from 'react-router-dom';
import Aux from './Auxillury';

function Protected(props) {
  const { isAuth, children } = props;
  return(
    <Aux>{
        isAuth?
        children
        :<Redirect to="/"/>
    }</Aux>
  )
}

function RedirectWhenAuth(props) {
  const { isAuth } = props;
  return(
    <Aux>
    {
        isAuth?
        <Redirect to="/"/>
        :props.children
    }
    </Aux>
  )
}

export { Protected, RedirectWhenAuth };