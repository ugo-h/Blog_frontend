import React, { Component } from 'react';

class Post extends Component {
    state = {
        title: '',
        content: '',
        author: ''
    };
    
    async componentDidMount() {
        const id = this.props.id;
        const res = await fetch('http://localhost:5000/posts/' + id);
        const postInfo = await res.json();
        const { title , content, author } = postInfo;
        this.setState({ title, content, author })
    };

    render() {
    return(
        <div className="Post">
            <h2 className="Post__title">{ this.state.title }</h2>
            <h3 className="Post__author">{ this.state.author }</h3>
            <p className="Post__content">{ this.state.content }</p>
        </div>
    );
    }
};

export default Post;
