import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import SignUp from './Containers/Form/SignUp/SignUp';
import SignIn from './Containers/Form/SignIn/SIgnIn'; 
import Posts from './routes/Posts';
import Home from './routes/Home';
import Protected from './Helper/Protected';

class App extends Component {
  state = {
    userToken: null
  }

  componentDidMount() {
    const userToken = localStorage.getItem('userToken');
    // this.updateAuthStateHandler(userToken);
    this.setState({ userToken })
  }

  updateAuthStateHandler(userToken) {
    let isAuthenticated = false;
    if( userToken ) {
      isAuthenticated = true;
    }
    localStorage.setItem('userToken', userToken)
    const user = { isAuthenticated, userToken }
    this.setState({ user });
  }

  logInHandler(userToken) {
    localStorage.setItem('userToken', userToken);
    this.setState({ userToken })
  }
  logOutHandler() {
    localStorage.setItem('userToken', null);
    // this.updateAuthStateHandler('');
    this.setState({ userToken: null })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Header signOutHandler={this.logOutHandler.bind(this)} isAuthenticated={this.state.userToken}/>
          <Switch>
            <Route path="/signout">
                  <Redirect to="/"/>
              </Route>
              <Route path="/signup">
                <Protected isAuthenticated={this.state.userToken}>
                  <SignUp
                    fields={['email', 'password', 'password confirmation']}
                    route='signup'
                  />
                  </Protected>
              </Route>
              <Route path="/signin">
                  <Protected isAuthenticated={this.state.userToken}>
                    <SignIn
                    fields={['email', 'password']}
                    route='signin'
                    signInHandler={ this.logInHandler.bind(this) }
                    />
                  </Protected>
              </Route>
              <Route path="/posts">
                <Posts userToken={this.state.userToken}/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
