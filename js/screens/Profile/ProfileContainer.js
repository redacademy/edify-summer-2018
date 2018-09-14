import React, { Component } from 'react';
import Profile from './Profile';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Text } from 'react-native';

const CHILD_DATA = gql`
  query($id: ID!) {
    User(id: $id) {
      id
      child {
        avatar {
          imageurl
        }
        grade
        id
      }
    }
  }
`;
export default class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    userId = this.props.navigation.getParam('userId');

    return (
      <Query query={CHILD_DATA} variables={{ id: userId }}>
        {({ loading, error, data: { User } }) => {
          //TODO: Loading and Errors implemented in another issue
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text> Error</Text>;
          return <Profile data={User.child} />;
        }}
      </Query>
    );
  }
}

ProfileContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
