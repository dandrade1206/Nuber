import React, { Component } from 'react';
import './App.css';

class RiderDetail extends Component {
  render() {
    return (    
            <div>
                <h2>3:00pm ride Downtown</h2>
                <br/>
                <h2>with</h2>
                <br/>
                <h2> <a>Daniel Andrade</a> </h2>
                <br/>
                <textarea readonly> description of driver </textarea>
                <button className='button alert'> Cancel Ride </button>
            </div>
    );
  }
}

export default RiderDetail;