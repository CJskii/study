import React, { Component } from "react";
import "./App.css";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: "", id: this.count },
      tasks: [],
      count: 1,
      editing: null,
    };

    this.deleteTask = this.deleteTask.bind(this);

    this.editTask = this.handleEditTask.bind(this);

    this.editing = this.state.editing;

    this.changeTask = this.handleChangeInTask.bind(this);

    this.saveTask = this.saveEditedTask.bind(this);
  }

  changeHandler = (e) => {
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
      task: { text: "" },
      count: this.state.count + 1,
    });
  };

  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks
        .filter((task) => task.id !== id)
        .map((task, index) => {
          task.id = index + 1;
          return task;
        }),
      count: this.state.count - 1,
    });
  };

  handleEditTask = (id) => {
    this.setState({
      editing: id,
    });
  };

  handleChangeInTask = () => {};

  saveEditedTask = () => {};

  render() {
    const { task, tasks } = this.state;

    return (
      <div className="container">
        <form autoComplete="off" onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            type="text"
            id="taskInput"
            onChange={this.changeHandler}
            value={task.text}
          />
          <button type="submit" id="btn">
            Add task
          </button>
        </form>
        <Overview
          deleteTask={this.deleteTask}
          editTask={this.editTask}
          editing={this.editing}
          handleEditTask={this.changeTask}
          saveTask={this.saveTask}
          tasks={tasks}
        />
      </div>
    );
  }
}

export default App;
