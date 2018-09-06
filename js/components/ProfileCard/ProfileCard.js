import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Avatar from '../Avatar';
import styles from './styles';

const ProfileCard = ({ data, colorScheme }) => {
  return (
    <View
      style={[styles.card, colorScheme % 2 ? styles.cardTwo : styles.cardOne]}
    >
      <View
        style={[
          styles.avatarContainer,
          colorScheme % 2 ? styles.AvatarTwo : styles.AvatarOne,
        ]}
      >
        <Avatar avatar={data.avatar} />
      </View>
      <Text style={styles.text}>{data.grade}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.button,
          colorScheme % 2 ? styles.buttonTwo : styles.buttonOne,
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            colorScheme % 2 ? styles.buttonTwo : styles.buttonOne,
          ]}
        >
          View Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileCard;
