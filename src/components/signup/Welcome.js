import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import SignupForm from "./signup";


export default class Welcome extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Welcome to Nutshell</h1>
                        <p className="lead">Your day in a nutshell. With this app you can see what events you have planned, latest news, tasks, and even chat with your friends or make new friends.</p>
                        <p className="lead">Let's get started.</p>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 3 }}>                        <button className="signup-btn" >
                                <Link to="/signup">Sign Up</Link>
                            </button></Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>                        <button className="login-btn" >
                                <Link to="/login">Login</Link>
                            </button></Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    };
}
