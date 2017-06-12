import React from 'react'

const ListRides=(props) =>{

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
                <th width="100" class="text-right"><strong>Time</strong></th>
                <th width="400"><strong>Driver/Rider</strong></th>
                <th width="400"><strong>Spots</strong></th>
                <th width="400"><strong>Reserve</strong></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>DT</td>
                <td>10.30</td>
                <td>Driver</td>
                <td>4</td>
                <td><input type='checkbox'/></td>
            </tr>
            <tr>
                <td>FR</td>
                <td>11.30</td>
                <td>Driver</td>
                <td>4</td>
                <td><input type='checkbox'/></td>
            </tr>
            <tr>
                <td>DT</td>
                <td>12.30</td>
                <td>Rider</td>
                <td>1</td>
                <td><input type='checkbox'/></td>
            </tr>
        </tbody>
    </table>
    </div>
)

}

export default ListRides