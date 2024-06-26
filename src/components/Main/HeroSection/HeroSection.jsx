import ArrowSvg from '../../../assets/arrow-down-sharp-svgrepo-com.svg'

const HeroSection = () => {
  console.log('Hero Section')

  return (
    <section className="home">
      <div className="tr" style={{ gridArea: 'd'}}>
        <p data-aos="fade-right" data-aos-duration="1000" id="home-description">I SUPPORT COMPANIES<br />AND STARTUPS WITH<br />END-TO-END DEVELOPMENT</p>
      </div>
      <div className="tr" style={{ gridArea: 'a' }}>
        <h1 id="home-job">
          {['F', 'U', 'L', 'L', ' ', 'S', 'T', 'A', 'C', 'K'].map((letter, index) => (
            <span key={index} data-aos="fade-up" data-aos-duration="500" data-aos-delay={50 * (index + 1)}>{letter}</span>
          ))}
          <br />
          {['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'].map((letter, index) => (
            <span key={index} data-aos="fade-up" data-aos-duration="500" data-aos-delay={550 + 50 * index}>{letter}</span>
          ))}
        </h1>
      </div>
      <div className="tr" style={{ gridArea: 'b' }}>
        <img data-aos="fade-up" data-aos-duration="1000" id="home-img" src="https://res.cloudinary.com/doa9kh79y/image/upload/v1719313643/working_b7vvt5.png" alt="João Garcia" />
      </div>
      <div className="tr" style={{ gridArea: 'e' }}>
        <h1 id="home-name">
          {['J', 'O', 'Ã', 'O'].map((letter, index) => (
            <span key={index} data-aos="fade-up" data-aos-duration="500" data-aos-delay={1050 + 50 * index}>{letter}</span>
          ))}
          <br />
          {['G', 'A', 'R', 'C', 'I', 'A'].map((letter, index) => (
            <span key={index} data-aos="fade-up" data-aos-duration="500" data-aos-delay={1250 + 50 * index}>{letter}</span>
          ))}
        </h1>
        <img data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1550" id="home-svg" src={ArrowSvg} alt="arrow-svg" />
      </div>
    </section>
  )
}

export default HeroSection
