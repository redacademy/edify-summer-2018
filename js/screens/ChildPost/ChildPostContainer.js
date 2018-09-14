import React, { Component } from 'react';
import ChildPost from './ChildPost';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import LoadingScreen from '../../components/LoadingScreen';
import QueryError from '../../components/QueryError';

class ChildPostContainer extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    const { navigation } = this.props;
    const postId = navigation.getParam('postId');
    return (
      <Query
        variables={{ id: postId }}
        query={gql`
          query postById($id: ID!) {
            Posts(id: $id) {
              imageurl
              description
              creator {
                id
                name
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
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          console.log(data);
          if (loading) return <LoadingScreen />;
          if (error) return <QueryError />;
          return (
            <ChildPost post={data.Posts} navigation={this.props.navigation} />
          );
        }}
      </Query>
    );
  }
}

export default ChildPostContainer;
