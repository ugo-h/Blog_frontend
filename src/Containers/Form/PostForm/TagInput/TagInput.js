import React, { Component } from 'react';
import X from '../../../../Components/XButton/XButton';
import './TagInput.css';

//Вынести поле tags наружу
//function addTags 
//function removeTags
//в props
class TagInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagField: ''
        };
    }
    
    inputChangeHandler(ev) {
        let tagField = ev.target.value;
        this.setState({ tagField });
    }
    keyHandler(ev) {
        //remove tag on Backspace
        // --remove in setTimeout
        //  to allow animation play
        if(ev.key=== 'Backspace'&& !this.state.tagField.trim()) {
            this.props.removeTag();
        //create tag on Enter
        //--maybe also create tags with animation to provide smooth fetching
        } else if(ev.key==='Enter' && this.state.tagField.trim()){            
            let tagField = this.state.tagField;
            if(!this.props.tagsArray.includes(tagField)) {
                this.props.addTag(tagField.toLocaleLowerCase());
            }
            tagField = '';
            this.setState({ tagField });
        
            
        }
    }
    async sendPostRequest(data, route) {
        const res = await fetch(`http://localhost:5000/tags/${route}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${this.props.userToken}`
            },    
            body: JSON.stringify(data)
        });
        return res;
    }

    render() {
        return(
            <div>
                <ul className="Tag-array">
                    {this.props.tagsArray.map((tag, index) => <li className="Tag-array__element" key={index}>{ tag }<X click={this.props.removeTag}/></li>)}
                    <input className="Tag__input" 
                    form="none" 
                    size="1"
                    value={this.state.tagField} 
                    onChange={this.inputChangeHandler.bind(this)}
                    onKeyDown={this.keyHandler.bind(this)}
                    />
                </ul>
            </div>
        )
    }
}

export default TagInput;