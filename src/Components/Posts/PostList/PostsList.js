import React from 'react';
import PostPreview from '../PostPreview/PostPreview';
import './Posts.css';
const postsList = ({ posts }) => {
    return(
        <ul className="Posts">
            {posts.map(post => (
                <PostPreview
                    key={post._id}
                    post={post}
                />))}
        </ul>
    )
}

export default postsList;