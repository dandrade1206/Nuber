import React from 'react';

const NewDrive = () => {
    return (
        <div className="NewDrive">
            <div className="row">
                    <label className="columns small-9">Number of passengers:</label>
                    <input className="columns small-3" type="text" placeholder="#"/>
            </div>
            <div className="row"><textarea rows="6" className="columns small-11 small-centered" placeholder="Describe location to meet and your attire, so riders can find you!"/></div>
            <div className="row"><button className="columns small-6 small-centered">Confirm Drive</button></div>
        </div>
    )
}

export default NewDrive;