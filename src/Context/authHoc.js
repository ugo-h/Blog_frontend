import React from 'react';
import AuthContext from './AuthContext';

const withContext = (Component) => {
    return (props) => (
        <AuthContext.Consumer>    
             {(context) => {
                return <Component {...props} context={context} />
             }}
        </AuthContext.Consumer>
    )
 }

 export default withContext;