import React, { Component } from 'react';
import Educator from './Educator';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import QueryError from '../../components/QueryError';
import LoadingScreen from '../../components/LoadingScreen';
import PropTypes from 'prop-types';

const GET_USER = gql`
  query getUser($id: ID!) {
    User(id: $id) {
      id
      firstname
      lastname
      phone
      email
      imageurl
    }
  }
`;

export default class EducatorContainer extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const id = this.props.navigation.getParam(
      'id'
    );
    return (
      <Query query={GET_USER} variables={{ id }}>
        {({ error, loading, data }) => {
          if (loading) return <LoadingScreen />;
          if (error) return <QueryError />;
          return <Educator user={data.User} />;
        }}
      </Query>
    );
  }
}

EducatorContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
