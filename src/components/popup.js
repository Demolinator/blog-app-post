import React from 'react';

const Popup = ({ message, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <button className="popup-close-button" onClick={onClose}>
          &#10006;
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Popup;
