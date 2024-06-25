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
//       <header style={{position:"fixed",top:"15px",left:"5%",width:"90%"}}>
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
          </ul>
          
          <div className="navbar-extras">
            <div className="language-selector">
              <select>
                <option value="us">US</option>
                <option value="uk">UK</option>
                <option value="de">DE</option>
              </select>
            </div>
            {!isAuthenticated && <a href="#" className="login-link" onClick={openForm}>Login</a>}
            <button className="get-started-button">Get Started</button>
          </div>
          
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
