import React, { Component } from 'react';
import './Posts.css';
import PostPreview from './Post/PostPreview';
import Paginate from '../../Helper/Paginator/Paginator';
import Aux from '../../Helper/Auxillury';

function createEqualSubarrays(arr, numOfElements) {
    const n = Math.ceil(arr.length/numOfElements);
    const newArr = [];
    for(let i = 0; i< n; i++) {
        const subArr = []
        for(let j = i*numOfElements; j < i*numOfElements+numOfElements; j++) {
            if(arr[j]) {
                subArr.push(arr[j])
            }
        }
        newArr.push(subArr)
    }       
    return newArr;
}

class Posts extends Component {
    state = {
        postsSeparated: [[]],
        postsPerPage: 4,
        currentPage: 0
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
    async componentDidMount() {
        const res = await fetch('http://localhost:5000/posts');
        const data = await res.json();
        const postsSorted = this.sortByDate(data)
        const postsSeparated = this.separatePostsPerPages(postsSorted);
        this.setState({ postsSeparated })
    };
    sortByDate(posts) {
        posts.sort((a, b) =>{
            if(a.date < b.date) {
                return 1
            }
            if(a.date > b.date) {
                return -1
            }
            return 0;
        });
        return posts;
    }   
    render() {
        return (
            <Aux>
            <ul className="Posts">
                {this.state.postsSeparated[this.state.currentPage].map(post => (
                    <PostPreview 
                        key={post.id}
                        id={post.id}
                        title={post.title} 
                        author={post.author}
                        date={post.date}
                        tags={post.tags}
                        content={post.content}/>
                    ))}
            </ul>
            <Paginate
             pages={this.state.postsSeparated}
             currentPage={this.state.currentPage}
             goToNextPage={this.goToNextPage.bind(this)}
             goToPreviousPage={this.goToPreviousPage.bind(this)}
             goToPage={this.goToPage.bind(this)}
            />
            </Aux>
        )
    };
};

export default Posts;