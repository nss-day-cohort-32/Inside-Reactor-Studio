import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import React, { Component } from 'react';
import EventList from './event/EventList';
import EventManager from '../modules/EventManager';
import EventForm from './event/EventForm';
import TaskManager from '../modules/TaskManager';
import TaskList from './task/TaskList';
import TaskForm from './task/TaskForm';
import NewsList from './news/NewsList'
import NewsForm from "./news/NewsForm"
import NewsManager from "../modules/NewsManager"

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

  addArticle = article =>
    NewsManager.post(article)
      .then(() => NewsManager.getAll('articles'))
      .then(articles => 
        this.setState({
          news: articles
        })
      )
      .then(() => this.props.history.push('articles'));

    deleteArticle = id => {
      const newState = {};
      NewsManager.deleteArticle(id)
        .then(NewsManager.getAll)
        .then(articles => {
          console.log('articles', articles);
          newState.articles = articles;
        })
        .then(() => {
          this.props.history.push('./articles');
          this.setState(newState);
        })
    }

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
      </React.Fragment>
    );
  }
}

export default withRouter(ApplicationViews);
