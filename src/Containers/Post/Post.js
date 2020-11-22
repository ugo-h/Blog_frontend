import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import TagsList from '../../Components/TagsList/TagList';
import { withSpinner } from '../../Components/lib/util';
import { sendRequestWithFallback } from '../../Helper/handleFetchErrors';
import { error as Error } from '../../Components/lib/lib';
import './Post.css';

class Post extends Component {
    state = {
        title: '',
        content: '',
        author: '',
        tags: [],
        isLoading: true,
        isLoadedSuccessfully: true,
        errorCode: 200,
        errorMsg: ''
    };
    
    async componentDidMount() {
        const id = this.props.id;
        const { data, isSuccessful } = await sendRequestWithFallback(`/posts/${id}`, (code) => this.displayError(code))
        if(isSuccessful) this.loadPost(data);
    };
    
    displayError(code) {
        let errorMsg;
        switch(code) {
            case 404: 
            errorMsg = 'Post not found';
            break;
            default: ;
        }
        this.setState({ isLoading: false, isLoadedSuccessfully: false, errorCode: code, errorMsg });
    };

    loadPost(data) {
        const { title , content, author, date, tags } = data;
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
        this.props.history.push('/');
    }

    render() {
        const { isLoading } = this.state;
        const { isLoadedSuccessfully } = this.state;
        return(
            <div className="Post">
            {
                withSpinner(
                isLoadedSuccessfully?<Fragment>
                    <h2 className="Post__title">{ this.state.title }</h2>
                    <div className="Post__header">
                        <TagsList tags={ this.state.tags }/>
                        <h3 className="Post__header__subtitle">{ this.state.author }</h3>
                        <span className="Post__header__subtitle">{ new Date(this.state.date).toDateString() }</span>       
                    </div>
                    <p className="Post__content">{ this.state.content }</p>
                    <button onClick={this.deleteHandler.bind(this)}>DELETE</button>
                </Fragment>: <Error code={this.state.errorCode} msg={this.state.errorMsg}/>, isLoading)
            }
            </div>
        );
    }
};

export default withRouter(Post);
