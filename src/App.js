import React, { Component } from 'react';
import './App.css';
import NewDrive from './NewDrive.js';
import Login from './Login';
import RiderDetail from './RiderDetail';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="App columns small-12 medium-6 large-4 xlarge-3 small-centered">
          <Login />
          <NewDrive />
          <RiderDetail />
        </div>
      </div>
    );
  }
}

export default App;
