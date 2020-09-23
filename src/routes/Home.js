import React from 'react';
import { Link } from 'react-router-dom';
import Posts from '../Components/PostsList/PostsList';
import './Home.css'

const home = (props) => (
    <main className="Home">
        <div className="Home__header">
            <h1 className="Home__header__title">Welcome to Ugo's Blog</h1>
            {props.isAuth?
            <Link className="Call-to-action-btn" to="/posts/new">New Post</Link>
            : <Link  className="Call-to-action-btn" to="/signup">Join Us</Link>}
        </div>
        <Posts/>
    </main>
);

export default home;