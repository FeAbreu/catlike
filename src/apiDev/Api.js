import React from 'react';
import UserPost from './endpoints/UserPost';
import TokenPost from './endpoints/TokenPost';
import PhotoPost from './endpoints/PhotoPost';
import PhotoGet from './endpoints/PhotoGet';

export const Api = () => {
  return (
    <div>
      User post
      <UserPost />
      Token Post
      <TokenPost />
      Photo Post
      <PhotoPost />
      Photo GET
      <PhotoGet />
    </div>
  );
};

export default Api;
