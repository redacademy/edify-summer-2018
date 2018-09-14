import React from 'react';
import { Image, Text, View, FlatList } from 'react-native';
import { formatUpdatesData } from '../../lib/helpers';
import styles from './styles';
import PropTypes from 'prop-types';

const ChildUpdates = ({ updates }) => {
  return (
    <View style={styles.root}>
      <FlatList
        data={formatUpdatesData(updates)}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <FlatList
              horizontal
              data={item.data}
              renderItem={({ item }) => <Image source={item.imageSource} />}
              ItemSeparatorComponent={() => <View style={styles.divider} />}
              keyExtractor={item => '' + item.id}
            />
          </View>
        )}
        keyExtractor={(item, index) => '' + item.data[index].id}
      />
    </View>
  );
};

ChildUpdates.propTypes = {
  updates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageSource: PropTypes.number.isRequired,
      created: PropTypes.instanceOf(Date),
    }),
  ).isRequired,
};

export default ChildUpdates;