import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import React, { Component } from 'react';
// import Header from '../layout/Header';
import EventManager from '../modules/EventManager';
import EventList from './event/EventList';
import EventForm from './event/EventForm';
import EventEditForm from './event/EventEditForm';

import TaskList from './task/TaskList';
import TaskEditForm from './task/TaskEditForm';
import NewsList from './news/NewsList';
import NewsForm from './news/NewsForm';
import NewsEditForm from './news/NewsEditForm';
import Welcome from './signup/Welcome';
import SignupForm from './signup/signup';
import Login from './signup/login';
import FriendList from './friend/FriendList';
import MessageList from './message/MessageList';
import MessageForm from './message/MessageForm';
import MessagesManager from '../modules/MessageManager';


class ApplicationViews extends Component {
  state = {
    signup: [],
    news: [],
    messages: []
    // friends: []
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

  isAuthenticated = () => sessionStorage.getItem('credentials') !== null;

  render() {
    console.log('ApplicationViews render');
    return (
      <React.Fragment>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/signup"
          render={props => {
            return (
              <SignupForm
                {...props}
                users={this.state.users}
                addUser={this.addUser}
              />
            );
          }}
        />
        <div className="container-fluid">
          {/* TASKS */}
          <div className="">
            <Route
              exact
              path="/tasks"
              render={props => {
                return <TaskList />;
              }}
            />
          </div>
        </div>
        {/* EVENTS */}
        <div className="container-fluid">
          <div className="">
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
          </div>
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
            path="/events/:eventId(\d+)/edit"
            render={props => {
              return (
                <EventEditForm
                  {...props}
                  updateTask={this.updateTask}
                  tasks={this.state.tasks}
                />
              );
            }}
          />
        </div>
        <Route
          path="/tasks/:taskId(\d+)/edit"
          render={props => {
            return (
              <TaskEditForm
                {...props}
                updateTask={this.updateTask}
                tasks={this.state.tasks}
              />
            );
          }}
        />
        <div className="container-fluid">
          <div className="">
            <Route
              exact
              path="/articles"
              render={props => {
                return (
                  <NewsList
                    news={this.state.news}
                    {...props}
                    deleteArticle={this.deleteArticle}
                  />
                );
              }}
            />
            <Route
              exact
              path="/articles/new"
              render={props => {
                return (
                  <NewsForm
                    {...props}
                    news={this.state.news}
                    addArticle={this.addArticle}
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
                  Messages={this.state.messages}
                  {...props}
                  deleteMessage={this.deleteMessage}
                />
              );
            }}
          />
          <Route
            exact
            path="/messages/new"
            render={props => {
              return (
                <MessageForm
                  {...props}
                  events={this.state.messages}
                  addMessage={this.addMessage}
                />
              );
            }}
          />
            <Route
              exact
              path="/articles/:articleId(\d+)/edit"
              render={props => {
                return (
                  <NewsEditForm
                    {...props}
                    news={this.state.news}
                    updateExistingArticle={this.updateExistingArticle}
                  />
                );
              }}
            />
            <Route
              exact
              path="/friends"
              render={props => {
                return <FriendList friends={this.state.friends} {...props} />;
              }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(ApplicationViews);
