import React from 'react'
import FilterRidesContainer from './FilterRidesContainer';
import ListRidesContainer from './ListRidesContainer'

const Dashboard = (props) => {

    return(
        <div>
            <FilterRidesContainer/>
            <ListRidesContainer  history = {props.history}/>
        </div>
    )
}

export default Dashboard
