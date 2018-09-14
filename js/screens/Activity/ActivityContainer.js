import React, { Component } from 'react';
import Activity from './Activity';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import LoadingScreen from '../../components/LoadingScreen';
import QueryError from '../../components/QueryError';
export default class ActivityContainer extends Component {
  static navigationOptions = {
    title: 'Curriculum',
  };

  render() {
    const activityId = this.props.navigation.getParam('activityId');
    return (
      <Query
        variables={{ id: activityId }}
        query={gql`
          query($id: ID!) {
            Activity(id: $id) {
              title
              description
              procedures
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <LoadingScreen />;
          if (error) return <QueryError />;
          return <Activity data={data} />;
        }}
      </Query>
    );
  }
}

ActivityContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
