import React, { Component } from 'react';
import './EventList.css';
import { Link } from 'react-router-dom';
import EventCard from './EventCard';
import EventManager from '../../modules/EventManager';
export default class EventList extends Component {
  state = {
    events: []
  };
  componentDidMount() {
    const newState = {};

    EventManager.getAll().then(allEvents => {
      this.setState({
        events: allEvents
      });
    });
  }

  render() {
    return (
      <div className="events">
        <h2>Events</h2>
        <div className="eventButton">
          <button>
            <Link to="/events/new">Add Event</Link>
          </button>
        </div>
        {/* <h2>All Events</h2> */}
        <section className="events">
          {this.state.events.map(item => {
            return (
              <EventCard
                key={item.id}
                event={item}
                {...this.props}
                deleteEvent={this.props.deleteEvent}
              />
            );
          })}
        </section>
      </div>
    );
  }
}
