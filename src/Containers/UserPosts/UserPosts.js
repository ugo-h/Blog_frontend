import React, { Component, Fragment } from 'react';
import '../../Components/Posts/PostList/PostsList';
import PostsList from '../../Components/Posts/PostList/PostsList';
import { withSpinner } from '../../Components/lib/util';
import { error as Error } from '../../Components/lib/lib';
import { getErrorMsgFromCode, sendRequestWithFallback } from '../../Helper/handleFetchErrors';

class UserPosts extends Component {
    state = {
        posts: [],
        isLoadedSuccessfully: true,
        isLoading: false,
        errorCode: 200,
        errorMsg: ''
    }
    async componentDidMount() {
        this.setState({ isLoading: true })
        const {data, isSuccessful} = await sendRequestWithFallback(`/users/${this.props.id}`, (code) => this.displayErrors(code))
        if(isSuccessful) this.loadUserPosts(data)
    };
    
    loadUserPosts(posts) {
        this.setState({ posts, isLoading: false });
    }
    displayErrors(code) {
        const errorMsg = getErrorMsgFromCode(code)
        this.setState({ isLoadedSuccessfully: false, errorCode: code, errorMsg, isLoading: false });
    }

    render() {
        const { isLoadedSuccessfully, isLoading } = this.state; 
        const name = this.props.id;
        return withSpinner(
            isLoadedSuccessfully? 
            <Fragment>
                <h2>Posts made by {name}</h2>
                <PostsList posts={this.state.posts}/>
            </Fragment>: <Error code={this.state.errorCode} msg={this.state.errorMsg}/>,
            isLoading
        )
    }
};

export default UserPosts;