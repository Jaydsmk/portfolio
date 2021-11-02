import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="images/doggy-removebg.png" alt="puppy" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Jayden Kim</h1>
          <h3>
            Software Developer<span></span>
          </h3>
        </div>
        <a href="#project">dsfdsf</a>
      </div>
    </div>
  );
}
