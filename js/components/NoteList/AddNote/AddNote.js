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
    const { open, close } = this.props;
    return (
      <View style={styles.modalContainer}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={open}
          onRequestClose={() => close(false)}
        >
          <View style={styles.container}>
            <View style={styles.modal}>
              <View style={styles.header}>
                <Text style={styles.title}>Add Note:</Text>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => close(false)}
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
              <TouchableOpacity activeOpacity={0.5} style={styles.button}>
                <Text style={styles.submit}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

AddNote.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};
