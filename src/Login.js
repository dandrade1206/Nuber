import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TextFieldGroup from './TextFieldGroup';
import { validateName, validateEmail } from './validations';

class Login extends Component {
  constructor(props){
    super(props)
    if(props.user.key){
      this.loginAndRefresh();
    }
  }
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
    this.loginAndRefresh()
  }


  loginAndRefresh = () =>{

      this.setState({ errors: {}, submitted: true });

    console.log(this.state.email);
if(!this.props.user.key) {


    axios.get(`https://nuberapi.herokuapp.com/login/${this.state.email}`)
      .then((res) => {
        if (res.data.VALID_USER) {
          console.log(res.data);
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
 } else {
          axios.get(`https://nuberapi.herokuapp.com/myrides/${this.props.user.key}`)
            .then((res)=>{
              this.props.setRides(res.data.rides)

            })
            .then(()=>{
              axios.get(`https://nuberapi.herokuapp.com/driver/${this.props.user.key}`)
                .then((res)=>{
                  this.props.setDrives(res.data.rides)
                  this.props.history.push('/dashboard');
                })              
            })

      .catch((err) => {
        // Need to add some error messaging to the front-end here..
        console.log(err);
      })

 }   
  }

  handleChange = (event) => {
    if (event.target.name === 'name'){
      this.setState({ username: event.target.value });
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