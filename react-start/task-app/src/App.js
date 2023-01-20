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
    this.handleEditTask = this.handleEditTask.bind(this);
    this.handleSaveTask = this.handleSaveTask.bind(this);
    this.handleChangeInTask = this.handleChangeInTask.bind(this);
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

  handleSaveTask = (id) => {
    this.setState({
      editing: null,
    });
  };

  handleChangeInTask = (e, id) => {
    this.setState((prevState) => {
      let tasks = this.state.tasks;
      let task = tasks.find((task) => task.id === id);
      task.text = e.target.value;
      return { tasks };
    });
  };

  render() {
    const { task, tasks, editing } = this.state;

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
        <div className="task-wrapper">
          <Overview
            deleteTask={this.deleteTask}
            handleEditTask={this.handleEditTask}
            editing={editing}
            handleSaveTask={this.handleSaveTask}
            handleChangeInTask={this.handleChangeInTask}
            tasks={tasks}
          />
        </div>
      </div>
    );
  }
}

export default App;
