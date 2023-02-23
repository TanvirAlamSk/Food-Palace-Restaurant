import React from 'react';
import logo from "../../Image/logo.png"
import "./Navbar.css"

const Navber = () => {
    return (
        <div className='navbar-container'>
            <img src={logo} className="logo"></img>
            <ul className='navbar-item'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </div>
    );
};

export default Navber;