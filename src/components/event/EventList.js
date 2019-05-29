import React, { Component } from 'react'
import "./EventList.css"
import { Link } from "react-router-dom"




export default class EventList extends Component {
    render() {
        return (
            <section className="events">
              <div className="eventButton">
                <button><Link to="/events/new">
                  Add Event
                  </Link></button>
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
                    <button className="deleteEvent">Delete</button>
                    <button className="editEvent">Edit</button>
                  </div>
                </div>
              ))}
            </section>
          );
        }
      }