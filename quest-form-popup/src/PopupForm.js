// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './PopupForm.css';
// import { BASE_URL, API_KEY, ENTITY_AUTHENTICATION_TOKEN, ENTITY_ID, CAMPAIGN_ID, API_SECRET } from './config';

// const PopupForm = ({ closeForm, setIsAuthenticated }) => {
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [submissionMessage, setSubmissionMessage] = useState('');
//   const [campaignData, setCampaignData] = useState(null);
//   const [selectedActionId, setSelectedActionId] = useState('');
//   const [actionAnswer, setActionAnswer] = useState('');

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem('userData'));
//     if (userData) {
//       setIsAuthenticated(true);
//       fetchCampaignDetails(userData.token, userData.userId);
//     }
//   }, [setIsAuthenticated]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post('https://staging.questprotocol.xyz/api/users/external/login', {
//         entityId: ENTITY_ID,
//         externalUserId: 'example-x012121212',
//         walletAddress: 'abc@',
//         email: email
//       }, {
//         headers: {
//           'apikey': API_KEY,
//           'apisecret': API_SECRET,
//           'entity-authentication-token': ENTITY_AUTHENTICATION_TOKEN
//         }
//       });

//       const userData = response.data;
//       localStorage.setItem('userData', JSON.stringify(userData));
//       setIsAuthenticated(true);
//       setSubmissionMessage('Login successful!');

//       await fetchCampaignDetails(userData.token, userData.userId);
//       setLoading(false);
//     } catch (error) {
//       setError('Failed to login: ' + (error.response?.data?.message || error.message));
//       setLoading(false);
//     }
//   };

//   const fetchCampaignDetails = async (token, userId) => {
//     try {
//       const response = await axios.get(`${BASE_URL}/entities/${ENTITY_ID}/campaigns/${CAMPAIGN_ID}`, {
//         headers: {
//           'apikey': API_KEY,
//           'token': token,
//           'userid': userId
//         },
//         params: {
//           variation: 'developer',
//           platform: 'REACT'
//         }
//       });

//       const campaignData = response.data.data;
//       setCampaignData(campaignData);
//       console.log(campaignData); // Log campaign data to console for debugging
//     } catch (error) {
//       setError('Failed to fetch campaign details: ' + (error.response?.data?.message || error.message));
//     }
//   };

//   const handleVerifyActions = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const userData = JSON.parse(localStorage.getItem('userData'));
//       const payload = {
//         actions: [{
//           actionId: selectedActionId,
//           answers: [actionAnswer]
//         }],
//         campaignVariationId: campaignData.campaignVariationId
//       };

//       console.log('Submitting payload:', JSON.stringify(payload, null, 2));

//       const response = await axios.post(`${BASE_URL}/entities/${ENTITY_ID}/campaigns/${CAMPAIGN_ID}/verify`, payload, {
//         headers: {
//           'apikey': API_KEY,
//           'token': userData.token,
//           'userid': userData.userId
//         }
//       });

//       setSubmissionMessage('Actions verified successfully!');
//       setLoading(false);
//       console.log(response.data); // Log response data to console for debugging

//     } catch (error) {
//       console.error('Error details:', error.response?.data || error.message);
//       setError('Failed to verify actions: ' + (error.response?.data?.message || error.message));
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="popup-form open">
//       <div className="form-content">
//         {!loading && !localStorage.getItem('userData') && (
//           <form onSubmit={handleLogin}>
//             <label>
//               Email:
//               <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </label>
//             <button type="submit">Login</button>
//           </form>
//         )}
//         {loading && <div>Loading...</div>}
//         {error && <div className="error">{error}</div>}
//         {submissionMessage && <div>{submissionMessage}</div>}
//         {campaignData && (
//           <div>
//             <h3>Campaign Details</h3>
//             <p>Campaign ID: {campaignData.campaignId}</p>
//             <label>
//               Select Action:
//               <select value={selectedActionId} onChange={(e) => setSelectedActionId(e.target.value)}>
//                 <option value="" disabled>Select an action</option>
//                 {campaignData.actions.map(action => (
//                   <option key={action.actionId} value={action.actionId}>
//                     {action.title}
//                   </option>
//                 ))}
//               </select>
//             </label>
//             {selectedActionId && (
//               <form onSubmit={handleVerifyActions}>
//                 <label>
//                   Answer:
//                   <input
//                     type="text"
//                     value={actionAnswer}
//                     onChange={(e) => setActionAnswer(e.target.value)}
//                   />
//                 </label>
//                 <button type="submit">Verify Selected Action</button>
//               </form>
//             )}
//           </div>
//         )}
//       </div>
//       <button className="close-button" onClick={closeForm}>Close</button>
//     </div>
//   );
// };

// export default PopupForm;
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
//     const [selectedActionId, setSelectedActionId] = useState('');
//     const [actionAnswer, setActionAnswer] = useState('');

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

//     const handleVerifyActions = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const userData = JSON.parse(localStorage.getItem('userData'));
//             const payload = {
//                 actions: [{
//                     actionId: selectedActionId,
//                     answers: [actionAnswer]
//                 }],
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

//             setSubmissionMessage('Actions verified successfully!');
//             setLoading(false);
//             console.log(response.data); // Log response data to console for debugging

//         } catch (error) {
//             console.error('Error details:', error.response?.data || error.message);
//             setError('Failed to verify actions: ' + (error.response?.data?.message || error.message));
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="popup-form open">
//             <button onClick={closeForm}>Close</button>
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
//                     <div>
//                         <h3>Campaign Details</h3>
//                         <p>Campaign ID: {campaignData.campaignId}</p>
//                         <label>
//                             Select Action:
//                             <select value={selectedActionId} onChange={(e) => setSelectedActionId(e.target.value)}>
//                                 <option value="" disabled>Select an action</option>
//                                 {campaignData.actions.map(action => (
//                                     <option key={action.actionId} value={action.actionId}>
//                                         {action.title}
//                                     </option>
//                                 ))}
//                             </select>
//                         </label>
//                         {selectedActionId && (
//                             <form onSubmit={handleVerifyActions}>
//                                 <label>
//                                     Answer:
//                                     <input
//                                         type="text"
//                                         value={actionAnswer}
//                                         onChange={(e) => setActionAnswer(e.target.value)}
//                                     />
//                                 </label>
//                                 <button type="submit">Verify Selected Action</button>
//                             </form>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default PopupForm;

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
//     const [selectedActionId, setSelectedActionId] = useState('');
//     const [actionAnswer, setActionAnswer] = useState('');

//     const [company, setCompany] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [jobTitle, setJobTitle] = useState('');
//     const [industry, setIndustry] = useState('');
//     const [numberOfEmployees, setNumberOfEmployees] = useState('');
//     const [country, setCountry] = useState('');
//     const [howDidYouHear, setHowDidYouHear] = useState('');

//     const [step, setStep] = useState(1);

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

//     const handleVerifyActions = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const userData = JSON.parse(localStorage.getItem('userData'));
//             const payload = {
//                 actions: [{
//                     actionId: selectedActionId,
//                     answers: [actionAnswer]
//                 }],
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

//             setSubmissionMessage('Actions verified successfully!');
//             setLoading(false);
//             console.log(response.data); // Log response data to console for debugging

//         } catch (error) {
//             console.error('Error details:', error.response?.data || error.message);
//             setError('Failed to verify actions: ' + (error.response?.data?.message || error.message));
//             setLoading(false);
//         }
//     };

//     const handleNextStep = () => {
//         setStep(step + 1);
//     };

//     const handlePrevStep = () => {
//         setStep(step - 1);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Add the logic for submitting the form data
//     };

//     return (
//         <div className="popup-form open">
//             <button className="close-button" onClick={closeForm}>Close</button>
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
//                     <div>
//                         <h3>Campaign Details</h3>
//                         <p>Campaign ID: {campaignData.campaignId}</p>
//                         <label>
//                             Select Action:
//                             <select value={selectedActionId} onChange={(e) => setSelectedActionId(e.target.value)}>
//                                 <option value="" disabled>Select an action</option>
//                                 {campaignData.actions.map(action => (
//                                     <option key={action.actionId} value={action.actionId}>
//                                         {action.title}
//                                     </option>
//                                 ))}
//                             </select>
//                         </label>
//                         {selectedActionId && (
//                             <form onSubmit={handleVerifyActions}>
//                                 <label>
//                                     Answer:
//                                     <input
//                                         type="text"
//                                         value={actionAnswer}
//                                         onChange={(e) => setActionAnswer(e.target.value)}
//                                     />
//                                 </label>
//                                 <button type="submit">Verify Selected Action</button>
//                             </form>
//                         )}
//                     </div>
//                 )}
//                 <form onSubmit={handleSubmit}>
//                     {step === 1 && (
//                         <div>
//                             <label>
//                                 Company:
//                                 <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
//                             </label>
//                             <label>
//                                 Phone number:
//                                 <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//                             </label>
//                             <button type="button" onClick={handleNextStep}>Next</button>
//                         </div>
//                     )}
//                     {step === 2 && (
//                         <div>
//                             <label>
//                                 Job Title:
//                                 <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
//                             </label>
//                             <label>
//                                 Industry:
//                                 <input type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} />
//                             </label>
//                             <button type="button" onClick={handlePrevStep}>Back</button>
//                             <button type="button" onClick={handleNextStep}>Next</button>
//                         </div>
//                     )}
//                     {step === 3 && (
//                         <div>
//                             <label>
//                                 Number of Employees:
//                                 <input type="text" value={numberOfEmployees} onChange={(e) => setNumberOfEmployees(e.target.value)} />
//                             </label>
//                             <label>
//                                 Country:
//                                 <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
//                             </label>
//                             <button type="button" onClick={handlePrevStep}>Back</button>
//                             <button type="button" onClick={handleNextStep}>Next</button>
//                         </div>
//                     )}
//                     {step === 4 && (
//                         <div>
//                             <label>
//                                 How did you hear about us:
//                                 <input type="text" value={howDidYouHear} onChange={(e) => setHowDidYouHear(e.target.value)} />
//                             </label>
//                             <button type="button" onClick={handlePrevStep}>Back</button>
//                             <button type="submit">Submit</button>
//                         </div>
//                     )}
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default PopupForm;
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
//     const [selectedActionId, setSelectedActionId] = useState('');
//     const [actionAnswer, setActionAnswer] = useState('');

//     const [company, setCompany] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [jobTitle, setJobTitle] = useState('');
//     const [industry, setIndustry] = useState('');
//     const [numberOfEmployees, setNumberOfEmployees] = useState('');
//     const [country, setCountry] = useState('');
//     const [howDidYouHear, setHowDidYouHear] = useState('');

//     const [step, setStep] = useState(1);

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

//     const handleVerifyActions = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const userData = JSON.parse(localStorage.getItem('userData'));
//             const payload = {
//                 actions: [{
//                     actionId: selectedActionId,
//                     answers: [actionAnswer]
//                 }],
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

//             setSubmissionMessage('Actions verified successfully!');
//             setLoading(false);
//             console.log(response.data); // Log response data to console for debugging
//             setStep(2); // Move to next step after verification

//         } catch (error) {
//             console.error('Error details:', error.response?.data || error.message);
//             setError('Failed to verify actions: ' + (error.response?.data?.message || error.message));
//             setLoading(false);
//         }
//     };

//     const handleNextStep = () => {
//         setStep(step + 1);
//     };

//     const handlePrevStep = () => {
//         setStep(step - 1);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Simulate form submission and close form after submission
//         setLoading(true);
//         setTimeout(() => {
//             setLoading(false);
//             setSubmissionMessage('Form submitted successfully!');
//             closeForm();
//         }, 2000); // Simulate network request delay
//     };

//     return (
//         <div className="popup-form open">
//             <button className="close-button" onClick={closeForm}>Close</button>
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
//                     <div>
//                         <h3>Campaign Details</h3>
//                         <p>Campaign ID: {campaignData.campaignId}</p>
//                         <label>
//                             Select Action:
//                             <select value={selectedActionId} onChange={(e) => setSelectedActionId(e.target.value)}>
//                                 <option value="" disabled>Select an action</option>
//                                 {campaignData.actions.map(action => (
//                                     <option key={action.actionId} value={action.actionId}>
//                                         {action.title}
//                                     </option>
//                                 ))}
//                             </select>
//                         </label>
//                         {selectedActionId && step === 1 && (
//                             <form onSubmit={handleVerifyActions}>
//                                 <label>
//                                     Answer:
//                                     <input
//                                         type="text"
//                                         value={actionAnswer}
//                                         onChange={(e) => setActionAnswer(e.target.value)}
//                                     />
//                                 </label>
//                                 <button type="submit">Verify Selected Action</button>
//                             </form>
//                         )}
//                     </div>
//                 )}
//                 {step > 1 && (
//                     <form onSubmit={handleSubmit}>
//                         {step === 2 && (
//                             <div>
//                                 <label>
//                                     Company:
//                                     <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
//                                 </label>
//                                 <label>
//                                     Phone number:
//                                     <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//                                 </label>
//                                 <button type="button" onClick={handleNextStep}>Next</button>
//                             </div>
//                         )}
//                         {step === 3 && (
//                             <div>
//                                 <label>
//                                     Job Title:
//                                     <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
//                                 </label>
//                                 <label>
//                                     Industry:
//                                     <input type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} />
//                                 </label>
//                                 <button type="button" onClick={handlePrevStep}>Back</button>
//                                 <button type="button" onClick={handleNextStep}>Next</button>
//                             </div>
//                         )}
//                         {step === 4 && (
//                             <div>
//                                 <label>
//                                     Number of Employees:
//                                     <input type="text" value={numberOfEmployees} onChange={(e) => setNumberOfEmployees(e.target.value)} />
//                                 </label>
//                                 <label>
//                                     Country:
//                                     <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
//                                 </label>
//                                 <button type="button" onClick={handlePrevStep}>Back</button>
//                                 <button type="button" onClick={handleNextStep}>Next</button>
//                             </div>
//                         )}
//                         {step === 5 && (
//                             <div>
//                                 <label>
//                                     How did you hear about us:
//                                     <input type="text" value={howDidYouHear} onChange={(e) => setHowDidYouHear(e.target.value)} />
//                                 </label>
//                                 <button type="button" onClick={handlePrevStep}>Back</button>
//                                 <button type="submit">Submit</button>
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
    const [selectedActionId, setSelectedActionId] = useState('');
    const [actionAnswer, setActionAnswer] = useState('');

    const [company, setCompany] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [industry, setIndustry] = useState('');
    const [numberOfEmployees, setNumberOfEmployees] = useState('');
    const [country, setCountry] = useState('');
    const [howDidYouHear, setHowDidYouHear] = useState('');

    const [step, setStep] = useState(1);

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
            console.log(campaignData); // Log campaign data to console for debugging
        } catch (error) {
            setError('Failed to fetch campaign details: ' + (error.response?.data?.message || error.message));
        }
    };

    const handleVerifyActions = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const userData = JSON.parse(localStorage.getItem('userData'));
            const payload = {
                actions: [{
                    actionId: selectedActionId,
                    answers: [actionAnswer]
                }],
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

            setSubmissionMessage('Actions verified successfully!');
            setLoading(false);
            console.log(response.data); // Log response data to console for debugging
            setStep(2); // Move to next step after verification

        } catch (error) {
            console.error('Error details:', error.response?.data || error.message);
            setError('Failed to verify actions: ' + (error.response?.data?.message || error.message));
            setLoading(false);
        }
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Simulate form submission and close form after submission
        setLoading(true);
        console.log('Form data:', {
            company,
            phoneNumber,
            jobTitle,
            industry,
            numberOfEmployees,
            country,
            howDidYouHear
        }); // Log form data to console for debugging
        setTimeout(() => {
            setLoading(false);
            setSubmissionMessage('Form submitted successfully!');
            closeForm();
        }, 2000); // Simulate network request delay
    };

    return (
        <div className="popup-form open">
            <button className="close-button" onClick={closeForm}>Close</button>
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
                    <div>
                        <h3>Campaign Details</h3>
                        <p>Campaign ID: {campaignData.campaignId}</p>
                        <label>
                            Select Action:
                            <select value={selectedActionId} onChange={(e) => setSelectedActionId(e.target.value)}>
                                <option value="" disabled>Select an action</option>
                                {campaignData.actions.map(action => (
                                    <option key={action.actionId} value={action.actionId}>
                                        {action.title}
                                    </option>
                                ))}
                            </select>
                        </label>
                        {selectedActionId && step === 1 && (
                            <form onSubmit={handleVerifyActions}>
                                <label>
                                    Answer:
                                    <input
                                        type="text"
                                        value={actionAnswer}
                                        onChange={(e) => setActionAnswer(e.target.value)}
                                    />
                                </label>
                                <button type="submit">Verify Selected Action</button>
                            </form>
                        )}
                    </div>
                )}
                {step > 1 && (
                    <form onSubmit={handleSubmit}>
                        {step === 2 && (
                            <div>
                                <label>
                                    Company:
                                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
                                </label>
                                <label>
                                    Phone number:
                                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                </label>
                                <button type="button" onClick={handleNextStep}>Next</button>
                            </div>
                        )}
                        {step === 3 && (
                            <div>
                                <label>
                                    Job Title:
                                    <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
                                </label>
                                <label>
                                    Industry:
                                    <input type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} />
                                </label>
                                <button type="button" onClick={handlePrevStep}>Back</button>
                                <button type="button" onClick={handleNextStep}>Next</button>
                            </div>
                        )}
                        {step === 4 && (
                            <div>
                                <label>
                                    Number of Employees:
                                    <input type="text" value={numberOfEmployees} onChange={(e) => setNumberOfEmployees(e.target.value)} />
                                </label>
                                <label>
                                    Country:
                                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                                </label>
                                <button type="button" onClick={handlePrevStep}>Back</button>
                                <button type="button" onClick={handleNextStep}>Next</button>
                            </div>
                        )}
                        {step === 5 && (
                            <div>
                                <label>
                                    How did you hear about us:
                                    <input type="text" value={howDidYouHear} onChange={(e) => setHowDidYouHear(e.target.value)} />
                                </label>
                                <button type="button" onClick={handlePrevStep}>Back</button>
                                <button type="submit">Submit</button>
                            </div>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
};

export default PopupForm;
