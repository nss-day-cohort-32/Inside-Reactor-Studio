import React, { Component } from 'react';
import './MessageList.css';
class MessageCard extends Component {
  state = {
    saveDisabled: false
  };


  handleClick = e => {
    console.log('click', e, this.props.message.id);
    this.setState({
      saveDisabled: true
    });
    this.props.deleteMessage(this.props.message.id);
  };

  render() {
    return (
      <div className="message-card">
        <h4>{this.props.messages.userName}</h4>
        <h6>{this.props.messages.message_content}</h6>
        <h6>{this.props.messages.date}</h6>
        <button onClick={this.handleClick} disabled={this.state.saveDisabled}>
          Delete
        </button>
        <hr />
      </div>
    );
  }
}

export default MessageCard;

