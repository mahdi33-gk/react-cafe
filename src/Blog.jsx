import React from "react";
import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleBookmarks,handlertiming }) => {
  const { id, title, coverImg, readingTime, author, authorPic, hashtags } = blog;
  return (
    <div className="border-b-2 pb-3 pt-4">
      
      <img className="w-full" src={coverImg} alt="" />
      
      <div className="flex justify-between py-5 items-center">
        <div className="flex gap-2 items-center">
          <img className="w-14 rounded-full" src={authorPic} alt="" />
          
          <div className="flex flex-col gap-y-1">
            <h1 className="text-2xl">{author}</h1>
            <p className="text-[15px] text-gray-500">Mar 14 (4 Days ago)</p>
          </div>
        </div>
        <div className="flex gap-1">
          <h1 className="text-gray-600">{readingTime} min read</h1>
          <button onClick={()=> handleBookmarks(blog)} className="text-2xl "><CiBookmark></CiBookmark></button>
        </div>
      </div>
      <h2 className="text-4xl font-bold pb-2">{title}</h2>
      <p className="text-[16px] py-2 text-gray-500">{hashtags}</p>
      <button onClick={()=>handlertiming(id,readingTime)} className="underline py-2 text-xl font-semibold text-blue-500">Mark as read</button>
      
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
