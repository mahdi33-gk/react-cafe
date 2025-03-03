import React, { useEffect, useState } from 'react';
import Blog from './Blog';
const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='md:w-2/3 mx-5'>
            <p> blogs Length: {blogs.length}</p>
            {
                blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
            }
        </div>
    );
};

export default Blogs;