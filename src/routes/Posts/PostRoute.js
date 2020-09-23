import React from 'react';
import { useParams } from 'react-router-dom';
import Post from '../../Components/PostsList/Post/Post';

function PostRoute(props) {
    const { postId } = useParams();
    return(
        <Post key="2" id={postId}/>
    )
}

export default PostRoute;