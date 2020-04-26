import React from 'react';
import './App.css';
import IntroSection from './components/IntroSection'
import TopBar from './components/TopBar'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <TopBar/>
      <IntroSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <Footer/>
    </>
  );
}

export default App;
