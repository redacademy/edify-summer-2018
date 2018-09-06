import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProfileCard from '../../components/ProfileCard';

const Profile = ({ data }) => {
  return (
    <ScrollView style={styles.scrollview}>
      {data.map((child, index) => (
        <ProfileCard key={child.id} data={child} colorScheme={index} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    flexGrow: 1,
  },
});

export default Profile;
