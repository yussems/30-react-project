import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [key, setKey] = useState("");
  const [code, setCode] = useState("");
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      setKey(e.key);
      setCode(e.code);
    });
  }, [key]);

  if (key === '') {
    return (
      <div className="first">
        <small> Press any key to get the JavaScript event keycode</small>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="key">
      {key}
        <small>event.key</small>
      </div>
      <div className="key">
      {code}
        <small>event.keycode</small>
      </div>
    </div>
  );
}

export default App;
