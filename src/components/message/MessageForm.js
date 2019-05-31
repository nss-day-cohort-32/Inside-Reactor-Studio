import React, { Component } from 'react';
import MessageManager from '../../modules/MessageManager';
import './MessageList.css';

export default class MessageForm extends Component {
  // Set initial state
  state = {
    message_userName: '',
    message_details: '',
    message_date: ''
  };

  addMessage = message =>
    MessageManager.post(message)
      .then(() => MessageManager.getAll('messages'))
      .then(messages =>
        this.setState({
          messages: messages
        })
      )
      .then(() => this.props.history.push('messages'));

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  saveNewMessage = evt => {
    evt.preventDefault();

    const message = {
      message_userName: this.state.userName,
      message_details: this.state.message_content,
      message_date: this.state.date
    };

    this.addMessage(message).then(() => this.props.history.push('/messages'));
  };

  render() {
    return (
      <React.Fragment>
        <form className="messageForm">
          <div className="form-group">
            <label htmlFor="message_name">Message</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="message_name"
              placeholder="Message Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message_details">Message Details</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="message_details"
              placeholder="message_details"
            />
          </div>
          <div className="form-group">
            <label htmlFor="messages">Messages</label>
            <input
              type="date"
              required
              className="form-control"
              name="message_date"
              id="message_date"
              onChange={this.handleFieldChange}
            />
          </div>
          <button className="button" onClick={this.saveNewMessage}>
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
