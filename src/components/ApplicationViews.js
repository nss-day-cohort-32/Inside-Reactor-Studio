import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import React, { Component } from 'react';
import EventList from "./event/EventList"
import EventManager from "../modules/EventManager"
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

  // isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  render() {
    console.log('ApplicationViews render')
    return (
      <React.Fragment>
        <Route exact path="/events" render={(props) => {
          return <EventList events={this.state.events}/>
        }} />
        <Route exact path="/events/new" render={(props) => {
          return <EventForm {...props} events={this.state.events}
          addEvent={this.addEvent} />
        }} />
      </React.Fragment>
    )}
}


export default withRouter(ApplicationViews)
