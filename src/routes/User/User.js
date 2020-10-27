import React from 'react';
import { useParams } from 'react-router-dom';
import UserPosts from '../../Containers/UserPosts/UserPosts';

function User() {
    const { name } = useParams();
    return(
        <div className="Util__main Util__card">
            <UserPosts id={name}/>
        </div>
    )
}

export default User;