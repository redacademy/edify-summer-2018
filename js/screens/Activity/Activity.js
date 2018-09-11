import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Activity = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>The Marshmallow Challenge</Text>
      <Text style={styles.title}>STEM Challenge:</Text>
      <Text style={styles.description}>
        Build the tallest tower possible utilizing the materials
      </Text>
      <Text style={styles.title}>Procedures:</Text>
      <View>
        <Text style={styles.procedure}>
          1. Give materials to each group. Each group can use 5 feet of masking
          tape, 25 pieces of spaghetti, 5 feet of string, 10 popsicle sticks,
          and 2 marshmallows. The educator may modify the material list as
          desired.
        </Text>
        <Text style={styles.procedure}>
          2. Set a time limit of 20 minutes, and begin the challenge!
        </Text>
        <Text style={styles.procedure}>
          3. Monitor groups as they work. The educator may choose to ask a few
          reflective questions such as “what strategy are you using?” or “what
          have you tried so far, and how are you improving your design?”
        </Text>
      </View>
    </View>
  );
};

Activity.propTypes = {
  navigation: PropTypes.string.isRequired,
};

export default Activity;
