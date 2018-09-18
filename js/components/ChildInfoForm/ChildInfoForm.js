import React, { Fragment, Component } from 'react';
import { TextInput, Text, View } from 'react-native';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import PropTypes from 'prop-types';

class ChildInfoForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setFormValues({
      parentName:
        this.props.child.parent.firstname +
        ' ' +
        this.props.child.parent.lastname,
      childName: this.props.child.name,
      email: this.props.child.parent.email,
      phone: this.props.child.parent.phone,
    });
  }

  render() {
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
                    value={
                      this.props.child.parent.firstname +
                      ' ' +
                      this.props.child.parent.lastname
                    }
                    onChangeText={text => {
                      this.props.updateFormValues({
                        parentName: text,
                      });
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
                    value={this.props.child.name}
                    onChangeText={text => {
                      this.props.updateFormValues({
                        childName: text,
                      });
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
                    value={this.props.child.parent.email}
                    onChangeText={text => {
                      this.props.updateFormValues({
                        email: text,
                      });
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
                    value={this.props.child.parent.phone}
                    onChangeText={text => {
                      this.props.updateFormValues({
                        phone: text,
                      });
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
  }
}

ChildInfoForm.propTypes = {
  updateFormValues: PropTypes.func.isRequired,
  child: PropTypes.shape({
    parent: PropTypes.shape({
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
    }),
    name: PropTypes.string.isRequired,
  }).isRequired,
  setFormValues: PropTypes.func.isRequired,
};

export default ChildInfoForm;
