import './FrLanding.scss'

const FrLanding = ({ closeFrLanding, isActive }) => {
  return (
    <div className={`fr-landing ${isActive ? 'active' : ''}`}>
      <div className="container">
      <header>
        <div className="navbar">
          <p className="portfolio-description">Foodrider's Landing Page</p>
          <p className="close-btn" onClick={closeFrLanding}>Back</p>
        </div>
      </header>
      <main>

      </main>
      </div>
      {/* Include other content or sub-components here */}
    </div>
  )
}

export default FrLanding
