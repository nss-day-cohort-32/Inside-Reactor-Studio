import React, { Component } from 'react';
import EventManager from '../../modules/EventManager';
import './EventList.css';

export default class EventForm extends Component {
  // Set initial state
  state = {
    event_name: '',
    event_details: '',
    event_date: ''
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

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  saveNewEvent = evt => {
    evt.preventDefault();

    const event = {
      event_name: this.state.event_name,
      event_details: this.state.event_details,
      // Make sure the event_date is saved to the database as a number since it is a foreign key.
      event_date: this.state.event_date
    };

    this.addEvent(event).then(() => this.props.history.push('/events'));
  };

  render() {
    return (
      <React.Fragment>
        <form className="eventForm">
          <div className="form-group">
            <label htmlFor="event_name">Event Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="event_name"
              placeholder="Event Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="event_details">Event Details</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="event_details"
              placeholder="event_details"
            />
          </div>
          <div className="form-group">
            <label htmlFor="events">Event Date</label>
            <input
              type="date"
              required
              className="form-control"
              name="event_date"
              id="event_date"
              onChange={this.handleFieldChange}
            />
          </div>
          <button
            onClick={this.saveNewEvent}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
