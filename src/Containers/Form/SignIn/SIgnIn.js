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
        localStorage.setItem('userToken', userToken)
        console.log(userToken);
    }
    
}

export default SignIn;