import React from 'react';
import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { formatUpdatesData } from '../../lib/helpers';
import styles from './styles';
import PropTypes from 'prop-types';

const ChildUpdates = ({ updates, navigation }) => {
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
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ChildPost', { postId: item.id});
                  }}
                >
                  <Image source={{uri: item.imageurl}} style={styles.image} />
                </TouchableOpacity>
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
      createdAt: PropTypes.string,
    }),
  ).isRequired,
};

export default ChildUpdates;
