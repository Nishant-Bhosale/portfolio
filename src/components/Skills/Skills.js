import React from "react";
import ReactLogo from "../../images/react.png";
import cssLogo from "../../images/css.png";
import expressLogo from "../../images/express.png";
import htmlLogo from "../../images/html.png";
import typescriptLogo from "../../images/typescript.png";
import javaLogo from "../../images/java.png";
import firebaseLogo from "../../images/firebase.png";
import mongodbLogo from "../../images/mongodb.png";
import javascriptLogo from "../../images/javascript.png";
import nodeLogo from "../../images/node-js.png";
import pythonLogo from "../../images/python.png";
import "./Skills.css";

const Skills = () => {
	const arr = [
		ReactLogo,
		cssLogo,
		expressLogo,
		htmlLogo,
		typescriptLogo,
		javaLogo,
		firebaseLogo,
		mongodbLogo,
		javascriptLogo,
		nodeLogo,
		pythonLogo,
	];

	const logoImage = "logo-image";

	return (
		<div id="skills">
			<div className="skills-container">
				{arr.map((img, index) => {
					return (
						<div className={logoImage + " image-" + (index + 1)} key={index}>
							<img src={img} alt="" />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;
