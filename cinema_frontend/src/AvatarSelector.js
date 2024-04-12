// AvatarSelector.js
import React, { useState } from 'react';
import './main.css'; // 引入CSS文件

const AvatarSelector = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarClick = (avatar) => {
    // 使用完整的圖片 URL
    const imageUrl = avatar;
    
    setSelectedAvatar(imageUrl);
  };

  return (
    <div>
      <div className="avatar-container">
        <div
          className={`large-avatar ${selectedAvatar ? 'selected' : ''}`}
          style={{ backgroundImage: `url(${selectedAvatar})` }}
        />
        <div className="small-avatars">
          <div
            className={`small-avatar ${selectedAvatar === 'avatar1' ? 'selected' : ''}`}
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1496304841270-2cb66cf766b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
            onClick={() => handleAvatarClick('https://images.unsplash.com/photo-1496304841270-2cb66cf766b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')}
          />
          <div
            className={`small-avatar ${selectedAvatar === 'avatar2' ? 'selected' : ''}`}
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1435783099294-283725c37230?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
            onClick={() => handleAvatarClick('https://images.unsplash.com/photo-1435783099294-283725c37230?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')}
          />
          <div
            className={`small-avatar ${selectedAvatar === 'avatar3' ? 'selected' : ''}`}
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1466853817435-05b43fe45b39?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
            onClick={() => handleAvatarClick('https://images.unsplash.com/photo-1466853817435-05b43fe45b39?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')}
          />
        </div>
      </div>
    </div>
  );
};

export default AvatarSelector;
