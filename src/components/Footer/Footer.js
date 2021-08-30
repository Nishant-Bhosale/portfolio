import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer" id="contact">
			<h1>Contact</h1>
			<div className="social-links">
				<a href="https://www.linkedin.com/in/nishant-bhosale-6777241b6/">
					<i className="fab fa-linkedin"></i>
				</a>
				<a href="https://www.instagram.com/nishant_bhosale3/">
					<i className="fab fa-instagram"></i>
				</a>
				<a href="https://github.com/Nishant-Bhosale">
					<i className="fab fa-github"></i>
				</a>
				<a href="https://twitter.com/Nishant02914093">
					<i className="fab fa-twitter"></i>
				</a>
			</div>
			<p style={{ color: "white", margin: "1rem", paddingTop: "2rem" }}>
				Nishant Bhosale &copy; 2021
			</p>
		</footer>
	);
};

export default Footer;
