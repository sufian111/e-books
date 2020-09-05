import React, { useState, useEffect } from 'react';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';

const Home = () => {

    const [posts,setPosts] = useState([])
    
    useEffect(() =>{
        fetch ('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])

    
    return (
        <div>
            <Header></Header>
            {
                posts.map(post =><Blog key={post.id} post={post}></Blog>)
            }
        </div>
    );
};

export default Home;