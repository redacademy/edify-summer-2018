import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';

const MessageBox = ({
  close,
  showCloseIcon,
  pressed,
  updateText,
  value,
  title,
}) => {
  return (
    <Form
      onSubmit={() => {}}
      render={({ values }) => (
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            {showCloseIcon ? (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => close(false)}
              >
                <Text style={styles.close}>X</Text>
              </TouchableOpacity>
            ) : null}
          </View>
          <Field name="message">
            {({ input, meta }) => (
              <TextInput
                multiline={true}
                onChangeText={text => updateText(text)}
                autoFocus
                value={value}
                style={styles.textInput}
              />
            )}
          </Field>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={pressed}
          >
            <Text style={styles.submit}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

MessageBox.propTypes = {
  showCloseIcon: PropTypes.bool,
};
export default MessageBox;
