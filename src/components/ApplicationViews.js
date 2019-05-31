import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import React, { Component } from 'react';
import Header from '../components/layout/Header';
import EventManager from '../modules/EventManager'
import EventList from './event/EventList';
import EventForm from './event/EventForm';

import TaskList from './task/TaskList';
import NewsList from './news/NewsList'
import NewsForm from "./news/NewsForm"
import NewsEditForm from "./news/NewsEditForm"

class ApplicationViews extends Component {
  state = {
    login: [],
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

  render() {
    console.log('ApplicationViews render');
    return (
      <React.Fragment>
        <div className="container">
          {/* HEADER */}
          <Header />
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
        </div>
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

