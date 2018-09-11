import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import ContactPhoneIcon from '../../components/Icons/ContactPhoneIcon';
import ContactMailIcon from '../../components/Icons/ContactMailIcon';
import { colors } from '../../config/styles';

const Contact = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Hi there !</Text>
      <Text style={styles.mainText}>We are here to help</Text>
      <View style={styles.contacts}>
        <TouchableOpacity activeOpacity={0.2}>
          <ContactPhoneIcon color={colors.teal} />
          <Text style={styles.text}>Call</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.2}>
          <ContactMailIcon color={colors.teal} />
          <Text style={styles.text}>Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Contact;
