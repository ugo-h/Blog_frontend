import React, { Component } from 'react';
import './TagCloud.css';
import TagList from '../../Components/TagsList/TagList';
import Spinner from '../../Components/Spinner/Spinner';
import ErrorMsg from '../../Components/ServerUnvailableMsg/ServerUnavailableMsg';

class TagCloud extends Component{
    state = {
        cloud:[],
        isLoading: true,
        isLoadedSuccessfully: true
    };
    async componentDidMount() {
        let res;
        try{
            res = await fetch('http://localhost:5000/api/tags');
        } catch(error) {
            this.setState({ isLoading: false, isLoadedSuccessfully: false });
            return;
        }
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
        const isLoadedSuccessfully = this.state.isLoadedSuccessfully;
     return(
         <div className="Tag-cloud">
             {isLoadedSuccessfully? '': <ErrorMsg/>}
             {
                isLoading?<div className="Tag-cloud__spinner-container"><Spinner/></div> :
                <TagList tags={this.state.cloud}/>
             }
         </div>
     )   
    }
}

export default TagCloud;