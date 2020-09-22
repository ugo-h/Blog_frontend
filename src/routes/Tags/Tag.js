import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PostPreview from '../../Components/PostsList/Post/PostPreview';
import Aux from '../../Helper/Auxillury';

class Tag extends Component {
    state = {
        posts: [],
        id: ''
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        this.fetchData(id);
    };
    async fetchData(id) {
        const res = await fetch('http://localhost:5000/posts');
        const posts = await res.json();
        const postsWithTag = posts.filter(post => post.tags.find(tag => tag===id))
        this.setState({ posts: postsWithTag, id })
    };
    render() {
        return(
            <Aux>
                <h1>Posts with tag "{this.state.id}":</h1>
                <ul>
                    {this.state.posts.map((post, index) => <PostPreview key={index} id={post.id} date={post.date} title={post.title} tags={post.tags} content={post.content} author={post.author}/>)}
                </ul>
            </Aux>
        )
    }
}

export default withRouter(Tag);