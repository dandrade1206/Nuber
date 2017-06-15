import React from 'react';

const NewDrive = ({history}) => {

const handleClick = (event) => {
    event.preventDefault()

    history.push('/dashboard'); 

  }
    
    return (
        <div className="NewDrive">
            <div className="row">
                    <label className="columns small-10"> Number of passengers:</label>
                    <input className="columns small-2" type="number" placeholder="#"/>
            </div>
            <div className="row"><textarea rows="6" className="columns small-12 small-centered" placeholder="Describe location to meet and your attire, so riders can find you!"/></div>
            <div className="row"><button className="columns small-4 small-centered" onClick={handleClick}>Confirm Drive</button></div>
        </div>
    )
}

export default NewDrive;