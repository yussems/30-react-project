import "./App.css";
import { Button } from "@mui/material";
function App() {
  return (
    <div className="App">
      <label htmlFor="contained-button-file">
        <input style={{display:'none'}} accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
}

export default App;
