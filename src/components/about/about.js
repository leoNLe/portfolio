import React from "react";
import "./about.css";
import TechBubble from "../TechBubble";

function About() {
  return (
    <div className="about-container">
      <div className="title-border">
        <h3>About Me</h3>
      </div>
      <div className="lower-container">
        {/*				<img src={personal} alt="personal" className="personal-image" /> */}
        <div className="statement">
          <div>
            <h4>Who am I? </h4>
            <p>
              Full-Stack Developer with a Computer Science degree and a
              Certificate in Full-Stack Web Development from UCI. Skilled in
              object-oriented programming, Javascript, HTML, CSS, and SQL.
              Experienced in popular web frameworks and libraries such as React,
              JQuery, and Bootstrap. Previously applied expertise to build a
              different full stacks applications such as a budgeting
              application. Passionate about building efficient and responsive
              web-applications with the most appropriate technologies.
              Enthusiastic to join an innovative team to leverage my skills in
              building great websites and promote company growth.
            </p>
            <p>
              Please fell free to contact me at
              <a href="mailto:lnle125@gmail.com"> Lnle125@gmail.com </a>
              anytime.
            </p>
          </div>
          <div>
            <h4> Skills: </h4>
            <div className="skills-div">
              {skills.map((skill) => {
                return <TechBubble key={skill} name={skill} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const skills = [
  "Javascript",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "Mongoose",
  "HTML5",
  "CSS3",
  "React",
  "Bootstrap",
  "OOP",
  "Java",
  "C++/C",
];
export default About;
