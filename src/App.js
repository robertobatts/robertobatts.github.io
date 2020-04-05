import React from 'react';
import './App.css';
import IntroSection from './components/IntroSection'
import TopBar from './components/TopBar'
import SkillsSection from './components/SkillsSection'

function App() {
  return (
    <>
      <TopBar/>
      <IntroSection/>
      <SkillsSection/>
    </>
  );
}

export default App;
