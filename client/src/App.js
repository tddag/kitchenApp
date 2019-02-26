import React, { Component } from 'react';
import './App.css';
import { Header } from "./global/header";
import { Switch, Route } from "react-router-dom";
// use <Route> to render content based on the location's pathname
// use <Switch> to iterate over routes and only render the first one that matches the current pathname

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/"/>
          <Route path="/updatedpredicted"/>
          <Route path="/kitchen"/>
        </Switch>
      </div>
    );
  }
}

export default App;
