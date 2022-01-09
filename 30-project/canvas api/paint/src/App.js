import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef(null);
  const [size, setSize] = useState(1);
  const [offsetX, setoffSetX] = useState(null);
  const [color, setcolor] = useState("");
  const [clean, setClean] = useState(false);
  const [circle, setCircle] = useState(false);

  const [offsetY, setoffSetY] = useState(null);
  const [isPressed, setIsPressed] = useState(false);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const circleMaker = (x,y) => {
      context.beginPath();
      context.strokeStyle = color;
      context.arc(x, y, size * 20, 0, 2 * Math.PI);
      context.stroke();
    };

    const drawClean = (x, y) => {
      context.beginPath();
      context.arc(x, y, 25, 0, Math.PI * 2);
      context.fillStyle = "white";
      context.fill();
    };
    if (circle) {
      return circleMaker(offsetX,offsetY)
    }

    if (clean) {
      return drawClean(offsetX, offsetY);
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
  }, [offsetY, offsetX, size, color, clean, isPressed,circle]);

  // fillRect(left,top,width,height)

  const handleMouseDown = ({ nativeEvent }) => {
    setIsPressed(true);
    setoffSetX(nativeEvent.offsetX);
    setoffSetY(nativeEvent.offsetY);
    console.log(offsetX, offsetY);
    console.log(isPressed);
  };

  const handleMouseUp = (e) => {
    console.log(e);
    setoffSetX(null);
    setoffSetY(null);
    setIsPressed(false);
    console.log(offsetX, offsetY);
    console.log(isPressed, "222222222222");
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
  const handleCircle = () => {
    setCircle(!circle);
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
        <button onClick={handleCircle}>Circle</button>
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
