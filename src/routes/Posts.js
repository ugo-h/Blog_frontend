import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import PostsList from '../Components/Posts/Posts';
import PostRoute from './PostRoute';
import Protected from '../Helper/Protected';

function Posts(props) { 
    let match = useRouteMatch();
    // console.log(props.userToken)
    return(
        <main>
        <Switch>
            <Route path={`${match.path}/new`}>
                <Protected isAuthenticated={props.userToken}>
                    <h1>Create new Post</h1>
                </Protected>
            </Route>
            <Route path={`${match.path}/:postId`}>
                <PostRoute/>
            </Route>
            <Route path={`${match.path}`}>
                {props.userToken?
                <Link to="/posts/new">New Post</Link>
                : <Link to="/signup">Create an account to post something</Link>}
                <h1>Look at this posts:</h1>
                <PostsList/>
            </Route>
        </Switch>
    </main>
    );
};

export default Posts;