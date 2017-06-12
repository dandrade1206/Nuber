import React, { Component } from 'react';
import './App.css';

import Header from './Header'
import FilterRides from './FilterRides'
import ListRides from './ListRides'

import NewDrive from './NewDrive.js';
import Login from './Login';


class App extends Component {
  render() {
    return (
      <div className="row">

        <div className="App columns small-12 medium-6 large-4 xlarge-4 small-centered">
          <Header />
          <Login />
          <FilterRides />
          <ListRides />

         <NewDrive />

        </div>
      </div>
    );
  }
}

export default App;
