import React, { Component } from 'react';
import Activity from './Activity';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
export default class ActivityContainer extends Component {
  static navigationOptions = {
    title: 'Curriculum',
  };



  render() {
    const activityId = this.props.navigation.getParam('activityId');
    console.log('AcTiViTyId', activityId);
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
          console.log(data);
          if (loading) return <Text>Loading: </Text>;
          if (error) return <Text>Error: </Text>;
          return <Activity data={data} />;
        }}
      </Query>
    );
  }
}

ActivityContainer.propTypes = {
  navigation: PropTypes.object.isRequired
}
