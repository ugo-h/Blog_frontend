import React from 'react';
import './Field.css';

const field = ({label, error, input}) => {
    return(
        <label className="field">
            {label}
            {input}
            <span className="field__error">
                {error}
            </span>
        </label>
    )
}
export default field;