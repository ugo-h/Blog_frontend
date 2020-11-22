import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import withContext from '../../Context/authHoc';

function requireAuth({children, context}) {
  const isAuth = !!context.authToken;
  return(
    <Fragment>{
        isAuth?
        children
        :<Redirect to="/"/>
    }</Fragment>
  )
}

function redirectWhenAuth({context, children}) {
  const isAuth = !!context.authToken;
  return(
    <Fragment>
    {
        isAuth?
        <Redirect to="/"/>
        :children
    }
    </Fragment>
  )
}

export const Protected = withContext(requireAuth)
export const RedirectWhenAuth = withContext(redirectWhenAuth)