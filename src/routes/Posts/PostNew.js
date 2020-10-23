import React from 'react';
import PostForm from '../../Containers/Form/CreatePostForm/PostForm';

const PostNew = (props) => {
    return(
        <div>
            <h1>Create new Post</h1>
            <PostForm userToken={props.userToken}/>
        </div>
    )
}

export default PostNew;