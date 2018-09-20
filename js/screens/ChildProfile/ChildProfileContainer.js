import React, { Component } from 'react';
import ChildProfile from './ChildProfile';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import LoadingScreen from '../../components/LoadingScreen';
import QueryError from '../../components/QueryError';

const ADD_NOTE_MUTATION = gql`
  mutation makenotes(
    $childId: ID!
    $creatorId: ID!
    $message: String!
    $starred: Boolean!
  ) {
    createNotes(
      childId: $childId
      creatorId: $creatorId
      message: $message
      starred: $starred
    ) {
      child {
        id
      }
    }
  }
`;

const CHILD_DATA = gql`
  query($id: ID!) {
    Child(id: $id) {
      id
      grade
      avatar {
        imageurl
      }
      name
      notes(orderBy: createdAt_DESC) {
        id
        creator {
          id
          firstname
          lastname
        }
        message
        starred
        createdAt
      }
      parent {
        id
        firstname
        lastname
        email
        phone
      }
      updates {
        id
        createdAt
        imageurl
        creator {
          firstname
          lastname
          id
        }
        tag {
          title
          description
          id
        }
        mood {
          imageurl
          description
        }
        description
      }
    }
  }
`;
class ChildProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showUpdates: false,
      showModal: false,
    };
  }
  _showUpdates = show => {
    this.setState({ showUpdates: show });
  };
  _showModal = show => {
    this.setState({ showModal: show });
  };
  _handleNoteMutation = note => {
    const newNote = {
      variables: {
        creatorId: this.props.data.Child.parent.id,
        childId: this.props.data.Child.id,
        message: note,
        starred: false,
      },
    };
    this.props.mutate(newNote);
  };
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const {
      data: { loading, error, Child },
    } = this.props;
    if (loading) return <LoadingScreen />;
    if (error) return <QueryError />;
    return (
      <ChildProfile
        showUpdates={this.state.showUpdates}
        toggleShowUpdates={show => this._showUpdates(show)}
        child={Child}
        showModal={show => this._showModal(show)}
        modalShown={this.state.showModal}
        navigation={this.props.navigation}
        addNote={note => this._handleNoteMutation(note)}
      />
    );
  }
}

ChildProfileContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
  mutate: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default compose(
  graphql(CHILD_DATA, {
    options: props => ({
      variables: { id: props.navigation.getParam('id') },
    }),
  }),
  graphql(ADD_NOTE_MUTATION, {
    options: {
      refetchQueries: mutationResult => [
        {
          query: CHILD_DATA,
          variables: {
            id: mutationResult.data.createNotes.child.id,
          },
        },
      ],
    },
  }),
)(ChildProfileContainer);
