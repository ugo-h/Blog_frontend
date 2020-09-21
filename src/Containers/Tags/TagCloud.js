import React, { Component } from 'react';
import './TagCloud.css';
import TagList from '../../Components/TagsList/TagList';

class TagCloud extends Component{
    state = {
        cloud:[]
    }
    async componentDidMount() {
        const res = await fetch('http://localhost:5000/tags');
        const body = await res.json();
        const tagNames = [];
        body.forEach((tag) => {
            tagNames.push(tag.name)
        })
        this.setState({cloud: tagNames});
    }

    render() {
     return(
         <div className="Tag-cloud">
            <TagList tags={this.state.cloud}/>
         </div>
     )   
    }
}

export default TagCloud;