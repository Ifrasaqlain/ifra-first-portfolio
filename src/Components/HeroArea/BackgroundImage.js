import React from 'react';
import HeroText from './HeroText';
import background from '../Images/programmer.jpg'

export default function BackgroundImage() {
  return (
    <>
      <header className="masthead" style={{ backgroundImage: `url(${background})` }}>
        <HeroText />
      </header>
    </> 
  )
}
