import React from 'react';

const BlogPopup = ({ blog, onClose }) => {
  return (
    <div className="blog-popup-overlay">
      <div className="blog-popup">
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BlogPopup;
