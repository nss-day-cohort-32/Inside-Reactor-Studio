import React, { Component } from 'react';

export class AddTask extends Component {
  state = {
    title: '',
    doneBy: ''
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.addTask(this.state);
    this.setState({
      title: '',
      doneBy: ''
    });
  };

  onChangeTitle = e => this.setState({ title: e.target.value });

  onChangeDate = e => this.setState({ doneBy: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Task"
          value={this.state.title}
          onChange={this.onChangeTitle}
        />
        <input
          type="date"
          name="date"
          style={{ flex: '10', padding: '5px' }}
          value={this.state.doneBy}
          onChange={this.onChangeDate}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}

export default AddTask;
