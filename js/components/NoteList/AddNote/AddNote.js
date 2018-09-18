import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

export default class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    const { isOpen, close, showX } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => close(false)}
        style={styles.modalContainer}
      >
        <View style={styles.container}>
          <View style={styles.modal}>
            <View style={styles.header}>
              <Text style={styles.title}>Add Note:</Text>
              {showX && (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => close(false)}
                >
                  <Text style={styles.close}>X</Text>
                </TouchableOpacity>
              )}
            </View>
            <TextInput
              {...this.props}
              multiline={true}
              onChangeText={text => this.setState({ text })}
              autoFocus
              value={this.state.text}
              style={styles.textInput}
            />
            <TouchableOpacity activeOpacity={0.5} style={styles.button}>
              <Text style={styles.submit}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

AddNote.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};
