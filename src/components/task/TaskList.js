import React, { Component } from 'react';
import TaskCard from './TaskCard';
import TaskManager from '../../modules/TaskManager';
import AddTask from './AddTask';
// import PropTypes from 'prop-types';
export class TaskList extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    TaskManager.getAll().then(allTasks => {
      console.log(allTasks);
      this.setState({
        tasks: allTasks
      });
    });
  }

  //Toggle Task Complete
  toggleComplete = id => {
    const matchTask = this.state.tasks.find(task => {
      if (task.id === id) {
        return true;
      }
    });

    const changes = {
      id: matchTask.id,
      task_completed: !matchTask.task_completed
    };

    TaskManager.patch(changes);
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          task.task_completed = !task.task_completed;
        }
        return task;
      })
    });
  };

  //Delete Task
  delTask = id => {
    this.setState({
      tasks: [...this.state.tasks.filter(task => task.id !== id)]
    });
    TaskManager.deleteTask(id)
      .then(() => TaskManager.getAll('tasks'))
      .then(tasks => this.setState({}));
  };

  //Add Task
  addTask = taskObj => {
    const newTask = {
      task_title: taskObj.title,
      task_doneBy: taskObj.doneBy,
      task_completed: false
    };
    TaskManager.post(newTask)
      .then(() => TaskManager.getAll('tasks'))
      .then(tasks =>
        this.setState({
          tasks
        })
      );
  };

  render() {
    console.log(this.state.tasks);

    return (
      <>
        <AddTask addTask={this.addTask} />
        {this.state.tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            toggleComplete={this.toggleComplete}
            delTask={this.delTask}
          />
        ))}
      </>
    );
  }
}

export default TaskList;
