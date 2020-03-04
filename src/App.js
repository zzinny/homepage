import React from 'react';
import logo from './logo.svg';
import './App.css';
import SlideShow from './SlideShow';
import Grid from './Grid';

function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="/" className="font-effect-anaglyph">Simple Man</a>
          <div className="header-right">
            <a href="/">Home</a>
            <a href="story">Story</a>
            <a href="about">About</a>
          </div>
      </header>
      <SlideShow />
      <Grid />
    </div>
  );
}

export default App;
