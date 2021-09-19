import "./App.css";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Skills from "./components/Skills/Skills";
import BackgroundAnimation from "./components/Background/Background";
import MainSection from "./components/MainSection/MainSection";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<div className="animation-container" id="home">
					<BackgroundAnimation />
				</div>
				<MainSection />
				<AboutMe />
				<Skills />
				<Projects />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
