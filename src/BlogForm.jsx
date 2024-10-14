import React, { useState } from 'react';

const BlogForm = ({ addBlog }) => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now(), // Unique id for each blog
      title,
      summary,
      content,
    };
    addBlog(newBlog);
    setTitle('');
    setSummary('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Blog</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Add Blog</button>
    </form>
  );
};

export default BlogForm;
