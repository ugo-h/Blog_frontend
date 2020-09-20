import React, { Component } from 'react';
import './Posts.css';
import PostPreview from './Post/PostPreview';

class Posts extends Component {
    state = {
        postsList: []
    };

    async componentDidMount() {
        const res = await fetch('http://localhost:5000/posts');
        const postsList = await res.json();
        this.setState({ postsList })
        this.sortByDate()
    };
    sortByDate() {
        const postsList = [ ...this.state.postsList ]
        postsList.sort((a, b) =>{
            if(a.date < b.date) {
                return 1
            }
            if(a.date > b.date) {
                return -1
            }
            return 0;
        });
        this.setState({postsList})
    }   
    render() {
        return (
            <ul className="Posts">
                {this.state.postsList.map(post => (
                    <PostPreview 
                        key={post.id}
                        id={post.id}
                        title={post.title} 
                        author={post.author}
                        date={post.date}
                        tags={post.tags}
                        content={post.content}/>
                    ))}
            </ul>
        )
    };
};

export default Posts;