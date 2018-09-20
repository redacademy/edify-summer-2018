import React, { Component } from 'react';
import Profile from './Profile';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LoadingScreen from '../../components/LoadingScreen';
import QueryError from '../../components/QueryError';

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
    const userId = this.props.navigation.getParam('userId');

    return (
      <Query query={CHILD_DATA} variables={{ id: userId }}>
        {({ loading, error, data: { User } }) => {
          if (loading) return <LoadingScreen />;
          if (error) return <QueryError />;
          return <Profile data={User.child} />;
        }}
      </Query>
    );
  }
}

ProfileContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
