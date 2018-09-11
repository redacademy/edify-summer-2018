import React, { Component } from 'react';
import Contact from './Contact';

export default class ContactContainer extends Component {
  static navigationOptions = {
    title: 'Contact',
  };
    render() {
      return <Contact />;
    }
  }