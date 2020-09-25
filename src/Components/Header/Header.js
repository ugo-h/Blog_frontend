import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import Aux from '../../Helper/Auxillury';

const header = (props) => (
    <header className="Header">
        <nav className="Header__nav--center">
            <ul>
                 <li className="Header__nav__el">
                    <Link to="/">Home</Link>
                </li>
                <li className="Header__nav__el">
                    <Link to="/tags">Tags</Link>
                </li>
            </ul>
        </nav>
        <nav className="Header__nav--right">
            <ul>
                
                    {props.isAuth?
                    <li className="Header__nav__el">
                    <Link to="/signout">Sign Out</Link>
                    </li>
                    :<Aux>
                        <li className="Header__nav__el">
                        <Link to="/signin">Sign In</Link>
                        </li>
                        <li className="Header__nav__el">
                        <Link className="Header__nav__btn" to="/signup">Sign Up</Link>
                        </li>                       
                    </Aux>}
                
            </ul>
        </nav>
    </header>
)

export default header;