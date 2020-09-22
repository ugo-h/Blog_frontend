import React from 'react';
import './Paginator.css';

const pagination = (props) => {
    return(
        <div className="Paginator">
            <button onClick={props.goToPreviousPage} className="Paginator__btn">Left</button>
            <ul className="Paginator__pages">
                {props.pages.map((page, index) => <li className="Paginator__pages__el"><button onClick={() => props.goToPage(index)}>{index+1}</button></li>)}
            </ul>
            <button onClick={props.goToNextPage} className="Paginator__btn">Right</button>
        </div>
    )
}

export default pagination;