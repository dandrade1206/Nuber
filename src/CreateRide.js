import React from 'react'
import FilterRidesContainer from './FilterRidesContainer';
import NewDrive from './NewDrive'

const CreateRide = (props) => {
    return(
        <div>
            <FilterRidesContainer/>
            <NewDrive history={props.history}/>
        </div>
    )
}

export default CreateRide