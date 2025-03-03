import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [bolgs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='md:w-2/3 mx-5'>
            <p> blogs Length: {bolgs.length}</p>
            
        </div>
    );
};

export default Blogs;