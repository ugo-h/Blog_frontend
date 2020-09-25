import React from 'react';
import{ Link } from 'react-router-dom';
import './TagsList.css';

const tagsList = (props) => {
    const list = props.tags? props.tags.map((tag, index) => (
        <li className="TagsList__element" key={index}><Link to={`/tags/${tag}`}>{tag}</Link></li>
    )): ''
    return(
    <ul className="TagsList">
        {list}
    </ul>
    )
};

export default tagsList;