import React, { Component } from 'react';

class TagCloud extends Component{
    state = {
        cloud:[]
    }
    async componentDidMount() {
        const res = await fetch('http://localhost:5000/tags');
        const body = await res.json();
        
        this.setState({cloud: body});
    }

    render() {
     return(
         <div>
             {this.state.cloud.map((tag, index) => <div key={index}>{tag.name}</div>)}
         </div>
     )   
    }
}

export default TagCloud;