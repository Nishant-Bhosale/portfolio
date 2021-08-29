import React from "react";
import ecommerceImg from "../../images/ecommerce-site.png";
import netflixCloneImg from "../../images/netflix.png";
import contactKeeperImg from "../../images/contact-keeper.PNG";
import chatAppImg from "../../images/socketio.png";
import Project from "../Project/Project";
import "./Projects.css";

const Projects = () => {
	//List of projects
	const projects = [
		{
			title: "E-Commerce WebApp",
			demoLink: "https://ecommerce-site-9d5dc7.netlify.app/",
			sourceCodeLink: "https://github.com/Nishant-Bhosale/amazon-clone",
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
			sourceCodeLink: "https://github.com/Nishant-Bhosale/ContackKeeper",
			imageSrc: contactKeeperImg,
		},
		{
			title: "Chat-App",
			demoLink: "https://evening-badlands-19902.herokuapp.com/",
			sourceCodeLink: "https://github.com/Nishant-Bhosale/Chat-App",
			imageSrc: chatAppImg,
		},
		{
			title: "Hotel Menu Card",
			sourceCodeLink: "https://github.com/Nishant-Bhosale/HotelMenuCard",
			imageSrc: chatAppImg,
		},
		{
			title: "Todo-List with TypeScript",
			sourceCodeLink:
				"https://github.com/Nishant-Bhosale/TodoAppWithTypescript",
			imageSrc: chatAppImg,
		},
	];

	return (
		<>
			<h1>My Work</h1>
			<div id="work" className="projects-container" projects={projects}>
				{projects.map((project, index) => {
					return <Project project={project} key={index} />;
				})}
			</div>
		</>
	);
};

export default Projects;
