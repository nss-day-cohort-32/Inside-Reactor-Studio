import React, { Component } from 'react';
import TaskManager from '../../modules/TaskManager';

export class TaskEditForm extends Component {
  state = {
    task_title: '',
    task_doneBy: '',
    task_completed: ''
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };


  updateExistingTask = evt => {
    evt.preventDefault();

    const editedTask = {
      id: this.props.match.params.taskId,
      task_title: this.state.task_title,
      task_doneBy: this.state.task_doneBy,
      task_completed: this.state.task_completed
    };
    console.log('edited task', editedTask);
    TaskManager.put(editedTask).then(() => 
    this.props.history.push('/tasks'));

    // this.props.updateTask(editedTask)
    // .then(() => this.props.history.push('/tasks'))
  };

  componentDidMount() {
    TaskManager.get(this.props.match.params.taskId).then(task => {
      this.setState({
        task_title: task.task_title,
        task_doneBy: task.task_doneBy,
        task_completed: task.task_completed
      });
    });
  }
  render() {
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
              value={this.state.task_title}
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
              value={this.state.task_doneBy}
            />
          </div>
          <button
            className="button"
            onClick={this.updateExistingTask}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default TaskEditForm;
