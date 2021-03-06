import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import ProfileCard from '../../components/ProfileCard';
import OutlinedButton from '../../components/OutlinedButton';
import NoteList from '../../components/NoteList';
import ChildUpdates from '../../components/ChildUpdates';
import AddNote from '../../components/AddNote';
import { colors } from '../../config/styles';
import PropTypes from 'prop-types';

const ChildProfile = ({
  child,
  showUpdates,
  toggleShowUpdates,
  showModal,
  modalShown,
  navigation,
  addNote,
}) => {
  return (
    <View style={styles.root}>
      <ScrollView>
        <ProfileCard
          avatar={child.avatar.imageurl}
          title={<Text style={styles.text}>{child.grade}</Text>}
          action={
            <OutlinedButton
              title="more info"
              pressed={() => {
                navigation.navigate('ChildInfo', { child: child });
              }}
              color={colors.teal}
              titleStyle={{
                paddingHorizontal: 2,
                textAlignVertical: 'center',
              }}
            />
          }
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={!showUpdates && styles.active}
            activeOpacity={0.8}
            onPress={() => toggleShowUpdates(false)}
          >
            <Text style={[styles.button, !showUpdates && styles.active]}>
              Notes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={showUpdates && styles.active}
            activeOpacity={0.8}
            onPress={() => toggleShowUpdates(true)}
          >
            <Text style={[styles.button, showUpdates && styles.active]}>
              Updates
            </Text>
          </TouchableOpacity>
        </View>
        {showUpdates ? (
          <ChildUpdates updates={child.updates} navigation={navigation} />
        ) : (
          <NoteList notes={child.notes} showModal={showModal} child={child} />
        )}
      </ScrollView>
      <AddNote isOpen={modalShown} closeModal={showModal} addNote={addNote} />
    </View>
  );
};

ChildProfile.propTypes = {
  child: PropTypes.object.isRequired,
  showUpdates: PropTypes.bool.isRequired,
  toggleShowUpdates: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  modalShown: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  addNote: PropTypes.func.isRequired,
};

export default ChildProfile;
