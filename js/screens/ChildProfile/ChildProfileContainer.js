import React, { Component } from 'react';
import ChildProfile from './ChildProfile';
import PropTypes from 'prop-types';

export default class ChildProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showUpdates: false,
      showModal: false,
      data: {
        id: 1,
        grade: 'Grade Four',
        avatar: 'fox',
        info: {
          parentName: '',
          childName: '',
          parentEmail: '',
          parentPhone: '',
        },
        notes: [
          {
            id: 1,
            message:
              'lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod.',
            author: 'Lisa',
            created: new Date('July 31, 2018'),
            important: true,
          },
          {
            id: 2,
            message:
              'lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod, lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod',
            author: 'you',
            created: new Date('July 23, 2018'),
            important: false,
          },
          {
            id: 3,
            message:
              'lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod, lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod',
            author: 'Lisa',
            created: new Date('July 31, 2018'),
            important: false,
          },
          {
            id: 4,
            message:
              'lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod, lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod',
            author: 'Lisa',
            created: new Date('July 31, 2018'),
            important: true,
          },
          {
            id: 5,
            message:
              'lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod, lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod',
            author: 'you',
            created: new Date('July 23, 2018'),
            important: false,
          },
          {
            id: 6,
            message:
              'lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod, lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod',
            author: 'Lisa',
            created: new Date('July 23, 2018'),
            important: false,
          },
          {
            id: 7,
            message:
              'lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod, lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod',
            author: 'Lisa',
            created: new Date('July 31, 2018'),
            important: false,
          },
          {
            id: 8,
            message:
              'lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod, lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod',
            author: 'Lisa',
            created: new Date('July 31, 2018'),
            important: true,
          },
          {
            id: 9,
            message:
              'lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod, lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod',
            author: 'you',
            created: new Date('July 23, 2018'),
            important: false,
          },
          {
            id: 10,
            message:
              'lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod, lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod,lorem ipsum dolar sit amet, consecteur adispicing elit, sed do eiusmod',
            author: 'Lisa',
            created: new Date('July 23, 2018'),
            important: false,
          },
        ],
        updates: [
          {
            id: 1,
            imageSource: require('../../assets/images/uploads/finger-painting.png'),
            created: new Date('July 31, 2018'),
          },
          {
            id: 2,
            imageSource: require('../../assets/images/uploads/marshmallow.png'),
            created: new Date('July 31, 2018'),
          },
          {
            id: 3,
            imageSource: require('../../assets/images/uploads/pottery.png'),
            created: new Date('July 31, 2018'),
          },
          {
            id: 4,
            imageSource: require('../../assets/images/uploads/marshmallow.png'),
            created: new Date('June 29, 2018'),
          },
          {
            id: 5,
            imageSource: require('../../assets/images/uploads/finger-painting.png'),
            created: new Date('June 29, 2018'),
          },
          {
            id: 6,
            imageSource: require('../../assets/images/uploads/pottery.png'),
            created: new Date('June 29, 2018'),
          },
          {
            id: 7,
            imageSource: require('../../assets/images/uploads/finger-painting.png'),
            created: new Date('May 29, 2018'),
          },
          {
            id: 8,
            imageSource: require('../../assets/images/uploads/pottery.png'),
            created: new Date('May 29, 2018'),
          },
          {
            id: 9,
            imageSource: require('../../assets/images/uploads/marshmallow.png'),
            created: new Date('May 29, 2018'),
          },
        ],
      },
    };
  }
  _showUpdates = show => {
    this.setState({ showUpdates: show });
  };
  _showModal = show => {
    this.setState({ showModal: show });
  };
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    return (
      <ChildProfile
        showUpdates={this.state.showUpdates}
        toggleShowUpdates={show => this._showUpdates(show)}
        child={this.state.data}
        showModal={show => this._showModal(show)}
        modalShown={this.state.showModal}
      />
    );
  }
}

ChildProfileContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
