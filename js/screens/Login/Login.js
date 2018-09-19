import React, { Fragment } from 'react';
import styles from './styles.js';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';

validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};
const required = value => (value ? undefined : 'Required Field');

const Login = ({ navigation, signIn, user, loginLoading, loginError }) => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./../../assets/images/login/edifyLogo.png')}
            style={styles.edifyLogo}
            resizeMode="contain"
          />

          <View style={styles.logoTextContainer}>
            <Text style={[styles.logoText, styles.logoHeader]}>edify</Text>
            <Text style={[styles.logoText, styles.logoSubHeader]}>
              learning spaces
            </Text>
          </View>
        </View>
        <View style={styles.formContainer}>
          <Form
            onSubmit={async values => {
              try {
                const res = await signIn({
                  variables: { email: values.email, password: values.password },
                });
                user.addUser(
                  res.data.authenticateUser.id,
                  res.data.authenticateUser.token,
                );

                res.data.authenticateUser.showOnboarding
                  ? navigation.navigate('onBoarding', {
                      userId: res.data.authenticateUser.id,
                    })
                  : navigation.navigate('Profile', {
                      userId: res.data.authenticateUser.id,
                    });
              } catch (err) {
                throw Error(err);
              }
            }}
            validate={this.validate}
            render={({ handleSubmit, pristine, invalid }) => (
              <Fragment>
                <View style={styles.inputContainer}>
                  <Field name="email" validate={required}>
                    {({ input, meta }) => (
                      <View style={styles.fieldContainer}>
                        <TextInput
                          textContentType="emailAddress"
                          placeholder="Email"
                          {...input}
                          style={styles.loginField}
                          autoCapitalize="none"
                        />

                        {meta.touched &&
                          meta.error && (
                            <Text style={styles.fieldError}>{meta.error}</Text>
                          )}
                      </View>
                    )}
                  </Field>
                  <Field name="password" validate={required}>
                    {({ input, meta }) => (
                      <View style={styles.fieldContainer}>
                        <TextInput
                          textContentType="password"
                          secureTextEntry={true}
                          placeholder="Password"
                          {...input}
                          style={styles.loginField}
                        />

                        {meta.touched &&
                          meta.error && (
                            <Text style={styles.fieldError}>{meta.error}</Text>
                          )}
                      </View>
                    )}
                  </Field>
                </View>
                <View style={styles.buttonAndHelp}>
                  {loginError && (
                    <Text style={styles.errorText}>
                      Incorrect username or password
                    </Text>
                  )}

                  {loginLoading ? (
                    <View style={styles.loginButtonContainer}>
                      <ActivityIndicator
                        style={styles.loginIndicator}
                        size="small"
                        color="white"
                      />
                    </View>
                  ) : (
                    <TouchableOpacity
                      style={[
                        styles.loginButtonContainer,
                        invalid ? styles.inactiveLogin : null,
                      ]}
                      onPress={handleSubmit}
                      disabled={invalid ? true : false}
                    >
                      <Text style={styles.loginButton}>Log In</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </Fragment>
            )}
          />
        </View>

        <View style={styles.helpContainer}>
          <View style={styles.loginHelpText}>
            <Text style={styles.forgetText}>Forget Password?</Text>
            <Text style={styles.helpText}> Help</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loginLoading: PropTypes.bool.isRequired,
  loginError: PropTypes.object,
};

export default Login;
