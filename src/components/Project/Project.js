import React from "react";
import "./Project.css";

const Project = (props) => {
	const { title, demoLink, sourceCodeLink, imageSrc } = props.project;

	return (
		<div className="project-container">
			<div className="image-wrapper">
				<img src={imageSrc} alt="" loading="lazy" height="100%" width="100%" />
			</div>
			<div className="project-description">
				<h2>{title}</h2>
				{demoLink ? (
					<a
						href={demoLink}
						className="button-link"
						target="_blank"
						rel="noreferrer noopener"
					>
						Demo
					</a>
				) : null}

				<a
					href={sourceCodeLink}
					className="button-link"
					target="_blank"
					rel="noreferrer noopener"
				>
					GitHub
				</a>
			</div>
		</div>
	);
};

export default Project;
