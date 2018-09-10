import React, { Component } from 'react';
import ChildInfo from './ChildInfo';
import PropTypes from 'prop-types';

export default class ChildInfoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editInfo: false,
      formValues: {},
    };
  }
  _showEdit = () => {
    this.setState({ editInfo: true });
  };
  _updateFormValues = values => {
    this.setState({ formValues: values });
  };
  _updateChildInfo = () => {
    // function to update database
    this.setState({ formValues: {}, editInfo: false });
  };
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigation } = this.props;
    const child = navigation.getParam('child', 'hello');
    return (
      <ChildInfo
        child={child}
        editChildInfo={this.state.editInfo}
        showEditInfo={this._showEdit}
        updateFormValues={values => this._updateFormValues(values)}
        updateChildInfo={this._updateChildInfo}
      />
    );
  }
}

ChildInfoContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
