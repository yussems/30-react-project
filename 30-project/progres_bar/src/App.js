import "./App.css";
import { useState } from "react";
import Circle from "./Circle";
function App() {

  const [currentActive, setCurrentActive] = useState(0);
  const [active, setActive] = useState("active");
  const [data, setData] = useState(['1','2','3','4'])
  const [progwidth, setProgwidth] = useState(0)

  const handleClick = () => {
    if (currentActive > 3) {
      return 1;
    }
    setProgwidth(item => item + 116)
    setCurrentActive((current) => current + 1);
  };

  const hanlePrev = () => {
    if (currentActive === 0) {
      return 0;
    }
    setCurrentActive((current) => current - 1);
    setProgwidth(item => item - 116)


  };
  return (
    <div className="container">
      <div className="progress-container">
        <div className="progress" style={{width:`${progwidth}px`}}></div>
        {
          data.map((item,idx) => {
            console.log(currentActive,idx);
            return <Circle key={item.toString()} span={item}  color={idx === currentActive ? active : ''} />
          })
        }
      </div>
      <button disabled={currentActive === 0 ? true :false} className="btn" id="prev" onClick={hanlePrev}>
        prev
      </button>
      <button disabled={currentActive === 3 ? true :false} className="btn" id="next" onClick={handleClick}>
        next
      </button>
    </div>
  );
}

export default App;
