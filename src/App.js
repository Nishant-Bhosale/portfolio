import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Skills from "./components/Skills/Skills";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<div className="main-section">
					<h1 style={{ color: "white" }}>Hii, I Am</h1>
					<ul>
						<li>N</li>
						<li>I</li>
						<li>S</li>
						<li>H</li>
						<li>A</li>
						<li>N</li>
						<li>T</li>

						<li>B</li>
						<li>H</li>
						<li>O</li>
						<li>S</li>
						<li>A</li>
						<li>L</li>
						<li>E</li>
					</ul>
					<h3 className="main-heading">
						I Love <span></span>
					</h3>
				</div>
				<AboutMe />
				<Skills />
			</div>
		</BrowserRouter>
	);
}

export default App;
