import React, { useState, useEffect } from 'react';
import './Blog.css'; // Import CSS for card and popup styling

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);        // State for storing blogs
  const [selectedBlog, setSelectedBlog] = useState(null); // State for selected blog popup

  // Fetch blog data from blog.json on component mount
  useEffect(() => {
    fetch('src/blog.json')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error fetching blog data:', error));
  }, []);

  // Function to handle card click and show popup
  const openBlogPopup = (blog) => {
    setSelectedBlog(blog);
  };

  // Function to close the popup
  const closePopup = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blog-list main-content">
      <h2>My Blogs</h2>
      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card" onClick={() => openBlogPopup(blog)}>
            <h3>{blog.title}</h3>
            <p>{blog.content.substring(0, 100)}...</p> {/* Short preview */}
          </div>
        ))}
      </div>

      {/* Blog Popup */}
      {selectedBlog && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>{selectedBlog.title}</h2>
            <p>{selectedBlog.content}</p>
            <button className="close-popup" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogList;
