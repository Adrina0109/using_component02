import React from 'react';
import LikeButton from './likebutton'; 

function PostCard({ post, onToggleLike }) {
  return (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '10px',
        margin: '10px 0',
        padding: '15px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img
          src={post.profileImage}
          alt={post.username}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            marginRight: '10px',
          }}
        />
        <h3 style={{ fontSize: '1.2rem', color: '#333' }}>{post.username}</h3>
      </div>
      <p style={{ color: '#555', marginBottom: '15px' }}>{post.content}</p>
      <LikeButton isLiked={post.isLiked} onToggleLike={() => onToggleLike(post.id)} />
    </div>
  );
}

export default PostCard;
