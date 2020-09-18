import React, { Component } from 'react';

class FormTemplate extends Component {
    constructor(props) {
        super(props);
        const emptyFields = this.createEmptyFieldsFromProps();
        const errors =  this.createEmptyFieldsFromProps();
        this.state = {...emptyFields, errors};
        console.log(this.state.errors)
        
    }
    createEmptyFieldsFromProps() {
        const emptyFields = {};
        this.props.fields.forEach((fieldName) => {
            emptyFields[fieldName] = '';
        })
        return emptyFields;
    }
    async submitHandler(ev) {
        ev.preventDefault();
        const data = { ...this.state };
 
        //set empty strings to errors and to all fields
        const emptyFields = this.createEmptyFieldsFromProps();
        this.setState({errors: emptyFields})
        this.setState({...emptyFields});

        const res = await this.props.sendRequest(data);
        const body = await res.json();
        
        if(this.hasErrorsResponse(body)) {
            this.displayErrors(body);
            return;
        }
        this.processResponse(res);
    };
    hasErrorsResponse(body) {
        const errRes = body['errors'];
        if(!errRes) {
            return false;
        }
        return true
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
    processResponse(res) {

    }
  
    inputChangeHandler(ev) {
        const target = ev.target;
        const name = target.name;
        const value = target.value;
       
        this.setState({ [name]:value });
    }

    renderFields() {
        return this.props.fields.map((field, index) => (
            <label key={index}>
                {field}
                <input 
                    value={this.state[field]}
                    name={field}
                    onChange={this.inputChangeHandler.bind(this)}
                />
                <span className="form__error">
                    {this.state.errors[field]}
                </span>
            </label>
        ))
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