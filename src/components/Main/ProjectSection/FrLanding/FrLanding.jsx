import { useState } from 'react'
import './FrLanding.scss'

const FrLanding = ({ closeFrLanding, isActive }) => {
  const [imagePcUrls, setImagePcUrls] = useState([
    'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407699/foodriders/portfolio-landing-page/fr_landing_pc_001_hero_sxtw6o.png',
    'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407692/foodriders/portfolio-landing-page/fr_landing_pc_002_diehard_pe0dpc.png',
    'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407694/foodriders/portfolio-landing-page/fr_landing_pc_003_concepts_mym8xb.png',
    'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407695/foodriders/portfolio-landing-page/fr_landing_pc_004_concepts_stdm0f.png',
    'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407695/foodriders/portfolio-landing-page/fr_landing_pc_005_locations_ludek6.png',
    'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407696/foodriders/portfolio-landing-page/fr_landing_pc_006_story_qj21c7.png',
    'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407696/foodriders/portfolio-landing-page/fr_landing_pc_007_catering_hlqeze.png',
    'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407698/foodriders/portfolio-landing-page/fr_landing_pc_008_workwus_kj4ivt.png'
  ]);

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
            </div>
          </div>
          <div className="imgs-container">
              {imagePcUrls.map((url, index) => (
                <img key={index} src={url} alt={`Gallery ${index + 1}`} className='pc-img' />
              ))}
            </div>
        </div>
      </main>
      </div>
      {/* Include other content or sub-components here */}
    </div>
  )
}

export default FrLanding
