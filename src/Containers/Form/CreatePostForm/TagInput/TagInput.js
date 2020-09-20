import React, { Component } from 'react';
import X from '../../../../Components/XButton/XButton';
import './TagInput.css';

//Вынести поле tags наружу
//function addTags 
//function removeTags
//в props
class TagInput extends Component {
    state = {
        tags:[],
        tagField: ''
    };
    inputChangeHandler(ev) {
        const tags = [...this.state.tags];
        let tagField = ev.target.value;
      
        this.setState({ tagField, tags });
    }
    keyHandler(ev) {
        //remove tag on Backspace
        // --remove in setTimeout
        //  to allow animation play
        if(ev.key=== 'Backspace'&& !this.state.tagField) {
            const tags = [...this.state.tags];
            tags.pop();
            this.setState({ tags })
        //create tag on Enter
        //--maybe also create tags with animation to provide smooth fetching
        }else if(ev.key==='Enter' &&this.state.tagField){            
            let tagField = this.state.tagField;
            const tags = [...this.state.tags]; 
            tags.push(tagField);
            tagField = '';
            this.setState({ tags, tagField })
        }
    }
    render() {
        return(
            <div>
                {/* <div className="input-container"> */}
                    <ul className="Tag-array">
                        {this.state.tags.map((tag, index) => <li className="Tag-array__element" key={index}>{ tag }<X/></li>)}
                        {/* <div className="Tag__input">a</div> */}
                        <input className="Tag__input" 
                        size="1"
                        value={this.state.tagField} 
                        onChange={this.inputChangeHandler.bind(this)}
                        onKeyDown={this.keyHandler.bind(this)}
                        />
                    </ul>
                {/* </div> */}
            </div>
        )
    }
}

export default TagInput;