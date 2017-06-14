import React from 'react'
import FilterRidesContainer from './FilterRidesContainer';
import ListRides from './ListRides'

const Dashboard = (props) => {
    console.log(props)
    return(
        <div>
            <FilterRidesContainer/>
            <ListRides history={props.history}/>
        </div>
    )
}

export default Dashboard
