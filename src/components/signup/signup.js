import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import LoginManager from '../../modules/LoginManager';

export default class SignupForm extends Component {

    // Set initial state
    state = {
        userName: '',
        email: '',
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
            email: this.state.email,
        };
        console.log("user", user)

        this.addUser(user).then(() => this.props.history.push('/'));
    };

    render() {
        return (
            <React.Fragment>
                <form className="SignupForm">
                    <div className="form-group">
                        <label htmlFor="user_name">Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="user_name"
                            placeholder="FirstName LastName"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_email">Email</label>
                        <input
                            type="email"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="email"
                            placeholder="Name@Mail.com"
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


