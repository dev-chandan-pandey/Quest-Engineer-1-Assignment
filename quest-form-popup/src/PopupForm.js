import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PopupForm.css';
import { BASE_URL, API_KEY, ENTITY_AUTHENTICATION_TOKEN, ENTITY_ID, CAMPAIGN_ID } from './config';

const PopupForm = ({ closeForm }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        jobTitle: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [submissionMessage, setSubmissionMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSubmissionMessage('');

        // Basic validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.phone || !formData.jobTitle) {
            setError('All fields are required');
            setLoading(false);
            return;
        }

        try {
            await axios.post(`${BASE_URL}/campaigns/verify`, formData, {
                headers: {
                    'Authorization': `Bearer ${ENTITY_AUTHENTICATION_TOKEN}`,
                    'API-Key': API_KEY
                }
            });
            setSubmissionMessage('Form submitted successfully!');
        } catch (error) {
            setError('Failed to submit form');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="popup-form open">
            <button onClick={closeForm}>Close</button>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                </label>
                <label>
                    Email Address:
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                </label>
                <label>
                    Company:
                    <input type="text" name="company" value={formData.company} onChange={handleInputChange} />
                </label>
                <label>
                    Phone Number:
                    <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
                </label>
                <label>
                    Job Title:
                    <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} />
                </label>
                <button type="submit" disabled={loading}>Submit</button>
            </form>
            {error && <div className="error">{error}</div>}
            {submissionMessage && <div>{submissionMessage}</div>}
        </div>
    );
};

export default PopupForm;
