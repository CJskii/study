import React, { Component } from "react";
import "./App.css";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: "", id: this.count },
      tasks: [],
      count: 1,
    };

    this.deleteTask = this.deleteTask.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.count,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: "", id: this.state.count },
      count: this.state.count + 1,
    });
  };

  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks
        .filter((task) => task.id !== id)
        .map((task, index) => {
          {
            task.id = index + 1;
            this.count = index + 1;
            return task;
          }
        }),
      count: this.state.count - 1,
    });
  };

  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitTask} autoComplete="off">
          <label htmlFor="taskInput">Enter task</label>
          <input
            type="text"
            id="taskInput"
            onChange={this.handleChange}
            value={task.text}
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
