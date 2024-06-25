const Navbar = ({ isMobile, toggleMenu }) => {
  return (
    <div className="navbar">
      <p className="nav-name">João Garcia</p>
      {!isMobile && (
        <>
          <div className="current-position">
            <p>Currently Full Stack</p>
            <p>engineer at Foodriders.co</p>
          </div>
          <div className="location">
            <p>Based in Lisbon,</p>
            <p>Portugal</p>
          </div>
          <div className="nav">
            <p>Work</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </>
      )}
      {isMobile && (
        <p onClick={toggleMenu}>Menu</p>
      )}
    </div>
  );
};

export default Navbar;
