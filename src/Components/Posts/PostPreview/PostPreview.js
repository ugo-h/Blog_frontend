import React from 'react';
import './PostPreview.css';
import { Link } from 'react-router-dom';
import TagsList from '../../TagsList/TagList';

const PostPreview = ({post}) => {
    return(
        <li className="Post-preview">
            <h2 className="Post-preview__title">{ post.title }</h2>
            <ul className="Post-preview__header Util__list--horizontal">
                <li className="Util__list__el">
                    {post.tags.length>0?<img className="Util__list__el__icon" src="https://www.svgrepo.com/show/140547/supermarket-tags.svg" alt="Tags"/>:''}
                    <TagsList tags={post.tags}/>
                </li>
                <li className="Util__list__el">
                    <img className="Util__list__el__icon" src="https://www.svgrepo.com/show/311063/person.svg" alt="User"/>
                    <Link to={`/users/${post.author}`} className="Post-preview__header__subtitle">{ post.author }</Link>
                </li>
                <li className="Util__list__el">
                    <img className="Util__list__el__icon" src="https://www.svgrepo.com/show/78514/meeting-date.svg" alt="Date"/>
                    <span className="Post-preview__header__subtitle">{ new Date(post.date).toDateString() }</span>
                </li>
            </ul>
            <p className="Post-preview__content">{post.content.length>120? post.content.slice(0, 300) + '...': post.content }</p>
            <Link className="Post-preview__link" to={'/posts/' + post._id}>Read full post</Link>
        </li>
    )
}

export default PostPreview;