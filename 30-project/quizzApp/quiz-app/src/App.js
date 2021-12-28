import { useRef, useState } from "react";
import "./App.css";
import { data } from "./data";
import Question from "./Question";

function App() {
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0)

  

  if(number > data.length -1) {
    return <h3>sorular bitti</h3>
  }

  return (
    <div className="App">
      <Question  setNumber={setNumber}  questions={data[number]} />
    </div>
  );
}

export default App;
