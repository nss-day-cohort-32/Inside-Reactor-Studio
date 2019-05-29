import React, { Component } from 'react';
import EventList from "./EventList";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


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
            <div>
                <div key={this.props.event.id} className="card">
                    <Card>
                        <CardImg top width="100%" src="/src/components/event/calendar.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{this.props.event.event_name}</CardTitle>
                            <CardSubtitle>{this.props.event.event_date}</CardSubtitle>
                            <CardText>{this.props.event.event_details}</CardText>
                            <Button className="deleteEvent">Delete</Button>
                            <Button className="editEvent">Edit</Button>
                        </CardBody>
                    </Card>
                    {/* <div className="card-body">
              <h5 className="card-title"> */}
                    {/* {event.event_name} */}
                    {/* <br /> */}
                    {/* {event.event_details} */}
                    {/* <br /> */}
                    {/* {event.event_date} */}
                    {/* </h5>
                    <button className="deleteEvent">Delete</button>
                    <button className="editEvent">Edit</button>
            </div>
        )) */}
                </div>
            </div>
            // <article>
            //     <h3>{this.props.events.event_name}</h3>
            //     <h4>{this.props.events.event_details}</h4>

            //     <button onClick={this.handleClick}>Delete</button>

            // </article>
        )
    }
}