import React, { Component } from 'react';
import FormTemplate from './FormTemplate/FormTemplate';

class SignIn extends Component {

    // displayErrors() {
    //     const errors = { ...this.state.errors };
    //     errors.password = 'Invalid password or email!';
    //     this.setState({errors});
    // }
    
    processResponse(res, body) {
        const userToken = body.token;
        console.log(body);
        this.props.signInHandler(userToken);

    }
    render(){
        return(
            <FormTemplate 
                fields={{'email':'Email', 'password':'password'}}
                route='signin'
                processResponse={this.processResponse.bind(this)}
            />
            
        )
    }
}

export default SignIn;