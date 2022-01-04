import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [writertext, setwritertext] = useState("");
  const [num, setnum] = useState(1);
  const [inputValue, setInputValue] = useState(1);
  const [changetext, setChangeText] = useState("");
  const [ontext, setOntext] = useState("");

  useEffect(() => {

    if (ontext) {
     setTimeout(() => {
        writer();
      }, 300 / inputValue);
    }


  }, [num, ontext]);

  const writer = () => {
    if (num > ontext.length) {
      return setnum(1);
    }
    setnum(() => num + 1);
    setwritertext(ontext.slice(0, num));
    console.log(num);
  };

  const handleClick = () => {
    setOntext(changetext);
    setChangeText('')


  }

  return (
    <div className="App">
      <div className="container">
        <p>{writertext}</p>
        <input
          type="text"
          value={changetext}
          onChange={(e) => setChangeText(e.target.value)}
        />
        <input
          placeholder="write to text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="number"
          min={1}
          max={5}
        />
        <button onClick={handleClick}> change text</button>
      </div>
    </div>
  );
}

export default App;
