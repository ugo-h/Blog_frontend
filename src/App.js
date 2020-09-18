import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import SignUp from './Containers/Form/SignUp/SignUp';
import SignIn from './Containers/Form/SignIn/SIgnIn'; 
import Posts from './routes/Posts';
import Home from './routes/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
        <Switch>
            <Route path="/signup">
                <SignUp
                  fields={['email', 'password', 'password confirmation']}
                  route='signup'
                />
            </Route>
            <Route path="/signin">
                <SignIn
                fields={['email', 'password']}
                route='signin'
                />
            </Route>
            <Route path="/posts">
               <Posts/>
            </Route>
            <Route path="/">
               <Home/>
            </Route>            
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
