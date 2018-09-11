import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './styles'
import { ContactPhoneIcon } from '../../components/Icons/ContactPhoneIcon';
import { ContactMailIcon } from '../../components/Icons/ContactMailIcon';

const Contact = props => {
    return (
        <View style= {styles.container}>
          <View>
                <Text style= {styles.mainText}>Hi there !</Text>
                <Text style= {styles.mainText}>We are here to help</Text>
            </View>
            <View style= {styles.contacts}>
                <TouchableOpacity activeOpacity= {0.2}>
                    <ContactPhoneIcon color='#75D2D1' />
                    <Text style= {styles.text}>Call</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity= {0.2}>
                    <ContactMailIcon color='#75D2D1' />
                    <Text style= {styles.text}>Email</Text>

                </TouchableOpacity>
            </View>
        </View>
    );
};
  
export default Contact;