import React from 'react';
import{ Link } from 'react-router-dom';
import './TagsList.css';

const tagsList = (props) => (
    <ul className="TagsList">{
        props.tags.map((tag, index) => (
            <li className="TagsList__element" key={index}><Link to={`/tags/${tag}`}>{tag}</Link></li>
        ))
    }</ul>
);

export default tagsList;