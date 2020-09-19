import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import SignUp from './routes/SignUp'
import SignIn from './routes/SignIn';
import SignOut from './routes/SignOut'; 
import Posts from './routes/Posts';
import Home from './routes/Home';
import { Protected, RedirectWhenAuth } from './Helper/Protected';

class App extends Component {
  state = {
    userToken: ''
  }

  componentDidMount() {
    const userToken = localStorage.getItem('userToken');
    // this.updateAuthStateHandler(userToken);
    this.setState({ userToken })
    console.log(this.state.userToken)
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

  signInHandler(userToken) {
    localStorage.setItem('userToken', userToken);
    this.setState({ userToken });
  }
  logOutHandler() {
    localStorage.setItem('userToken', '');
    // this.updateAuthStateHandler('');
    this.setState({ userToken: '' })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Header isAuth={this.state.userToken} signOutHandler={this.logOutHandler.bind(this)}/>
        <h2>{this.state.userToken?'Hello, user122':'You are not logged in'}</h2>
          <Switch>
            <Route path="/signout">
              <Protected isAuth = {this.state.userToken}>
                  <SignOut signOutHandler={this.logOutHandler.bind(this)}/>
                </Protected>
              </Route>
              <Route path="/signup">
                <RedirectWhenAuth isAuth={this.state.userToken}>
                  <SignUp
                    fields={['email', 'password', 'password confirmation']}
                    route='signup'
                  />
                </RedirectWhenAuth>
              </Route>
              <Route path="/signin">
                <RedirectWhenAuth isAuth={this.state.userToken}>
                    <SignIn                    
                      signInHandler={ this.signInHandler.bind(this) }
                    />
                </RedirectWhenAuth>
              </Route>
              <Route path="/posts">
                <Posts isAuth={this.state.userToken}/>
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
