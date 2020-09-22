import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TagCloud from "../../Containers/Tags/TagCloud";
import Tag from './Tag';



function Tags() {
    return(
        <main className="Home">
            <Switch>
               
                <Route path="/tags/:id"> 
                    <Tag/>
                </Route>
                <Route path="/tags">
                    <h1>Tags</h1>
                    <TagCloud/>
                </Route>
            </Switch>
        </main>
    )
}

export default Tags;