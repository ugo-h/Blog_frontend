import React, { Component } from 'react';
import '../SignForm.css';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        errorMsg: '',
    };

    inputChangeHandler(ev) {
        const target = ev.target;
        const name = target.name;
        const value = target.value;
       
        this.setState({ [name]:value });
    };
    async submitHandler(ev) {
        ev.preventDefault();
        const data = { ...this.state };
        this.setState({
                email:'',
                password:''
        })
        const res = await fetch('http://localhost:5000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },    
            body: JSON.stringify(data)
        });
        const body = await res.json();
        const errors = body['errors'];
        if(!errors) {
            const userToken = body.token;
            localStorage.setItem('userToken', userToken)
            return;
        }
        this.setState({errorMsg: 'User not found!'});
    };
    

    render() {
        return(
            <form className="SignForm" onSubmit={this.submitHandler.bind(this)}>
                <label>
                    Email
                    <input name="email" value={this.state.email} onChange={this.inputChangeHandler.bind(this)}/>
                </label>
                <label>
                    Password
                    <input name="password" type="password" value={this.state.password} onChange={this.inputChangeHandler.bind(this)}/>
                </label>
                <span className="form__error">{this.state.errorMsg}</span>
                <input type="submit" value="Sign In"/>
            </form>
        )
    }
}

export default SignIn;