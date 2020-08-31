import React from "react";
import "./index.css";

function Project(props) {
  const IMG_PATH = require(`../../assets/${props.image}`);

  return (
    <div className="project ">
      <div className="project-image">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={props.deploy || props.github}
          className="image"
        >
          <img src={IMG_PATH} alt="project " />
        </a>
        <h4 className="project-caption">{props.name}</h4>
      </div>
      <div>
        {props.deploy ? (
          <a target="_blank" rel="noopener noreferrer" href={props.github}>
            Github Link
          </a>
        ) : null}{" "}
      </div>
    </div>
  );
}

export default Project;
