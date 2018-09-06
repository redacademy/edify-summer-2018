import React from 'react';
import { ScrollView } from 'react-native';
import ProfileCard from '../../components/ProfileCard';
import styles from './styles';

const Profile = ({ data }) => {
  return (
    <ScrollView style={styles.scrollview}>
      {data.map((child, index) => (
        <ProfileCard key={child.id} data={child} colorScheme={index} />
      ))}
    </ScrollView>
  );
};

export default Profile;
