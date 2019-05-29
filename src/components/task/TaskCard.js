import React, { Component } from 'react';
class TaskCard extends Component {
  state = {
    saveDisabled: false
  };

  handleChange = e => {
    console.log('change', e.target.checked);
  }


  handleClick = e => {
    console.log('click', e, this.props.task.id);
    this.setState({
      saveDisabled: true
    });
    this.props.deleteTask(this.props.task.id);
  };

  render() {
    return (
      <article className="task-card">
        <h4>{this.props.task.task_title}</h4>
        <h6>{this.props.task.task_doneBy}</h6>
        <h6><input type="checkbox" onClick={this.handleChange}/>{this.props.task.task_completed}</h6>
        <button onClick={this.handleClick} disabled={this.state.saveDisabled}>
          Delete
        </button>
        <hr />
      </article>
    );
  }
}

export default TaskCard;
