import React, { Component } from 'react';
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
      <article className="event-card">
        <h4>{this.props.event.event_name}</h4>
        <h6>{this.props.event.event_details}</h6>
        <h6>{this.props.event.event_date}</h6>
        <button onClick={this.handleClick} disabled={this.state.saveDisabled}>
          Delete
        </button>
        <hr />
      </article>
    );
  }
}

export default EventCard;
