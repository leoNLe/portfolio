import React from "react";
import Project from "../project";
import projects from "../../projects.json";
import "./portfolio.css";

function Portfolio() {
  let key = 0;
  return (
    <div className="main-container-portfolio">
      <div className="title-border">
        <h3>Portfolio</h3>
      </div>
      <div className="projects-container">
        {projects.map((projectInfo) => {
          return <Project key={key++} {...projectInfo} />;
        })}
      </div>
    </div>
  );
}

export default Portfolio;

