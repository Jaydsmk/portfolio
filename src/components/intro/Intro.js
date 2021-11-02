import React from "react";
import "./Intro.css";
import doggy from "../../img/doggy.png";
import downArrow from "../../img/downArrow.png";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    console.log(textRef);
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backspeed: 60,
      strings: ["Fast learner!", "Problem solver!", "Great team player!"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={doggy} alt="puppy" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Jayden Kim</h1>
          <h3>
            &nbsp;<span ref={textRef}></span>
          </h3>
        </div>
        <a href="#project">
          <img src={downArrow} alt="downArrow" />
        </a>
      </div>
    </div>
  );
}
