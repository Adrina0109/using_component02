import React, { useState } from 'react';

function likebutton({ isLiked, onToggleLike }) {
  return (
    <button
      onClick={onToggleLike}
      style={{
        backgroundColor: isLiked ? 'red' : '#ccc',
        color: isLiked ? '#fff' : '#333',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      }}
    >
      {isLiked ? 'Liked' : 'Like'}
    </button>
  );
}

export default likebutton;
