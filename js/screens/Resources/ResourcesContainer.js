import React, { Component } from 'react';
import Resources from './Resources.js';

export default class ResourcesContainer extends Component {
  constructor(props) {
    super(props);
    this.mockResources = [
      {
        title:
          '6 Powerful Tips to Creating Testimonials That Sell Your Product Fast',
        link: 'https://github.com/',
      },
      {
        title: 'Beyond the Naked Eye',
        link: 'https://amazon.ca',
      },
      {
        title: 'Always Look on the Bright Side of Life',
        link: 'https://youtube.com',
      },
      {
        title: 'Video Games Playing with Imagination',
        link: 'https://instagram.com',
      },
    ];
  }

  static navigationOptions = {
    title: 'Resources',
  };

  render() {
    return (
      <Resources
        resources={this.mockResources}
        navigation={this.props.navigation}
      />
    );
  }
}
