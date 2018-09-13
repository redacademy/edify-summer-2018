import React from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import Note from './Note';
import { AddIcon } from '../Icons/AddIcon';
import PropTypes from 'prop-types';

const NoteList = ({ notes, showModal }) => {
  return (
    <View style={styles.root}>
      <FlatList
        data={notes.sort((a, b) => a.created - b.created)}
        keyExtractor={item => '' + item.id}
        renderItem={({ item }) => <Note item={item} />}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={() => showModal(true)}
      >
        <AddIcon />
      </TouchableOpacity>
    </View>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      created: PropTypes.instanceOf(Date),
      important: PropTypes.bool.isRequired,
    }),
  ),
  showModal: PropTypes.func.isRequired,
};
export default NoteList;
