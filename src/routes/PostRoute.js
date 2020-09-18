import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Post from '../Components/Posts/Post/Post';

function PostRoute(props) {
    const { postId } = useParams();
    return([
        <Link to="/posts">Back to the posts list</Link>,
        <Post id={postId}/>
    ])
}

export default PostRoute;