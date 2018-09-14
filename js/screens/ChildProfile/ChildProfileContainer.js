import React, { Component } from 'react';
import { Text } from 'react-native';
import ChildProfile from './ChildProfile';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const CHILD_DATA = gql`
  query($id: ID!) {
    Child(id: $id) {
      grade
      avatar {
        imageurl
      }
      name
      notes {
        id
        creator {
          id
          firstname
        }
        message
        starred
        createdAt
      }
      parent {
        id
        firstname
        lastname
        email
        phone
      }
      updates {
        id
        createdAt
        imageurl
        creator {
          firstname
          lastname
          id
        }
        tag {
          title
          description
          id
        }
        mood {
          imageurl
          description
        }
        description
      }
    }
  }
`;
export default class ChildProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showUpdates: false,
      showModal: false,
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
    childId = this.props.navigation.getParam('id');
    return (
      <Query query={CHILD_DATA} variables={{ id: childId }}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text> Error </Text>;
          return (
            <ChildProfile
              showUpdates={this.state.showUpdates}
              toggleShowUpdates={show => this._showUpdates(show)}
              child={data.Child}
              showModal={show => this._showModal(show)}
              modalShown={this.state.showModal}
              navigation={this.props.navigation}
            />
          );
        }}
      </Query>
    );
  }
}

ChildProfileContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
