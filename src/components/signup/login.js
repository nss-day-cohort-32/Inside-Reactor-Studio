import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import LoginManager from '../../modules/LoginManager';
import { get } from 'http';

export default class Login extends Component {
  // Set initial state
  state = {
    userName: '',
    email: ''
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  // Simplistic handler for login submit
  handleLogin = e => {
    e.preventDefault();

    LoginManager.get(this.state.userName).then(result => {
      console.log('result', result);
      if (result.length > 0) {
        sessionStorage.setItem(
          'credentials',
          JSON.stringify({
            userName: result[0].user_name,
            email: result[0].email,
            id: result[0].id
          })
        );
        this.props.history.push('/');
      } else {
        alert('Please sign up');
      }
    });

    /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
  };

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputUserName">Name</label>
        <input
          onChange={this.handleFieldChange}
          type="text"
          id="userName"
          placeholder="FirstName LastName"
          required=""
          autoFocus=""
        />

        <label htmlFor="inputUserEmail">Email</label>
        <input
          onChange={this.handleFieldChange}
          type="email"
          id="email"
          placeholder="Name@Mail.com"
          required=""
        />
        <button type="submit">Sign in</button>
      </form>
    );
  }
}
