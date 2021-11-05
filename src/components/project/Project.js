import React from "react";
import { useEffect, useState } from "react";
import "./Project.css";
import binoo from "../../img/binoo_website.jpg";
import ProjectList from "../projectList/ProjectList";
import {
  featuredProject,
  webProject,
  mobileProject,
  designProject,
  contentProject,
} from "../../data";

export default function Project() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "disign",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredProject);
        break;
      case "web":
        setData(webProject);
        break;
      case "mobile":
        setData(mobileProject);
        break;
      case "disign":
        setData(designProject);
        break;
      case "content":
        setData(contentProject);
        break;
      default:
        setData(contentProject);
    }
  }, [selected]);

  return (
    <div className="project" id="project">
      <h1>Project</h1>
      <ul>
        {list.map((item) => (
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="binoo-ECommerce Web" />
            <h3 className="title">Binoo - E Commerce</h3>
          </div>
        ))}

        {/* <div className="item">
          <img src={binoo} alt="binoo-ECommerce Web" />
          <h3 className="title">Binoo - E Commerce</h3>
        </div>
        <div className="item">
          <img src={binoo} alt="binoo-ECommerce Web" />
          <h3 className="title">Binoo - E Commerce</h3>
        </div> */}
      </div>
    </div>
  );
}
