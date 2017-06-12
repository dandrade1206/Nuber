import React from 'react'
const FilterRides = (props) => {
    return(
        <div>
            <div className="row">
                <div className="small-5 columns">
                    <input type="date" name='date' placeholder='Select a date'/>
                </div>
                <div className="small-2 columns">
                    <select>
                        <option></option>
                        <option>1</option>    
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option> 
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                </div>
                <div className="small-2 columns">
                    <select>
                        <option></option>
                        <option>00</option>    
                        <option>15</option>
                        <option>30</option>
                        <option>45</option>
                    </select>                
                </div>
                <div className="small-3 columns">
                    <select>
                        <option>AM</option>    
                        <option>PM</option>
                    </select>                
                </div>                
            </div>
            <div className="row">
                <div className="small-12">
                    <label for="text-switch-3">Direction</label>
                    <div className="switch switch-text large">
                        <input className="switch-input" id="text-switch-3" type="checkbox" name="exampleSwitch" />
                        <label className="switch-paddle" htmlFor="text-switch-3">
                            <span className="show-for-sr">Screen reader text only</span>
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