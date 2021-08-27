import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<h1>Hii, I Am</h1>
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
				<h2 className="main-heading">
					I Love <span></span>
				</h2>
			</div>
		</BrowserRouter>
	);
}

export default App;
