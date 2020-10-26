import React, {Component} from 'react';
import Menu from '../../Components/Menu/Menu';
class SliderMenuWrapper extends Component{
    state = {
        showMenu: false
    };
    toggleMenuHandler = this.toggleMenuHandler.bind(this);
    toggleMenuHandler() {
        this.setState({showMenu: !this.state.showMenu})
    }

    render(){
        const showMenu = this.state.showMenu;
        return(
            <div className="slider-menu-wrapper">
                <Menu menu={this.props.menu} toggleHandler={this.toggleMenuHandler} show={showMenu}/>
                <button className="hamburger-btn" onClick={this.toggleMenuHandler}>
                    <span className="hamburger-btn__inner"></span>
                    <span className="hamburger-btn__inner"></span>
                    <span className="hamburger-btn__inner"></span>
                </button>
            </div>
        )
    };
};

export default SliderMenuWrapper;