import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header'; 
import Auth from './routes/Auth/Auth';
import Posts from './routes/Posts/Posts';
import Home from './routes/Home';
import Tags from './routes/Tags/Tags';
import Footer from './Components/Footer/Footer';
import AuthContext from './Context/AuthContext';

document.coockie = "promo_shown=1; Max-Age=2600000; Strict"
class App extends Component {
  state = {
    userToken: ''
  };

  componentDidMount() {
    const userToken = localStorage.getItem('userToken');
    this.setState({ userToken })
  };

  setToken(token) {
    localStorage.setItem('userToken', token)
    this.setState({ userToken: token })
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Header isAuth={this.state.userToken}/>
        <AuthContext.Provider value={{authToken: this.state.userToken, setToken: this.setToken.bind(this)}}>
        <Switch>
            <Route path="/auth">
              <Auth/>
            </Route>
            <Route path="/tags">
              <Tags/>
            </Route>
            <Route path="/posts">
              <Posts/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>     
        </Switch>
        </AuthContext.Provider>       
        <Footer/>
        </div>
      </BrowserRouter>
    );
  };
};

export default App;
