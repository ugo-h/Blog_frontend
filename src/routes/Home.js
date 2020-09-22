import React from 'react';
import Posts from '../Components/PostsList/PostsList';

const home = (props) => (
    <main>
        <h1 className="Main__title">Welcome to Ugo's Blog</h1>
        <Posts/>
    </main>
);

export default home;