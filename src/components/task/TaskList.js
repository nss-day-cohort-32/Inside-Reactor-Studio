import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import TaskCard from './TaskCard';
import TaskManager from '../../modules/TaskManager';
import AddTask from './AddTask';
import './Tasks.css';
import TaskHeader from '../layout/TaskHeader';
// import TaskEditForm from './TaskEditForm'
export class TaskList extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    TaskManager.getAll().then(allTasks => {
      console.log(allTasks);
      const storedData = sessionStorage.getItem('credentials');
      const storedObj = JSON.parse(storedData);
      const filteredTasks = allTasks.filter(task => {
        return storedObj.id === task.task_userId;
      });
      this.setState({
        tasks: filteredTasks
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
    const storedData = sessionStorage.getItem('credentials');
    const storedObj = JSON.parse(storedData);

    // console.log(JSON.parse(storedData))
    const newTask = {
      task_title: taskObj.title,
      task_doneBy: taskObj.doneBy,
      task_completed: false,
      task_userId: storedObj.id
    };

    TaskManager.post(newTask)
      .then(() => TaskManager.getAll('tasks'))
      .then(tasks => {
        console.log(tasks)
        const filteredTasks = tasks.filter(task => {
          return storedObj.id === task.task_userId;
        });
        this.setState({
          tasks: filteredTasks
        });
      });
  };

  render() {
    console.log(this.state.tasks);

    return (
      <>
        <TaskHeader />
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
