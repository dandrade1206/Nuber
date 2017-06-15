import React from 'react'

const ListRides=(props) =>{


console.log('Listrides', props.rides)
const Rides = props.rides.map((ride)=>{

    var uType = "Rider"
    if(ride.driver === props.user) uType = "Driver"

    return(
            <tr key={props.user+uType+ride.direction}>
                <td>{ride.direction}</td>
                <td>{ride.time}</td>
                <td>Rider</td>
                <td>{Object.keys(ride.riders).length}</td>
                <td></td>
            </tr>
    )
})

const handleClick = (event) => {
    event.preventDefault()

    props.history.push('/create');
  }

return (
    <div>
    <div className="row">
        <div className="small-12"> 
            <h3 className='center'> View Rides</h3>
        </div>
    </div>
    <table className="table" summary="This summary is for screen readers and should summarize the structure of the table headers and rows">

        <thead>
            <tr>
                <th width="500"><strong>Destination</strong></th>
                <th width="100" className="text-right"><strong>Time</strong></th>
                <th width="400"><strong>Driver/Rider</strong></th>
                <th width="400"><strong>Spots</strong></th>
                <th width="400"><strong>Reserve</strong></th>
            </tr>
        </thead>
        <tbody>
            {Rides}
        </tbody>
    </table>
                        <button onClick={handleClick}>
                        New Drive
                    </button>
    </div>
)

}

export default ListRides