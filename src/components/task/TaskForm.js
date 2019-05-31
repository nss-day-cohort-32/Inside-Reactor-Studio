import React, { Component } from 'react';


export default class EventForm extends Component {
  // Set initial state
  state = {
    task_title: '',
    task_doneBy: '',
    task_completed: ''
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  saveNewTask = evt => {
    evt.preventDefault();

    const task = {
      task_title: this.state.task_title,
      task_doneBy: this.state.task_doneBy,
      task_completed: this.state.task_completed
    };
    console.log(task)
    this.props.addTask(task).then(() => this.props.history.push('/tasks'));
  };

  render() {
    console.log("form render")
    return (
      <React.Fragment>
        <form className="taskForm">
          <div className="form-group">
            <label htmlFor="task_name">Task Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="task_title"
              placeholder="Task Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="tasks">Task Due Date</label>
            <input
              type="date"
              required
              className="form-control"
              name="task_doneBy"
              id="task_doneBy"
              onChange={this.handleFieldChange}
            />
          </div>
          <button
            className="button"
            onClick={this.saveNewTask}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
