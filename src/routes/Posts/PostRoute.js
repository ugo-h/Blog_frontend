import React from 'react';
import { useParams } from 'react-router-dom';
import Post from '../../Containers/Post/Post';

function PostRoute(props) {
    const { postId } = useParams();
    return(
        <Post userToken={props.userToken} key="2" id={postId}/>
    )
}

export default PostRoute;