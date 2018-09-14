import React, { Fragment } from 'react';
import { TextInput, Text, View } from 'react-native';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import PropTypes from 'prop-types';

const ChildInfoForm = ({ updateFormValues, child }) => {
  return (
    <Form
      onSubmit={() => {}}
      render={({ values }) => (
        <View style={styles.inputContainer}>
          <Field
            name="parentName"
            render={({ input }) => (
              <Fragment>
                <Text style={styles.formTitle}>Parent Name</Text>
                <TextInput
                  textContentType="name"
                  placeholder="parent name"
                  {...input}
                  value={child.parentName}
                  onChangeText={() => {
                    updateFormValues(values);
                  }}
                  style={styles.textField}
                />
              </Fragment>
            )}
          />
          <Field
            name="childName"
            render={({ input }) => (
              <Fragment>
                <Text style={styles.formTitle}>Child Name</Text>
                <TextInput
                  textContentType="name"
                  placeholder="child name"
                  {...input}
                  value={child.childName}
                  onChangeText={() => {
                    updateFormValues(values);
                  }}
                  style={styles.textField}
                />
              </Fragment>
            )}
          />
          <Field
            name="email"
            render={({ input }) => (
              <Fragment>
                <Text style={styles.formTitle}>Parent Email</Text>
                <TextInput
                  textContentType="emailAddress"
                  placeholder="Email"
                  {...input}
                  value={child.parentEmail}
                  onChangeText={() => {
                    updateFormValues(values);
                  }}
                  style={styles.textField}
                />
              </Fragment>
            )}
          />
          <Field
            name="phone"
            render={({ input }) => (
              <Fragment>
                <Text style={styles.formTitle}>Parent Phone</Text>
                <TextInput
                  textContentType="telephoneNumber"
                  placeholder="parent phone"
                  {...input}
                  value={child.parentPhone}
                  onChangeText={() => {
                    updateFormValues(values);
                  }}
                  style={styles.textField}
                />
              </Fragment>
            )}
          />
        </View>
      )}
    />
  );
};

ChildInfoForm.propTypes = {
  updateFormValues: PropTypes.func.isRequired,
  child: PropTypes.shape({
    parentEmail: PropTypes.string.isRequired,
    parentPhone: PropTypes.string.isRequired,
    parentName: PropTypes.string.isRequired,
    childName: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChildInfoForm;
