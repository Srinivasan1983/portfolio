import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import NavigationBar from "./NavigationBar";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <NavigationBar />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
