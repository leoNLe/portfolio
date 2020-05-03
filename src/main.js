import React from 'react';
import penguin from "./assets/penguin.jpg"
function main() {

  return (


    
    <div class="container-fluid my-5 border about-container">
        
        <div class="row mx-3 pt-4 pb-3 title-border overflow-auto">
                <h3 class="col">About Me</h3>
        </div> 
        
        <div class="row mx-3 mb-3 ">
            
            <div class="col-12 overflow-auto">
                
                <img src={penguin} alt="Penguin" class="float-left about-img img-fluid mt-3 mb-1 pr-3"/> 
            
                <p class="my-3">
                    Full-Stack Developer with a Computer Science degree and a Certificate in Full-Stack Web Development from UCI. Skilled  in object-oriented programming, Javascript, HTML, CSS, and SQL. Experienced in popular web frameworks and libraries such as React, JQuery, and Bootstrap.  Previously applied expertise to build a movie website that displays searchable movies and their actors. Passionate about building efficient and responsive web-applications with the most appropriate technologies. Enthusiastic to join an innovative team to leverage my skills in building great websites and promote company growth.
                </p>    
            </div>
        </div>
    </div>

  );
}

export default main;