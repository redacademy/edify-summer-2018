import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Activity = ({ data }) => {
  const activity = data.Activity;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{activity.title}</Text>
        <Text style={styles.introText}>STEM Challenge:</Text>
        <Text style={styles.description}>{activity.description}</Text>
        <Text style={styles.introText}>Procedures:</Text>
        {activity.procedures.map((procedure, index) => (
          <View key={index} style={styles.procedureBlock}>
            <Text>{(index += 1)}.</Text>
            <Text style={styles.procedureText}>{procedure}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

Activity.propTypes = {
  data: PropTypes.shape({
    Activity: PropTypes.shape({
      description: PropTypes.string.isRequired,
      procedures: PropTypes.array.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }),
};

export default Activity;
