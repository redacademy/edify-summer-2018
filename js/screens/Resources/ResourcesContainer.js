import React, { Component } from 'react';
import Resources from './Resources.js';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import LoadingScreen from '../../components/LoadingScreen';
import QueryError from '../../components/QueryError';
import PropTypes from 'prop-types';

export default class ResourcesContainer extends Component {
  static navigationOptions = {
    title: 'Resources',
  };

  render() {
    return (
      <Query
        query={gql`
          query {
            allResources {
              title
              link
            }
          }
        `}
      >
        {({ loading, error, data: { allResources } }) => {
          if (loading) return <LoadingScreen />;
          if (error) return <QueryError />;
          return (
            <Resources
              resources={allResources}
              navigation={this.props.navigation}
            />
          );
        }}
      </Query>
    );
  }
}

ResourcesContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
