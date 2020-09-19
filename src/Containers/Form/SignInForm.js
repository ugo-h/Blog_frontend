import FormTemplate from './FormTemplate/FormTemplate';

class SignIn extends FormTemplate {

    displayErrors() {
        const errors = { ...this.state.errors };
        errors.password = 'Invalid password or email!';
        this.setState({errors});
    }
    
    processResponse(res, body) {
        const userToken = body.token;
        // console.log(this.props);
        this.props.signInHandler(userToken);

    }
    
}

export default SignIn;