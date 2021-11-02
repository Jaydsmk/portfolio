import React from "react";
import "./Menu.css";

export default function menu({ open, setOpen }) {
  return (
    <div className={"menu " + (open && "active")}>
      <ul>
        <li onClick={() => setOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#aboutMe">About Me</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#project">Projects</a>
        </li>
      </ul>
    </div>
  );
}
