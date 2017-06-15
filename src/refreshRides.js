import axios from 'axios';

  const refreshRides = (user_key) => {
          axios.get(`https://nuberapi.herokuapp.com/myrides/${user_key}`)
            .then((res)=>{
              this.props.setRides(res.data.rides)

            })
            .then(()=>{
              axios.get(`https://nuberapi.herokuapp.com/driver/${user_key}`)
                .then((res)=>{
                  this.props.setDrives(res.data.rides)
                  this.props.history.push('/dashboard');
                })              
            })
  }

export default refreshRides