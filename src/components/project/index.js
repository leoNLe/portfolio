import React from "react";
import "./index.css";
import { faGithub, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

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
      </div>
      <div className="project-caption">{props.name}</div>

      <div className="info">
        <div className="info-icons">
          <a target="_blank" rel="noopener noreferrer" href={props.github}>
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              style={{ color: "var(--nav-color)" }}
            />
          </a>
          {props.deploy ? (
            <a target="_blank" rel="noopener noreferrer" href={props.deploy}>
              <FontAwesomeIcon
                icon={faGlobe}
                size="2x"
                style={{ color: "var(--nav-color)" }}
              />
            </a>
          ) : null}
        </div>

				<div className="summary">{props.summary}</div>
      </div>

      <div className="tech-div">
        {props.technologies.map((tech) => {
          return (
            <div key={tech} className="tech">
              {tech}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
