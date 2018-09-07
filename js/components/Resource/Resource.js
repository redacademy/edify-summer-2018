import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image, Linking } from 'react-native';
import styles from './styles';
import { withNavigation } from 'react-navigation';

class Resource extends Component {
  constructor(props) {
    super(props);
  }

  _handleClick = () => {
    Linking.canOpenURL(this.props.resource.link).then(supported => {
      if (supported) {
        Linking.openURL(this.props.resource.link);
      } else {
        console.log("Don't know how to open URI: " + this.props.resource.link);
      }
    });
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this._handleClick();
        }}
      >
        <View style={styles.resourceItem}>
          <Text style={styles.resourceText}>{this.props.resource.title} </Text>
          <Image
            source={require('./../../assets/images/icons/external-link.png')}
            style={styles.externalIcon}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(Resource);
