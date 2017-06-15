import logo from './logo.png';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

const Header = () => {

    return (
            <div>
                <div className="dash">
                    <Route path="/create" render={() => (
                    <Link to="/dashboard"><h4>My Rides</h4></Link>
                    )} />
                </div>
                <img src={logo} className='logo' alt="Nuber Logo"/>
            </div>   
    )
}

export default Header;