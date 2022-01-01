import { useEffect, useState } from "react";
import "./App.css";
import Form from "./component/Form";
import { fetcdata } from "./fetchData";

function App() {
  const [userName, setUserName] = useState('')
  useEffect(() => {
    fetcdata(userName).then((data) => console.log(data));
  }, []);


  console.log(userName);
  return (
    <div className="container">
      <Form setuserName={setUserName} />
      <main>
        <div className="card">
          <div>
            <img className="avatar" src="" alt="avatar" />
          </div>
          <div className="userinfo">
            <h2>faruk turkoglu</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              veritatis adipisci natus earum nam vel accusamus quo impedit,
              dolorem sequi, explicabo cupiditate accusantium saepe aliquid
              omnis a corrupti, facilis incidunt?
            </p>
            <ul>
              <li>
                300<strong>followers</strong>
              </li>
              <li>
                300<strong>following</strong>
              </li>
              <li>
                300<strong>repos</strong>
              </li>
            </ul>
            <div id="repos">
              <a className="repo">repo One</a>
              <a className="repo">repo One</a>
              <a className="repo">repo One</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
