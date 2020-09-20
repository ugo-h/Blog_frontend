import React, { Component } from 'react';
import TagsList from '../../TagsList/TagList';
import './Post.css';
//TURN STATELESS!!!!BUT I CAN NOT1111
class Post extends Component {
    state = {
        title: '',
        content: '',
        author: '',
        tags: []
    };
    
    async componentDidMount() {
        const id = this.props.id;
        const res = await fetch('http://localhost:5000/posts/' + id);
        const postInfo = await res.json();

        const { title , content, author, date, tags } = postInfo;
        this.setState({ title, content, author, date, tags })
    };


    render() {
    return(
        <div className="Post">
            <h2 className="Post__title">{ this.state.title }</h2>
            <div className="Post__header">
                <TagsList tags={ this.state.tags }/>
                <h3 className="Post__header__subtitle">{ this.state.author }</h3>
                <span className="Post__header__subtitle">{ new Date(this.state.date).toDateString() }</span>
                
            </div>
            <p className="Post__content">{ this.state.content }</p>
        </div>
    );
    }
};

export default Post;
