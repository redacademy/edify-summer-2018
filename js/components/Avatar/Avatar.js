import React from 'react';
import { Image } from 'react-native';
const Fox = require('../../assets/images/avatar/Fox.png');
const Bear = require('../../assets/images/avatar/bear.png');
const Cat = require('../../assets/images/avatar/Cat.png');
const Frog = require('../../assets/images/avatar/frog.png');
const Monkey = require('../../assets/images/avatar/monkey.png');

const Avatar = ({ avatar }) => {
  switch (avatar) {
    case 'fox':
      return <Image source={Fox} />;
    case 'bear':
      return <Image source={Bear} />;
    case 'cat':
      return <Image source={Cat} />;
    case 'frog':
      return <Image source={Frog} />;
    case 'monkey':
      return <Image source={Monkey} />;
    default:
      return <Image source={Fox} />;
  }
};

export default Avatar;
