import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './EventList.css';
class EventCard extends Component {
  state = {
    saveDisabled: false
  };

  handleClick = e => {
    console.log('click', e, this.props.event.id);
    this.setState({
      saveDisabled: true
    });
    this.props.deleteEvent(this.props.event.id);
  };

  render() {
    return (
      <div className="event-card">
        <h2>{this.props.event.event_name}</h2>
        <h6>{this.props.event.event_date}</h6>
        <h5>
        <br/>{this.props.event.event_details}</h5>
        <br/>
        <button onClick={this.handleClick} disabled={this.state.saveDisabled}>
          Delete
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            this.props.history.push(`/events/${this.props.event.id}/edit`)
          }}>Edit</button>
        <br/><br/>
      </div>
    );
  }
}

export default withRouter (EventCard);
