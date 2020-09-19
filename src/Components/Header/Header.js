import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

const header = (props) => (
    <header className="Header">
        <nav className="Header__nav--center">
            <ul>
                 <li className="Header__nav__el">
                    <Link to="/">Home</Link>
                </li>
                <li className="Header__nav__el">
                    <Link to="/posts">Posts</Link>
                </li>
            </ul>
        </nav>
        <nav className="Header__nav--right">
            <ul>
                 {/* <li className="Header__nav__el">
                    <Link to="/signup">Sign Up</Link>
                </li> */}
                <li className="Header__nav__el">
                    {props.isAuthenticated?<Link to="/signout" onClick={()=>props.signOutHandler()}>Sign Out</Link>:<Link to="/signin">Sign In</Link>}
                </li>
            </ul>
        </nav>
    </header>
)

export default header;