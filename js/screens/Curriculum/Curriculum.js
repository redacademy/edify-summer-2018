import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

const Curriculum = props => {
  return (
    <View style= {styles.container}>
        <ScrollView style= {styles.view}>

            <Text style= {styles.header}>Edify Learning Curriculum</Text>

            <TouchableOpacity
                activeOpacity= {0.1}
                style= {[styles.buttons, {backgroundColor: '#5db0e0'}]}>
                <Text style= {styles.text}>K-1</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity= {0.1}
                style= {[styles.buttons, {backgroundColor: '#f3bc63'}]}>
                <Text style= {styles.text}>K-2</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity= {0.1}
                style= {[styles.buttons, {backgroundColor: '#d3594c'}]}>
                <Text style= {styles.text}>Grades 1-2</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity= {0.1}
                style= {[styles.buttons, {backgroundColor: '#35377b'}]}>
                <Text style= {styles.text}>Grades 3-5</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity= {0.1}
                style= {[styles.buttons, {backgroundColor: '#5d5ba0'}]}>
                <Text style= {styles.text}>Grades 6-8</Text>
            </TouchableOpacity>

        </ScrollView>
    </View>

  );
};

export default Curriculum;
