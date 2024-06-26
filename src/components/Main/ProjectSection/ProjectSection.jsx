import { useState } from 'react'
import FrLanding from './FrLanding/FrLanding.jsx'

const ProjectSection = () => {
  const [showFrLanding, setShowFrLanding] = useState(false);

  const handleShowFrLanding = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setShowFrLanding(true); // Toggle visibility of the FrLanding component
  };

  const handleCloseFrLanding = () => {
    setShowFrLanding(false);
  };

  return (
    <section className="projects">
      <div className="projects-container">
        <div className="projects-tag">
          <h4>02/</h4>
          <h4>
            RECENT<br />PROJECTS
          </h4>
        </div>
        <div className="project-details">
          <div className="project-header">
            <h2 className="project-name">
              <button>
                FOODRIDERS<br />LANDING PAGE
              </button>
            </h2>
            <p className="project-description">
              MODERNLY DESIGNED LANDING PAGE TO FIND ALL ABOUT FOODRIDERS.CO
            </p>
          </div>
          <div className="project-picture">
            <img src="https://res.cloudinary.com/doa9kh79y/image/upload/v1718898245/fr_landing_page_mockup_001-min_glvxun.png" alt="FOODRIDERS Landing Page" />
            <div className="clickable" onClick={handleShowFrLanding}>
              <span>
                <p>See<br />more</p>
              </span>
            </div>
          </div>
        </div>
        <FrLanding closeFrLanding={handleCloseFrLanding} isActive={showFrLanding} />
      </div>
    </section>
  )
}

export default ProjectSection
