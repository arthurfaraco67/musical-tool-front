import React, { Component } from "react";
import IdentificationForm from "./IdentificationForm";
import SelectMusic from "./SelectMusic";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <IdentificationForm />
        <SelectMusic />
      </div>
    );
  }
}

export default App;
