import React from 'react';
import './nav.css';

class Nav extends React.Component {
    render(){
        return(
            <div className="navbar">
                <div className="menu">
                    <img href=''></img>
                    <a href="#">File</a>
                    <a href="#">Edit</a>
                    <a href="#">Selection</a>
                    <a href="#">View</a>
                    <a href="#">Go</a>
                    <a href="#">Run</a>
                    <a href="#">Terminal</a>
                    <a href="#">Help</a>
                </div>
                <div className='title'>
                    <h3>Portfolio.js - noncy</h3>
                </div>
            </div>
        );
    }
}

export default Nav;