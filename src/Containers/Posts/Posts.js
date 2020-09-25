import React, { Component } from 'react';
import PostsList from '../../Components/Posts/PostList/PostsList';
import Paginate from '../../Helper/Paginator/Paginator';
import Aux from '../../Helper/Auxillury';
import Spinner from '../../Components/Spinner/Spinner';

import {createEqualSubarrays, sortByDate} from './logic';


class Posts extends Component {
    state = {
        postsSeparated: [[]],
        postsPerPage: 4,
        currentPage: 0,
        isLoading: true
    };
    async componentDidMount() {
        const res = await fetch('http://localhost:5000/posts');
        const data = await res.json();
        if(!data) {
            return;
        }
        console.log(data);
        const postsSorted = sortByDate(data)
        const postsSeparated = this.separatePostsPerPages(postsSorted);
        this.setState({ postsSeparated, isLoading: false })
    };
    

    separatePostsPerPages(posts) {
        const postsSeparated = createEqualSubarrays(posts, this.state.postsPerPage);
        return postsSeparated;
    }

    goToPage(n) {
        const nOfPages = this.state.postsSeparated.length;
        if(n > nOfPages-1 || n < 0 || n === this.state.currentPage) {
            return;
        }
        this.setState({currentPage: n})
        window.scrollTo(0, 0);

    }

    goToNextPage() {
        let currentPage = this.state.currentPage;
        const nOfPages = this.state.postsSeparated.length;
        if(currentPage >= nOfPages-1) {
            return;
        }
        currentPage++;
        this.setState({currentPage})
        window.scrollTo(0, 0);
    }
    goToPreviousPage() {
        let currentPage = this.state.currentPage;
        if(currentPage < 1) {
            return;
        }
        currentPage--;
        this.setState({currentPage})
        window.scrollTo(0, 0);
    }

    render() {
        const isLoading = this.state.isLoading;
        const hasPosts = !!this.state.postsSeparated[this.state.currentPage];
        return (
            <Aux>
                {
                    isLoading? 
                    <Spinner /> :
                    hasPosts?
                    <PostsList posts={this.getPostsForPage()}/>
                    :<h2 style={{color: "#ccc"}}>There are no posts yet</h2>
                }
                {
                    this.hasMultiplePages()?
                    this.renderPagination()
                    :''
                }        
            </Aux>
        )
    };

    hasPosts() {
        return !!this.state.postsSeparated[this.state.currentPage];
    }
    getPostsForPage() {
        return this.state.postsSeparated[this.state.currentPage];
    }
    hasMultiplePages() {
        return this.state.postsSeparated.length > 1;
    }
    renderPagination() {
        return(
            <Paginate
                pages={this.state.postsSeparated}
                currentPage={this.state.currentPage}
                goToNextPage={this.goToNextPage.bind(this)}
                goToPreviousPage={this.goToPreviousPage.bind(this)}
                goToPage={this.goToPage.bind(this)}
            />
        )
    }
};

export default Posts;