import React from "react";
import ecommerceImg from "../../images/ecommerce-site.png";
import netflixCloneImg from "../../images/netflix-clone.png";
import contactKeeperImg from "../../images/contact-keeper.PNG";
import chatAppImg from "../../images/socketio.png";
import Project from "../Project/Project";
import "./Projects.css";

const Projects = () => {
	const projects = [
		{
			title: "E-Commerce WebApp",
			demoLink: "https://ecommerce-site-9d5dc7.netlify.app/",
			sourceCodeLink: "",
			imageSrc: ecommerceImg,
		},
		{
			title: "Netflix-Clone",
			demoLink: "http://netflix-movie-app-clone.herokuapp.com/",
			sourceCodeLink: "https://github.com/Nishant-Bhosale/MovieApp",
			imageSrc: netflixCloneImg,
		},
		{
			title: "Contact-Keeper",
			demoLink: "http://contact-keeper7.herokuapp.com/",
			sourceCodeLink: "",
			imageSrc: contactKeeperImg,
		},
		{
			title: "Chat-App",
			demoLink: "https://evening-badlands-19902.herokuapp.com/",
			sourceCodeLink: "",
			imageSrc: chatAppImg,
		},
	];

	return (
		<div id="work" className="projects-container" projects={projects}>
			{projects.map((project) => {
				return <Project project={project} />;
			})}
		</div>
	);
};

export default Projects;
