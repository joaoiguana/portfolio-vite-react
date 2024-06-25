import { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import FullscreenMenu from './Fullscreen Menu/FullscreenMenu';
import './Header.scss';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [menuVisible, setMenuVisible] = useState(false);

  const updateMedia = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <header>
      <Navbar isMobile={isMobile} toggleMenu={() => setMenuVisible(!menuVisible)} />
      <FullscreenMenu isVisible={menuVisible} closeMenu={() => setMenuVisible(false)} />
    </header>
  );
}

export default Header;
