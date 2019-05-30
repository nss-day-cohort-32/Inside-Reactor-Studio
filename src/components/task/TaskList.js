import React, { Component } from 'react';
import TaskCard from './TaskCard'
import PropTypes from 'prop-types'
export class TaskList extends Component {


  render() {
    console.log(this.props.tasks);
    return this.props.tasks.map(task => 
      <TaskCard key={task.id}task={task} toggleComplete={this.props.toggleComplete}/>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired
}

export default TaskList;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import TaskCard from './TaskCard'
// import TaskManager from '../../modules/TaskManager';
// export default class TaskList extends Component {
//   state = {
//     tasks: []
//   };
//   componentDidMount() {
//     const newState = {};

//     TaskManager.getAll().then(allTasks => {
//       this.setState({
//         tasks: allTasks
//       });
//     });
//   }

//   render() {
//     return (
//       <div className="tasks-div">
//         <h2>Tasks</h2>
//         <div className="taskButton">
//           <button>
//             <Link to="/tasks/new">Add Task</Link>
//           </button>
//         </div>
//         {/* <h2>All Events</h2> */}
//         <section className="tasks-section">
//           {this.state.tasks.map(item => {
//             return (
//               <TaskCard
//                 key={item.id}
//                 task={item}
//                 {...this.props}
//                 deleteTask={this.props.deleteTask}
//               />
//             );
//           })}
//         </section>
//       </div>
//     );
//   }
// }
