import React, { Component } from 'react';
import './App.css';
import NewDrive from './NewDrive.js';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="App columns small-12 medium-6 large-4 xlarge-3 small-centered">

          <NewDrive />
        </div>
      </div>
    );
  }
}

export default App;
