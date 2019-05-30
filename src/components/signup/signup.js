import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import LoginManager from '../../modules/LoginManager';

export default class SignupForm extends Component {

    // Set initial state
    state = {
        userName: '',
        password: '',
        currentUser: {}
    };

    addUser = user =>
        LoginManager.post(user)
            // .then(() => LoginManager.getAll('users'))
            .then(newUser => {
                this.setState({
                    currentUser: user
                })
                console.log("new user", newUser)
            }
            )
    // .then(() => this.props.history.push('users'));

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    saveNewUser = evt => {
        evt.preventDefault();

        const user = {
            user_name: this.state.user_name,
            password: this.state.password,
        };
        console.log("user", user)

        this.addUser(user).then(() => this.props.history.push('/'));
    };

    render() {
        return (
            <React.Fragment>
                <form className="SignupForm">
                    <div className="form-group">
                        <label htmlFor="user_name">User Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="user_name"
                            placeholder="User Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_password">Password</label>
                        <input
                            type="password"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="password"
                            placeholder="User Password"
                        />
                    </div>
                    <button
                        className="button"
                        onClick={this.saveNewUser}
                        className="btn btn-primary"
                    >
                        Submit
              </button>
                </form>
            </React.Fragment>
        );
    }

}


