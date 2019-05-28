import React, { Component } from 'react';

export default class EventList extends Component {
  render() {
    return (
      <section className="events">
        <div className="eventButton">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push('/events');
            }}
          >
            Add Event
          </button>
        </div>
        {/* <h2>All Events</h2> */}
        {this.props.events.map(event => (
          <div key={event.id} className="card">
            <div className="card-body">
              <h5 className="card-title">
                {event.event_name}
                <br />
                {event.event_details}
                <br />
                {event.event_date}
              </h5>
            </div>
          </div>
        ))}
      </section>
    );
  }
}
