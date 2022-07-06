import React from "react";
import ecommerceImg from "../../images/ecommerce-site.png";
import netflixCloneImg from "../../images/netflix.png";
import contactKeeperImg from "../../images/contact-keeper.PNG";
import chatAppImg from "../../images/socketio.png";
import Project from "../Project/Project";
import blogImage from "../../images/blog-image.PNG";
import PingPong from "../../images/ping-pong.PNG";
import "./Projects.css";

const Projects = () => {
	//List of projects
	const projects = [
		{
			title: "Personal Blog",
			demoLink: "https://nishantbhosale.vercel.app/",
			sourceCodeLink: "https://github.com/Nishant-Bhosale/Personal-Blog",
			imageSrc: blogImage,
		},
		{
			title: "Contact-Keeper",
			demoLink: "http://contact-keeper7.herokuapp.com/",
			sourceCodeLink: "https://github.com/Nishant-Bhosale/ContackKeeper",
			imageSrc: contactKeeperImg,
		},
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
			title: "Chat-App",
			demoLink: "https://evening-badlands-19902.herokuapp.com/",
			sourceCodeLink: "https://github.com/Nishant-Bhosale/Chat-App",
			imageSrc: chatAppImg,
		},
		{
			title: "Ping-Pong Game",
			demoLink: "https://ping-pong-yeyaaaa.netlify.app/",
			sourceCodeLink: "https://github.com/Nishant-Bhosale/Ping-Pong_Game",
			imageSrc: PingPong,
		},
	];

	return (
		<div style={{ background: "rgb(40, 40, 40)" }}>
			<h1 className="work-heading">My Work</h1>
			<div id="work" className="projects-container" projects={projects}>
				{projects.map((project, index) => {
					return <Project project={project} key={index} />;
				})}
			</div>
		</div>
	);
};

export default Projects;
