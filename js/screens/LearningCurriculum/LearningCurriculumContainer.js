import React, { Component } from 'react';
import LearningCurriculum from './LearningCurriculum';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { formatLearningCurriculumData } from '../../lib/helpers';
import PropTypes from 'prop-types';
import LoadingScreen from '../../components/LoadingScreen';
import QueryError from '../../components/QueryError';
export default class LearningCurriculumContainer extends Component {
  static navigationOptions = {
    title: 'Curriculum',
  };
  render() {
    const gradeLevelName = this.props.navigation.getParam('gradeLevelName');
    return (
      <Query
        variables={{ gradeLevelName: gradeLevelName }}
        query={gql`
          query($gradeLevelName: String!) {
            allSubjects {
              id
              title
              activity(
                filter: { gradeLevel: { gradeLevelName: $gradeLevelName } }
              ) {
                id
                title
                gradeLevel {
                  id
                  gradeLevelName
                }
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <LoadingScreen />;
          if (error) return <QueryError />;
          return (
            <LearningCurriculum
              navigation={this.props.navigation}
              data={formatLearningCurriculumData(data.allSubjects)}
            />
          );
        }}
      </Query>
    );
  }
}
LearningCurriculumContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
