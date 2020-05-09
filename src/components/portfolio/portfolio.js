import React from "react";
import hollywood from "../../assets/hollywood.jpg";
import weather from "../../assets/weather.png";
import webcrawler from "../../assets/webcrawler.jpg"
import fileSystemImg from "../../assets/file_system.jpeg";

import "./portfolio.css";

function Portfolio(){

    return (
        <div className="main-container-portfolio">
            <div className="title-border">
                    <h3>Portfolio</h3>
            </div>
            <div className="projects-container">
                <div className="project-item">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/leoNLe/Hollywood-Holidays" className="image">
                        <img src={hollywood} alt="Img"/>
                    </a>
                    <h4 className="project-caption">Hollywood Holidays</h4>
                </div>
                <div className="project-item">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/leoNLe/Weather" className="image">
                        <img src={weather} alt="Img" className="img-fluid"/>
                    </a>
                    <h4 className="project-caption">Weather Dashboard</h4>
                </div>  
                <div className=" project-item"> 
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/leoNLe/spacetime-crawler-master" className="image">
                        <img src={webcrawler} alt="Img"/>
                    </a>
                    <h4 className="project-caption text-center">Webcrawler</h4>
                </div>
                <div className="project-item" >
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/leoNLe/File_System" className ="image">
                        <img src={fileSystemImg} alt="Img"  className="img-fluid"/>
                        </a>
                    <h4 className="project-caption"> Simple File System</h4>              
                </div> 
            </div>
        </div>
    )
}

export default Portfolio;