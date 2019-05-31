import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import React, { Component } from 'react';
// import Header from '../components/layout/Header';
import EventList from './event/EventList';
import EventManager from '../modules/EventManager';
import EventForm from './event/EventForm';
import TaskList from './task/TaskList';
import Welcome from "./signup/Welcome";
import SignupForm from "./signup/signup";
import Login from "./signup/login";
import MessageList from './message/MessageList';
import MessageForm from './message/MessageForm';
import MessagesManager from '../modules/MessagesManager';


class ApplicationViews extends Component {
  state = {
    signup: [],
    news: [],
    messages: [],
    friends: []
  };

  componentDidMount() {
    EventManager.getAll().then(allEvents => {
      this.setState({
        events: allEvents
      });
    });
  }


  addEvent = event =>
    EventManager.post(event)
      .then(() => EventManager.getAll('events'))
      .then(events =>
        this.setState({
          events: events
        })
      )
      .then(() => this.props.history.push('events'));

  deleteEvent = id => {
    const newState = {};
    EventManager.deleteEvent(id)
      .then(EventManager.getAll)
      .then(events => {
        console.log('events', events);
        newState.events = events;
      })
      .then(() => {
        this.props.history.push('/events');
        this.setState(newState);
      });
  };

  componentDidMount() {
    MessagesManager.getAll().then(allMessages => {
      this.setState({
        messages: allMessages
      });
    });
  }

  addMessage = message =>
    MessagesManager.post(message)
      .then(() => MessagesManager.getAll('messages'))
      .then(message =>
        this.setState({
          message: message
        })
      )
    .then(() => this.props.history.push('messages'));

    deleteMessage = id => {
      const newState = {};
        EventManager.deleteMessage(id)
          .then(MessagesManager.getAll)
          .then(message => {
            newState.message = message
          })
          .then(() => {
            this.props.history.push('/messages');
            this.setState(newState);
          });
      };

  isAuthenticated = () => sessionStorage.getItem('credentials') !== null;

  render() {
    console.log('ApplicationViews render');
    return (
      <React.Fragment>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" render={props => {
          return (
            <SignupForm {...props}
              users={this.state.users}
              addUser={this.addUser}
            />
          );
        }}
        />
        <div className="container">
          {/* HEADER */}
          {/* <Header /> */}
          {/* TASKS */}
          <Route
            exact
            path="/tasks"
            render={props => {
              return <TaskList />;
            }}
          />
          {/* EVENTS */}
          <Route
            exact
            path="/events"
            render={props => {
              return (
                <EventList
                  events={this.state.events}
                  {...props}
                  deleteEvent={this.deleteEvent}
                />
              );
            }}
          />
          <Route
            exact
            path="/events/new"
            render={props => {
              return (
                <EventForm
                  {...props}
                  events={this.state.events}
                  addEvent={this.addEvent}
                />
              );
            }}
          />
          <Route
            exact
            path="/messages"
            render={props => {
              return (
                <MessageList
                  messages={this.state.messages}
                  {...props}
                  deleteMessage={this.deleteMessage}
                />
              );
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(ApplicationViews);

