import React, { Fragment } from 'react';
import { TextInput, Text, View } from 'react-native';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import PropTypes from 'prop-types';

const ChildInfoForm = ({ updateFormValues, child }) => {
  console.log(child);
  return (
    <Form
      onSubmit={() => {}}
      validate={() => {}}
      render={({ values }) => (
        <View style={styles.inputContainer}>
          <Field
            name="parentName"
            render={({ input, meta }) => (
              <Fragment>
                <Text style={styles.formTitle}>Parent Name</Text>
                <TextInput
                  textContentType="name"
                  placeholder="parent name"
                  {...input}
                  value={child.parentName}
                  onChangeText={text => {
                    updateFormValues(values);
                  }}
                  style={styles.textField}
                />
              </Fragment>

              // ... {meta.touched && meta.error && <Text>{meta.error}</Text>}
            )}
          />
          <Field
            name="childName"
            render={({ input, meta }) => (
              <Fragment>
                <Text style={styles.formTitle}>Child Name</Text>
                <TextInput
                  textContentType="name"
                  placeholder="child name"
                  {...input}
                  value={child.childName}
                  onChangeText={text => {
                    updateFormValues(values);
                  }}
                  style={styles.textField}
                />
              </Fragment>
              // ... {meta.touched && meta.error && <Text>{meta.error}</Text>}
            )}
          />
          <Field
            name="email"
            render={({ input, meta }) => (
              <Fragment>
                <Text style={styles.formTitle}>Parent Email</Text>
                <TextInput
                  textContentType="emailAddress"
                  placeholder="Email"
                  {...input}
                  value={child.parentEmail}
                  onChangeText={text => {
                    updateFormValues(values);
                    input.onChange(text);
                  }}
                  style={styles.textField}
                />
              </Fragment>
              // ... {meta.touched && meta.error && <Text>{meta.error}</Text>}
            )}
          />
          <Field
            name="phone"
            render={({ input, meta }) => (
              <Fragment>
                <Text style={styles.formTitle}>Parent Phone</Text>
                <TextInput
                  textContentType="telephoneNumber"
                  placeholder="parent phone"
                  {...input}
                  value={child.parentPhone}
                  onChangeText={text => {
                    updateFormValues(values);
                    input.onChange(text);
                  }}
                  style={styles.textField}
                />
              </Fragment>
              // ... {meta.touched && meta.error && <Text>{meta.error}</Text>}
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
