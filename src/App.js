import React, { Component } from 'react';
import './App.css';

import Header from './Header'
// import FilterRides from './FilterRides'
import ListRides from './ListRides'

import NewDrive from './NewDrive.js';
import Login from './Login';
import RiderDetail from './RiderDetail';
import FilterRidesContainer from './FilterRidesContainer'


class App extends Component {
  componentDidMount(){
    //make Async call to get initial App info from DB here
    //dispatch (GETTING_STUFF) before async call
    //dispatch (GOT_STUFF) once done  -- loading spinner
  }


// Routing will determine what screen needs to show

  render() {
    return (
      <div className="row">
        <div className="App columns small-12 medium-6 large-4 xlarge-4 small-centered">
          <Header />
          <Login />
          <FilterRidesContainer />
          <ListRides />

          <NewDrive />
          <RiderDetail />

        </div>
      </div>
    );
  }
}

export default App;
