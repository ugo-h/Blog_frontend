import React, { Component } from 'react';
import './Posts.css';
import PostPreview from './Post/PostPreview';

class Posts extends Component {
    state = {
        postsList: []
    };

    async componentDidMount() {
        const res = await fetch('http://localhost:5000');
        const postsList = await res.json();
        this.setState({ postsList })
    };

    render() {
        return (
            <ul className="Posts">
                {this.state.postsList.map(post => (
                    <PostPreview 
                        key={post.id}
                        id={post.id}
                        title={post.title} 
                        content={post.content}/>
                    ))}
            </ul>
        )
    };
};

export default Posts;