import React, { useState } from "react";
import "./background.css";
import photoOne from "../images/pic01.jpg";
import photoTwo from "../images/pic02.jpg";
import photoThree from "../images/pic03.jpg";
import photoFour from "../images/pic04.jpg";
import photoFive from "../images/pic05.jpg";
import Image from "./Image";

function Background() {
  
  return (
    <div className="container">
      <Image photo={photoOne} />
      <Image photo={photoTwo} />
      <Image photo={photoThree} />
      <Image photo={photoFour} />
      <Image photo={photoFive} />
    </div>
  );
}

export default Background;
