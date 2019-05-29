import React, { Component } from 'react';


export default class EventForm extends Component {
  // Set initial state
  state = {
    task_title: '',
    task_doneBy: '',
    task_completed: ''
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  saveNewTask = evt => {
    evt.preventDefault();

    const event = {
      task_title: this.state.task_title,
      task_doneBy: this.state.task_doneBy,
      // Make sure the event_date is saved to the database as a number since it is a foreign key.
      task_completed: this.state.task_completed
    };

    this.props.addTask(event).then(() => this.props.history.push('/tasks'));
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
            className="button"
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
