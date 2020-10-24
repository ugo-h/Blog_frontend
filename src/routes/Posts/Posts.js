import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import PostRoute from './PostRoute';
import PostNew from './PostNew';
import { Protected } from '../../Helper/Protected';

function Posts() { 
    let match = useRouteMatch();
    return(
        <main className="Home Util__main Util__card">
        <Switch>
            <Route path={`${match.path}/new`}>
                <Protected>
                    <PostNew/>  
                </Protected>   
            </Route>
            <Route path={`${match.path}/:postId`}>
                <PostRoute/>
            </Route>
        </Switch>
    </main>
    );
};

export default Posts;