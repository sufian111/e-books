import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const All = () => {
    
    const [posts,setPosts] = useState([])

    useEffect
    (() =>{
        fetch ('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])

    return (
        <div>
            {
                posts.map(post=><Blog key={post.id} post={post}></Blog>)
            }
        </div>
    );
};

export default All;