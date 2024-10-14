import React from 'react';

const BlogCard = ({ blog, openBlogPopup }) => {
  return (
    <div className="blog-card" onClick={() => openBlogPopup(blog)}>
      <h3>{blog.title}</h3>
      <p>{blog.summary}</p>
    </div>
  );
};

export default BlogCard;
