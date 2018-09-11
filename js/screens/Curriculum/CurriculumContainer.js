import React, { Component } from 'react';
import { Text } from 'react-native';
import Curriculum from './Curriculum';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
export default class CurriculumContainer extends Component {
  static navigationOptions = {
    title: 'Curriculum',
  };
  render() {
    return (
      <Query
        query={gql`
          {
            allGradeLevels {
              id
              gradeLevelName
            }
          }
        `}
      >
        {({ loading, error, data: { allGradeLevels } }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>{error}</Text>;
          return (
            <Curriculum
              navigation={this.props.navigation}
              gradeLevels={allGradeLevels}
            />
          );
        }}
      </Query>
    );
  }
}
