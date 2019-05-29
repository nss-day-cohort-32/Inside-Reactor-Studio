import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import React, { Component } from 'react';
import EventList from "./event/EventList"
import EventCard from "./event/EventCard";
import EventManager from "../modules/EventManager"
import Welcome from "./Welcome"
import EventForm from "./event/EventForm"

class ApplicationViews extends Component {
  state = {
    login: [],
    events: [],
    news: [],
    tasks: [],
    messages: [],
    friends: []
  }

  componentDidMount() {
    const newState = {}

    EventManager.getAll().then(allEvents => {
      this.setState({
        events: allEvents
      })
    })


  }

  addEvent = event =>
    EventManager.post(event)
      .then(() => EventManager.getAll("events"))
      .then(events =>
        this.setState({
          events: events
        })
      ).then(() => this.props.history.push("events"))

  deleteEvent = (id) => {
    const newState = {};
    EventManager.deleteEvent(id)
      .then(EventManager.getAll("events"))
      .then(events => {
        console.log("events", events);
        newState.events = events;
      })
      .then(() => {
        this.props.history.push('/events');
        this.setState(newState);
      })



  }



  render() {
    console.log('ApplicationViews render')
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Welcome />
        }} />
        <Route exact path="/events" render={(props) => {
          return <EventList events={this.state.events} {...props} deleteEvent={this.deleteEvent} />
        }} />
        <Route exact path="/events/new" render={(props) => {
          return <EventForm {...props} events={this.state.events}
            addEvent={this.addEvent} />
        }} />
      </React.Fragment>
    )
  }
}


export default withRouter(ApplicationViews)
