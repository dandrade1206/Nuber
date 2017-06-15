import React from 'react'
import FilterRidesContainer from './FilterRidesContainer';
import ListRidesContainer from './ListRidesContainer'
import ListRides from './ListRides'

const Dashboard = (props) => {
    // console.log(props)
    return(
        <div>
            <FilterRidesContainer/>
            <ListRidesContainer />
        </div>
    )
}

export default Dashboard
