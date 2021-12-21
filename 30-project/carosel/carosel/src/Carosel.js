import React from "react";
import "./carosel.css";
function Carosel({ resim }) {
  console.log(resim);
    return (
    <div>
      <img src={resim} alt="" />
    </div>
  );
}

export default Carosel;
