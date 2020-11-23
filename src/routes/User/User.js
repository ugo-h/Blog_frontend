import React from 'react';
import { useParams } from 'react-router-dom';
import UserPosts from '../../Containers/UserPosts/UserPosts';

function User() {
    const { name } = useParams();
    return(
        <main className="Home Util__main Util__card">
            <UserPosts id={name}/>
        </main>
    )
}

export default User;