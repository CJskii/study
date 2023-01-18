import "./App.css";
import React, { Component } from "react";
import MyComponent from "./MyComponent";
import MyComponent2 from "./MyComponent2";

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
    this.onClickBtn(this.state);
  }

  onClickBtn() {
    console.log("Button has been clicked!");
  }

  render() {
    return (
      <div>
        <MyComponent title="React" onButtonClicked={this.countUp} />
        <MyComponent2 title="Hello World" />
      </div>
    );
  }
}

export default App;
