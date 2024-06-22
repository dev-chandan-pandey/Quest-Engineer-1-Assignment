import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Braze</div>
            <ul className="navbar-links">
                <li><a href="#how-it-works">How it Works</a></li>
                <li><a href="#product">Product</a></li>
                <li><a href="#solutions">Solutions</a></li>
                <li><a href="#customers">Customers</a></li>
                <li><a href="#success">Success</a></li>
                <li><a href="#partners">Partners</a></li>
                <li><a href="#resources">Resources</a></li>
                <li><a href="#company">Company</a></li>
            </ul>
            <div className="navbar-buttons">
                <button id="login-btn" className="login-btn">Login</button>
                <button id="connect-sales-btn" className="get-started-btn" style={{ display: 'none' }}>Connect With Sales</button>
            </div>
        </nav>
    );
};

export default Navbar;
