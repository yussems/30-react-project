import { useState } from "react";
import "./App.css";
import Carosel from "./Carosel";
import { data } from "./data";
function App() {
  const [next, setNext] = useState(0)
  const handleClick = () => {
    
  }
  return (
    <div className="carousel">
      <div className="image-container">
        {data.map((item,idx) => {
          return <Carosel key={idx.toString()} resim={item} />;
        })}
      </div>
      <div className="button-container">
        <button  className="btn">Prev</button>
        <button onClick={handleClick} className="btn">Next</button>
      </div>
    </div>
  );
}

export default App;
