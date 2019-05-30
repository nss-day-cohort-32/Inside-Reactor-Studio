import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';


const Welcome = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Welcome, User!</h1>
                    <p className="lead">Your day in a nutshell. See what events you have planned, latest news, tasks, and even chat with your friends or make new friends.</p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Welcome;