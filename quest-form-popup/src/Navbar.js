import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">YourLogo</div>
            <ul className="navbar-links">
                <li>How it Works</li>
                <li>Product</li>
                <li>Solutions</li>
                <li>Customers</li>
                <li>Success</li>
                <li>Partners</li>
                <li>Resources</li>
                <li>Company</li>
                <li>Login</li>
                <li><button className="get-started-btn">Get Started</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
