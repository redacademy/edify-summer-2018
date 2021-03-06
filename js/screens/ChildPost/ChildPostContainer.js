import React, { Component } from 'react';
import ChildPost from './ChildPost';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import LoadingScreen from '../../components/LoadingScreen';
import QueryError from '../../components/QueryError';
import PropTypes from 'prop-types';

class ChildPostContainer extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  POST_BY_ID = gql`
    query postById($id: ID!) {
      Posts(id: $id) {
        id
        imageurl
        description
        creator {
          id
          firstname
        }
        createdAt
        tag {
          id
          description
          title
        }
        mood {
          imageurl
          description
        }
        child {
          parent {
            id
          }
        }
        comment(filter: { post: { id: $id } }) {
          id
          text
          user {
            firstname
          }
          createdAt
        }
      }
    }
  `;

  render() {
    const { navigation } = this.props;
    const postId = navigation.getParam('postId');
    return (
      <Query variables={{ id: postId }} query={this.POST_BY_ID}>
        {({ loading, error, data }) => {
          console.log(data);
          if (loading) return <LoadingScreen />;
          if (error) return <QueryError />;
          return (
            <ChildPost
              post={data.Posts}
              navigation={this.props.navigation}
              query={this.POST_BY_ID}
            />
          );
        }}
      </Query>
    );
  }
}

ChildPostContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ChildPostContainer;
