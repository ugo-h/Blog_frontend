import React, { Component, Fragment } from 'react';
import {url} from '../../config';
import '../../Components/Posts/PostList/PostsList';
import PostsList from '../../Components/Posts/PostList/PostsList';
import Spinner from '../../Components/Spinner/Spinner';

class UserPosts extends Component {
    state = {
        posts: [],
        isLoadedSuccessfully: true,
        isLoading: false
    }
    async componentDidMount() {
        this.setState({ isLoading: true })
        const res = await fetch(`${url}/users/${this.props.id}`);
        if(res.status === 404) {
            this.setState({ isLoadedSuccessfully: false, isLoading: false })
            return;
        }
        const posts = await res.json();
        this.setState({ posts, isLoading: false });
    }
    handleSpinner(data) {
        const { isLoading } = this.state; 
        if(isLoading) {
            return (
                <Spinner/>
            )
        } else {
            return data
        }
    }
    render() {
        const { isLoadedSuccessfully } = this.state; 
        const name = this.props.id;
        return(    
           this.handleSpinner(
                    isLoadedSuccessfully? 
                    <Fragment>
                        <h2>Posts made by {name}</h2>
                        <PostsList posts={this.state.posts}/>
                    </Fragment>: '404 User Not Found'
           )                            
        )
    }
};

export default UserPosts;