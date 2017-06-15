import React from 'react'
import FilterRidesContainer from './FilterRidesContainer';
import ListRides from './ListRides'

const Dashboard = (props) => {
    return(
        <div>
            <FilterRidesContainer history={props.history}/>
            <ListRides history={props.history}/>
        </div>
    )
}

export default Dashboard
