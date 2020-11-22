import React from 'react';
import './Spinner.css';

const spinner = ({ size }) => {
    let mod;
    switch(size){
        case 'small' || 'sm':
            mod = '--sm';
            break;
        case 'large' || 'lg':
            mod = '--lg';
            break;
        default:
            mod=''
            break;
    }
    //sizes:
    //      sm
    //      lg
    return(
        <div className={`Spinner${mod}`}> </div>
    )
}

export default spinner;