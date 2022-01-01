import { useEffect, useState } from "react";
import "./App.css";
import Form from "./component/Form";
import { fetcdata } from "./fetchData";

function App() {
  const [userName, setUserName] = useState("yussems");
  const [data, setData] = useState({})
  useEffect(() => {
    if (userName) {
      fetcdata(userName).then((data) => setData(data));
    }
  }, [userName]);


  const {avatar_url,name,following,followers,public_repos} = data
  console.log(data);
  return (
    <div className="container">
      <Form setuserName={setUserName} />
      <main>
        <div className="card">
          <div>
            <img className="avatar" src={avatar_url} alt="avatar" />
          </div>
          <div className="userinfo">
            <h2>{name}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              veritatis adipisci natus earum nam vel accusamus quo impedit,
              dolorem sequi, explicabo cupiditate accusantium saepe aliquid
              omnis a corrupti, facilis incidunt?
            </p>
            <ul>
              <li>
                {followers}<strong>Followers</strong>
              </li>
              <li>
                {following}<strong>Following</strong>
              </li>
              <li>
                {public_repos}<strong>Repos</strong>
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
