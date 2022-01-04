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
      }, 1000 / inputValue);
    }
  }, [ontext, num,inputValue]);

  const writer = () => {
    if (num > ontext.length) {
      return setnum(1);
    }
    setnum(() => num + 1);
    setwritertext(ontext.slice(0, num));
  };

  const handleClick = () => {
    setOntext(changetext);
    setChangeText("");
  };

  return (
    <div className="App">
      <div className="container">
        <h1>{writertext}</h1>
        <input
          placeholder="write to text"

          className="text"
          type="text"
          value={changetext}
          onChange={(e) => setChangeText(e.target.value)}
        />
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="number"
          min={1}
          max={5}
        />
        <button disabled={changetext ? false :true} onClick={handleClick}> {changetext ? 'Play Text' : 'Disabled'}</button>
      </div>
    </div>
  );
}

export default App;
