import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef(null);
  const [size, setSize] = useState(1);
  const [offsetX, setoffSetX] = useState(null);
  const [color, setcolor] = useState("");
  const [clean, setClean] = useState(false);

  const [offsetY, setoffSetY] = useState(null);
  const [isPressed, setIsPressed] = useState(false);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // context.fillStyle = "green";
    // context.fillRect(400, 25, 100, 100);
    // context.strokeRect(250, 250, 100, 100);

    // const drawLine = (x, y) => {
    //   context.strokeStyle = "red";
    //   context.lineWidth = size;
    //   context.lineTo(x, y);
    //   context.moveTo(x, y);
    //   context.beginPath();
    //   context.stroke();
    // };

    const drawClean = (x,y) => {
      context.beginPath();
      context.arc(x, y, 25, 0, Math.PI * 2);
      context.fillStyle = "white";
      context.fill();
    };

    if (clean) {
     return  drawClean(offsetX,offsetY);
    }

    const draw = (x, y) => {
      context.lineCap = "round";
      context.strokeStyle = color;
      context.lineWidth = size;
      context.lineTo(x, y);
      context.stroke();
      context.beginPath();
      context.moveTo(x, y);
    };

    if (isPressed) {
      draw(offsetX, offsetY);
    }
  }, [offsetY, offsetX, size, isPressed, color, clean]);

  // fillRect(left,top,width,height)

  const handleMouseDown = ({ nativeEvent }) => {
    setoffSetX(nativeEvent.offsetX);
    setoffSetY(nativeEvent.offsetY);
    setIsPressed(true);
    console.log(offsetX, offsetY);
    console.log(isPressed);
  };

  const handleMouseUp = () => {
    setoffSetX(null);
    setoffSetY(null);
    setIsPressed(false);
    console.log(offsetX, offsetY);
    console.log(isPressed);
  };

  const handleMouseMove = ({ nativeEvent }) => {
    if (isPressed) {
      setoffSetX(nativeEvent.offsetX);
      setoffSetY(nativeEvent.offsetY);
      console.log(offsetX, offsetY);
    }
  };

  const handleEraser = () => {
    setClean(!clean);
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="color"></label>
        <input
          type="color"
          id="color"
          value={"black"}
          onChange={(e) => setcolor(e.target.value)}
        />
        <label htmlFor="number"></label>
        <input
          type="number"
          min={1}
          max={10}
          id="number"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <button onClick={handleEraser}>eraser</button>
      </div>

      <canvas
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        width={600}
        height={600}
        className="canvas"
        ref={canvasRef}
      ></canvas>
    </div>
  );
}

export default App;
