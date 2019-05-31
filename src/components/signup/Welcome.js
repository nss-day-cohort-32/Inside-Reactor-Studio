import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import SignupForm from "./signup";
import "./welcome.css"


export default class Welcome extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid className="jumbo">
                    <Container fluid>
                        <h1 className="display-3">Your Day in a Nutshell</h1>
                        <p className="lead">With this app you can see what events you have planned, latest news,</p>
                        <p className="lead">tasks, and even chat with your friends or make new friends.</p>
                        <p className="lead">Let's get started.</p>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>                        <button className="signup-btn">
                                <Link to="/signup">Sign Up</Link>
                            </button></Col>
                            <Col sm={{ size: 'auto', offset: 0 }}>                        <button className="login-btn" >
                                <Link to="/login">Login</Link>
                            </button></Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div >
        );
    };
}
