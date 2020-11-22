import React, { Component } from 'react';
import PostsList from '../../Components/Posts/PostList/PostsList';
import {
    Paginator as Paginate, 
    serverUnavailableMsg as ServerUnavailableMsg
} from '../../Components/lib/lib';
import { createEqualSubarrays, sortByDate } from './logic';
import { sendRequestWithFallback } from '../../Helper/handleFetchErrors';
import { withSpinner } from '../../Components/lib/util';
import './Posts-Container.css';

class Posts extends Component {
    state = {
        postsSeparated: [[]],
        postsPerPage: 4,
        currentPage: 0,
        isLoading: true,
        isLoadedSuccessfully: true
    };
    async componentDidMount() {
        let { data, isSuccessful } = await sendRequestWithFallback('/posts', () => this.displayError());
        if(isSuccessful) this.loadPostsByPages(data);
    };
    
    displayError() {
        this.setState({ isLoadedSuccessfully:false, isLoading: false });
    };

    loadPostsByPages(data) {
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
        };
        this.setState({ currentPage: n });
        window.scrollTo(0, 0);
    };

    goToNextPage() {
        let currentPage = this.state.currentPage;
        const nOfPages = this.state.postsSeparated.length;
        if(currentPage >= nOfPages-1) {
            return;
        }
        currentPage++;
        this.setState({ currentPage });
        window.scrollTo(0, 0);
    };

    goToPreviousPage() {
        let currentPage = this.state.currentPage;
        if(currentPage < 1) {
            return;
        }
        currentPage--;
        this.setState({ currentPage });
        window.scrollTo(0, 0);
    };

    render() {
        const isLoading = this.state.isLoading;
        const isLoadedSuccessfully = this.state.isLoadedSuccessfully;
        return (
            <div className="Posts-Container">
                {isLoadedSuccessfully? '': <ServerUnavailableMsg/>}
                {withSpinner(this.renderPosts(), isLoading)}
                {this.hasMultiplePages() && this.renderPagination()}        
            </div>
        )
    };
    getPostsForPage() {
        return this.state.postsSeparated[this.state.currentPage];
    };
    hasMultiplePages() {
        return this.state.postsSeparated.length > 1;
    };
    renderPosts() {
        const hasPosts = !!this.state.postsSeparated[this.state.currentPage];
        return (
            hasPosts?
            <PostsList posts={this.getPostsForPage()}/>
            :<h2 style={{color: "#ccc"}}>There are no posts yet</h2>
        );
    };
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