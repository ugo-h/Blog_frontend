import React from 'react';
import CreatrPostForm from '../../Containers/Form/CreatePostForm/CreatePostForm';

const PostNew = (props) => {
    return(
        <div>
            <h1>Create new Post</h1>
            <CreatrPostForm
                fields={{'tags':'tagInput', 'title':'text', 'content':'textarea'}}
                route="posts/create"
                userToken={props.userToken}
            />
        </div>
    )
}

export default PostNew;