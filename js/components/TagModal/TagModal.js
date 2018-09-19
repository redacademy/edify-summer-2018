import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const TagModal = ({ isOpen, close, title, description, backgroundColor }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => close()}
    >
      <View style={styles.page}>
        <View
          style={{
            ...styles.container,
            backgroundColor: backgroundColor,
          }}
        >
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={() => close()}>
              <Text style={styles.close}>x</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </Modal>
  );
};

TagModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};
export default TagModal;
