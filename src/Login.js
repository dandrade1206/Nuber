import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Login extends Component {
  state = {
    name: '',
    email: ''
  }

  handleClick = (event) => {
    event.preventDefault()
    console.log(this.state.email);
    axios.get(`http://localhost:8000/login/${this.state.email}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    // this.props.history.push('/dashboard');
  }

  handleChange = (event) => {
    if (event.target.name === 'name'){
      this.setState({ name: event.target.value });
    }
    if (event.target.name === 'email'){
      this.setState({ email: event.target.value });
    }
    console.log(event.target);
  }
  
  render() {
    return (    
            <form onChange={this.handleChange}>
                    <hr />
                    <input placeholder="Enter Name" name="name" type="text" value={this.state.name} />
                    <input placeholder="Email Address" name="email" type="text" value={this.state.email} />
                    <button onClick={this.handleClick}>
                        Start Nubering!
                    </button>
                    <hr />
          </form>
    );
  }
}

export default Login;