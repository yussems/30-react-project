/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";
import "./App.css";
import Carosel from "./Carosel";
import { data } from "./data";
function App() {
  const [next, setNext] = useState(0);
  const handleNext = () => {
    setNext((item) => item - 1);
  };
  const handlePrev = () => {
    setNext((item) => item - 1);
  };
  useEffect(() => {
    const interval = setInterval(() => setNext((item) => item + 1), 3000);
    if(handlePrev){
      clearInterval(interval)
    }
    if(handleNext){
      clearInterval(interval)
    }
  }, []);
  
  if (next > data.length - 1) {
    setNext(0);
  } else if (next < 0) {
    setNext(data.length - 1);
  }
  return (
    <div className="carousel">
      <div
        className="image-container"
        style={{ transform: `translateX(${-next * 500}px)` }}
      >
        {data.map((item, idx) => {
          return <Carosel key={idx.toString()} resim={item} />;
        })}
      </div>
      <div className="button-container">
        <button  onClick={handlePrev} className="btn">
          Prev
        </button>
        {next}
        <button  onClick={handleNext} className="btn">
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
