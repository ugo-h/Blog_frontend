import React from 'react';
import { Redirect } from 'react-router-dom';
import Aux from './Auxillury';
import withContext from '../Context/authHoc';

function requireAuth({children, context}) {
  const isAuth = !!context.authToken;
  return(
    <Aux>{
        isAuth?
        children
        :<Redirect to="/"/>
    }</Aux>
  )
}

function redirectWhenAuth({context, children}) {
  const isAuth = !!context.authToken;
  return(
    <Aux>
    {
        isAuth?
        <Redirect to="/"/>
        :children
    }
    </Aux>
  )
}

export const Protected = withContext(requireAuth)
export const RedirectWhenAuth = withContext(redirectWhenAuth)