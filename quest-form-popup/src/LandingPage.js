import React, { useState } from 'react';
import PopupForm from './PopupForm';
import './LandingPage.css';
import Navbar from './Navbar';

const LandingPage = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleButtonClick = () => {
        setIsFormOpen(true);
    };

    return (
        <div className="landing-page">
            
            <div className="content">
                <h1>There’s never been a better time to be a better marketer.</h1>
                <p>Data is flowing and channels are growing. Customers are demanding the world, while AI is already transforming it. Manage it all with the right customer engagement platform.</p>
                <button onClick={handleButtonClick}>Connect With Sales</button>
            </div>
            {isFormOpen && <PopupForm closeForm={() => setIsFormOpen(false)} />}
        </div>
    );
};

export default LandingPage;
