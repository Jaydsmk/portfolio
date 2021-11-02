import React from "react";
import "./Navbar.css";

export default function Navbar({ open, setOpen }) {
  return (
    <div className={"navBar " + (open && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Jayden.Dev
          </a>
        </div>
        <h1>Hello</h1>
        <div className="right">
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
