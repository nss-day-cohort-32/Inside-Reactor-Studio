import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import React, { Component } from 'react';
import EventList from './event/EventList';
import EventManager from '../modules/EventManager';
import EventForm from './event/EventForm';
import TaskManager from '../modules/TaskManager';
import TaskList from './task/TaskList';
import TaskForm from './task/TaskForm';
import Welcome from "./signup/Welcome";
import SignupForm from "./signup/signup";
import Login from "./signup/login";

class ApplicationViews extends Component {
  state = {
    signup: [],
    news: [],
    tasks: [],
    messages: [],
    friends: []
  };
  // componentDidMount() {
  //  const newState = {};
  //  EventManager.getAll().then(allEvents => {
  //   this.setState({
  //    events: allEvents
  //   });
  //  });
  // }
  addTask = task =>
    TaskManager.post(task)
      .then(() => TaskManager.getAll('tasks'))
      .then(tasks =>
        this.setState({
          tasks: tasks
        })
      );
  // .then(() => this.props.history.push("tasks"))
  deleteTask = id => {
    const newState = {};
    TaskManager.deleteTask(id)
      .then(TaskManager.getAll)
      .then(tasks => {
        console.log('tasks', tasks);
        newState.tasks = tasks;
      })
      .then(() => {
        this.props.history.push('/tasks');
        this.setState(newState);
      });
  };

  isAuthenticated = () => sessionStorage.getItem('credentials') !== null;

  render() {
    console.log('ApplicationViews render');
    return (
      <React.Fragment>
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route exact path="/events" render={props => {
          return <EventList {...props} />
        }} />
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
        <Route exact path="/signup"
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
        <Route
          exact
          path="/tasks"
          render={props => {
            return (
              <TaskList
                tasks={this.state.tasks}
                {...props}
                deleteTask={this.deleteTask}
              />
            );
          }}
        />
        <Route
          exact
          path="/tasks/new"
          render={props => {
            return (
              <TaskForm
                {...props}
                tasks={this.state.tasks}
                addTask={this.addTask}
              />
            );
          }}
        />
      </React.Fragment>
    );
  }
}
export default withRouter(ApplicationViews);

