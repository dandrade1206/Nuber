import React from 'react'

const ListRides=(props) =>{


console.log('Listrides', props.rides)
const rides = props.rides.map((ride)=>{

    var uType = "Rider"
    if(ride.driver === props.user) uType = "Driver"
    let riders = ride.passengers;
    if (ride.riders){
        let riders = ride.passengers - Object.keys(ride.riders).length;
    }
    return(
            <tr key={props.user+uType+ride.direction+ride.note+Date.now()}>
                <td>{ride.direction}</td>
                <td>{ride.date} {ride.time}</td>
                <td>{uType}</td>
                <td>{riders}</td>
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
                <th width="200"><strong>Destination</strong></th>
                <th width="300"><strong>Time</strong></th>
                <th width="400"><strong>Driver/Rider</strong></th>
                <th width="400"><strong>Spots</strong></th>
            </tr>
        </thead>
        <tbody>
            {rides}
        </tbody>
    </table>
                        <button onClick={handleClick}>
                        New Drive
                    </button>
    </div>
)

}

export default ListRides