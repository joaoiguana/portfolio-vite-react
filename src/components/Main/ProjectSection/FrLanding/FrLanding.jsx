import { useState } from 'react';
import { FaLaptopCode, FaMobile } from "react-icons/fa";
import './FrLanding.scss';

// const FrLanding = ({ closeFrLanding, isActive }) => {
//   const [imagePcUrls, setImagePcUrls] = useState([
//     'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407699/foodriders/portfolio-landing-page/fr_landing_pc_001_hero_sxtw6o.png',
//     'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407692/foodriders/portfolio-landing-page/fr_landing_pc_002_diehard_pe0dpc.png',
//     'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407694/foodriders/portfolio-landing-page/fr_landing_pc_003_concepts_mym8xb.png',
//     'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407695/foodriders/portfolio-landing-page/fr_landing_pc_004_concepts_stdm0f.png',
//     'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407695/foodriders/portfolio-landing-page/fr_landing_pc_005_locations_ludek6.png',
//     'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407696/foodriders/portfolio-landing-page/fr_landing_pc_006_story_qj21c7.png',
//     'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407696/foodriders/portfolio-landing-page/fr_landing_pc_007_catering_hlqeze.png',
//     'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407698/foodriders/portfolio-landing-page/fr_landing_pc_008_workwus_kj4ivt.png'
//   ]);

//   const imageMobileUrls = [
//     'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407691/foodriders/portfolio-landing-page/fr_landing_mobile_001_hero_as95zo.png',
//     'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407691/foodriders/portfolio-landing-page/fr_landing_mobile_002_hero_rdtmuo.png',
//     'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407692/foodriders/portfolio-landing-page/fr_landing_mobile_003_diehard_y6aehr.png',
//     'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407692/foodriders/portfolio-landing-page/fr_landing_mobile_004_concepts_o5akma.png',
//     'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407692/foodriders/portfolio-landing-page/fr_landing_mobile_004_concepts_o5akma.png',
//     'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407692/foodriders/portfolio-landing-page/fr_landing_mobile_005_locations_ellkp9.png',
//     'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407692/foodriders/portfolio-landing-page/fr_landing_mobile_006_ourstory_osem8l.png',
//     'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407692/foodriders/portfolio-landing-page/fr_landing_mobile_007_catering_fn9g1e.png',
//     'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407692/foodriders/portfolio-landing-page/fr_landing_mobile_007_catering_fn9g1e.png',
//     'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407692/foodriders/portfolio-landing-page/fr_landing_mobile_008_popups_lt5jte.png'

//   ]

//   return (
//     <div className={`fr-landing ${isActive ? 'active' : ''}`}>
//       <div className="container">
//       <header>
//         <div className="navbar">
//           <p className="portfolio-description">Foodrider's Landing Page</p>
//           <p className="close-btn" onClick={closeFrLanding}>Close</p>
//         </div>
//       </header>
//       <main>
//         <div className='project-modal'>
//           <p className='project-description'>
//             A modern and interactive landing page for Foodriders.co, developed using ParcelJS, showcases the brand's commitment to sustainable, timely, and quality food, highlighting their dedication to customer satisfaction and environmental responsibility.
//           </p>
//           <div className="project-info">
//             <h4>PROJECT INFO</h4>
//             <div className="info-description">
//               <div className="info-modal">
//                 <dt>Role</dt>
//                 <dd>UI/UX Design & Front End Development</dd>
//               </div>
//               <div className='info-modal'>
//                 <dt>Year</dt>
//                 <dd>2024</dd>
//               </div>
//             </div>
//           </div>
//           <div className="imgs-container">
//               {imagePcUrls.map((url, index) => (
//                 <img key={index} src={url} alt={`Gallery ${index + 1}`} className='pc-img' />
//               ))}
//             </div>
//         </div>
//       </main>
//       </div>
//       {/* Include other content or sub-components here */}
//     </div>
//   )
// }

// export default FrLanding;

const FrLanding = ({ closeFrLanding, isActive }) => {
  // Define an object with two keys: 'pc_mockup_urls' and 'mobile_mockup_urls'
  const mockupUrls = {
    pc_mockup_urls: [
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407699/foodriders/portfolio-landing-page/fr_landing_pc_001_hero_sxtw6o.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407692/foodriders/portfolio-landing-page/fr_landing_pc_002_diehard_pe0dpc.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407694/foodriders/portfolio-landing-page/fr_landing_pc_003_concepts_mym8xb.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407695/foodriders/portfolio-landing-page/fr_landing_pc_004_concepts_stdm0f.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407695/foodriders/portfolio-landing-page/fr_landing_pc_005_locations_ludek6.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407696/foodriders/portfolio-landing-page/fr_landing_pc_006_story_qj21c7.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407696/foodriders/portfolio-landing-page/fr_landing_pc_007_catering_hlqeze.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407698/foodriders/portfolio-landing-page/fr_landing_pc_008_workwus_kj4ivt.png'
    ],
    mobile_mockup_urls: [
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407691/foodriders/portfolio-landing-page/fr_landing_mobile_001_hero_as95zo.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407691/foodriders/portfolio-landing-page/fr_landing_mobile_002_hero_rdtmuo.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407692/foodriders/portfolio-landing-page/fr_landing_mobile_003_diehard_y6aehr.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407692/foodriders/portfolio-landing-page/fr_landing_mobile_004_concepts_o5akma.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407692/foodriders/portfolio-landing-page/fr_landing_mobile_005_concepts_vl7i8x.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407692/foodriders/portfolio-landing-page/fr_landing_mobile_005_locations_ellkp9.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407692/foodriders/portfolio-landing-page/fr_landing_mobile_006_ourstory_osem8l.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407692/foodriders/portfolio-landing-page/fr_landing_mobile_007_catering_fn9g1e.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407692/foodriders/portfolio-landing-page/fr_landing_mobile_008_popups_lt5jte.png'
    ]
  };

  // Track the selected view (either 'pc' or 'mobile')
  const [selectedView, setSelectedView] = useState('pc');

  // Get the appropriate image array based on the selected view
  const selectedImages = selectedView === 'pc' ? mockupUrls.pc_mockup_urls : mockupUrls.mobile_mockup_urls;

  return (
<div className={`fr-landing ${isActive ? 'active' : ''}`}>
      <div className="container">
        <header>
          <div className="navbar">
            <p className="portfolio-description">Foodrider's Landing Page</p>
            <p className="close-btn" onClick={closeFrLanding}>Close</p>
          </div>
        </header>
        <main>
          <div className='project-modal'>
            <p className='project-description'>
              A modern and interactive landing page for Foodriders.co, developed using ParcelJS, showcases the brand's commitment to sustainable, timely, and quality food, highlighting their dedication to customer satisfaction and environmental responsibility.
            </p>
            <div className="project-info">
              <h4>PROJECT INFO</h4>
              <div className="info-description">
                <div className="info-modal">
                  <dt>Role</dt>
                  <dd>UI/UX Design & Front End Development</dd>
                </div>
                <div className='info-modal'>
                  <dt>Year</dt>
                  <dd>2024</dd>
                </div>
                <div className="info-modal view-toggle">
                  <dt>View Mode</dt>
                  <dd>
                    <button className="toggle-view-btn" onClick={() => setSelectedView(selectedView === 'pc' ? 'mobile' : 'pc')}>
                      {selectedView === 'pc' ? (
                        <>
                          <FaMobile />
                          <span> Switch to Mobile View</span>
                        </>
                      ) : (
                        <>
                          <FaLaptopCode />
                          <span> Switch to PC View</span>
                        </>
                      )}
                    </button>
                  </dd>
                </div>
              </div>
            </div>
            <div className="imgs-container">
              {/* Render the images dynamically based on the selected view, with the class changing as well */}
              {selectedImages.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Gallery ${index + 1}`}
                  className={selectedView === 'pc' ? 'pc-img' : 'mobile-img'}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FrLanding;
