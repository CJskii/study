import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <h1 className="text">Hello React!</h1>
        </div>
        <div className="wrapper">
          <Home />
        </div>
        <div className="wrapper">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
