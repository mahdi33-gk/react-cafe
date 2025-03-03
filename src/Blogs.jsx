import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [bolgs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div>
            <p> blogs Length: {bolgs.length}</p>
            <h1>Hey Blogs</h1>
        </div>
    );
};

export default Blogs;