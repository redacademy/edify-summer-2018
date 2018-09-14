import React from 'react';
import { Image } from 'react-native';
import styles from './styles';
const Angry = require('../../assets/images/emoji/angry.png');
const Confused = require('../../assets/images/emoji/confused.png');
const Happy = require('../../assets/images/emoji/happy.png');
const Neutral = require('../../assets/images/emoji/neutral.png');
const Sad = require('../../assets/images/emoji/sad.png');
const Scared = require('../../assets/images/emoji/scared.png');

const Mood = ({ mood }) => {
  switch (mood) {
    case 'angry':
      return <Image style={styles.moodIcon} source={Angry} />;
    case 'confused':
      return <Image style={styles.moodIcon} source={Confused} />;
    case 'happy':
      return <Image style={styles.moodIcon} source={Happy} />;
    case 'neutral':
      return <Image style={styles.moodIcon} source={Neutral} />;
    case 'sad':
      return <Image style={styles.moodIcon} source={Sad} />;
    case 'scared':
      return <Image style={styles.moodIcon} source={Scared} />;
    default:
      return <Image style={styles.moodIcon} source={Happy} />;
  }
};

export default Mood;
