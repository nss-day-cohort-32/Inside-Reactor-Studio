import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import React, { Component } from 'react';
import EventList from './event/EventList';
import EventManager from '../modules/EventManager';
import EventForm from './event/EventForm';
import TaskManager from '../modules/TaskManager';
import TaskList from './task/TaskList';
import TaskForm from './task/TaskForm';

class ApplicationViews extends Component {
  state = {
    login: [],
    news: [],
    tasks: [],
    messages: [],
    friends: []
  };

  // componentDidMount() {
  //   const newState = {};

  //   EventManager.getAll().then(allEvents => {
  //     this.setState({
  //       events: allEvents
  //     });
  //   });
  // }

  addTask = task =>
    TaskManager.post(task)
      .then(() => TaskManager.getAll('tasks'))
      .then(tasks =>
        this.setState({
          tasks: tasks
        })
      );
  //  .then(() => this.props.history.push("tasks"))

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

  render() {
    console.log('ApplicationViews render');
    return (
      <React.Fragment>
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
