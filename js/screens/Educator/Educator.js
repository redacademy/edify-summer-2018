import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import ProfileCard from '../../components/ProfileCard';
import call from 'react-native-phone-call';

const EducatorContact = ({ user }) => (
  <View style={styles.educatorInfoContainer}>
    <Text>
      {user.firstname} {user.lastname}
    </Text>
    <Text>{user.phone}</Text>
  </View>
);
const Educator = ({ user }) => {
  return (
    <ScrollView style={styles.root}>
      <ProfileCard
        imageSource={user.imageurl}
        title={<EducatorContact user={user} />}
        action={<Text>{user.email}</Text>}
      />
      <View style={styles.educatorWorkInfo}>
        <Text style={styles.infoTitle}>Teaches</Text>
        <Text style={styles.infoText}>Age 2-3</Text>
        <Text style={styles.infoTitle}>Availability</Text>
        <Text style={styles.infoText}>Mon-Fri 3pm-6pm. Call to Confirm</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() =>
            call({
              number: user.phone.replace(/(\s+)/g, ''),
              prompt: true,
            }).catch(err => err)
          }
        >
          <Image source={require('../../assets/images/icons/phone.png')} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

Educator.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
  }),
};
export default Educator;
