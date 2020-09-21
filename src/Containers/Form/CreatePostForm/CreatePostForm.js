import React from 'react';
import TagInput from './TagInput/TagInput';
import FormTemplate from '../FormTemplate/FormTemplate';

class CreatePostForm extends FormTemplate {
    constructor(props) {
        super(props);
        this.state.tagsArray = [];
    }
    processResponse(res, body) {
        // console.log(body);
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
      };
      getRequestDataFromFields() {
        const data = {}
        for(const fieldKey in this.props.fields) {
            data[fieldKey] = this.state[fieldKey];
        }
        data.tags = this.state.tagsArray;
        return data; 
    }
      addTag(tag) {
        const tagsArray = [...this.state.tagsArray];
        tagsArray.push(tag);
        this.setState({ tagsArray })
      }
      removeTag() {
        const tagsArray = [...this.state.tagsArray];
        const tag = tagsArray.pop()
        this.setState({ tagsArray })
        return tag;
      }

      getInputDependingOnType(type, field) {
        if(type==='textarea') {
            return(
                <textarea 
                    value={this.state[field]}
                    name={field}
                    onChange={this.inputChangeHandler.bind(this)}
                />
            )
        } else if(type==='tagInput') {
            return(
                <TagInput 
                    userToken={this.props.userToken}
                    tagsArray={this.state.tagsArray}
                    value={this.state[field]}
                    name={field}
                    addTag={this.addTag.bind(this)}
                    removeTag={this.removeTag.bind(this)}
                />
            )
        } else {
            return(
                <input className="SignForm__input"
                type={type}
                value={this.state[field]}
                name={field}
                onChange={this.inputChangeHandler.bind(this)}
            />
            )
        }
      }

}

export default CreatePostForm;