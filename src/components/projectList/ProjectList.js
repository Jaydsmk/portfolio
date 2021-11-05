import React from "react";
import "./ProjectList.css";

export default function ProjectList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "projectList active" : "projectList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
