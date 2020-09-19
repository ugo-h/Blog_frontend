
import FormTemplate from '../FormTemplate/FormTemplate';

class CreatePostForm extends FormTemplate {
    processResponse(res, body) {
        console.log(body);
    }
    async sendPostRequest(data, route) {
        const res = await fetch(`http://localhost:5000/${route}`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'authorization': `Bearer ${this.props.userToken}`
                  },    
                  body: JSON.stringify(data)
              });
        return res;
      }
}

export default CreatePostForm;