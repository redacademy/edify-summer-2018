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
              renderItem={({ item }) => (
                <Image source={{ uri: item.imageurl }} style={styles.image} />
              )}
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
      id: PropTypes.string.isRequired,
      imageurl: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ChildUpdates;
