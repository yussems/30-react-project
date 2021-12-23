import "./App.css";
import Player from "./Player";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      {data.map((item) => {
        const { id, name, sound } = item;
        return <Player key={id.toString()} name={name} sound={sound} />;
      })}
    </div>
  );
}

export default App;
