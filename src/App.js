import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import { BrowserRouter } from "react-router-dom";

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

				<div className="about-me" id="about">
					<div className="about-me-info">
						<h1>About Me: </h1>

						<p>
							I am curious person who loves to know how different things work
							together. I love to <i>BUILD STUFF</i> and connect with people
							smarter than me!
						</p>
						<p>
							When I am not smashing the keyboard, you will find me playing
							basketball, reading or watching anime.
						</p>
						<p></p>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
