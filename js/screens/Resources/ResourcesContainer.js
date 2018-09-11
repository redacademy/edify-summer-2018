import React, { Component } from 'react';
import Resources from './Resources.js';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Text } from 'react-native';

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
          if (loading) return <Text>Loading</Text>; //Proper Loading screen and error will be aded in another sprint
          if (error) return <Text>Error</Text>;
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
