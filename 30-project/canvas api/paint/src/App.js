import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef(null);
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [drawX, setDrawX] = useState(null);
  const [drawY, setDrawY] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = "red";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    const drawCircle = (x, y) => {
      context.beginPath();
      context.arc(x, y, 10, 0, Math.PI * 2);
      context.fillStyle = "black";
      context.fill();
    };
    drawCircle(drawX, drawY);

    const drawLine = (x1, x2, y1, y2) => {
      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.strokeStyle = "black";
      context.stroke();
    };
    drawLine(x, y, drawX, drawY);
  }, [drawY, drawX, x, y]);

  const style = {
    width: "500px",
    height: "500px",
    marginTop: "20px",
  };

  const drawUp = (e) => {
    setIsPressed(false);
    setx(undefined);
    sety(undefined);
  };

  const drawDown = (e) => {
    setIsPressed(true);

    setx(e.nativeEvent.offsetX);

    sety(e.nativeEvent.offsetY);
  };

  console.log(drawY, drawX);
  const handleMove = (e) => {
    if (isPressed) {
      setDrawX(e.nativeEvent.offsetX);
      setDrawY(e.nativeEvent.offsetY);
    }
  };
  return (
    <div className="App">
      <canvas
        onMouseDown={drawDown}
        onMouseUp={drawUp}
        onMouseMove={handleMove}
        style={style}
        ref={canvasRef}
      ></canvas>
    </div>
  );
}

export default App;
