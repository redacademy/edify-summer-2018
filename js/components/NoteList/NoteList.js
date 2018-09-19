import React from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import Note from '../Note';
import { AddIcon } from '../Icons/AddIcon';
import NoItems from '../NoItems';
import PropTypes from 'prop-types';

const NoteList = ({ notes, showModal, child }) => {
  const notesArr = [...notes];
  return (
    <View style={styles.root}>
      <FlatList
        data={notesArr.sort((a, b) => b.createdAt - a.createdAt)}
        keyExtractor={item => '' + item.id}
        renderItem={({ item }) => <Note item={item} child={child} />}
        ListEmptyComponent={<NoItems message="No current notes" />}
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
      id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({ firstname: PropTypes.string.isRequired }),
      createdAt: PropTypes.string.isRequired,
      starred: PropTypes.bool.isRequired,
    }),
  ),
  showModal: PropTypes.func.isRequired,
  child: PropTypes.object.isRequired,
};
export default NoteList;
