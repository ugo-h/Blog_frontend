import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

const PostPreview = (props) => {
    return(
        <li className="Post-preview">
            <h2 className="Post-preview__title">{ props.title }</h2>
            <p className="Post-preview__content">{props.content.length>120? props.content.slice(0, 120) + '...': props.content }</p>
            <Link className="Post-preview__link" to={'/posts/' + props.id}>Read full post</Link>
        </li>
    )
}

export default PostPreview;