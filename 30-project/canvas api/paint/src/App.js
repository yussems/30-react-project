import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef(null);
  const [size, setSize] = useState(10);
  const [offsetX, setoffSetX] = useState(null);

  const [offsetY, setoffSetY] = useState(null);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // context.fillStyle = "green";
    // context.fillRect(400, 25, 100, 100);
    // context.strokeRect(250, 250, 100, 100);

    const draw = (x, y) => {
        context.lineCap = "round";
        context.lineWidth = size;

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
      
    };

    draw(offsetX, offsetY);
  }, [offsetY, offsetX, size]);

  // fillRect(left,top,width,height)

  const handleMouseDown = ({ nativeEvent }) => {
    setIsPressed(true);
    setoffSetX(nativeEvent.offsetX);
    setoffSetY(nativeEvent.offsetY);
  };

  const handleMouseUp = () => {
    setIsPressed(false);

    setoffSetX(undefined);
    setoffSetY(undefined);
    console.log(offsetX, offsetY);
  };

  const handleMouseMove = ({ nativeEvent }) => {
    if (isPressed) {
      setoffSetX(nativeEvent.offsetX);
      setoffSetY(nativeEvent.offsetY);
      console.log(offsetX, offsetY);
    }
  };

  console.log(offsetY, offsetX);

  return (
    <div className="App">
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
