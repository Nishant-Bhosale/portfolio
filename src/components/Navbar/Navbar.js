import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
	let [expanded, setExpanded] = useState(false);

	const toggleNavbar = () => {
		setExpanded((prevState) => (expanded = !prevState));
		console.log(expanded);
	};

	const scroll = (element) => {
		element.scrollIntoView({ behaviour: "smooth", block: "start" });
	};

	const navLinksState = expanded ? " expanded" : "";

	return (
		<div className="navbar">
			<div className="navbar__content content-container-fluid">
				<Link className="navbar__title" to="/">
					{/* <img src="/images/jt_logo.svg" alt="Jake Tripp Logo" /> */}
					<h1>Jake Tripp</h1>
				</Link>
				<button
					className="navbar__menu"
					onClick={toggleNavbar}
					aria-label="Toggle nav bar"
				>
					<MdMenu />
				</button>
				<div className={`navbar-links${navLinksState}`}>
					<Link to="/">Home</Link>
					<Link to="/#about" scroll={scroll}>
						About
					</Link>
					<Link to="/#skills" scroll={scroll}>
						Skills
					</Link>
					<Link to="/#work" scroll={scroll}>
						Work
					</Link>
					<Link to="/#contact" scroll={scroll}>
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
