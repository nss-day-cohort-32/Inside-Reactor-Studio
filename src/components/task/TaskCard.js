import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import TaskList from './TaskList';
export class TaskCard extends Component {
  getStyle = () => {
    return {
      background: '#f3f3f3',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.task.completed ? 'line-through' : 'none'
    };
  };

  toggleComplete = e => {
    console.log(this.props);
  };

  render() {
    const { id, title } = this.props.task;
    return (
      <div style={this.getStyle()}>
        <h1>
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
          />{' '}
          {title}
        </h1>
      </div>
    );
  }
}

TaskCard.propTypes = {
  task: PropTypes.object.isRequired
};

export default TaskCard;

// import React, { Component } from 'react';
// class TaskCard extends Component {
//   state = {
//     saveDisabled: false
//   };

//   handleChange = e => {
//     console.log('change', e.target.checked);
//   }

//   handleClick = e => {
//     console.log('click', e, this.props.task.id);
//     this.setState({
//       saveDisabled: true
//     });
//     this.props.deleteTask(this.props.task.id);
//   };

//   render() {
//     return (
//       <article className="task-card">
//         <h4>{this.props.task.task_title}</h4>
//         <h6>{this.props.task.task_doneBy}</h6>
//         <h6><input type="checkbox" onClick={this.handleChange}/>{this.props.task.task_completed}</h6>
//         <button onClick={this.handleClick} disabled={this.state.saveDisabled}>
//           Delete
//         </button>
//         <hr />
//       </article>
//     );
//   }
// }

// export default TaskCard;
