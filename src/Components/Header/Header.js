import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import MenuWrapper from '../../Containers/SliderMenuWrapper/SliderMenuWrapper';

const header = (props) => (
    <header className="Header">
        <nav className="Header__nav">
            <ul className="Header__nav__list Util__list--horizontal">
                <li className="Util__list__el">
                <Link to="/">Home</Link>
                </li>
                <li className="Util__list__el">
                <Link  to="/tags">Tags</Link>
                </li>
            </ul> 
            <ul className="Header__nav__list Util__list--horizontal">
            {props.isAuth?<li className="Util__list__el"><Link to="/auth/signout">Sign Out</Link></li>
            :<li className="Util__list__el"><Link to="/auth/signin">Sign In</Link></li>}
            </ul> 
        </nav>
        <MenuWrapper menu={[
            props.isAuth?<Link to="/auth/signout">Sign Out</Link>
            :<Link to="/auth/signup">Sign Up</Link>,

            <Link to="/">Home</Link>,
            <Link to="/tags">Tags</Link>
        ]}/>
       
       
    </header>
)

export default header;