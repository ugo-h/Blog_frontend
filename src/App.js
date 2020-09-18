import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import SignUp from './Containers/Form/SignUp/SignUp';
import SignIn from './Containers/Form/SignIn/SIgnIn'; 
import Posts from './routes/Posts';
import Home from './routes/Home';
import FormTemplate from './Containers/Form/FormTemplate';

async function sendSignUpRequest(data) {
  const res = await fetch('http://localhost:5000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },    
            body: JSON.stringify(data)
        });
  return res;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
        <Switch>
          <Route path="/test">
              <FormTemplate 
              fields={['email', 'password']}
              sendRequest={sendSignUpRequest}
              />
          </Route>
            <Route path="/signup">
                <SignUp/>
            </Route>
            <Route path="/signin">
                <SignIn/>
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
