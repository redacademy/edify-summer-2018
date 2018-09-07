import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Account = props => {
  return (
    <View style={styles.container}>

      <View style={styles.firstView}>
        <TouchableOpacity activeOpacity= {0.1}>
          <Text style={styles.optionsText}>Change Password</Text>
        </TouchableOpacity>

        <View style={styles.divider}></View>

        <TouchableOpacity activeOpacity= {0.1}>
          <Text style={styles.optionsText}>Account Privacy</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity activeOpacity= {0.1}
          style={styles.signOutButton}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;
