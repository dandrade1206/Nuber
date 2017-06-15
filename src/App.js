import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import LoginContainer from './LoginContainer';
import Dashboard from './Dashboard';
import RiderDetail from './RiderDetail';
import CreateRide from './CreateRide';

import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  componentDidMount(){
    
    //make Async call to get initial App info from DB here
    //dispatch (GETTING_STUFF) before async call
    //dispatch (GOT_STUFF) once done  -- loading spinner
  }


// Routing will determine what screen needs to show

  render() {
    return (
    <Router>
        <div className="row">
          <div className="App columns small-12 medium-8 large-7 xlarge-6 small-centered">
            <Header />
            <Route exact path="/" component={LoginContainer}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/create" component={CreateRide}/>
            <Route path="/detail" component={RiderDetail}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
