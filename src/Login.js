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
    axios.get(`https://nuberapi.herokuapp.com/login/${this.state.email}`)
      .then((res) => {
        if (res.data.VALID_USER) {
          this.props.loginUser(res.data.user_key, this.state.name, this.state.email);

          axios.get(`https://nuberapi.herokuapp.com/myrides/${res.data.user_key}`)
            .then((res)=>{
              this.props.setRides(res.data.rides)

            })
            .then(()=>{
              axios.get(`https://nuberapi.herokuapp.com/driver/${res.data.user_key}`)
                .then((res)=>{
                  this.props.setDrives(res.data.rides)
                  this.props.history.push('/dashboard');
                })              
            })
        }       
      })
      .catch((err) => {
        // Need to add some error messaging to the front-end here..
        console.log(err);
      })
    
  }

  handleChange = (event) => {
    if (event.target.name === 'name'){
      this.setState({ name: event.target.value });
    }
    if (event.target.name === 'email'){
      this.setState({ email: event.target.value });
    }
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