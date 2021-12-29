import { useState } from "react";
import "./App.css";
import { data } from "./data";
import Question from "./Question";

function App() {
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);

  if (number > data.length - 1) {
    return (
      <div>
        <h3>sorular bitti </h3>
        <p>puan durumunuz {score}</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Question
        data={data}
        number={number}
        setScore={setScore}
        setNumber={setNumber}
        questions={data[number]}
      />
    </div>
  );
}

export default App;
