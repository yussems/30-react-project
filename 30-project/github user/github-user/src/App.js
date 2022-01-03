import { useEffect, useState } from "react";
import "./App.css";
import Bio from "./component/Bio";
import Form from "./component/Form";
import { fetcdata } from "./fetchData";

function App() {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userName) {
      setError(null);
      fetcdata(userName)
        .then((data) => setData(data))
        .catch((e) => setError(e));
    }
  }, [userName]);
  console.log(userName);

  return (
    <div className="container">
      <Form setuserName={setUserName} />

      <main>
          {error ? (
            <h4>User is not found</h4>
          ) : (
            <div className="card">
              <div>
                <img
                  className="avatar"
                  src={
                    data.avatar_url ||
                    "https://www.w3schools.com/howto/img_avatar2.png"
                  }
                  alt="avatar"
                />
              </div>
              <div className="userinfo">
                <Bio data={data} />
              </div>
        </div>
          )}
      </main>
    </div>
  );
}

export default App;
