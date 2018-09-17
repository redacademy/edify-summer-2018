import React, { Component } from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';

export default class ContactContainer extends Component {
  static navigationOptions = {
    title: 'Contact',
  };
  render() {
    return <Contact />;
  }
}

ContactContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
