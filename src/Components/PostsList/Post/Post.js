import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

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
        
        const tag =  await this.fetchTag(postInfo.tag);
        
        const { title , content, author, date } = postInfo;
        this.setState({ title, content, author, date, tag })
    };

    async fetchTag(id) {
        let res, tag;
        try {
            res = await fetch('http://localhost:5000/tags/' + id);
            tag = await res.json();
        } catch (err) {
            return '';
        }
        return tag;
    }

    render() {
    return(
        <div className="Post">
            <h2 className="Post__title">{ this.state.title }</h2>
            <div className="Post__header">
                {this.state.tag? 
                    <Link to={`/tags/${this.state.tag.id}`} className="Post__header__tag">{this.state.tag.name}</Link>
                :''}
                <h3 className="Post__header__subtitle">{ this.state.author }</h3>
                <span className="Post__header__subtitle">{ new Date(this.state.date).toDateString() }</span>
                
            </div>
            <p className="Post__content">{ this.state.content }</p>
        </div>
    );
    }
};

export default Post;
