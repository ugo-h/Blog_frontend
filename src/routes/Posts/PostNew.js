import React from 'react';
import CreatePostForm from '../../Containers/Form/CreatePostForm/CreatePostForm';

const PostNew = (props) => {
    return(
        <div>
            <h1>Create new Post</h1>
            <CreatePostForm
                fields={{'tags':'tagInput', 'title':'text', 'content':'textarea'}}
                route="posts/create"
                userToken={props.userToken}
                redirect="/"
            />
        </div>
    )
}

export default PostNew;