import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TextFieldGroup from './TextFieldGroup';
import { validateName, validateEmail } from './validations';

class Login extends Component {
  state = {
    username: '',
    email: '',
    errors:{},
    submitted: false
  }

  blockSubmit(){
        const errorMsgs = Object.keys(this.state.errors).filter((key) => this.state.errors[key]);
        const blankEmail = Object.keys(this.state.email).filter((key) => this.state.email[key] === '');
        return (errorMsgs.length > 0 || blankEmail.length > 0);
    }

  handleClick = (event) => {
    event.preventDefault()
      
      this.setState({ errors: {}, sumbitted: true });

        axios.get(`https://nuberapi.herokuapp.com/login/${this.state.email}`)
          .then((res) => {
            if (res.data.VALID_USER) {
              this.props.loginUser(res.data.user_key, this.state.username, this.state.email);
            }       
          })
          .catch((err) => {
            // Need to add some error messaging to the front-end here..
            console.log(err);
          })
        this.props.history.push('/dashboard');
  }


      handleChange = ({ name, value, error }) => {
        const { errors, username, email } = this.state;
        
        if(!this.state.email){this.blockSubmit()}

        const newState = {
            username: {
                ...username,
                [name]: value
            },
            email: {
                ...email,
                [name]: value
            },
            errors: {
                ...errors,
                [name]: error
            }
        }
        this.setState(newState);
    }
  
  render() {

    return (    
            <form onSubmit={this.handleClick}>

            <TextFieldGroup
              name="Name"
              placeholder="Name"
              validate={ validateName }
              onChange={this.handleChange}
            />

            <TextFieldGroup
              name="email"
              placeholder="Email Address"
              validate={ validateEmail }
              onChange={this.handleChange}
            /> 
            
                    
          <button type="submit" disabled={!this.state.email}>Start Nubering!</button>
          <hr />
          </form>
    );
  }
}

export default Login;