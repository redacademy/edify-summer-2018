import React from 'react';
import { ScrollView, Text } from 'react-native';
import ProfileCard from '../../components/ProfileCard';
import OutlinedButton from '../../components/OutlinedButton';
import styles from './styles';
import { colors } from '../../config/styles';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

const Profile = ({ data, navigation }) => {
  return (
    <ScrollView style={styles.scrollview}>
      {data.map((child, index) => (
        <ProfileCard
          key={child.id}
          avatar={child.avatar}
          style={{
            cardBackgroundColor: index % 2 ? colors.skyblue : colors.purple,
            avatarBackgroundColor: index % 2 ? colors.purple : colors.teal,
          }}
          title={<Text style={styles.text}>{child.grade}</Text>}
          action={
            <OutlinedButton
              title="View Profile"
              pressed={() => {
                navigation.navigate('ChildProfile', { id: child.id });
              }}
              color={index % 2 ? colors.purple : colors.teal}
            />
          }
        />
      ))}
    </ScrollView>
  );
};

Profile.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      grade: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  ),
  navigation: PropTypes.object.isRequired,
};

export default withNavigation(Profile);
