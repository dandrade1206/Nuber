import React, { Component } from 'react';
import './App.css';

class Login extends Component {
  render() {
    return (    
            <form>
                    <hr />
                    <input placeholder="Enter Name" type="text" />
                    <input placeholder="Email Address" type="text" />
                    <button>
                        Start Nubering!
                    </button>
                    <hr />
          </form>
    );
  }
}

export default Login;