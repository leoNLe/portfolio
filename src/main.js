import React from 'react';
import penguin from "./assets/penguin.jpg"
function main() {

  return (

    <div className="about-container">
        <div className="title">
                <h3 className="col">About Me</h3>
        </div> 
        <div className="">
            <div className="low-auto">
                <img src={penguin} alt="personal" className="personal-image"/> 
            
                <p className="my-3">
                    Full-Stack Developer with a Computer Science degree and a Certificate in Full-Stack Web Development from UCI.
                    Skilled  in object-oriented programming, Javascript, HTML, CSS, and SQL. Experienced in popular web frameworks and libraries such as React, JQuery, and Bootstrap.
                    Previously applied expertise to build a movie website that displays searchable movies and their actors. Passionate about building efficient and responsive web-applications
                    with the most appropriate technologies. Enthusiastic to join an innovative team to leverage my skills in building great websites and promote company growth.
                </p>    
            </div>
        </div>
    </div>

  );
}

export default main;