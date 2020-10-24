import React from 'react';
import { Link } from 'react-router-dom';
import Posts from '../Containers/Posts/Posts';
import './Home.css'
import withAuth from '../Context/authHoc';

const home = ({context}) => (
    <main className="Home Util__main Util__card">
        <div className="Home__header">
            <h1 className="Home__header__title">Welcome to Ugo's Blog</h1>
            {!!context.authToken?
            <Link className="Call-to-action-btn" to="/posts/new">New Post</Link>
            : <Link  className="Call-to-action-btn" to="/auth/signup">Join Us</Link>}
        </div>
        <Posts/>
    </main>
);

export default withAuth(home);