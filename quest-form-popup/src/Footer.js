// import React from 'react';
// import Slider from 'react-slick';
// import './Footer.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const images = [
//     'https://marketing-assets.braze.com/production/logos/Logo-Intuit_2024-02-03-235643_vini-v1707004604.svg?v=1707160247', // Replace with actual image URLs
//     'https://marketing-assets.braze.com/production/logos/Logo-Gympass-v1707004930.svg?v=1707160251',
//     'https://marketing-assets.braze.com/production/logos/Logo-Chime-v1707004966.svg?v=1707160251',
//     'https://marketing-assets.braze.com/production/logos/Logo-Rappi-v1707005029.svg?v=1707160253',
//     'https://marketing-assets.braze.com/production/logos/Logo-Intuit_2024-02-03-235643_vini-v1707004604.svg?v=1707160247'
//   ];

// const Footer = () => {
//   const settings = {
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1
//         }
//       }
//     ]
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-carousel">
//         <Slider {...settings}>
//           {images.map((src, index) => (
//             <div className="carousel-item" key={index}>
//               <img src={src} alt={`carousel-img-${index}`} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <div className="footer-contact">
//         <button className="contact-button">Contact With Sales</button>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// import React from 'react';
// import Slider from 'react-slick';
// import './Footer.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const images = [
//   'https://marketing-assets.braze.com/production/logos/Logo-Intuit_2024-02-03-235643_vini-v1707004604.svg?v=1707160247',
//   'https://marketing-assets.braze.com/production/logos/Logo-Gympass-v1707004930.svg?v=1707160251',
//   'https://marketing-assets.braze.com/production/logos/Logo-Chime-v1707004966.svg?v=1707160251',
//   'https://marketing-assets.braze.com/production/logos/Logo-Rappi-v1707005029.svg?v=1707160253',
//   'https://marketing-assets.braze.com/production/logos/Logo-Intuit_2024-02-03-235643_vini-v1707004604.svg?v=1707160247'
// ];

// const Footer = () => {
//   const settings = {
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     speed: 1000,
//     pauseOnHover: true,
//     cssEase: 'linear',
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2
//         }
//       }
//     ]
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-carousel">
//         <Slider {...settings}>
//           {images.map((src, index) => (
//             <div className="carousel-item" key={index}>
//               <img src={src} alt={`carousel-img-${index}`} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <div className="footer-contact">
//         <button className="contact-button">Connect With Sales</button>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import Slider from 'react-slick';
import './Footer.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://marketing-assets.braze.com/production/logos/Logo-Intuit_2024-02-03-235643_vini-v1707004604.svg?v=1707160247',
  'https://marketing-assets.braze.com/production/logos/Logo-Gympass-v1707004930.svg?v=1707160251',
  'https://marketing-assets.braze.com/production/logos/Logo-Chime-v1707004966.svg?v=1707160251',
  'https://marketing-assets.braze.com/production/logos/Logo-Rappi-v1707005029.svg?v=1707160253',
  'https://marketing-assets.braze.com/production/logos/Logo-Intuit_2024-02-03-235643_vini-v1707004604.svg?v=1707160247'
];

const Footer = ({ openForm }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-carousel">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div className="carousel-item" key={index}>
              <img src={src} alt={`carousel-img-${index}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="footer-contact">
        <button className="contact-button" onClick={openForm}>Contact With Sales</button>
      </div>
    </footer>
  );
};

export default Footer;
