import React, { useState } from 'react';
import axios from 'axios';
import { LOGIN_URL, ENTITY_ID, API_KEY, API_SECRET, ENTITY_AUTHENTICATION_TOKEN } from './config';
import './Login.css';

const Login = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL, {
                entityId: ENTITY_ID,
                externalUserId: 'example-x012121212',
                walletAddress: 'abc@',
                email: email
            }, {
                headers: {
                    'apikey': API_KEY,
                    'apisecret': API_SECRET,
                    'entity-authentication-token': ENTITY_AUTHENTICATION_TOKEN
                }
            });
            onLoginSuccess(response.data);
        } catch (err) {
            setError('Failed to login');
        }
    };

    return (
        <div className="login-form">
            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <button type="submit">Login</button>
            </form>
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default Login;
