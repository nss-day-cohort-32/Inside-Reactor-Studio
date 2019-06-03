import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import LoginManager from '../../modules/LoginManager';
import Login from "./signup/login";
import { get } from 'http';


export default class Logout extends Component {

    handleLogout = async event => {
        await Auth.signOut();

        this.userHasAuthenticated(false);

        this.props.history.push("/");
    }