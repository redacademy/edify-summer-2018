import React, { Component } from 'react';
import Edify from './Edify';
import PropTypes from 'prop-types';

export default class EdifyContainer extends Component {
  static navigationOptions = {
    title: 'Information',
  };
  render() {
    return <Edify navigation={this.props.navigation} />;
  }
}

EdifyContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
