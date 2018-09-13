import React from 'react';
import { colors } from '../../config/styles';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SectionList,
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const buttonColors = [
  'lightBlue',
  'yellow',
  'red',
  'darkPurple',
  'lightPurple',
];

const LearningCurriculum = ({ navigation, data }) => {
  const gradeLevelName = navigation.getParam('gradeLevelName');
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.header}> {gradeLevelName} Learning Curriculum</Text>
      <SectionList
        renderItem={({ item, index }) =>
          item.activity.map((activity, index) => {
            return (
              <View key={index} style={styles.buttonWrap}>
                <TouchableOpacity
                  activeOpacity={0.1}
                  style={[
                    styles.button,
                    { backgroundColor: colors[buttonColors[index]] },
                  ]}
                  onPress={() => {
                    navigation.navigate('Activity', {
                      activityId: activity.id,
                    });
                  }}
                >
                  <Text style={styles.buttonText}>{activity.title}</Text>
                </TouchableOpacity>
              </View>
            );
          })
        }
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.subject}> {title}</Text>
        )}
        sections={data}
        keyExtractor={(item, index) => item + index}
      />
    </ScrollView>
  );
};

LearningCurriculum.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          activity: PropTypes.array.isRequired,
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        }),
      ),
      title: PropTypes.string.isRequired,
    }),
  ),
  navigation: PropTypes.object.isRequired,
};

export default LearningCurriculum;
