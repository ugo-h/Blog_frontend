import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostPreview from '../../Components/PostsList/Post/PostPreview';

function Tag(props) {
    const [posts, setPosts] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://localhost:5000/posts');
            const posts = await res.json();
            const postsWithTag = posts.filter(post => post.tags.find(tag => tag===id))
            setPosts(postsWithTag); 
        };
        fetchData();
    });
    return(
        <div>
            <h2>Posts with tag {id}</h2>
            <ul>
                {posts.map((post, index) => <PostPreview key={index} title={post.title} tags={post.tags} content={post.content} author={post.author}/>)}
            </ul>
        </div>
    )
}

export default Tag;