import "./App.css";
import Player from "./Player";
import { data } from "./data";
import { useEffect, useState } from "react";

function App() {
  const [sounds, setSound] = useState(data);
  return (
    <div className="App">
      {sounds.map((item) => {
        const { id, name, sound } = item;
        return <Player key={id.toString()}  name={name} sound={sound} />;
      })}
    </div>
  );
}

export default App;
