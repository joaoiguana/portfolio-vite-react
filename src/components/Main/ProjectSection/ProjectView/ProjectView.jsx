import { useState } from 'react';
import { FaLaptopCode, FaMobile } from "react-icons/fa";
import './ProjectView.scss';

const ProjectView = ({ closeProjectView, isActive, project }) => {
  // Track the selected view (either 'pc' or 'mobile')
  const [selectedView, setSelectedView] = useState('pc');

  // Get the appropriate image array based on the selected view
  const selectedImages = selectedView === 'pc' ? project.pcImages : project.mobileImages;

  return (
    <div className={`fr-landing ${isActive ? 'active' : ''}`}>
      <div className="container">
        <header>
          <div className="navbar">
            <p className="portfolio-description">{project.name}</p>
            <p className="close-btn" onClick={closeProjectView}>Close</p>
          </div>
        </header>
        <main>
          <div className='project-modal'>
            <p className='project-description'>
              {project.description}
            </p>
            <div className="project-info">
              <h4>PROJECT INFO</h4>
              <div className="info-description">
                <div className="info-modal">
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </div>
                <div className='info-modal'>
                  <dt>Year</dt>
                  <dd>{project.year}</dd>
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
              {/* Render the images dynamically based on the selected view */}
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

export default ProjectView;
