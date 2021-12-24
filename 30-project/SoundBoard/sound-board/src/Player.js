/* eslint-disable no-unused-expressions */
import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function Player({ name, sound }) {
  const audioRef = useRef(null);
  const [play, setPlay] = useState(false);
  
  
const audioPlayer=() => {
  stop()
  audioRef.current.play()

}

const stop  = () => {
    audioRef.current.pause()
}

return (
    <div className="audioStyle">
      <audio onPause={stop} ref={audioRef} src={sound}></audio>
      <button onClick={audioPlayer}>{name}</button>
    </div>
  );
}

export default Player;
