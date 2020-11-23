import React from 'react';
import './PostPreview.css';
import { Link } from 'react-router-dom';
import PostHeader from '../PostHeader/PostHeader';

const PostPreview = ({ post }) => {
    return(
        <li className="Post-preview">
            <h2 className="Post-preview__title">{ post.title }</h2>
            <PostHeader post={post}/>
            <p className="Post-preview__content">{post.content.length>120? post.content.slice(0, 300) + '...': post.content }</p>
            <Link className="Post-preview__link" to={'/posts/' + post._id}>Read full post</Link>
        </li>
    )
}

export default PostPreview;