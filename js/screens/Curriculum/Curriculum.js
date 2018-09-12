import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { colors } from './../../config/styles';
import PropTypes from 'prop-types';

export const buttonColors = [
  'lightBlue',
  'yellow',
  'red',
  'darkPurple',
  'lightPurple',
];

const Curriculum = ({ navigation, gradeLevels }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.view}>
        <Text style={styles.header}>Edify Learning Curriculum</Text>

        {gradeLevels.map(
          (grade, index) => (
            console.log(grade),
            (
              <TouchableOpacity
                activeOpacity={0.1}
                style={{
                  ...styles.buttons,
                  backgroundColor: colors[buttonColors[index]],
                }}
                onPress={() =>
                  navigation.navigate('LearningCurriculum', {
                    gradeId: grade.id,
                    gradeLevelName: grade.gradeLevelName,
                  })
                }
                key={grade.id}
              >
                <Text style={styles.text}>{grade.gradeLevelName}</Text>
              </TouchableOpacity>
            )
          ),
        )}
      </ScrollView>
    </View>
  );
};

Curriculum.propTypes = {
  gradeLevels: PropTypes.arrayOf(
    PropTypes.shape({
      gradeLevelName: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Curriculum;
