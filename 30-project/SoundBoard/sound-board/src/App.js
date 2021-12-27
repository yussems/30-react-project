import "./App.css";
import Player from "./Player";
import { data } from "./data";
import { useState } from "react";

function App() {
  const [sound, setSound] = useState(data);

  return (
    <div className="App">
      {sound.map((item) => {
        const { id, name, sound } = item;
        return <Player key={id.toString()} name={name} sound={sound} />;
      })}
    </div>
  );
}

export default App;
