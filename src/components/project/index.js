import React from "react";
import "./index.css";

function Project(props) {
  const IMG_PATH = require(`../../assets/${props.image}`);

  return (
    <div className="project-item">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.href}
        className="image"
      >
        <img src={IMG_PATH} alt="Img" />
      </a>
      <h4 className="project-caption">{props.name}</h4>
    </div>
  );
}

export default Project;
