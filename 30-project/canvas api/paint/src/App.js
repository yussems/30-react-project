import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    console.log(context);

      context.fillStyle = 'green'
      context.fillRect(250,250,100,100)

  },[]);

// fillRect(left,top,width,height)

  
  return (
    <div className="App">
      <canvas width={600} height={600} className="canvas" ref={canvasRef}></canvas>
    </div>
  );
}

export default App;
