import  React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import SignUp from './SignUp'
import SignIn from './SignIn';
import SignOut from './SignOut';
import './AuthLayout.css';

const auth = () => (
        <Fragment>
            <Route path="/auth/signout">
                <SignOut/>
            </Route>
            <Route path="/auth/signup">
                <SignUp
                  fields={['email', 'password', 'password confirmation']}
                  route='signup'
                />
            </Route>
            <Route path="/auth/signin">
                  <SignIn/>
            </Route>
            </Fragment>
)

export default auth;