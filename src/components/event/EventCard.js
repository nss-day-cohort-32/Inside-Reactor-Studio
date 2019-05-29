import React, { Component } from 'react';


export default class EventCard extends Component {

    state = {
        saveDisabled: false
    }
    handleClick = (event) => {
        console.log("click", event, this.props.event.id);
        this.setState({
            saveDisabled: true
        })
        this.props.deleteEvent(this.props.event.id);
    }
    render() {
        return (
            <article>
                <h3>{this.props.events.event_name}</h3>
                <h4>{this.props.events.event_details}</h4>

                <button onClick={this.handleClick}>Delete</button>

            </article>
        )
    }
}