import React from 'react';
import './Error.css';

export const error = ({ code, msg }) => (
    <div className="error-container">
        {code?<h2 className="error-container__title">{code}</h2>:''}
        <p className="error-container__msg">{msg}</p>
    </div>
)
