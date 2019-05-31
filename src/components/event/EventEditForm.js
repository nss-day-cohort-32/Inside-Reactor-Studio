import React, { Component } from 'react';
import EventManager from '../../modules/EventManager';

export class EventEditForm extends Component {
  state = {
    event_name: '',
    event_details: '',
    event_date: ''
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingEvent = evt => {
    evt.preventDefault();

    const editedEvent = {
      id: this.props.match.params.eventId,
      event_name: this.state.event_name,
      event_details: this.state.event_details,
      event_date: this.state.event_date
    };
    console.log('edited event', editedEvent);
    EventManager.put(editedEvent).then(() =>
      this.props.history.push('/events')
    );
  };

  componentDidMount() {
    EventManager.get(this.props.match.params.eventId).then(event => {
      this.setState({
        event_name: event.event_name,
        event_details: event.event_details,
        event_date: event.event_date
      });
    });
  }
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
              value={this.state.event_name}
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
              value={this.state.event_details}
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
              value={this.state.event_date}
            />
          </div>
          <button className="button" onClick={this.updateExistingEvent}>
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default EventEditForm;
