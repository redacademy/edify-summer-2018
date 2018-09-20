import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

export default class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  _handleNoteSubmit = () => {
    if (this.state.text === '') return;
    this.props.addNote(this.state.text);
    this.setState({ text: '' }, () => {
      this.props.closeModal(false);
    });
  };
  render() {
    const { isOpen, closeModal } = this.props;
    return (
      <KeyboardAvoidingView behavior="padding">
        <Modal
          animationType="slide"
          transparent={true}
          visible={isOpen}
          onRequestClose={() => closeModal(false)}
          style={styles.modalContainer}
        >
          <View style={styles.container}>
            <View style={styles.modal}>
              <View style={styles.header}>
                <Text style={styles.title}>Add Note:</Text>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => closeModal(false)}
                >
                  <Text style={styles.close}>X</Text>
                </TouchableOpacity>
              </View>
              <TextInput
                {...this.props}
                multiline={true}
                onChangeText={text => this.setState({ text })}
                autoFocus
                value={this.state.text}
                style={styles.textInput}
              />
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.button}
                onPress={this._handleNoteSubmit}
              >
                <Text style={styles.submit}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    );
  }
}

AddNote.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
};
