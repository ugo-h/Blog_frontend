import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TagsList from '../../Components/TagsList/TagList';
import Spinner from '../../Components/Spinner/Spinner';
import Aux from '../../Helper/Auxillury';
import './Post.css';

class Post extends Component {
    state = {
        title: '',
        content: '',
        author: '',
        tags: [],
        isLoading: true
    };
    
    async componentDidMount() {
        const id = this.props.id;
        const res = await fetch('http://localhost:5000/api/posts/' + id);
        const postInfo = await res.json();

        const { title , content, author, date, tags } = postInfo;
        const isLoading = false;
        this.setState({ title, content, author, date, tags, isLoading })
    };
    async deleteHandler() {
        const id = this.props.id;
        const token = this.props.userToken;
        console.log(token)
        await fetch (`http://localhost:5000/posts/delete/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },    
        });
        console.log('redirecting');
        this.props.history.push('/')
    }

    render() {
        const { isLoading } = this.state;
    return(
        <div className="Post">
        {
            isLoading?
            <div className="Post__spinner-container"><Spinner size="large"/></div>
            :
            <Aux>
                <h2 className="Post__title">{ this.state.title }</h2>
                <div className="Post__header">
                    <TagsList tags={ this.state.tags }/>
                    <h3 className="Post__header__subtitle">{ this.state.author }</h3>
                    <span className="Post__header__subtitle">{ new Date(this.state.date).toDateString() }</span>
                    
                </div>
                <p className="Post__content">{ this.state.content }</p>
                <button onClick={this.deleteHandler.bind(this)}>DELETE</button>
            </Aux>
        }
        </div>
    );
    }
};

export default withRouter(Post);
