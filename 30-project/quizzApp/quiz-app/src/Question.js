import { CheckSharp } from "@mui/icons-material";
import React, { useState } from "react";
import "./App.css";

function Question({ questions, setNumber, setScore, number, data }) {
  const { question, a, b, c, d, correct } = questions;
  const [change, setChange] = useState("");
  const [check, setCheck] = useState('');

  const choise = Object.keys(questions);

  const handleChange = (e) => {
    
    setChange(e.target.value);
  };

  const handleClick = () => {
    setNumber((item) => item + 1);
    if (correct === change) {
      setScore((item) => item + 1);
    }
    setChange('');
    
  };
  return (
    <div>
      <>
        <div className="quiz-header">
          <h2>{question}</h2>
          <ul>
            <li>
              <input
                checked={change===choise[1]}
                value={choise[1]}
                onChange={handleChange}
                id="a"
                type="radio"
                name="answer"
                className="answer"
              />
              <label htmlFor="a">{a}</label>
            </li>
          </ul>
          <ul>
            <li>
              <input
                checked={change===choise[2]}

                value={choise[2]}
                onChange={handleChange}
                id="b"
                type="radio"
                name="answer"
                className="answer"
              />
              <label htmlFor="b">{b}</label>
            </li>
          </ul>
          <ul>
            <li>
              <input
                value={choise[3]}
                checked={change===choise[3]}

                onChange={handleChange}
                id="c"
                type="radio"
                name="answer"
                className="answer"
              />
              <label htmlFor="c">{c}</label>
            </li>
          </ul>
          <ul>
            <li>
              <input
                checked={change===choise[4]}

                value={choise[4]}
                onChange={handleChange}
                id="d"
                type="radio"
                name="answer"
                className="answer"
              />
              <label htmlFor="d">{d}</label>
            </li>
          </ul>
        </div>
        <button onClick={handleClick}>Submit</button>
      </>
    </div>
  );
}

export default Question;
