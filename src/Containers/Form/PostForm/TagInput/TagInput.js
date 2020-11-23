import React, { Component } from 'react';
import X from '../../../../Components/XButton/XButton';
import './TagInput.css';

class TagInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagField: ''
        };
    };
    
    inputChangeHandler(ev) {
        let tagField = ev.target.value;
        this.setState({ tagField });
    };

    keyHandler(ev) {
        //remove tag on Backspace
        // --remove in setTimeout
        //  to allow animation play
        if(ev.key=== 'Backspace'&& !this.state.tagField.trim()) {
            this.props.removeTag();
        //create tag on Enter
        //--maybe also create tags with animation to provide smooth fetching
        } else if(ev.key==='Enter'){            
            this.saveTag();
        };
    };

    saveTag() {
        let tagField = this.state.tagField;
        if(!this.props.tagsArray.includes(tagField) && tagField.trim()) {
            this.props.addTag(tagField.toLocaleLowerCase());
        }
        tagField = '';
        this.setState({ tagField });  
    };

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
                    onBlur={this.saveTag.bind(this)}
                    />
                </ul>
            </div>
        );
    };
};

export default TagInput;