import React, { Component } from 'react';
import './TagCloud.css';
import TagList from '../../Components/TagsList/TagList';
import { withSpinner } from '../../Components/lib/util';
import { sendRequestWithFallback } from '../../Helper/handleFetchErrors';
import ErrorMsg from '../../Components/ServerUnvailableMsg/ServerUnavailableMsg';

class TagCloud extends Component{
    state = {
        cloud:[],
        isLoading: true,
        isLoadedSuccessfully: true
    };
    async componentDidMount() {
        const { data, isSuccessful } = await sendRequestWithFallback('/tags', (code) => this.displatErrors(code))
        if(isSuccessful) this.loadTags(data);
    };
    
    loadTags(data) {
        const tagNames = [];
        data.forEach((tag) => {
            tagNames.push(tag.name)
        })
        const isLoading = false;
        this.setState({ cloud: tagNames, isLoading });
    };

    displayErrors(code) {
        this.setState({isLoading: false, isLoadedSuccessfully: false})
    }
    render() {
        const isLoading = this.state.isLoading;
        const isLoadedSuccessfully = this.state.isLoadedSuccessfully;
     return(
         <div className="Tag-cloud">
             {isLoadedSuccessfully? '': <ErrorMsg/>}
             {
                withSpinner(<TagList tags={this.state.cloud}/>, isLoading) 
             }
         </div>
     )   
    }
}

export default TagCloud;