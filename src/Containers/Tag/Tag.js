import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PostPreview from '../../Components/Posts/PostPreview/PostPreview';
import Spinner from '../../Components/Spinner/Spinner';
import Aux from '../../Helper/Auxillury';

class Tag extends Component {
    state = {
        posts: [],
        tagname: '',
        isLoading: true
    }
    componentDidMount(){
        const tagname = this.props.match.params.tagname;
        this.fetchData(tagname);
    };
    async fetchData(tagname) {
        const res = await fetch('http://localhost:5000/posts');
        const posts = await res.json();
        console.log(posts)
        const postsWithTag = posts.filter(post => post.tags.find(tag => tag===tagname))
        const isLoading = false;
        this.setState({ posts: postsWithTag, tagname, isLoading })
    };
    render() {
        const isLoading = this.state.isLoading;
        return(
            <Aux>
                <h1>Posts with tag "{this.state.tagname}":</h1>
                {isLoading? <div className="Post__spinner-container"><Spinner/></div> :
                    <ul className="Posts">
                        {this.state.posts.map((post, index) => <PostPreview key={index} id={post._id} date={post.date} title={post.title} tags={post.tags} content={post.content} author={post.author}/>)}
                    </ul>}
            </Aux>
           
        )
    }
}

export default withRouter(Tag);