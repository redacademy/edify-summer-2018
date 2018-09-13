import React, { Component } from 'react';
import Curriculum from './Curriculum';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import LoadingScreen from '../../components/LoadingScreen';
import QueryError from '../../components/QueryError';
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
          if (loading) return <LoadingScreen />;
          if (error) return <QueryError />;
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
