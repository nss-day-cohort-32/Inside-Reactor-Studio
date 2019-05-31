import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import TaskList from './TaskList';
export class TaskCard extends Component {
  getStyle = () => {
    return {
      background: '#f3f3f3',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.task.task_completed ? 'line-through' : 'none',
      color: this.props.task.task_completed ? 'red' : 'black',
    };
  };

  toggleComplete = e => {
    console.log(this.props);
  };

  render() {
    const { id, task_title, task_doneBy } = this.props.task;
    return (
      <div style={this.getStyle()}>
        <div>
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
          />{' '}
          {task_title} {task_doneBy}
          <button onClick={this.props.delTask.bind(this, id)} style={btnStyle}>
            X
          </button>
        </div>
      </div>
    );
  }
}

TaskCard.propTypes = {
  task: PropTypes.object.isRequired
};

const btnStyle = {
  background: '#ff0000',
  color: 'white',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};

export default TaskCard;
