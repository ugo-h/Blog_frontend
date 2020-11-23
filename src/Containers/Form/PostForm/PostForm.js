import React, { Component } from 'react';
import '../Form.css';
import Field from '../../../Components/lib/Field/Field';
import TagInput from './TagInput/TagInput';
import { createEmptyErrorFields, processErrors, sendRequestWithUserToken} from '../formLogic';
import { withRouter } from 'react-router-dom';
import withAuth from '../../../Context/authHoc';
import { withSpinner } from '../../../Components/lib/util';


class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                content: '',
                title: '',
                tags: []
            },
            errors: {},
            isLoading: false
        }
        this.state.errors = createEmptyErrorFields(this.state.fields);

        this.submitHandler = this.submitHandler.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.addTag = this.addTag.bind(this)
        this.removeTag = this.removeTag.bind(this)
    }
    async submitHandler(ev) {
        ev.preventDefault();
        this.setState({isLoading: true})
        const route = '/posts/create';
        const data = this.state.fields;
        const token = this.props.context.authToken;
        const body = await sendRequestWithUserToken(route, data, token);
        if(body.errors) {
            const errors = processErrors(body.errors);
            this.setState({errors, isLoading: false});
            return;
        }
        this.setState({isLoading: false})
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
        const { fields, errors, isLoading } = this.state;
        return(
            <form onSubmit={this.submitHandler}>
                <Field
                    label="Tags"
                    error=""
                    input={<TagInput
                        tagsArray={this.state.fields.tags}
                        value={this.state.fields.tags}
                        name="tag"
                        addTag={this.addTag}
                        removeTag={this.removeTag}
                    />}
                />
                
                <Field
                    label="Title" 
                    error={errors['title']}
                    input={<input className="field__input" name="title" value={fields.title} onChange={this.inputChangeHandler}/>}
                />
                <Field 
                    label={'Write your post here:'} 
                    error={errors['content']}
                    input={<textarea rows="5" className="field__textarea" name="content" value={fields.content} onChange={this.inputChangeHandler}/>}
                />
                <div className="Form__loader-container">{
                    withSpinner(<input className="Form__button" type="submit" value="Create"/>, isLoading, 'small')
                }</div>
                
            </form>
        )
    }

}

export default withRouter(withAuth(PostForm));