// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './PopupForm.css';
// import { BASE_URL, API_KEY, ENTITY_AUTHENTICATION_TOKEN, ENTITY_ID, CAMPAIGN_ID, API_SECRET } from './config';

// const PopupForm = ({ closeForm, setIsAuthenticated }) => {
//     const [email, setEmail] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [submissionMessage, setSubmissionMessage] = useState('');
//     const [campaignData, setCampaignData] = useState(null);
//     const [currentStep, setCurrentStep] = useState(1);
//     const [formAnswers, setFormAnswers] = useState({
//         firstName: '',
//         lastName: '',
//         emailAddress: '',
//         company: '',
//         phoneNumber: '',
//         jobTitle: '',
//         industry: '',
//         numberOfEmployees: '',
//         country: '',
//         howDidYouHear: ''
//     });

//     const industries = ['Technology', 'Finance', 'Healthcare', 'Education', 'Retail'];
//     const countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany'];

//     useEffect(() => {
//         const userData = JSON.parse(localStorage.getItem('userData'));
//         if (userData) {
//             setIsAuthenticated(true);
//             fetchCampaignDetails(userData.token, userData.userId);
//         }
//     }, [setIsAuthenticated]);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const response = await axios.post('https://staging.questprotocol.xyz/api/users/external/login', {
//                 entityId: ENTITY_ID,
//                 externalUserId: 'example-x012121212',
//                 walletAddress: 'abc@',
//                 email: email
//             }, {
//                 headers: {
//                     'apikey': API_KEY,
//                     'apisecret': API_SECRET,
//                     'entity-authentication-token': ENTITY_AUTHENTICATION_TOKEN
//                 }
//             });

//             const userData = response.data;
//             localStorage.setItem('userData', JSON.stringify(userData));
//             setIsAuthenticated(true);
//             setSubmissionMessage('Login successful!');

//             await fetchCampaignDetails(userData.token, userData.userId);
//             setLoading(false);
//         } catch (error) {
//             setError('Failed to login: ' + (error.response?.data?.message || error.message));
//             setLoading(false);
//         }
//     };

//     const fetchCampaignDetails = async (token, userId) => {
//         try {
//             const response = await axios.get(`${BASE_URL}/entities/${ENTITY_ID}/campaigns/${CAMPAIGN_ID}`, {
//                 headers: {
//                     'apikey': API_KEY,
//                     'token': token,
//                     'userid': userId
//                 },
//                 params: {
//                     variation: 'developer',
//                     platform: 'REACT'
//                 }
//             });

//             const campaignData = response.data.data;
//             setCampaignData(campaignData);
//             console.log(campaignData); // Log campaign data to console for debugging
//         } catch (error) {
//             setError('Failed to fetch campaign details: ' + (error.response?.data?.message || error.message));
//         }
//     };

//     const handleNextStep = () => {
//         setCurrentStep(currentStep + 1);
//     };

//     const handlePrevStep = () => {
//         setCurrentStep(currentStep - 1);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormAnswers({
//             ...formAnswers,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const userData = JSON.parse(localStorage.getItem('userData'));

//             // Create a map of form field names to action IDs
//             const actionMap = {};
//             campaignData.actions.forEach(action => {
//                 actionMap[action.title.toLowerCase()] = action.actionId;
//             });

//             // Map form answers to action IDs
//             const actions = Object.keys(formAnswers).map(key => ({
//                 actionId: actionMap[key.toLowerCase()],
//                 answers: [formAnswers[key]]
//             }));

//             const payload = {
//                 actions: actions.filter(action => action.actionId && action.answers[0] !== null && action.answers[0] !== ''), // Remove null or empty values and ensure actionId is valid
//                 campaignVariationId: campaignData.campaignVariationId
//             };

//             console.log('Submitting payload:', JSON.stringify(payload, null, 2));

//             const response = await axios.post(`${BASE_URL}/entities/${ENTITY_ID}/campaigns/${CAMPAIGN_ID}/verify`, payload, {
//                 headers: {
//                     'apikey': API_KEY,
//                     'token': userData.token,
//                     'userid': userData.userId
//                 }
//             });

//             setSubmissionMessage('Form submitted successfully!');
//             setLoading(false);
//             console.log(response.data); // Log response data to console for debugging
//             closeForm();

//         } catch (error) {
//             console.error('Error details:', error.response?.data || error.message);
//             setError('Failed to submit form: ' + (error.response?.data?.message || error.message));
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="popup-form open">
//             <div className="stage-indicator">
//                 <div className={`stage ${currentStep === 1 ? 'active' : ''}`}>1</div>
//                 <div className={`stage ${currentStep === 2 ? 'active' : ''}`}>2</div>
//             </div>
//             <button className="close-button" onClick={closeForm}>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
//                     <path d="M18 6.41L16.59 5 12 9.59 7.41 5 6 6.41 10.59 11 6 15.59 7.41 17 12 12.41 16.59 17 18 15.59 13.41 11z" />
//                 </svg>
//             </button>
//             <div className="form-content">
//                 {!loading && !localStorage.getItem('userData') && (
//                     <form onSubmit={handleLogin}>
//                         <label>
//                             Email:
//                             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                         </label>
//                         <button type="submit">Login</button>
//                     </form>
//                 )}
//                 {loading && <div>Loading...</div>}
//                 {error && <div className="error">{error}</div>}
//                 {submissionMessage && <div>{submissionMessage}</div>}
//                 {campaignData && (
//                     <form onSubmit={handleSubmit}>
//                         {currentStep === 1 && (
//                             <div>
//                                 <h3>Your Details</h3>
//                                 <label>
//                                     First Name:
//                                     <input
//                                         type="text"
//                                         name="firstName"
//                                         value={formAnswers.firstName}
//                                         onChange={handleInputChange}
//                                     />
//                                 </label>
//                                 <label>
//                                     Last Name:
//                                     <input
//                                         type="text"
//                                         name="lastName"
//                                         value={formAnswers.lastName}
//                                         onChange={handleInputChange}
//                                     />
//                                 </label>
//                                 <label>
//                                     Email Address:
//                                     <input
//                                         type="email"
//                                         name="emailAddress"
//                                         value={formAnswers.emailAddress}
//                                         onChange={handleInputChange}
//                                     />
//                                 </label>
//                                 <label>
//                                     Company:
//                                     <input
//                                         type="text"
//                                         name="company"
//                                         value={formAnswers.company}
//                                         onChange={handleInputChange}
//                                     />
//                                 </label>
//                                 <label>
//                                     Phone Number:
//                                     <input
//                                         type="tel"
//                                         name="phoneNumber"
//                                         value={formAnswers.phoneNumber}
//                                         onChange={handleInputChange}
//                                     />
//                                 </label>
//                                 <label>
//                                     Job Title:
//                                     <input
//                                         type="text"
//                                         name="jobTitle"
//                                         value={formAnswers.jobTitle}
//                                         onChange={handleInputChange}
//                                     />
//                                 </label>
//                                 <div className="button-group">
//                                     <button type="button" onClick={handleNextStep}>Next →</button>
//                                 </div>
//                             </div>
//                         )}
//                         {currentStep === 2 && (
//                             <div>
//                                 <h3>Your Business</h3>
//                                 <label>
//                                     Industry:
//                                     <select
//                                         name="industry"
//                                         value={formAnswers.industry}
//                                         onChange={handleInputChange}
//                                     >
//                                         <option value="">Select Industry</option>
//                                         {industries.map(industry => (
//                                             <option key={industry} value={industry}>{industry}</option>
//                                         ))}
//                                     </select>
//                                 </label>
//                                 <label>
//                                     Number of Employees:
//                                     <input
//                                         type="number"
//                                         name="numberOfEmployees"
//                                         value={formAnswers.numberOfEmployees}
//                                         onChange={handleInputChange}
//                                     />
//                                 </label>
//                                 <label>
//                                     Country:
//                                     <select
//                                         name="country"
//                                         value={formAnswers.country}
//                                         onChange={handleInputChange}
//                                     >
//                                         <option value="">Select Country</option>
//                                         {countries.map(country => (
//                                             <option key={country} value={country}>{country}</option>
//                                         ))}
//                                     </select>
//                                 </label>
//                                 <label>
//                                     How did you hear about us:
//                                     <input
//                                         type="text"
//                                         name="howDidYouHear"
//                                         value={formAnswers.howDidYouHear}
//                                         onChange={handleInputChange}
//                                     />
//                                 </label>
//                                 <div className="button-group">
//                                     <button type="button" onClick={handlePrevStep}>← Back</button>
//                                     <button type="submit">Submit</button>
//                                 </div>
//                             </div>
//                         )}
//                     </form>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default PopupForm;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PopupForm.css';
import { BASE_URL, API_KEY, ENTITY_AUTHENTICATION_TOKEN, ENTITY_ID, CAMPAIGN_ID, API_SECRET } from './config';

const PopupForm = ({ closeForm, setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [submissionMessage, setSubmissionMessage] = useState('');
    const [campaignData, setCampaignData] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [formAnswers, setFormAnswers] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        company: '',
        phoneNumber: '',
        jobTitle: '',
        industry: '',
        numberOfEmployees: '',
        country: '',
        howDidYouHear: ''
    });

    const industries = ['Technology', 'Finance', 'Healthcare', 'Education', 'Retail'];
    const countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany'];

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            setIsAuthenticated(true);
            fetchCampaignDetails(userData.token, userData.userId);
        }
    }, [setIsAuthenticated]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('https://staging.questprotocol.xyz/api/users/external/login', {
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

            const userData = response.data;
            localStorage.setItem('userData', JSON.stringify(userData));
            setIsAuthenticated(true);
            setSubmissionMessage('Login successful!');

            await fetchCampaignDetails(userData.token, userData.userId);
            setLoading(false);
        } catch (error) {
            setError('Failed to login: ' + (error.response?.data?.message || error.message));
            setLoading(false);
        }
    };

    const fetchCampaignDetails = async (token, userId) => {
        try {
            const response = await axios.get(`${BASE_URL}/entities/${ENTITY_ID}/campaigns/${CAMPAIGN_ID}`, {
                headers: {
                    'apikey': API_KEY,
                    'token': token,
                    'userid': userId
                },
                params: {
                    variation: 'developer',
                    platform: 'REACT'
                }
            });

            const campaignData = response.data.data;
            setCampaignData(campaignData);
            console.log('Campaign Data:', campaignData); // Log campaign data to console for debugging
        } catch (error) {
            setError('Failed to fetch campaign details: ' + (error.response?.data?.message || error.message));
        }
    };

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormAnswers({
            ...formAnswers,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const userData = JSON.parse(localStorage.getItem('userData'));

            // Create a map of form field names to action IDs
            const actionMap = {};
            campaignData.actions.forEach(action => {
                const formattedTitle = action.title.toLowerCase().replace(/\s+/g, '');
                actionMap[formattedTitle] = action.actionId;
            });

            console.log('Action Map:', actionMap); // Log action map to console for debugging

            // Ensure all form fields are correctly mapped to their respective action IDs
            const actions = Object.keys(formAnswers).map(key => {
                const formattedKey = key.toLowerCase().replace(/\s+/g, '');
                const actionId = actionMap[formattedKey];
                const answer = formAnswers[key];
                console.log(`Mapping field '${key}' to actionId '${actionId}' with answer '${answer}'`);
                return {
                    actionId: actionId,
                    answers: [answer]
                };
            });

            const payload = {
                actions: actions.filter(action => action.actionId && action.answers[0] !== null && action.answers[0] !== ''), // Remove null or empty values and ensure actionId is valid
                campaignVariationId: campaignData.campaignVariationId
            };

            console.log('Submitting payload:', JSON.stringify(payload, null, 2));

            const response = await axios.post(`${BASE_URL}/entities/${ENTITY_ID}/campaigns/${CAMPAIGN_ID}/verify`, payload, {
                headers: {
                    'apikey': API_KEY,
                    'token': userData.token,
                    'userid': userData.userId
                }
            });

            setSubmissionMessage('Form submitted successfully!');
            setLoading(false);
            console.log(response.data); // Log response data to console for debugging
            closeForm();

        } catch (error) {
            console.error('Error details:', error.response?.data || error.message);
            setError('Failed to submit form: ' + (error.response?.data?.message || error.message));
            setLoading(false);
        }
    };

    return (
        <div className="popup-form open">
            <div className="stage-indicator">
                <div className={`stage ${currentStep === 1 ? 'active' : ''}`}>1</div>
                <div className={`stage ${currentStep === 2 ? 'active' : ''}`}>2</div>
            </div>
            <button className="close-button" onClick={closeForm}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M18 6.41L16.59 5 12 9.59 7.41 5 6 6.41 10.59 11 6 15.59 7.41 17 12 12.41 16.59 17 18 15.59 13.41 11z" />
                </svg>
            </button>
            <div className="form-content">
                {!loading && !localStorage.getItem('userData') && (
                    <form onSubmit={handleLogin}>
                        <label>
                            Email:
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <button type="submit">Login</button>
                    </form>
                )}
                {loading && <div>Loading...</div>}
                {error && <div className="error">{error}</div>}
                {submissionMessage && <div>{submissionMessage}</div>}
                {campaignData && (
                    <form onSubmit={handleSubmit}>
                        {currentStep === 1 && (
                            <div>
                                <h3>Your Details</h3>
                                <label>
                                    First Name:
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formAnswers.firstName}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    Last Name:
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formAnswers.lastName}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    Email Address:
                                    <input
                                        type="email"
                                        name="emailAddress"
                                        value={formAnswers.emailAddress}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    Company:
                                    <input
                                        type="text"
                                        name="company"
                                        value={formAnswers.company}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    Phone Number:
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={formAnswers.phoneNumber}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    Job Title:
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        value={formAnswers.jobTitle}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <div className="button-group">
                                    <button type="button" onClick={handleNextStep}>Next →</button>
                                </div>
                            </div>
                        )}
                        {currentStep === 2 && (
                            <div>
                                <h3>Your Business</h3>
                                <label>
                                    Industry:
                                    <select
                                        name="industry"
                                        value={formAnswers.industry}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select Industry</option>
                                        {industries.map(industry => (
                                            <option key={industry} value={industry}>{industry}</option>
                                        ))}
                                    </select>
                                </label>
                                <label>
                                    Number of Employees:
                                    <input
                                        type="number"
                                        name="numberOfEmployees"
                                        value={formAnswers.numberOfEmployees}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    Country:
                                    <select
                                        name="country"
                                        value={formAnswers.country}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select Country</option>
                                        {countries.map(country => (
                                            <option key={country} value={country}>{country}</option>
                                        ))}
                                    </select>
                                </label>
                                <label>
                                    How did you hear about us:
                                    <input
                                        type="text"
                                        name="howDidYouHear"
                                        value={formAnswers.howDidYouHear}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <div className="button-group">
                                    <button type="button" onClick={handlePrevStep}>← Back</button>
                                    <button type="submit">Submit</button>
                                </div>
                            </div>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
};

export default PopupForm;




