import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Layout.css'
import Header from '../Header/Header';
import SignUp from '../Form/SignUp/SignUp';
import SignIn from '../Form/SignIn/SIgnIn'; 

const layout = (props) => (
    <div className="Layout">
        <Header/>
        <Switch>
            <Route path="/signup">
                <SignUp/>
            </Route>
            <Route path="/signin">
                <SignIn/>
            </Route>
            <Route path="/">
               <h1>Hello world</h1>
            </Route>
        </Switch>
    </div>
)

export default layout;