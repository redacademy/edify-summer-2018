import React from 'react';
import styles from './styles.js';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Form, Field } from 'react-final-form';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginLogo}>
        <Image
          source={require('./../../assets/images/edifyLogo.png')}
          style={styles.edifyLogo}
          resizeMode="contain"
        />

        <View>
          <Text style={[styles.logoText, styles.logoHeader]}>edify</Text>
          <Text style={[styles.logoText, styles.subHeader]}>
            learning spaces
          </Text>
        </View>
      </View>
      <Form
        onSubmit={values => console.log(values)}
        // validate={validate}
        render={({ handleSubmit, pristine, invalid }) => (
          <View>
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

            <TouchableOpacity
              style={styles.loginButtonContainer}
              onPress={handleSubmit}
            >
              <Text style={styles.loginButton}>Log In</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.loginHelpText}>
        <Text style={styles.forgetText}>Forget Password?</Text>
        <Text style={styles.helpText}> Help</Text>
      </View>
    </View>
  );
};

export default Login;
