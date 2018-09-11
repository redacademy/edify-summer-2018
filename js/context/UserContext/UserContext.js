import React, { createContext, Component } from 'react';
import { addUser, removeUser, getUser } from './../../config/models.js';

const UserContext = createContext();

class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.getUserAuth();
  }

  getUserAuth = () => {
    try {
      this.setState({ user: getUser() });
    } catch (error) {
      console.log('Error: ' + error);
    }
  };

  addUserAuth = (id, token) => {
    try {
      addUser(id, token);

      this.getUserAuth();
    } catch (error) {
      console.log('Error: ' + error);
    }
  };

  removeUserAuth = id => {
    try {
      removeUser(id);

      this.getUserAuth();
    } catch (error) {
      console.log('Error: ' + error);
    }
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          getUser: this.getUserAuth,
          addUser: this.addUserAuth,
          removeUser: this.removeUserAuth,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContext;
export { UserProvider };
