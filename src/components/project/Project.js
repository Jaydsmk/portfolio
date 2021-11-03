import React from "react";
import "./Project.css";
import binoo from "../../img/binoo_website.jpg";

export default function Project() {
  return (
    <div className="project" id="project">
      <h1>Project</h1>
      <ul>
        <li className="active">Portfolio</li>
        <li>Binoo - E Commerce Website</li>
        <li>Daily 50 Projects</li>
      </ul>
      <div className="container">
        <div className="item">
          {/* <img src={binoo} alt="binoo-ECommerce Web" /> */}
          <h3 className="title">Binoo - E Commerce</h3>
        </div>
        <div className="item">
          <img src={binoo} alt="binoo-ECommerce Web" />
          <h3 className="title">Binoo - E Commerce</h3>
        </div>
        <div className="item">
          <img src={binoo} alt="binoo-ECommerce Web" />
          <h3 className="title">Binoo - E Commerce</h3>
        </div>
      </div>
    </div>
  );
}
