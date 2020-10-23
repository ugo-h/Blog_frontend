import React, { Component } from 'react';
import Field from '../../../Components/Field/Field';
import {createEmptyErrorFields, createFieldsFromArray, sendFormRequest, processErrors} from '../formLogic';
import './SignForm.css';
import  withAuth from '../../../Context/authHoc';

class SignForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {}
        };
        this.state.fields = createFieldsFromArray(this.props.fields);
        this.state.errors = createEmptyErrorFields(this.state.fields);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    inputChangeHandler(ev) {
        const fields = {...this.state.fields};
        const {name, value} = ev.target;

        fields[name] = value;
        this.setState({fields});
    }
    async submitHandler(ev) {
        ev.preventDefault();
        const route = this.props.route;
        const data = this.state.fields;
        const body = await sendFormRequest(route, data);
        if(body.errors) {
            const errors = processErrors(body.errors);
            this.setState({errors});
            return;
        }
        this.processResponse(body)
    }
    processResponse(body) {
        const userToken = body.token;
        this.props.context.setToken(userToken)
    }

    createFields() {
        const fieldsArray = [];
        for(const name in this.state.fields) {
            const value = this.state.fields[name]
            const error = this.state.errors[name]
            fieldsArray.push(
            <Field
                key={name}
                label={name} 
                error={error}
                input={<input name={name} type={name} value={value} onChange={this.inputChangeHandler}/>}
            />)
        }
        return fieldsArray;
    }

    render() {
        return(
           <form className="SignForm" onSubmit={this.submitHandler}>
               {this.createFields()}
               <input className="SignForm__button" type="submit" value="Submit"/>
           </form>
       ) 
    }

}

export default withAuth(SignForm);
