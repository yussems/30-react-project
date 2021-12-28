import React, { useRef, useState } from "react";
import "./App.css";

function Question({ questions,setNumber }) {
  const { question, a, b, c, d, correct } = questions;
  const [choose, setChoose] = useState({
      a:'',
      b:'',
      c:'',
      d:'',
  })
  const textRef = useRef(null)
  const handleClick = () => {
      setNumber(item => item + 1)
      console.log(textRef.current.id);

}

    

  return (
    <div>
      <>
        <div className="quiz-header">
          <h2>{question}</h2>
          <ul>
            <li>
              <input  ref={textRef} id="a" type="radio" name="answer" className="answer" />
              <label htmlFor="a">{a}</label>
            </li>
          </ul>
          <ul>
            <li>
              <input ref={textRef} id="b" type="radio" name="answer" className="answer" />
              <label htmlFor="b"> {b} </label>
            </li>
          </ul>
          <ul>
            <li>
              <input ref={textRef} id="c" type="radio" name="answer" className="answer" />
              <label htmlFor="c">{c}</label>
            </li>
          </ul>
          <ul>
            <li>
              <input ref={textRef} id="d" type="radio" name="answer" className="answer" />
              <label htmlFor="d">{d}</label>
            </li>
          </ul>
        </div>
        <button  onClick={handleClick}>Submit</button>
      </>
    </div>
  );
}

export default Question;
