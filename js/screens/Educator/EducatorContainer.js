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
      name
      phone
      email
    }
  }
`;

export default class EducatorContainer extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    return (
      <Query query={GET_USER} variables={{ id: 'cjm1jvtfi04qy0197ww436yqq' }}>
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
