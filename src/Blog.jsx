import React from "react";
import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { title, coverImg, readingTime, author, authorPic, hashtags } = blog;
  return (
    <div>
      
      <img src={coverImg} alt="" />
      
      <div className="flex justify-between py-5 items-center">
        <div className="flex gap-2 items-center">
          <img className="w-14 rounded-full" src={authorPic} alt="" />
          
          <div className="flex flex-col gap-y-1">
            <h1 className="text-2xl">{author}</h1>
            <p className="text-[15px] text-gray-500">Mar 14 (4 Days ago)</p>
          </div>
        </div>
        <div>
          <h1>{readingTime} min read</h1>
        </div>
      </div>
      <h2 className="text-4xl font-bold pb-2">{title}</h2>
      <p className="text-[16px] text-gray-500">{hashtags}</p>
      
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
