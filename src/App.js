import React from 'react';
import './App.css';
import HeroComponent from './Components/hero/hero.component'
import Portfolio from './Components/portfolio/portfolio.component'
import AboutComponent from './Components/about/about.component';

function App() {
  return (
    <div className="App">
      <HeroComponent />
      <AboutComponent />
      <Portfolio />
    </div>
  );
}

export default App;
