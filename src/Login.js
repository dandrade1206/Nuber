import React, { Component } from 'react';
import './App.css';

class Login extends Component {
  
  handleClick = (event) => {
    event.preventDefault()

    this.props.history.push('/dashboard');
  }
  
  render() {
    return (    
            <form>
                    <hr />
                    <input placeholder="Enter Name" type="text" />
                    <input placeholder="Email Address" type="text" />
                    <button onClick={this.handleClick}>
                        Start Nubering!
                    </button>
                    <hr />
          </form>
    );
  }
}

export default Login;