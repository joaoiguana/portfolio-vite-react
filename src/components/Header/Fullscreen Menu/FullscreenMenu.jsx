const FullscreenMenu = ({ closeMenu, isVisible }) => {
  return (
    <div className={`fullscreen-menu ${isVisible ? 'visible' : ''}`}>
      <div className="menu-header">
        <p>João Garcia</p>
        <p className="close-menu" onClick={closeMenu}>Close</p>
      </div>
      <div className="menu-content">
        <h1><strong>HOME</strong></h1>
        <h1><strong>WORK</strong></h1>
        <h1><strong>ABOUT</strong></h1>
        <h1><strong>CONTACT</strong></h1>
        <p>Currently Full Stack<br />Engineer at Foodriders.co</p>
        <p>Based in Lisbon<br />Portugal</p>
      </div>
    </div>
  );
};

export default FullscreenMenu;
