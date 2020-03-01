import React from 'react';
import logo from './logo.svg';
import './App.css';
import SlideShow from './SlideShow';

function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="#default" className="font-effect-anaglyph">Simple Man</a>
          <div className="header-right">
            <a href="#home">Home</a>
            <a href="#story">Story</a>
            <a href="#about">About</a>
          </div>
      </header>
      <SlideShow />
    </div>
  );
}

export default App;
