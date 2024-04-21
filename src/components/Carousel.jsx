import React, {useState, useEffect} from "react";
import Card from "./Card";
import USP from "../assets/usp.json"
import "./Carousel.css"

function Carousel() {

  const uspHeaders = ["LFP Battery", "Wider tyres", "Range prediction", "Extraordinery Experience", "Rugged and simple Design"];

  let [i, setI] = useState(0);

  const updateI = () => {
    setI(prevI => (prevI + 1) % 5);
  }

  useEffect(() => {
    const intervalId = setInterval(() => updateI(), 7000);

    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className="carousel">
      <div className="prev">
        <Card name={uspHeaders[(4+i)%5]} description={USP[uspHeaders[(4+i)%5]]} />
      </div>
      <Card name={uspHeaders[i]} description={USP[uspHeaders[i]]} />
      <div className="next">
        <Card name={uspHeaders[(i+1)%5]} description={USP[uspHeaders[(i+1)%5]]} />
      </div>
    </div>
  );
}

export default Carousel