import React from 'react';
import { View, Image } from 'react-native';
import Avatar from '../Avatar';
import styles from './styles';
import { colors } from '../../config/styles';
import PropTypes from 'prop-types';

const ProfileCard = ({ avatar, style, action, title, imageSource }) => {
  const cardBackground = {
    backgroundColor: style.cardBackgroundColor,
  };
  const avatarBackground = {
    backgroundColor: style.avatarBackgroundColor,
  };
  return (
    <View style={[styles.card, cardBackground]}>
      <View style={[styles.imageContainer, !imageSource && avatarBackground]}>
        {imageSource ? (
          <Image source={imageSource} style={styles.image} />
        ) : (
          <Avatar avatar={avatar} />
        )}
      </View>
      {title}
      {action}
    </View>
  );
};

ProfileCard.defaultProps = {
  avatar: 'fox',
  imageSource: null,
  style: {
    avatarBackgroundColor: colors.teal,
    cardBackgroundColor: colors.white,
  },
};

ProfileCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  imageSource: PropTypes.number,
  style: PropTypes.shape({
    avatarBackgroundColor: PropTypes.string.isRequired,
    cardBackgroundColor: PropTypes.string.isRequired,
  }),
  title: PropTypes.node,
  action: PropTypes.node,
};

export default ProfileCard;
