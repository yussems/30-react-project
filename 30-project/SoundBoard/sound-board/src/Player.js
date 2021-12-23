import React, { useRef } from "react";
import "./App.css";

function Player({ name, sound }) {
  const audioRef = useRef(null);
  const [play, setPlay] = React.useState(false);

  const audioPlayer = () => {
    audioRef.current.play();
    setPlay(true);
    if (play) {
        audioRef.current.pause();
        setPlay(false);
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
