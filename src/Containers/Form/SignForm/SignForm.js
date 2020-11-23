import React, { Component } from 'react';
import Field from '../../../Components/lib/Field/Field';
import {
    createEmptyErrorFields, 
    createFieldsFromArray,
    sendFormRequest,
    processErrors
} from '../formLogic';
import '../Form.css';
import  withAuth from '../../../Context/authHoc';
import { serverUnavailableMsg as ServerMsg } from '../../../Components/lib/lib';
import { withSpinner } from '../../../Components/lib/util';


class SignForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            isLoading: false,
            isLoadedSuccessfuly: true
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
        this.setState({isLoading: true})
        const route = this.props.route;
        const data = this.state.fields;
        let body;
        try{
            body = await sendFormRequest(route, data);
        } catch(err) {
            this.setState({isLoadedSuccessfuly: false, isLoading: false});
            return;
        };
        if(body.errors) {
            const errors = processErrors(body.errors);
            this.setState({errors, isLoading: false});
            return;
        }
        this.setState({isLoading: false})
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
            let type = name;
            let autocomplete = "false";
            if(name.includes('password')) {
                autocomplete = "true";
                type="password"
            }
            const label = name.split('-').join(' ');
            fieldsArray.push(
            <Field
                key={name}
                label={label} 
                error={error}
                input={<input autoComplete={autocomplete} className="field__input" name={name} type={type} value={value} onChange={this.inputChangeHandler}/>}
            />)
        }
        return fieldsArray;
    }

    render() {
        const { isLoading } = this.state;
        return(
           <form className="Form" onSubmit={this.submitHandler}>
               {this.createFields()}
               <div className="Form__loader-container">
                    {withSpinner(<input className="Form__button" type="submit" value="Submit"/>, isLoading, 'small' )}
               </div>
               {this.state.isLoadedSuccessfuly? '':<div className="Form__error-container"><ServerMsg size="small"/></div>}
               
           </form>
       ) 
    }

}

export default withAuth(SignForm);
