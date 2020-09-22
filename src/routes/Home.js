import React from 'react';
import Posts from '../Components/PostsList/PostsList';
import './Home.css'

const home = (props) => (
    <main className="Home">
        <h1 className="Main__title">Welcome to Ugo's Blog</h1>
        <Posts/>
    </main>
);

export default home;