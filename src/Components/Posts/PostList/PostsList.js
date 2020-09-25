import React from 'react';
import PostPreview from '../PostPreview/PostPreview';
import './Posts.css';
const postsList = ({ posts }) => {
    return(
        <ul className="Posts">
            {posts.map(post => (
                <PostPreview
                    title={post.title}
                    tags={post.tags}
                    content={post.content}
                    date={post.date}
                    author={post.author}
                    id={post._id}
                />))}
        </ul>
    )
}

export default postsList;