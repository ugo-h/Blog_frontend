import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Tag(props) {
    const { id } = useParams();
    return(
        <h2>Posts with tag {id}</h2>
    )
}

export default Tag;