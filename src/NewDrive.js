import React from 'react';
import axios from 'axios';

class NewDrive extends React.Component {

    state = {
        passengers: '',
        note: ''
    }

    handleClick = (event) => {
        event.preventDefault()
        let { direction, driver, datetime } = this.props;
        let { date, hour, minute, ampm } = datetime;
        let { passengers, note } = this.state;
        let time = `${hour}:${minute} ${ampm}`;
        
        const newRideData = { date, 
                              direction, 
                              driver, 
                              passengers,
                              time,
                              note}
        
        axios.post('https://nuberapi.herokuapp.com/newride', newRideData)
            .then((res) => {
                console.log(res.data);
                this.props.history.push('/dashboard'); 
            })
            .catch((err) => {
                console.log(err);
            })
    }


    handleChange = (event) => {
        if (event.target.name === 'note'){
            this.setState({ note: event.target.value });
        }
        if (event.target.name === 'passengers'){
            this.setState({ passengers: event.target.value });
        }
    }
    render (){
        return (
            <div className="NewDrive">
                <div className="row">
                    <label className="columns small-10">Number of passengers:</label>
                    <input 
                        className="columns small-2" 
                        value={this.state.passengers}
                        onChange={this.handleChange} 
                        name="passengers" 
                        type="text" 
                        placeholder="#"/>
                </div>
                <div className="row">
                    <textarea 
                        rows="6"
                        name='note' 
                        className="columns small-12 small-centered" 
                        onChange={this.handleChange} 
                        value={this.state.note} 
                        placeholder="Describe location to meet and your attire, so riders can find you!"/>
                </div>
                <div className="row">
                    <button 
                        className="columns small-4 small-centered" 
                        onClick={this.handleClick}>Confirm Drive</button>
                </div>
            </div>
        )
    }

}

export default NewDrive;