import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

const header = (props) => (
    <header className="Header">

        <nav className="Header__nav--right">
            <ul>
                <li className="Header__nav__el">
                    <Link to="/">Home</Link>
                </li>
                <li className="Header__nav__el">
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li className="Header__nav__el">
                    <Link to="/signin">Sign In</Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default header;