import "./App.css";
import { Button } from "@mui/material";
function App() {
  return (
    <div className="App">
      <label htmlFor="">
        <input type="file" multiple />

        <Button variant="contained" color="secondary">
          selam{" "}
        </Button>
      </label>
    </div>
  );
}

export default App;
