import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TaskCard from './TaskCard';

export default class TaskList extends Component {
  render() {
    return (
      <div className="tasks-div">
        <h2>Tasks</h2>
        <div className="taskButton">
          <button>
            <Link to="/tasks/new">Add Task</Link>
          </button>
        </div>
        {/* <h2>All Events</h2> */}
        <section className="tasks-section">
          {this.props.tasks.map(item => {
            return (
              <TaskCard
                key={item.id}
                task={item}
                {...this.props}
                deleteTask={this.props.deleteTask}
              />
            );
          })}
        </section>
      </div>
    );
  }
}
