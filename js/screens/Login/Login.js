import React, { Fragment } from 'react';
import styles from './styles.js';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Form, Field } from 'react-final-form';

const Login = ({ navigation }) => {
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
            onSubmit={() => navigation.navigate('onBoarding')}
            // validate={validate}
            render={({ handleSubmit, pristine, invalid }) => (
              <Fragment>
                <View style={styles.inputContainer}>
                  <Field
                    name="email"
                    render={({ input, meta }) => (
                      <TextInput
                        textContentType="emailAddress"
                        placeholder="Email"
                        {...input}
                        style={styles.loginField}
                      />

                      // ... {meta.touched && meta.error && <Text>{meta.error}</Text>}
                    )}
                  />
                  <Field
                    name="password"
                    render={({ input, meta }) => (
                      <TextInput
                        textContentType="password"
                        secureTextEntry={true}
                        placeholder="Password"
                        {...input}
                        style={styles.loginField}
                      />

                      // ... {meta.touched && meta.error && <Text>{meta.error}</Text>}
                    )}
                  />
                </View>

                <TouchableOpacity
                  style={styles.loginButtonContainer}
                  onPress={handleSubmit}
                >
                  <Text style={styles.loginButton}>Log In</Text>
                </TouchableOpacity>
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

export default Login;
