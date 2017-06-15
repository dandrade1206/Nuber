import React from 'react'
import FilterRidesContainer from './FilterRidesContainer';
import NewDriveContainer from './NewDriveContainer'

const CreateRide = (props) => {
    return(
        <div>
            <FilterRidesContainer/>
            <NewDriveContainer history={props.history}/>
        </div>
    )
}

export default CreateRide