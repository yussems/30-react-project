/* eslint-disable no-unused-expressions */
import React, { useRef, useState } from "react";
import "./App.css";

function Player({ name, sound }) {
  const audioRef = useRef(null);
  const [stop, setStop] = useState(false);


  const audioPlayer = (e) => {
    setStop(true);
    audioRef.current.play();
    if (stop) {
      setStop(false);
      audioRef.current.pause();
    }
  };
  return (
    <div className="audioStyle">
      <audio ref={audioRef} src={sound}></audio>
      <button onClick={audioPlayer}>{name}</button>
    </div>
  );
}

export default Player;
