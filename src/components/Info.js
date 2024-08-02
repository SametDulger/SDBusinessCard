import React from "react";
import mypic from "../images/info_pic.jpg";
import logo from "../images/logo192.png";

export default function Info() {
  return (
    <div className="info">
      <img className="DP" src={mypic} alt="my profile" />
      <div className="logo-div">
        <img src={logo} className="logo" alt="logo" />
        <h2 className="name">Samet Dülger</h2>
      </div>

      <p className="dev">Software Developer</p>
      <div className="btn">
        <a href="https://www.linkedin.com/in/sametdulger/">
          <button className="button2">LinkedIn</button>
        </a>
      </div>
    </div>
  );
}
