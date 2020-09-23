import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import PostRoute from './PostRoute';
import PostNew from './PostNew';
import { Protected } from '../../Helper/Protected';

function Posts(props) { 
    let match = useRouteMatch();
    return(
        <main className="Home">
        <Switch>
            <Route path={`${match.path}/new`}>
                <Protected isAuth={props.isAuth}>
                    <PostNew userToken={props.isAuth}/>  
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