import { useEffect, useState } from "react";
import "./App.css";
import Spinner from "./Spinner";

function App() {
  const [data, setdata] = useState("");
  const [loading, setLoading] = useState(false);
  const [spinner, setSpinner] = useState("veri bekleniyor");

  const fetchData = async () => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    try {
      setLoading(true);
      const fetching = await fetch("https://icanhazdadjoke.com/", config);
      const response = await fetching.json();
      setdata(response.joke);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="App">
      <div className="box">
        <h3 className="jokes">{data}</h3>
      </div>
    </div>
  );
}

export default App;
