import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import SignUp from './routes/Auth/SignUp'
import SignIn from './routes/Auth/SignIn';
import SignOut from './routes/Auth/SignOut'; 
import Posts from './routes/Posts/Posts';
import Home from './routes/Home';
import Tags from './routes/Tags/Tags';
import Footer from './Components/Footer/Footer';
import { Protected, RedirectWhenAuth } from './Helper/Protected';

//MAKE EVERYthINg EXCEPT PAGES OF SINGLE ELEMENTS (Post page,
// tag psge, user page)
//FUNCTION BASED
//FETCH ON USEEFFECT WITCH CALLBACK FROM APP AND SAVE
//IN THE STATE OF APP COMPONENT
//Or not
//beacuse App component can become god class
//which is a bad practice
//WHY TWO POSTS ARE BEING CREATED??????
//TAGS ARE NOT CREATED ON BACKEND WHY?
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
        {/* <h2>{this.state.userToken?'Hello, user122':'You are not logged in'}</h2> */}
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
              <Route path="/tags">
                <Tags/>
              </Route>
              <Route path="/posts">
                <Posts isAuth={this.state.userToken}/>
              </Route>
              <Route path="/">
                <Home isAuth={this.state.userToken}/>
              </Route>            
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
