import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MessageCard from './MessageCard';
import MessagesManager from '../../modules/MessageManager';

export default class MessageList extends Component {
  state = {
    messages: []
  };


  deleteMessage = id => {
    const newState = {};
    MessagesManager.deleteMessage(id)
      .then(MessagesManager.getAll)
      .then(messages => {
        console.log('messages', messages);
        newState.messages = messages;
        this.setState(newState);
      })
  };

  componentDidMount() {
    const newState = {};
    MessagesManager.getAll("messages")
      .then(messages => newState.messages = messages)
      .then(() => this.setState(newState))
  }

  render() {
    return (
      <div className="messages">
        <h2>Messages</h2>
        <div className="messageButton">
          <button>
            <Link to="/messages/new">Add Message</Link>
          </button>
        </div>
        {/* <h2>All Messages</h2> */}
        <section className="messages">
          {this.state.messages.map(item => {
            return (
              <MessageCard
                key={item.id}
                message={item}
                {...this.props}
                deleteMessage={this.deleteMessage}
              />
            );
          })}
        </section>
      </div>
    );
  }
}