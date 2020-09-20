import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TagCloud from "../../Containers/Tags/TagCloud";
import Tag from './Tag';
import Aux from '../../Helper/Auxillury';

function Tags() {
    return(
        <Aux>
            <Switch>
                
                <Route path="/tags/:id"> 
                    <Tag/>
                </Route>
                <Route path="/tags">
                    <h2>Tags</h2>
                    <TagCloud/>
                </Route>
            </Switch>
        </Aux>
    )
}

export default Tags;