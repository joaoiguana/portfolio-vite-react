import { useState } from 'react';
import ProjectView from './ProjectView/ProjectView';

const projectsData = [
  {
    id: 1,
    name: 'FOODRIDERS ORDERING WEB APP',
    short_bio: 'USER-FRIENDLY PLATFORM FOR QUICK VEGAN-FIRST MEAL ORDERS, OFFERING DIVERSE ECO-CONSCIOUS MENUS',
    description: 'Streamlined online platform for discovering and ordering from FoodRiders vegan and sustainable eateries, offering easy access to diverse menus at their Third-Wave Taquearia Duro De Matar, take-away or delivery, with a focus on eco-conscious dining.',
    role: 'Fullstack Developer',
    year: '2021 - Present',
    mockup_cover: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1727875976/foodriders/foodriders-order-app/fr_app_001_mobile_mockup_t2cd2g.png',
    pcImages: [
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1727876105/foodriders/foodriders-order-app/fr_app_pc_001_hero_e4romc.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1727876108/foodriders/foodriders-order-app/fr_app_pc_002_ddm_pooyuh.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1727876137/foodriders/foodriders-order-app/fr_app_pc_003_ddm_tostada_s88pcz.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1727876143/foodriders/foodriders-order-app/fr_app_pc_004_ddm_tacos_pg1osh.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1727876154/foodriders/foodriders-order-app/fr_app_pc_005_ddm_drinks_yrbqw1.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1727876124/foodriders/foodriders-order-app/fr_app_pc_006_cart_review_qkg1tr.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1727876102/foodriders/foodriders-order-app/fr_app_pc_007_cart_payment_vezbh7.png'
    ],
    mobileImages: [
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1727876239/foodriders/foodriders-order-app/fr_app_mobile_001_hero_bmedpf.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1727876240/foodriders/foodriders-order-app/fr_app_mobile_002_gringas_ed9hfa.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1727876244/foodriders/foodriders-order-app/fr_app_mobile_003_delivery_vit0sp.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1727876247/foodriders/foodriders-order-app/fr_app_mobile_004_gringa_diiloe.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1727876244/foodriders/foodriders-order-app/fr_app_mobile_005_salsa_xk7tyn.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1727876248/foodriders/foodriders-order-app/fr_app_mobile_006_drink_njawf9.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1727876245/foodriders/foodriders-order-app/fr_app_mobile_007_cart_review_xgvqrh.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1727876244/foodriders/foodriders-order-app/fr_app_mobile_008_login_febt9q.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1727876247/foodriders/foodriders-order-app/fr_app_mobile_009_cart_checkout_ard4bf.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1727876247/foodriders/foodriders-order-app/fr_app_mobile_010_cart_address_cqpuiu.png'
    ]
  },
  {
    id: 2,
    name: 'FOODRIDERS LANDING PAGE',
    short_bio: 'MODERNLY DESIGNED LANDING PAGE TO FIND ALL ABOUT FOODRIDERS.CO',
    description: 'A modern and interactive landing page for Foodriders.co, developed using ParcelJS, showcasing the brand\'s commitment to sustainable, timely, and quality food, highlighting their dedication to customer satisfaction and environmental responsibility.',
    role: 'UI/UX Design & Front End Development',
    year: '2024',
    mockup_cover: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1718898245/fr_landing_page_mockup_001-min_glvxun.png',
    pcImages: [
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407699/foodriders/portfolio-landing-page/fr_landing_pc_001_hero_sxtw6o.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407692/foodriders/portfolio-landing-page/fr_landing_pc_002_diehard_pe0dpc.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407694/foodriders/portfolio-landing-page/fr_landing_pc_003_concepts_mym8xb.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407695/foodriders/portfolio-landing-page/fr_landing_pc_004_concepts_stdm0f.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407695/foodriders/portfolio-landing-page/fr_landing_pc_005_locations_ludek6.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407696/foodriders/portfolio-landing-page/fr_landing_pc_006_story_qj21c7.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407696/foodriders/portfolio-landing-page/fr_landing_pc_007_catering_hlqeze.png',
      'https://res.cloudinary.com/doa9kh79y/image/upload/v1719407698/foodriders/portfolio-landing-page/fr_landing_pc_008_workwus_kj4ivt.png'
    ],
    mobileImages: [
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
  }
]

const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState(null); // Active project will hold project data

  const handleShowProjectDetails = (project, e) => {
    e.preventDefault();
    setActiveProject(project); // Set the clicked project as the active one
  };

  const handleCloseProjectDetails = () => {
    setActiveProject(null); // Close the active project
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

        {projectsData.map((project) => (
          <div key={project.id} className="project-details">
            <div className="project-header">
              <h2 className="project-name">
                <button onClick={(e) => handleShowProjectDetails(project, e)}>
                  {project.name}
                </button>
              </h2>
              <p className="project-description">
                {project.short_bio}
              </p>
            </div>
            <div className="project-picture">
              <img src={project.mockup_cover} alt={project.name} />
              <div className="clickable" onClick={(e) => handleShowProjectDetails(project, e)}>
                <span>
                  <p>See<br />more</p>
                </span>
              </div>
            </div>
          </div>
        ))}

        {activeProject && (
          <ProjectView
            closeProjectView={handleCloseProjectDetails}
            isActive={!!activeProject}
            project={activeProject} // Pass the active project as a prop
          />
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
