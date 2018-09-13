import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import MessageBox from '../../MessageBox';

export default class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  _updateText = text => {
    this.setState({ text });
  };
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
            <MessageBox
              close={close}
              updateText={text => this._updateText(text)}
              showCloseIcon
              value={this.state.text}
              pressed={() => {}}
              title="Add Note:"
            />
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
