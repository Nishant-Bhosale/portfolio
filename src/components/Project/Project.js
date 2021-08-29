import React from "react";
import "./Project.css";

const Project = (props) => {
	const { title, demoLink, sourceCodeLink, imageSrc } = props.project;

	return (
		<div className="project-container">
			<div className="image-wrapper">
				<img
					src={imageSrc}
					alt=""
					style={{ height: "100%", width: "100%", aspectRatio: "16 / 9" }}
				/>
			</div>
			<div className="project-description">
				<h1>{title}</h1>
				<a href={demoLink} className="button-link">
					View Demo
				</a>
				<a href={sourceCodeLink} className="button-link">
					Source Code
				</a>
			</div>
		</div>
	);
};

export default Project;
