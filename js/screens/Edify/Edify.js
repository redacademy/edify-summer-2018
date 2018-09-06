import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Edify = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Curriculum');
        }}
      >
        <Text style={styles.edifyText}>Edify Curriculum</Text>
      </TouchableOpacity>
      <View style={styles.divider} />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Resources');
        }}
      >
        <Text style={styles.edifyText}>Resources</Text>
      </TouchableOpacity>
      <View style={styles.divider} />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Contact');
        }}
      >
        <Text style={styles.edifyText}>Contact</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
    </View>
  );
};

export default Edify;
