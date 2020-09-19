import React, { Component } from 'react';
import './SignForm.css';

class FormTemplate extends Component {
    constructor(props) {
        super(props);
        const emptyFields = this.createEmptyFieldsFromProps();
        const errors =  this.createEmptyFieldsFromProps();
        this.state = { ...emptyFields, errors };
        console.log(this.state);
    }
    
    createEmptyFieldsFromProps() {
        const emptyFields = {};
        for(const fieldName in this.props.fields) {
            emptyFields[fieldName] = '';
        }
        return emptyFields;
    }
    async submitHandler(ev) {
        ev.preventDefault();
        const data = {}
        for(const fieldKey in this.props.fields) {
            data[fieldKey] = this.state[fieldKey];
        }
        //set empty strings to errors and to all fields
        const emptyFields = this.createEmptyFieldsFromProps();
        this.setState({errors: emptyFields})
        this.setState({...emptyFields});

        const res = await this.sendPostRequest(data, this.props.route);
        const body = await res.json();

        if(this.hasErrorsResponse(body)) {
            this.displayErrors(body);
            return;
        }
        this.processResponse(res, body);
    };
    async sendPostRequest(data, route) {
        const res = await fetch(`http://localhost:5000/${route}`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },    
                  body: JSON.stringify(data)
              });
        return res;
      }
      
    hasErrorsResponse(body) {
        return !!body['errors'];
        
    }
    displayErrors(body) {
        const errRes = body['errors'];
        const errors = { ...this.state.errors };
        for(const error of errRes) {
            const { param, msg } = error;
            errors[param] = msg;
        }
        this.setState({errors});
    }
    processResponse(res, body) {

    }
  
    inputChangeHandler(ev) {
        const target = ev.target;
        const name = target.name;
        const value = target.value;
       
        this.setState({ [name]:value });
    }

    getInput(type, field) {
        if(type==='textarea') {
            return(
                <textarea 
                    value={this.state[field]}
                    name={field}
                    onChange={this.inputChangeHandler.bind(this)}
                />
            )
        } else {
            return(
                <input 
                type={type}
                value={this.state[field]}
                name={field}
                onChange={this.inputChangeHandler.bind(this)}
            />
            )
        }
    }

    renderFields() {
        const render = [];
        let index = 0;
        for(const field in this.props.fields) {
            render.push(
            <label key={index}>
                {field}
                {this.getInput(this.props.fields[field], field)}
                <span className="form__error">
                    {this.state.errors[field]}
                </span>
            </label>
            )
            index++;
        }
        return render;
    }
    render() {
        return(
            <form className="SignForm" onSubmit={this.submitHandler.bind(this)}>
                {this.renderFields()}
                <input  type="submit" value="submit"/>
            </form>
            
        )
    }
}

export default FormTemplate;