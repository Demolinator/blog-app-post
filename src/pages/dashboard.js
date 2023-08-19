import { getSession } from "next-auth/react";
import React, { useState } from 'react';

export default function Profile({ session }) {

  const [blogTitle, setBlogTitle] = useState('');
  const [blogBody, setBlogBody] = useState('');
  const [publishedBlogs, setPublishedBlogs] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handlePostBlog = async () => {



    const newBlog = {
      title: blogTitle,
      body: blogBody,
      timestamp: new Date().toISOString() 
    };
    setPublishedBlogs([...publishedBlogs, newBlog]);


    setBlogTitle('');
    setBlogBody('');
  };

  const handleEditBlog = (index) => {
    setEditIndex(index);

    setBlogTitle(publishedBlogs[index].title);
    setBlogBody(publishedBlogs[index].body);
  };

  const handleSaveEdit = (index) => {

    const updatedBlogs = [...publishedBlogs];
    updatedBlogs[index] = { title: blogTitle, body: blogBody, timestamp: updatedBlogs[index].timestamp };
    setPublishedBlogs(updatedBlogs);


    setBlogTitle('');
    setBlogBody('');
    setEditIndex(-1);
  };

  const handleCancelEdit = () => {

    setBlogTitle('');
    setBlogBody('');
    setEditIndex(-1);
  };

  const handleDeleteBlog = (index) => {

    const updatedBlogs = publishedBlogs.filter((_, i) => i !== index);
    setPublishedBlogs(updatedBlogs);
  };


  const currentHour = new Date().getHours();
  let greeting = '';

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }


  const profilePictureUrl = session.user.image || '';

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Your Dashboard Page
          </h2>
          <div className="mt-4">
            <img src={profilePictureUrl} alt="Profile Picture" className="w-20 h-20 rounded-full mx-auto" />
            <p className="text-center mt-2">{greeting}, {session.user.name}!</p>
          </div>
        </div>
      </div>
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
        {publishedBlogs.map((blog, index) => (
          <div key={index} className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow m-2">
            <div className="p-4 flex">
              <div className="flex-grow">
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={blogTitle}
                      onChange={(e) => setBlogTitle(e.target.value)}
                      className="border rounded px-2 py-1 mb-2 w-full"
                      placeholder="Edit Title"
                    />
                    <textarea
                      value={blogBody}
                      onChange={(e) => setBlogBody(e.target.value)}
                      className="border rounded px-2 py-1 w-full"
                      placeholder="Edit Body"
                    />
                    <div className="mt-2 flex justify-end">
                      <button className="text-green-600 hover:underline" onClick={() => handleSaveEdit(index)}>
                        Save
                      </button>
                      <button className="text-gray-600 hover:underline ml-4" onClick={handleCancelEdit}>
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-medium text-gray-900">{blog.title}</h3>
                    <p className="mt-1 text-gray-500">{blog.body}</p>
                    <p className="mt-1 text-gray-500">Published on: {new Date(blog.timestamp).toLocaleString()}</p>
                    <div className="mt-2 flex justify-end">
                      <button className="text-blue-600 hover:underline" onClick={() => handleEditBlog(index)}>
                        Edit
                      </button>
                      <button className="text-red-600 hover:underline ml-4" onClick={() => handleDeleteBlog(index)}>
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

