import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import { getSession } from 'next-auth/react';
import users from '@/data/users.json';
import Popup from '../components/popup'; 

export default function Profile({ user }) {
  const [isCreatingBlog, setIsCreatingBlog] = useState(false);
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const showPopupMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);

    setTimeout(() => {
      hidePopup();
    }, 3000);
  };

  const hidePopup = () => {
    setShowPopup(false);
    setPopupMessage('');
  };

  const handleCreateBlog = () => {
    const newBlog = {
      title: blogTitle,
      content: blogContent,
      date: new Date().toLocaleDateString(),
    };

    setBlogs([...blogs, newBlog]);
    setBlogTitle('');
    setBlogContent('');
    setIsCreatingBlog(false);
    showPopupMessage('Blog published');
  };

  const handleEditBlog = (index) => {
    const editedBlog = blogs[index];
    setEditIndex(index);
    setBlogTitle(editedBlog.title);
    setBlogContent(editedBlog.content);
    showPopupMessage('Edit opened');
  };

  const closeForm = () => {
    setBlogTitle('');
    setBlogContent('');
    setIsCreatingBlog(false);
  };

  const handleDeleteBlog = (index) => {
    setEditIndex(null); 
    setShowDeleteConfirmation(true);
    setDeleteIndex(index); 
  };

  const confirmDelete = () => {
    setBlogs((prevBlogs) => {
      const updatedBlogs = [...prevBlogs];
      updatedBlogs.splice(deleteIndex, 1);
      return updatedBlogs;
    });

    setShowDeleteConfirmation(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleSaveEdit = () => {
    if (editIndex !== null) {
      const updatedBlogs = [...blogs];
      updatedBlogs[editIndex] = {
        title: blogTitle,
        content: blogContent,
        date: new Date().toLocaleDateString(),
      };
      setBlogs(updatedBlogs);
      setEditIndex(null);
      setBlogTitle('');
      setBlogContent('');
      showPopupMessage('Blog edited');
    }
  };

  return (
    <main className="container">
      <div className="header">
        <div className="button-container">
          <Link href="/auth/login" passHref>
            <button className="button">Sign Out</button>
          </Link>
        </div>
      </div>
      <div className="user-profile">
        <div className="user-image">
          <img src="/icon.jpg" alt="User Image" />
        </div>
        <h1 className="profile-heading">
          Welcome, {user ? `${user.firstname} ${user.lastname}` : 'User'}!
        </h1>
        {user && (
          <>
            <p className="profile-info">Email: {user.email}</p>
          </>
        )}
      </div>
      {isCreatingBlog ? (
        <div className="blog-form">
          <div className="form-header">
            <h2>Create a Blog</h2>
            <button className="close-button" onClick={closeForm}>
              &#10006;
            </button>
          </div>
          <input
            type="text"
            placeholder="Title"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
          />
          <textarea
            placeholder="Content"
            value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}
          />
          {editIndex === null ? (
            <button className="create-blog-button" onClick={handleCreateBlog}>
              Create Blog
            </button>
          ) : (
            <button className="create-blog-button" onClick={handleSaveEdit}>
              Save Edit
            </button>
          )}
        </div>
      ) : (
        <button className="create-blog-button-initial" onClick={() => setIsCreatingBlog(true)}>
          Create a Blog
        </button>
      )}

      {showPopup && (
        <Popup message={popupMessage} onClose={hidePopup} />
      )}

      <h2 className="appointments-heading">Your Blogs</h2>
      <ul className="appointments-list">
        {blogs.map((blog, index) => (
          <li key={index} className="appointment-item">
            <div>
              <p className="appointment-details">
                <strong>Date:</strong> {blog.date}
              </p>
              <p className="appointment-details">
                <strong>Title:</strong> {blog.title}
              </p>
            </div>
            <p className="appointment-details">
              <strong>Content:</strong>
            </p>
            <p className="appointment-details">{blog.content}</p>
            <div className="blog-actions">
              {showDeleteConfirmation ? (
                <div className="popup-container">
                  <div className="popup-content">
                    <button className="popup-close-button" onClick={cancelDelete}>
                      &#10006;
                    </button>
                    <p>Are you sure you want to delete this blog?</p>
                    <button className="delete-blog-button" onClick={confirmDelete}>
                      Delete
                    </button>
                    <button className="cancel-delete-button" onClick={cancelDelete}>
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="blog-actions">
                  <button className="edit-button" onClick={() => handleEditBlog(index)}>
                    Edit
                  </button>
                  <button className="delete-button" onClick={() => handleDeleteBlog(index)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  const user = users[0];

  return {
    props: {
      user,
    },
  };
}
