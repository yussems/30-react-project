import { useEffect, useState } from "react";
import "./App.css";
import Bio from "./component/Bio";
import Form from "./component/Form";
import { fetcdata } from "./fetchData";

function App() {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  
  useEffect(() => {
    if (userName) {
      fetcdata(userName).then((data) => setData(data))
    }
  }, [userName]);

 

  return (
    <div className="container">
      <Form setuserName={setUserName} />
      <main>
        <div className="card">
          <div>
            <img className="avatar" src={data.avatar_url || 'https://www.w3schools.com/howto/img_avatar2.png'} alt="avatar" />
          </div>
          <div className="userinfo">
            <Bio data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
