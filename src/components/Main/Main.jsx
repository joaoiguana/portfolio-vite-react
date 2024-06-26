import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import HeroSection from './HeroSection/HeroSection.jsx';
import './Main.scss'
import ProfileSection from './ProfileSection/ProfileSection.jsx';

const Main = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  return (
    <main>
      <HeroSection />
      <ProfileSection />
    </main>
  )
}

export default Main
