import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import React, { Component } from 'react';
import EventList from './event/EventList';
import EventForm from './event/EventForm';
import TaskManager from '../modules/TaskManager';
import TaskList from './task/TaskList';
import TaskForm from './task/TaskForm';
import NewsList from './news/NewsList'
import NewsForm from "./news/NewsForm"
import NewsEditForm from "./news/NewsEditForm"

class ApplicationViews extends Component {
  state = {
    login: [],
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

  render() {
    console.log('ApplicationViews render');
    return (
      <React.Fragment>
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
        <Route 
        exact
        path="/articles"
        render={props => {
          return(
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
          return(
            <NewsForm
            {...props}
            news={this.state.news}
            addArticle={this.addArticle}
            />
          );
        }}
        />
        <Route
  exact path="/articles/:articleId(\d+)/edit" render={props => {
    return <NewsEditForm {...props} news={this.state.news} updateExistingArticle={this.updateExistingArticle}/>
  }}
/>
      </React.Fragment>
    );
  }
}
export default withRouter(ApplicationViews);

