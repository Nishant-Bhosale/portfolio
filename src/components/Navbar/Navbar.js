import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
	let [expanded, setExpanded] = useState(false);

	const toggleNavbar = () => {
		setExpanded((prevState) => (expanded = !prevState));
	};

	const navLinksState = expanded ? " expanded" : "";

	return (
		<div className="navbar">
			<div className="navbar__content content-container-fluid">
				<a className="navbar__title" href="/">
					<h1>Nishant Bhosale</h1>
				</a>
				<button
					className="navbar__menu"
					onClick={toggleNavbar}
					aria-label="Toggle nav bar"
				>
					<MdMenu />
				</button>
				<div className={`navbar-links${navLinksState}`}>
					<a href="/">Home</a>
					<a href="#about">About</a>
					<a href="/#skills">Skills</a>
					<a href="/#work">Work</a>
					<a href="/#contact">Contact</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
