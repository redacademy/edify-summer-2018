import React, { Component } from 'react';
import ChildInfo from './ChildInfo';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { compose, graphql } from 'react-apollo';

const UPDATE_CHILD = gql`
  mutation($childId: ID!, $childName: String!) {
    updateChild(id: $childId, name: $childName) {
      id
      name
    }
  }
`;

const UPDATE_USER = gql`
  mutation(
    $id: ID!
    $firstname: String!
    $lastname: String!
    $phone: String!
    $email: String!
  ) {
    updateUser(
      id: $id
      firstname: $firstname
      lastname: $lastname
      phone: $phone
      email: $email
    ) {
      id
      firstname
      lastname
      phone
      email
    }
  }
`;

class ChildInfoContainer extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  constructor(props) {
    super(props);

    this.state = {
      editInfo: false,
      formValues: {},
      child: null,
    };
  }

  componentDidMount() {
    const child = this.props.navigation.getParam('child');
    this.setState({ child });
  }

  _showEdit = () => {
    this.setState({ editInfo: true });
  };

  _updateFormValues = values => {
    this.setState(prevState => ({
      formValues: { ...prevState.formValues, ...values },
    }));
  };

  _setFormValues = values => {
    this.setState({ formValues: values });
  };

  _resetForm() {
    this.setState({ formValues: {}, editInfo: !this.state.editInfo });
    !this.state.editInfo && this.props.navigation.goBack();
  }

  render() {
    const { navigation } = this.props;
    const child = navigation.getParam('child');
    return (
      <ChildInfo
        child={child}
        editChildInfo={this.state.editInfo}
        showEditInfo={this._showEdit}
        updateFormValues={values => this._updateFormValues(values)}
        setFormValues={values => this._setFormValues(values)}
        updateChild={this.props.updateChildMutation}
        updateUser={this.props.updateUserMutation}
        values={this.state.formValues}
        resetForm={() => this._resetForm()}
      />
    );
  }
}

ChildInfoContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
  updateUserMutation: PropTypes.func.isRequired,
  updateChildMutation: PropTypes.func.isRequired,
};

export default compose(
  graphql(UPDATE_USER, {
    name: 'updateUserMutation',
  }),
  graphql(UPDATE_CHILD, {
    name: 'updateChildMutation',
  }),
)(ChildInfoContainer);
