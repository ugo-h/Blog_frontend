import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
    state = {
        email:'',
        password:'',
        passwordConfirmation:'',
        errors: {
            email:'',
            password: '',
            passwordConfirmation:''
        }
    }
    async submitHandler(ev) {
        ev.preventDefault();
        const user = {};
        user.email = this.state.email;
        user.password = this.state.password;
        user.passwordConfirmation = this.state.passwordConfirmation;
        this.setState({
                email:'',
                password:'',
                passwordConfirmation:''
        })
        const res = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },    
            body: JSON.stringify(user)
        });
        let errRes = await res.json();
        console.log(errRes)
        errRes = errRes['errors'];
        if(!errRes) {
            return;
        }
        const errors = { ...this.state.errors };
        for(const error of errRes) {
            const { param, msg } = error;
            errors[param] = msg;
        }
        this.setState({errors});
        
    };
  
    inputChangeHandler(ev) {
        const target = ev.target;
        const name = target.name;
        const value = target.value;
       
        this.setState({ [name]:value });
    }

    render() {
        return(
        <form onSubmit={this.submitHandler.bind(this)} className="SignUp">
            <label>
                Email
                <input name="email" type="email" value={this.state.email} onChange={this.inputChangeHandler.bind(this)}/>
                <span className="form__error">{this.state.errors.email}</span>
            </label>
            <label>
                Password
                <input name="password" value={this.state.password} onChange={this.inputChangeHandler.bind(this)}/>
                <span className="form__error">{this.state.errors.password}</span>
            </label>
            <label>
                Confirm Password
                <input name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.inputChangeHandler.bind(this)}/>
                <span className="form__error">{this.state.errors.passwordConfirmation}</span>
            </label>
            <input type="submit" value="Sign Up"/>
        </form>
        )
    }
}

export default SignUp;