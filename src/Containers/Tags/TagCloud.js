import React, { Component } from 'react';
import './TagCloud.css';
import TagList from '../../Components/TagsList/TagList';
import Spinner from '../../Components/Spinner/Spinner';

class TagCloud extends Component{
    state = {
        cloud:[],
        isLoading: true
    };
    async componentDidMount() {
        const res = await fetch('http://localhost:5000/tags');
        const body = await res.json();
        const tagNames = [];
        body.forEach((tag) => {
            tagNames.push(tag.name)
        })
        const isLoading = false;
        this.setState({ cloud: tagNames, isLoading });
    }

    render() {
        const isLoading = this.state.isLoading;
     return(
         <div className="Tag-cloud">
             {
                isLoading?<Spinner/> :
                <TagList tags={this.state.cloud}/>
             }
         </div>
     )   
    }
}

export default TagCloud;