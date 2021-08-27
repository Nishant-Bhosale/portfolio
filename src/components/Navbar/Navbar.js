import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import "./Navbar.css";

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
					{/* <img src="./Nb.jpg" alt="Nishant Bhosale Logo" /> */}
					<h1>Nishant Bhosale</h1>
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
					<Link to="/#about" onScroll={scroll}>
						About
					</Link>
					<Link to="/#skills" onScroll={scroll}>
						Skills
					</Link>
					<Link to="/#work" onScroll={scroll}>
						Work
					</Link>
					<Link to="/#contact" onScroll={scroll}>
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
