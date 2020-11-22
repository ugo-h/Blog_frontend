import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TagCloud from "../../Containers/Tags/TagCloud";
import Tag from '../../Containers/Tag/Tag';

function Tags() {
    return(
        <main className="Home Util__main Util__card">
            <Switch>
                <Route path="/tags/:tagname"> 
                    <Tag/>
                </Route>
                <Route path="/tags">
                    <h1 className="title">Tags</h1>
                    <TagCloud/>
                </Route>
            </Switch>
        </main>
    )
}

export default Tags;