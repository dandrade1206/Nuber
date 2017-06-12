import logo from './logo.png';
import React from 'react'

const Header = () => {

    return (
        <div className="row">
            <div className="small-12">
                <img src={logo} className='logo' alt="Nuber Logo"/>
            </div>
        </div>        
    )
}

export default Header;