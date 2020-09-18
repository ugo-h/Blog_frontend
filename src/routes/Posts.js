import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import PostsList from '../Components/Posts/Posts';
import PostRoute from './PostRoute';

function Posts(props) { 
    let match = useRouteMatch();
    return(
        <main>
        <Switch>
            <Route path={`${match.path}/new`}>
                <h1>Create new Post</h1>
            </Route>
            <Route path={`${match.path}/:postId`}>
                <PostRoute/>
            </Route>
            <Route path={`${match.path}`}>
                <Link to="/posts/new">New Post</Link>
                <h1>Look at this posts:</h1>
                <PostsList/>
            </Route>
        </Switch>
    </main>
    );
};

export default Posts;