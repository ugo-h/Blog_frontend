import React from 'react';
import { Link } from 'react-router-dom';
import  TagsList from '../../TagsList/TagList';
import './PostHeader.css';

const postHeader = ({ post }) => (
    <ul className="Post-header Util__list--horizontal">
        <li className="Util__list__el">
            {post.tags.length>0?<img className="Util__list__el__icon" src="https://www.svgrepo.com/show/140547/supermarket-tags.svg" alt="Tags"/>:''}
            <TagsList tags={post.tags}/>
        </li>
        <li className="Util__list__el">
            <img className="Util__list__el__icon" src="https://www.svgrepo.com/show/311063/person.svg" alt="Author"/>
            <Link to={`/users/${post.author}`} className="Post-header__subtitle">{ post.author }</Link>
        </li>
        <li className="Util__list__el">
            <img className="Util__list__el__icon" src="https://www.svgrepo.com/show/78514/meeting-date.svg" alt="Date"/>
            <span className="Post-header__subtitle Post-header__date">{ new Date(post.date).toDateString() }</span>
        </li>
    </ul>
);
export default postHeader;