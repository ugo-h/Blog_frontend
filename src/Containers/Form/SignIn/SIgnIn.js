import FormTemplate from '../FormTemplate';
import '../SignForm.css';

class SignIn extends FormTemplate {

    displayErrors() {
        const errors = { ...this.state.errors };
        errors.password = 'Invalid password or email!';
        this.setState({errors});
    }
    
    processResponse(res, body) {
        const userToken = body.token;
        console.log(userToken);
        this.props.signInHandler(userToken);

    }
    
}

export default SignIn;