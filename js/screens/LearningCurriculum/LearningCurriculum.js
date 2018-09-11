import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const LearningCurriculum = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>K-2 Learning Curriculum</Text>

        <Text style={styles.subject}>Science</Text>
        <TouchableOpacity
          activeOpacity={0.1}
          style={[styles.button, { backgroundColor: '#5D5BA0' }]}
        >
          <Text style={styles.activity}>Making Slime</Text>
        </TouchableOpacity>

        <Text style={styles.subject}>Technology</Text>
        <TouchableOpacity
          activeOpacity={0.1}
          style={[styles.button, { backgroundColor: '#35377B' }]}
        >
          <Text style={styles.activity}>Writing</Text>
        </TouchableOpacity>

        <Text style={styles.subject}>Engineering</Text>
        <TouchableOpacity
          activeOpacity={0.1}
          style={[styles.button, { backgroundColor: '#D3594C' }]}
        >
          <Text style={styles.activity}>Marshmallow Challenge</Text>
        </TouchableOpacity>

        <Text style={styles.subject}>Arts</Text>
        <TouchableOpacity
          activeOpacity={0.1}
          style={[styles.button, { backgroundColor: '#F3BC63' }]}
        >
          <Text style={styles.activity}>Finger Painting</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.1}
          style={[styles.button, { backgroundColor: '#5DB0E0' }]}
        >
          <Text style={styles.activity}>Pottery</Text>
        </TouchableOpacity>

        <Text style={styles.subject}>Math</Text>
        <TouchableOpacity
          activeOpacity={0.1}
          style={[styles.button, { backgroundColor: '#5D5BA0' }]}
        >
          <Text style={styles.activity}>Space Math</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

LearningCurriculum.propTypes = {
  navigation: PropTypes.string.isRequired,
};

export default LearningCurriculum;
