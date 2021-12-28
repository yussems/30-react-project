import React, { useState } from "react";
import "./App.css";

function Question({ questions, setNumber, setScore }) {
  const { question, a, b, c, d, correct } = questions;
  const [change, setChange] = useState("");
  const [checked, setChecked] = useState('');

  const handleChange = (e) => {
    setChange(e.target.id);
    setChecked(e.target.checked)
  };
  const handleClick = () => {
    setNumber((item) => item + 1);
    setChecked('')
    if (correct === change) {
      setScore((item) => item + 1);
    }
  };

  console.log(checked);
  return (
    <div>
      <>
        <div className="quiz-header">
          <h2>{question}</h2>
          <ul>
            <li>
              <input
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
