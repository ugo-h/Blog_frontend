import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Post from '../Components/PostsList/Post/Post';

function PostRoute(props) {
    const { postId } = useParams();
    return([
        <Link to="/posts" key="1">Back to the posts list</Link>,
        <Post key="2" id={postId}/>
    ])
}

export default PostRoute;