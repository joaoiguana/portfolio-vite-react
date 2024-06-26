import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import HeroSection from './HeroSection/HeroSection.jsx';
import ProfileSection from './ProfileSection/ProfileSection.jsx';
import ProjectSection from './ProjectSection/ProjectSection.jsx';
import './Main.scss'

const Main = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  return (
    <main>
      <HeroSection />
      <ProfileSection />
      <ProjectSection />
    </main>
  )
}

export default Main
