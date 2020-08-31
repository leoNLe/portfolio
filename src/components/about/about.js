import React from "react";
import personal from "../../assets/personal.jpg";
import "./about.css";

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
            <h4>Who am i? </h4>
            <p>
              Full-Stack Developer with a Computer Science degree and a
              Certificate in Full-Stack Web Development from UCI. Skilled in
              object-oriented programming, Javascript, HTML, CSS, and SQL.
              Experienced in popular web frameworks and libraries such as React,
              JQuery, and Bootstrap. Previously applied expertise to build a
              movie website that displays searchable movies and their actors.
              Passionate about building efficient and responsive
              web-applications with the most appropriate technologies.
              Enthusiastic to join an innovative team to leverage my skills in
              building great websites and promote company growth.
            </p>
          </div>
          <div>
            <h4> Skills: </h4>
            <div>
              Javascript | Node.js | Express.js | MySQL | MongoDB | Mongoose |
              HTML5/CSS3 | React | Bootstrap
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
