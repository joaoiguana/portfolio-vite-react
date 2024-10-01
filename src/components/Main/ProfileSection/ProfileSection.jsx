

const ProfileSection = () => {
  // const calculateDelay = (base, increment, index) => base + increment * index;

  return (
    <section className="profile">
      <div className="profile-container">
        <div className="profile-tag">
          <h4 /*data-aos="fade-right" data-aos-duration="1000" data-aos-delay={calculateDelay(300, 0, 0)}*/>01/</h4>
        </div>
        <div className="profile-intro">
          <p /*data-aos="fade-up" data-aos-duration="1000" data-aos-delay={calculateDelay(300, 300, 1)}*/>
            WEB WIZARD WITH A KNACK FOR TURNING COMPLEXITY INTO SIMPLICITY. I THRIVE AT THE CROSSROADS OF INNOVATION AND INTUITIVE DESIGN.
          </p>
          <p /*data-aos="fade-up" data-aos-duration="1000" data-aos-delay={calculateDelay(300, 300, 2)}*/>
            WHEN I'M NOT CODING UP A STORM, I'M RECORDING MUSIC IN THE STUDIO OR READING THE GREATS.
          </p>
        </div>
        <div className="profile-description-header">
          <p /*data-aos="fade-up" data-aos-duration="1000" data-aos-delay={calculateDelay(300, 300, 3)}*/>
            A blend of full-stack development and creative engineering.
          </p>
        </div>
        <div className="profile-description">
          <p /*data-aos="fade-up" data-aos-duration="1000" data-aos-delay={calculateDelay(300, 300, 4)}*/>
            With a background in both frontend and backend technologies, I work closely with cross-functional teams to build scalable web applications and interactive platforms for companies and individuals. I have years of experience collaborating on complex projects and leading development efforts.
          </p>
          <p /*data-aos="fade-up" data-aos-duration="1000" data-aos-delay={calculateDelay(300, 300, 5)}*/>
            With my expertise in full-stack development, I solve challenging technical problems and build high-quality, user-friendly web experiences.
          </p>
          <p /*data-aos="fade-up" data-aos-duration="1000" data-aos-delay={calculateDelay(300, 300, 6)}*/>
            More about me and my services
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProfileSection;
