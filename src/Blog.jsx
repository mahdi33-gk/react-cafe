import React from 'react';
import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const{title, coverImg, readingTime, author, authorPic, hashtags} = blog;
    return (
        <div>
            <h2>Title:{title}</h2>
            <img src={coverImg} alt="" />
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;