import React, {useState, useEffect} from "react";
import "./Hero.css"

function Hero() {

  const adjectives = ["Style", "Elegance", "Minimalism", "Comfort"];

  let [i, setI] = useState(0);

  const updateI = () => {
    setI(prevI => (prevI + 1) % 4);
  }

  useEffect(() => {
    const intervalId = setInterval(() => updateI(), 2000);

    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className='hero'>
      <h1 className='title'>Let's Elevate Your Ride Experience With Rhyno - Where Superiority Meets <span className='focus'>{adjectives[i]}</span>.</h1>
    </div>
  );
}

export default Hero