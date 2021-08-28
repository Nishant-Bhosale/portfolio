import React from "react";
import netflixClone from "../../images/ecommerce-site.png";
import "./Projects.css";

const Projects = () => {
	return (
		<div id="work" className="projects-container">
			<div className="project-container">
				<div className="image-wrapper">
					<img
						src={netflixClone}
						alt=""
						style={{ height: "100%", width: "100%", aspectRatio: "16 / 9" }}
					/>
				</div>
				<div className="project-description">
					<h1>Netflix Clone</h1>
					<a href="http://netflix-movie-app-clone.herokuapp.com/">View Demo</a>
					<a href="https://github.com/Nishant-Bhosale/MovieApp">Source Code</a>
				</div>
			</div>
		</div>
	);
};

export default Projects;
