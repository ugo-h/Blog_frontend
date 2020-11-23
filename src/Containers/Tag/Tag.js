import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PostList from '../../Components/Posts/PostList/PostsList'
import { withSpinner } from '../../Components/lib/util';
import { error as Error } from '../../Components/lib/lib';
import { 
    sendRequestWithFallback, 
    getErrorMsgFromCode 
} from '../../Helper/handleFetchErrors';

class Tag extends Component {
    state = {
        posts: [],
        tagname: '',
        isLoading: true,
        hasErrors: false,
        errorCode: 200,
        errorMsg: ''
    };

    async componentDidMount(){
        const tagname = this.props.match.params.tagname;
        const { data, isSuccessful } = await sendRequestWithFallback(`/posts`, (code) => this.displayError(code));
        if(isSuccessful) this.loadPosts(data, tagname);
    };

    displayError(code) {
        const isLoading = false;
        const hasErrors = true;
        const errorCode = code;
        const errorMsg = getErrorMsgFromCode(code, 'Tag');
        this.setState({ isLoading, errorCode, hasErrors, errorMsg });
    }

    loadPosts(posts, tagname) {
        const postsWithTag = posts.filter(post => post.tags.find(tag => tag === tagname));
        if(postsWithTag.length <= 0) {
            this.displayError(404);
            return;
        }
        const isLoading = false;
        this.setState({ posts: postsWithTag, tagname, isLoading });
    };

    render() {
        const isLoading = this.state.isLoading;
        const hasErrors = this.state.hasErrors;
        return(
            hasErrors?
            <Error code={this.state.errorCode} msg={this.state.errorMsg}/>
            :
            withSpinner(
                <div className="Container">
                    <h1>Posts with tag "{this.state.tagname}"</h1>
                    <PostList posts={this.state.posts}/>
                </div>,
                isLoading
            )
        );
    };
};

export default withRouter(Tag);