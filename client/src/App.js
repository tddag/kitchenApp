import React, { Component } from 'react';
import './App.css';
import { Header } from "./global/header";
import { Switch, Route } from "react-router-dom";
// use <Route> to render content based on the location's pathname
// use <Switch> to iterate over routes and only render the first one that matches the current pathname

import PlaceOrder from "./main/PlaceOrder";
import ChangePredicted from "./main/ChangePredicted";
import Kitchen from "./main/Kitchen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={PlaceOrder}/>
          <Route path="/updatepredicted" component={ChangePredicted}/>
          <Route path="/kitchen" component={Kitchen}/>
        </Switch>
      </div>
    );
  }
}

export default App;
