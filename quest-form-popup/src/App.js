// import React, { useState, useEffect } from 'react';
// import './App.css';
// import PopupForm from './PopupForm';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   useEffect(() => {
//     const userData = localStorage.getItem('userData');
//     if (userData) {
//       setIsAuthenticated(true);
//     }
//   }, [setIsAuthenticated]);

//   const openForm = () => {
//     setIsFormOpen(true);
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//   };

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <div className="app">
//       <header>
//         <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
//           <div className="navbar-logo">
//             <a href="#home">Braze</a>
//           </div>
//           <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
//             <li><a href="#how-it-works" onClick={toggleNav}>How it Works</a></li>
//             <li><a href="#product" onClick={toggleNav}>Product</a></li>
//             <li><a href="#solutions" onClick={toggleNav}>Solutions</a></li>
//             <li><a href="#customers" onClick={toggleNav}>Customers</a></li>
//             <li><a href="#resources" onClick={toggleNav}>Resources</a></li>
//             {!isAuthenticated && <li><a href="#" onClick={openForm}>Login</a></li>}
//           </ul>
//           <button className="navbar-toggle" aria-label="Toggle navigation" onClick={toggleNav}>
//             {isNavOpen ? '✖' : '☰'}
//           </button>
//         </nav>
//       </header>
//       <main>
//         <section className="hero-section">
//           <div className="hero-content">
//             <h1>There's never been a better time to be a better marketer.</h1>
//             <p>Data is flowing and channels are growing. Customers are demanding the world, while AI is already transforming it. Manage it all with the right customer engagement platform.</p>
//             <div className="hero-buttons">
//               <button className="get-started-button">Get Started</button>
//               <button className="watch-video-button">Watch Video</button>
//             </div>
//           </div>
//           <div className="hero-image">
//             <img src="path_to_your_image_or_video_thumbnail" alt="Be Absolutely Engaging" />
//           </div>
//         </section>
//       </main>
//       <footer>
//         <button className="connect-with-sales-button" onClick={openForm}>Connect With Sales</button>
//       </footer>
//       {isFormOpen && <PopupForm closeForm={closeForm} setIsAuthenticated={setIsAuthenticated} />}
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import PopupForm from './PopupForm';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   useEffect(() => {
//     const userData = localStorage.getItem('userData');
//     if (userData) {
//       setIsAuthenticated(true);
//     }
//   }, [setIsAuthenticated]);

//   const openForm = () => {
//     setIsFormOpen(true);
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//   };

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <div className="app">
//       <header>
//         <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
//           <div className="navbar-logo">
//             <a href="#home">Braze</a>
//           </div>
//           <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
//             <li><a href="#how-it-works" onClick={toggleNav}>How it Works</a></li>
//             <li><a href="#product" onClick={toggleNav}>Product</a></li>
//             <li><a href="#solutions" onClick={toggleNav}>Solutions</a></li>
//             <li><a href="#customers" onClick={toggleNav}>Customers</a></li>
//             <li><a href="#resources" onClick={toggleNav}>Resources</a></li>
//             {!isAuthenticated && <li><a href="#" onClick={openForm}>Login</a></li>}
//           </ul>
//           <button className="navbar-toggle" aria-label="Toggle navigation" onClick={toggleNav}>
//             {isNavOpen ? '✖' : '☰'}
//           </button>
//         </nav>
//       </header>
//       <main>
//         <section className="hero-section">
//           <div className="hero-content">
//             <h1>There's never been a better time to be a better marketer.</h1>
//             <p>Data is flowing and channels are growing. Customers are demanding the world, while AI is already transforming it. Manage it all with the right customer engagement platform.</p>
//             <div className="hero-buttons">
//               <button className="get-started-button">Get Started</button>
//               <button className="watch-video-button">Watch Video</button>
//             </div>
//           </div>
//           <div className="hero-image">
//             <div className="relative">
//               <span className="play-container wistia_embed wistia_async_3gi2kcrqwn popover=true popoverContent=link popoverPreventScroll=true wistia_embed_initialized" id="wistia-3gi2kcrqwn-2">
//                 <div id="wistia_56.thumb_container" className="wistia_click_to_play" style={{ position: 'relative', height: '0px', width: '0px' }}>
//                   <button id="homepage-video-play" className="video-modal-button open-modal">
//                     <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M24.2919 12.058C25.7896 12.9213 25.7896 15.0794 24.2919 15.9427L4.07337 27.5968C2.5757 28.4601 0.703613 27.381 0.703613 25.6544L0.703614 2.34627C0.703614 0.619741 2.5757 -0.459339 4.07337 0.403926L24.2919 12.058Z" fill="white"></path>
//                     </svg>
//                   </button>
//                 </div>
//               </span>
//               <div id="playback-video" className="video-container relative rounded-lg overflow-hidden">
//                 <img src="https://www.braze.com/assets/home/hp-player-crop.png" className="w-full h-full object-contain xl:w-9/12 m-auto" alt="Hero Video Thumbnail" />
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer>
//         <button className="connect-with-sales-button">Connect With Sales</button>
//       </footer>
//       {isFormOpen && <PopupForm closeForm={closeForm} setIsAuthenticated={setIsAuthenticated} />}
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import PopupForm from './PopupForm';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [isVideoOpen, setIsVideoOpen] = useState(false);

//   useEffect(() => {
//     const userData = localStorage.getItem('userData');
//     if (userData) {
//       setIsAuthenticated(true);
//     }
//   }, [setIsAuthenticated]);

//   const openForm = () => {
//     setIsFormOpen(true);
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//   };

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const openVideo = () => {
//     setIsVideoOpen(true);
//   };

//   const closeVideo = () => {
//     setIsVideoOpen(false);
//   };

//   return (
//     <div className="app">
//       <header>
//         <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
//           <div className="navbar-logo">
//             <a href="#home">Braze</a>
//           </div>
//           <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
//             <li><a href="#how-it-works" onClick={toggleNav}>How it Works</a></li>
//             <li><a href="#product" onClick={toggleNav}>Product</a></li>
//             <li><a href="#solutions" onClick={toggleNav}>Solutions</a></li>
//             <li><a href="#customers" onClick={toggleNav}>Customers</a></li>
//             <li><a href="#resources" onClick={toggleNav}>Resources</a></li>
//             {!isAuthenticated && <li><a href="#" onClick={openForm}>Login</a></li>}
//           </ul>
//           <button className="navbar-toggle" aria-label="Toggle navigation" onClick={toggleNav}>
//             {isNavOpen ? '✖' : '☰'}
//           </button>
//         </nav>
//       </header>
//       <main>
//         <section className="hero-section">
//           <div className="hero-content">
//             <h1>There's never been a better time to be a better marketer.</h1>
//             <p>Data is flowing and channels are growing. Customers are demanding the world, while AI is already transforming it. Manage it all with the right customer engagement platform.</p>
//             <div className="hero-buttons">
//               <button className="get-started-button">Get Started</button>
//               <button className="watch-video-button" onClick={openVideo}>Watch Video</button>
//             </div>
//           </div>
//           <div className="hero-image">
//             <div className="relative">
//               <span className="play-container wistia_embed wistia_async_3gi2kcrqwn popover=true popoverContent=link popoverPreventScroll=true wistia_embed_initialized" id="wistia-3gi2kcrqwn-2">
//                 <div id="wistia_56.thumb_container" className="wistia_click_to_play" style={{ position: 'relative', height: '0px', width: '0px' }}>
//                   {/* <button id="homepage-video-play" className="video-modal-button open-modal">
//                     <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M24.2919 12.058C25.7896 12.9213 25.7896 15.0794 24.2919 15.9427L4.07337 27.5968C2.5757 28.4601 0.703613 27.381 0.703613 25.6544L0.703614 2.34627C0.703614 0.619741 2.5757 -0.459339 4.07337 0.403926L24.2919 12.058Z" fill="white"></path>
//                     </svg>
//                   </button> */}
//                 </div>
//               </span>
//               <div id="playback-video" className="video-container relative rounded-lg overflow-hidden">
//                 <img src="https://www.braze.com/assets/home/hp-player-crop.png" className="w-full h-full object-contain xl:w-9/12 m-auto" alt="Hero Video Thumbnail" />
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer>
//         <button className="connect-with-sales-button">Connect With Sales</button>
//       </footer>
//       {isFormOpen && <PopupForm closeForm={closeForm} setIsAuthenticated={setIsAuthenticated} />}
//       {isVideoOpen && (
//         <div className="video-modal">
//           <button className="close-video-button" onClick={closeVideo}>Close</button>
//           <video controls autoPlay>
//             <source src="https://link-to-your-video-file.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import PopupForm from './PopupForm';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [isVideoOpen, setIsVideoOpen] = useState(false);

//   useEffect(() => {
//     const userData = localStorage.getItem('userData');
//     if (userData) {
//       setIsAuthenticated(true);
//     }
//   }, [setIsAuthenticated]);

//   const openForm = () => {
//     setIsFormOpen(true);
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//   };

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const openVideo = () => {
//     setIsVideoOpen(true);
//   };

//   const closeVideo = () => {
//     setIsVideoOpen(false);
//   };

//   return (
//     <div className="app">
//       <header>
//         <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
//           <div className="navbar-logo">
//             <a href="#home">Braze</a>
//           </div>
//           <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
//             <li><a href="#how-it-works" onClick={toggleNav}>How it Works</a></li>
//             <li><a href="#product" onClick={toggleNav}>Product</a></li>
//             <li><a href="#solutions" onClick={toggleNav}>Solutions</a></li>
//             <li><a href="#customers" onClick={toggleNav}>Customers</a></li>
//             <li><a href="#resources" onClick={toggleNav}>Resources</a></li>
//             {!isAuthenticated && <li><a href="#" onClick={openForm}>Login</a></li>}
//           </ul>
//           <button className="navbar-toggle" aria-label="Toggle navigation" onClick={toggleNav}>
//             {isNavOpen ? '✖' : '☰'}
//           </button>
//         </nav>
//       </header>
//       <main>
//         <section className="hero-section">
//           <div className="hero-content">
//             <h1>There's never been a better time to be a better marketer.</h1>
//             <p>Data is flowing and channels are growing. Customers are demanding the world, while AI is already transforming it. Manage it all with the right customer engagement platform.</p>
//             <div className="hero-buttons">
//               <button className="get-started-button">Get Started</button>
//               <button className="watch-video-button" onClick={openVideo}>Watch Video</button>
//             </div>
//           </div>
//           <div className="hero-image">
//             <div className="relative">
//               <span className="play-container wistia_embed wistia_async_3gi2kcrqwn popover=true popoverContent=link popoverPreventScroll=true wistia_embed_initialized" id="wistia-3gi2kcrqwn-2">
//                 <div id="wistia_56.thumb_container" className="wistia_click_to_play" style={{ position: 'relative', height: '0px', width: '0px' }}>
//                   <button id="homepage-video-play" className="video-modal-button open-modal">
//                     <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M24.2919 12.058C25.7896 12.9213 25.7896 15.0794 24.2919 15.9427L4.07337 27.5968C2.5757 28.4601 0.703613 27.381 0.703613 25.6544L0.703614 2.34627C0.703614 0.619741 2.5757 -0.459339 4.07337 0.403926L24.2919 12.058Z" fill="white"></path>
//                     </svg>
//                   </button>
//                 </div>
//               </span>
//               <div id="playback-video" className="video-container relative rounded-lg overflow-hidden">
//                 <img src="https://www.braze.com/assets/home/hp-player-crop.png" className="w-full h-full object-contain xl:w-9/12 m-auto" alt="Hero Video Thumbnail" />
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer>
//         <button className="connect-with-sales-button">Connect With Sales</button>
//       </footer>
//       {isFormOpen && <PopupForm closeForm={closeForm} setIsAuthenticated={setIsAuthenticated} />}
//       {isVideoOpen && (
//         <div className="video-modal">
//           <button className="close-video-button" onClick={closeVideo}>Close</button>
//           <video controls autoPlay>
//             <source src="https://link-to-your-video-file.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import PopupForm from './PopupForm';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [isVideoOpen, setIsVideoOpen] = useState(false);

//   useEffect(() => {
//     const userData = localStorage.getItem('userData');
//     if (userData) {
//       setIsAuthenticated(true);
//     }
//   }, [setIsAuthenticated]);

//   const openForm = () => {
//     setIsFormOpen(true);
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//   };

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const openVideo = () => {
//     setIsVideoOpen(true);
//   };

//   const closeVideo = () => {
//     setIsVideoOpen(false);
//   };

//   return (
//     <div className="app">
//       <header>
//         <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
//           <div className="navbar-logo">
//             <a href="#home">Braze</a>
//           </div>
//           <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
//             <li><a href="#how-it-works" onClick={toggleNav}>How it Works</a></li>
//             <li><a href="#product" onClick={toggleNav}>Product</a></li>
//             <li><a href="#solutions" onClick={toggleNav}>Solutions</a></li>
//             <li><a href="#customers" onClick={toggleNav}>Customers</a></li>
//             <li><a href="#resources" onClick={toggleNav}>Resources</a></li>
//             {!isAuthenticated && <li><a href="#" onClick={openForm}>Login</a></li>}
//           </ul>
//           <button className="navbar-toggle" aria-label="Toggle navigation" onClick={toggleNav}>
//             {isNavOpen ? '✖' : '☰'}
//           </button>
//         </nav>
//       </header>
//       <main>
//         <section className="hero-section">
//           <div className="hero-content">
//             <h1>There's never been a better time to be a better marketer.</h1>
//             <p>Data is flowing and channels are growing. Customers are demanding the world, while AI is already transforming it. Manage it all with the right customer engagement platform.</p>
//             <div className="hero-buttons">
//               <button className="get-started-button">Get Started</button>
//               <button className="watch-video-button" onClick={openVideo}>Watch Video</button>
//             </div>
//           </div>
//           <div className="hero-image">
//             <div className="relative">
//               <span className="play-container wistia_embed wistia_async_3gi2kcrqwn popover=true popoverContent=link popoverPreventScroll=true wistia_embed_initialized" id="wistia-3gi2kcrqwn-2">
               
//               </span>
//               <div id="playback-video" className="video-container relative rounded-lg overflow-hidden">
//                 <img src="https://www.braze.com/assets/home/hp-player-crop.png" className="w-full h-full object-contain xl:w-9/12 m-auto" alt="Hero Video Thumbnail" />
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer>
//         <button className="connect-with-sales-button">Connect With Sales</button>
//       </footer>
//       {isFormOpen && <PopupForm closeForm={closeForm} setIsAuthenticated={setIsAuthenticated} />}
//       {isVideoOpen && (
//         <div className="video-modal">
//           <button className="close-video-button" onClick={closeVideo}>Close</button>
//           <video controls autoPlay>
//             <source src="https://link-to-your-video-file.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import PopupForm from './PopupForm';
// import Footer from './Footer';
// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [isVideoOpen, setIsVideoOpen] = useState(false);

//   useEffect(() => {
//     const userData = localStorage.getItem('userData');
//     if (userData) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const openForm = () => {
//     setIsFormOpen(true);
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//   };

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const openVideo = () => {
//     setIsVideoOpen(true);
//   };

//   const closeVideo = () => {
//     setIsVideoOpen(false);
//   };

//   return (
//     <div className="app">
//       <header>
//         <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
//           <div className="navbar-logo">
//             <a href="#home">Braze</a>
//           </div>
//           <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
//             <li><a href="#how-it-works" onClick={toggleNav}>How it Works</a></li>
//             <li><a href="#product" onClick={toggleNav}>Product</a></li>
//             <li><a href="#solutions" onClick={toggleNav}>Solutions</a></li>
//             <li><a href="#customers" onClick={toggleNav}>Customers</a></li>
//             <li><a href="#resources" onClick={toggleNav}>Resources</a></li>
//             {!isAuthenticated && <li><a href="#" onClick={openForm}>Login</a></li>}
//           </ul>
//           <button className="navbar-toggle" aria-label="Toggle navigation" onClick={toggleNav}>
//             {isNavOpen ? '✖' : '☰'}
//           </button>
//         </nav>
//       </header>
//       <main>
//         <section className="hero-section">
//           <div className="hero-content">
//             <h1>There's never been a better time to be a better marketer.</h1>
//             <p>Data is flowing and channels are growing. Customers are demanding the world, while AI is already transforming it. Manage it all with the right customer engagement platform.</p>
//             <div className="hero-buttons">
//               <button className="get-started-button">Get Started</button>
//               <button className="watch-video-button" onClick={openVideo}>Watch Video</button>
//             </div>
//           </div>
//           <div className="hero-image">
//             <div className="relative">
              
//               <div id="playback-video" className="video-container relative rounded-lg overflow-hidden">
//                 <img src="https://www.braze.com/assets/home/hp-player-crop.png" className="w-full h-full object-contain xl:w-9/12 m-auto" alt="Hero Video Thumbnail" />
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="footer">
//         <div className="footer-logo">
//           <a href="#home">Braze</a>
//         </div>
//         <ul className="footer-links">
//           <li><a href="#how-it-works">How it Works</a></li>
//           <li><a href="#product">Product</a></li>
//           <li><a href="#solutions">Solutions</a></li>
//           <li><a href="#customers">Customers</a></li>
//           <li><a href="#resources">Resources</a></li>
//         </ul>
//         <button className="footer-button connect-with-sales-button">Connect With Sales</button>
//       </footer>
//       {isFormOpen && <PopupForm closeForm={closeForm} setIsAuthenticated={setIsAuthenticated} />}
//       {isVideoOpen && (
//         <div className="video-modal">
//           <button className="close-video-button" onClick={closeVideo}>Close</button>
//           <video controls autoPlay>
//             <source src="https://link-to-your-video-file.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import PopupForm from './PopupForm';
// import Footer from './Footer';
// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [isVideoOpen, setIsVideoOpen] = useState(false);

//   useEffect(() => {
//     const userData = localStorage.getItem('userData');
//     if (userData) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const openForm = () => {
//     setIsFormOpen(true);
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//   };

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const openVideo = () => {
//     setIsVideoOpen(true);
//   };

//   const closeVideo = () => {
//     setIsVideoOpen(false);
//   };

//   return (
//     <div className="app">
//     <header style={{position:'sticky',top:"0px",left:"0px"}}>
//         <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
//           <div className="navbar-logo">
//             <a href="#home">Braze</a>
//           </div>
//           <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
//             <li><a href="#how-it-works" onClick={toggleNav}>How it Works</a></li>
//             <li><a href="#product" onClick={toggleNav}>Product</a></li>
//             <li><a href="#solutions" onClick={toggleNav}>Solutions</a></li>
//             <li><a href="#customers" onClick={toggleNav}>Customers</a></li>
//             <li><a href="#resources" onClick={toggleNav}>Resources</a></li>
//             {!isAuthenticated && <li><a href="#" onClick={openForm}>Login</a></li>}
//           </ul>
//           <button className="navbar-toggle" aria-label="Toggle navigation" onClick={toggleNav}>
//             {isNavOpen ? '✖' : '☰'}
//           </button>
//         </nav>
//       </header>
//       <main>
//         <section className="hero-section">
//           <div className="hero-content">
//             <h1>There's never been a better time to be a better marketer.</h1>
//             <p>Data is flowing and channels are growing. Customers are demanding the world, while AI is already transforming it. Manage it all with the right customer engagement platform.</p>
//             <div className="hero-buttons">
//               <button className="get-started-button">Get Started</button>
//               <button className="watch-video-button" onClick={openVideo}>Watch Video</button>
//             </div>
//           </div>
//           <div className="hero-image">
//             <div className="relative">
//               <div id="playback-video" className="video-container relative rounded-lg overflow-hidden">
//                 <img src="https://www.braze.com/assets/home/hp-player-crop.png" className="w-full h-full object-contain xl:w-9/12 m-auto" alt="Hero Video Thumbnail" />
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//       {isFormOpen && <PopupForm closeForm={closeForm} setIsAuthenticated={setIsAuthenticated} />}
//       {isVideoOpen && (
//         <div className="video-modal">
//           <button className="close-video-button" onClick={closeVideo}>Close</button>
//           <video controls autoPlay>
//             <source src="https://link-to-your-video-file.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import PopupForm from './PopupForm';
// import Footer from './Footer';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [isVideoOpen, setIsVideoOpen] = useState(false);

//   useEffect(() => {
//     const userData = localStorage.getItem('userData');
//     if (userData) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const openForm = () => {
//     setIsFormOpen(true);
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//   };

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const openVideo = () => {
//     setIsVideoOpen(true);
//   };

//   const closeVideo = () => {
//     setIsVideoOpen(false);
//   };

//   return (
//     <div className="app">
//       <header>
//         <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
//           <div className="navbar-logo">
//             <a href="#home">Braze</a>
//           </div>
//           <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
//             <li><a href="#how-it-works" onClick={toggleNav}>How it Works</a></li>
//             <li><a href="#product" onClick={toggleNav}>Product</a></li>
//             <li><a href="#solutions" onClick={toggleNav}>Solutions</a></li>
//             <li><a href="#customers" onClick={toggleNav}>Customers</a></li>
//             <li><a href="#resources" onClick={toggleNav}>Resources</a></li>
//             {!isAuthenticated && <li><a href="#" onClick={openForm}>Login</a></li>}
//           </ul>
//           <button className="navbar-toggle" aria-label="Toggle navigation" onClick={toggleNav}>
//             {isNavOpen ? '✖' : '☰'}
//           </button>
//         </nav>
//       </header>
//       <main>
//         <section className="hero-section">
//           <div className="hero-content">
//             <h1>There's never been a better time to be a better marketer.</h1>
//             <p>Data is flowing and channels are growing. Customers are demanding the world, while AI is already transforming it. Manage it all with the right customer engagement platform.</p>
//             <div className="hero-buttons">
//               <button className="get-started-button">Get Started</button>
//               <button className="watch-video-button" onClick={openVideo}>Watch Video</button>
//             </div>
//           </div>
//           <div className="hero-image">
//             <div className="relative">
//               <div id="playback-video" className="video-container relative rounded-lg overflow-hidden">
//                 <img src="https://www.braze.com/assets/home/hp-player-crop.png" className="w-full h-full object-contain xl:w-9/12 m-auto" alt="Hero Video Thumbnail" />
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer openForm={openForm} />
//       {isFormOpen && <PopupForm closeForm={closeForm} setIsAuthenticated={setIsAuthenticated} />}
//       {isVideoOpen && (
//         <div className="video-modal">
//           <button className="close-video-button" onClick={closeVideo}>Close</button>
//           <video controls autoPlay>
//             <source src="https://link-to-your-video-file.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import PopupForm from './PopupForm';
// import Footer from './Footer';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [isVideoOpen, setIsVideoOpen] = useState(false);

//   useEffect(() => {
//     const userData = localStorage.getItem('userData');
//     if (userData) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const openForm = () => {
//     setIsFormOpen(true);
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//   };

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const openVideo = () => {
//     setIsVideoOpen(true);
//   };

//   const closeVideo = () => {
//     setIsVideoOpen(false);
//   };

//   const openPopupForm = () => {
//     setIsFormOpen(true);
//   };

//   return (
//     <div className="app">
//       <header>
//         <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
//           <div className="navbar-logo">
//             <a href="#home">Braze</a>
//           </div>
//           <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
//             <li><a href="#how-it-works" onClick={toggleNav}>How it Works</a></li>
//             <li><a href="#product" onClick={toggleNav}>Product</a></li>
//             <li><a href="#solutions" onClick={toggleNav}>Solutions</a></li>
//             <li><a href="#customers" onClick={toggleNav}>Customers</a></li>
//             <li><a href="#resources" onClick={toggleNav}>Resources</a></li>
//             {!isAuthenticated && <li><a href="#" onClick={openForm}>Login</a></li>}
//           </ul>
//           <button className="navbar-toggle" aria-label="Toggle navigation" onClick={toggleNav}>
//             {isNavOpen ? '✖' : '☰'}
//           </button>
//         </nav>
//       </header>
//       <main>
//         <section className="hero-section">
//           <div className="hero-content">
//             <h1>There's never been a better time to be a better marketer.</h1>
//             <p>Data is flowing and channels are growing. Customers are demanding the world, while AI is already transforming it. Manage it all with the right customer engagement platform.</p>
//             <div className="hero-buttons">
//               <button className="get-started-button">Get Started</button>
//               <button className="watch-video-button" onClick={openVideo}>Watch Video</button>
//             </div>
//           </div>
//           <div className="hero-image">
//             <div className="relative">
//               <div id="playback-video" className="video-container relative rounded-lg overflow-hidden">
//                 <img src="https://www.braze.com/assets/home/hp-player-crop.png" className="w-full h-full object-contain xl:w-9/12 m-auto" alt="Hero Video Thumbnail" />
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer openPopupForm={openPopupForm} />
//       {isFormOpen && <PopupForm closeForm={closeForm} setIsAuthenticated={setIsAuthenticated} />}
//       {isVideoOpen && (
//         <div className="video-modal">
//           <button className="close-video-button" onClick={closeVideo}>Close</button>
//           <video controls autoPlay>
//             <source src="https://link-to-your-video-file.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import PopupForm from './PopupForm';
import Footer from './Footer';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      setIsAuthenticated(true);
    }
  }, []);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="app">
      <header style={{position:"fixed",top:"15px",left:"5%",width:"90%"}}>
        <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
          <div className="navbar-logo">
            <a href="#home">Braze</a>
          </div>
          
          <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
            <li><a href="#how-it-works" onClick={toggleNav}>How it Works</a></li>
            <li><a href="#product" onClick={toggleNav}>Product</a></li>
            <li><a href="#solutions" onClick={toggleNav}>Solutions</a></li>
            <li><a href="#customers" onClick={toggleNav}>Customers</a></li>
            <li><a href="#resources" onClick={toggleNav}>Resources</a></li>
            {!isAuthenticated && <li><a href="#" onClick={openForm}>Login</a></li>}
          </ul>
          <button className="navbar-toggle" aria-label="Toggle navigation" onClick={toggleNav}>
            {isNavOpen ? '✖' : '☰'}
          </button>
        </nav>
      </header>
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>There's never been a better time to be a better marketer.</h1>
            <p>Data is flowing and channels are growing. Customers are demanding the world, while AI is already transforming it. Manage it all with the right customer engagement platform.</p>
            <div className="hero-buttons">
              <button className="get-started-button">Get Started</button>
              <button className="watch-video-button" onClick={openVideo}>Watch Video</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="relative">
              <div id="playback-video" className="video-container relative rounded-lg overflow-hidden">
                <img src="https://www.braze.com/assets/home/hp-player-crop.png" className="w-full h-full object-contain xl:w-9/12 m-auto" alt="Hero Video Thumbnail" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer openForm={openForm} />
      {isFormOpen && <PopupForm closeForm={closeForm} setIsAuthenticated={setIsAuthenticated} />}
      {isVideoOpen && (
        <div className="video-modal">
          <button className="close-video-button" onClick={closeVideo}>Close</button>
          <video controls autoPlay>
            <source src="https://link-to-your-video-file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default App;
