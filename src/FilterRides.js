import React from 'react'
const FilterRides = ({user, datetime, direction, handleSwitch, processDate, processHour, processMin, processAMPM, history}) => {
    
    // const checkLoggedin = () => {
    //     if (!user.key) {
    //         history.push('/');
    //     }
    // }
    // checkLoggedin();
    return(
        <div>
            <div className="row">
                <div className="small-8 small-centered columns">
                    <input type="date" name='date' onChange={processDate} placeholder='Select a date' value={datetime.date}/>
                </div>
            </div>
            <div className="row">
                <div className="small-4 columns">
                    <select onChange={processHour} value={datetime.hour}>
                        <option></option>
                        <option value='1'>1</option>    
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option> 
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                        <option value='11'>11</option>
                        <option value='12'>12</option>
                    </select>
                </div>
                <div className="small-4 columns">
                    <select onChange={processMin} value={datetime.minute}>
                        <option value=''></option>
                        <option value='00'>00</option>    
                        <option value='15'>15</option>
                        <option value='30'>30</option>
                        <option value='45'>45</option>
                    </select>                
                </div>
                <div className="small-4 columns">
                    <select onChange={processAMPM} value={datetime.ampm}>
                        <option></option>
                        <option value='AM'>AM</option>    
                        <option value='PM'>PM</option>
                    </select>                
                </div>            
            </div>
            <div className="row">
                <div className="small-12">
                    <label htmlFor="text-switch-3">Direction</label>
                    <div className="switch switch-text large">
                        <input className="switch-input" id="text-switch-3" type="checkbox" name="exampleSwitch" checked={(direction === 'Franklin')} onChange={e => {handleSwitch()}} />
                        <label className="switch-paddle" htmlFor="text-switch-3">
                            <span className="switch-active" aria-hidden="true">FR</span>
                            <span className="switch-inactive" aria-hidden="true">DT</span>
                        </label>
                    </div>     
                </div>
            </div>  
            <hr />    
        </div>          
    )
}

export default FilterRides