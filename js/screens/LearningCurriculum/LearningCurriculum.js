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
    <ScrollView>
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
                    console.log('ACTIVITY', activity.id);
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

export default LearningCurriculum;
