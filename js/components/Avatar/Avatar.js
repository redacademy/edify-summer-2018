import React from 'react';
import { FoxAvatar } from '../Avatars/FoxAvatar';

const Avatar = ({ avatar }) => {
  switch (avatar) {
    case 'fox':
      return <FoxAvatar />;
    default:
      return <FoxAvatar />;
  }
};

export default Avatar;
