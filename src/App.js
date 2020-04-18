import React from 'react';
import './App.css';
import IntroSection from './components/IntroSection'
import TopBar from './components/TopBar'
import SkillsSection from './components/SkillsSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <TopBar/>
      <IntroSection/>
      <SkillsSection/>
      <Footer/>
    </>
  );
}

export default App;
