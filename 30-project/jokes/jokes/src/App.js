import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setdata] = useState('');

  const fetchData = async () => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    try {
      const fetching = await fetch("https://icanhazdadjoke.com/", config);
      const response = await fetching.json();
      setdata(response.joke)  
    } catch (error) {
      new Error(error,'hata var')
    }
    
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return <div className="App">
    {data}
  </div>;
}

export default App;
