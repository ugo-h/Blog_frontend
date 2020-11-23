import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PostHeader from '../../Components/Posts/PostHeader/PostHeader';  
import { withSpinner } from '../../Components/lib/util';
import { 
    sendRequestWithFallback,
    getErrorMsgFromCode 
} from '../../Helper/handleFetchErrors';
import { error as Error } from '../../Components/lib/lib';
import './Post.css';

class Post extends Component {
    state = {
        post: {},
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
        const errorMsg = getErrorMsgFromCode(code, 'Post')
        this.setState({ isLoading: false, isLoadedSuccessfully: false, errorCode: code, errorMsg });
    };

    loadPost(data) {
        const post = data;
        const isLoading = false;
        this.setState({ post, isLoading })
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
                    <h2 className="Post__title">{ this.state.post.title }</h2>
                    <div className="Post__header-container"><PostHeader post={this.state.post}/></div>
                    <p className="Post__content">{ this.state.post.content }</p>
                    <button onClick={this.deleteHandler.bind(this)}>DELETE</button>
                </Fragment>: <Error code={this.state.errorCode} msg={this.state.errorMsg}/>, isLoading)
            }
            </div>
        );
    }
};

export default withRouter(Post);
