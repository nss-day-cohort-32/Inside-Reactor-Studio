import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import React, { Component } from 'react';
import EventList from "./event/EventList"
import EventManager from "../modules/EventManager"
import Welcome from "./Welcome"

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

  // isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  render() {
    console.log('ApplicationViews render')
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Welcome />
        }} />
        <Route exact path="/events" render={(props) => {
          return <EventList events={this.state.events} />
        }} />
      </React.Fragment>
    )
  }
}


export default withRouter(ApplicationViews)
