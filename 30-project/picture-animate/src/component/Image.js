import React, { useEffect, useState } from "react";
import "./Images.css";

function Image({ photo }) {
  const [grow, setgrow] = useState("");
  const handleGrow = () => {
    if (grow === "active") {
      return setgrow("");
    }
    return setgrow("active");
  };

  return (
    <>
      <div
        onClick={handleGrow}
        className={`panel ${grow} `}
        style={{ backgroundImage: `url(${photo})` }}
      >
        <h3>Explore The World</h3>
      </div>
    </>
  );
}

export default Image;
