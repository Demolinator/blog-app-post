import React, { useState } from 'react';

export default function Dashboard() {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogBody, setBlogBody] = useState('');

  const handlePostBlog = async () => {
  
    alert('Blog post successful!');
    setBlogTitle('');
    setBlogBody('');
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
          <input
            type="text"
            placeholder="Blog Title"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            className="block w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
          <textarea
            placeholder="Blog Body"
            value={blogBody}
            onChange={(e) => setBlogBody(e.target.value)}
            className="block w-full mt-4 px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
          <button
            onClick={handlePostBlog}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:ring focus:ring-opacity-50"
          >
            Publish Blog
          </button>
        </div>
      </div>
    </div>
  );
}
