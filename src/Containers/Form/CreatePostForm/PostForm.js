import React, { Component } from 'react';
import './PostForm.css';
import Field from '../../../Components/Field/Field';
import TagInput from './TagInput/TagInput';
import { createEmptyErrorFields, processErrors, sendRequestWithUserToken} from '../formLogic';
import { withRouter } from 'react-router-dom';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                content: '',
                title: '',
                tags: []
            },
            errors: {}
        }
        this.state.errors = createEmptyErrorFields(this.state.fields);

        this.submitHandler = this.submitHandler.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.addTag = this.addTag.bind(this)
        this.removeTag = this.removeTag.bind(this)
    }
    async submitHandler(ev) {
        ev.preventDefault();
        const route = '/posts/create';
        const data = this.state.fields;
        const token = this.props.userToken;
        const body = await sendRequestWithUserToken(route, data, token);
        if(body.errors) {
            const errors = processErrors(body.errors);
            this.setState({errors});
            return;
        }
        this.props.history.push('/')
    }

    inputChangeHandler(ev) {
        const fields = {...this.state.fields};
        const {name, value} = ev.target;

        fields[name] = value;
        this.setState({fields});
    }

    addTag(tag) {
        const fields = {...this.state.fields};
        fields.tags.push(tag);
        this.setState({ fields })
      }

    removeTag() {
    const fields = {...this.state.fields};
    const tag = fields.tags.pop();
    this.setState({ fields })
    return tag;
    }

    render() {
        const { fields, errors } = this.state;
        return(
            <form onSubmit={this.submitHandler}>
                <label>Tags</label>
                <TagInput
                    tagsArray={this.state.fields.tags}
                    value={this.state.fields.tags}
                    name="tag"
                    addTag={this.addTag}
                    removeTag={this.removeTag}
                />
                
                <Field
                    label="Title" 
                    error={errors['title']}
                    input={<input name="title" value={fields.title} onChange={this.inputChangeHandler}/>}
                />
                <Field 
                    label={'Write your post here:'} 
                    error={errors['content']}
                    input={<textarea name="content" value={fields.content} onChange={this.inputChangeHandler}/>}
                />
                <input type="submit" value="Create"/>
            </form>
        )
    }

}

export default withRouter(PostForm);