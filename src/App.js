import "./App.css";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Particles from 'react-tsparticles';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Skills from "./components/Skills/Skills";

function App() {

   const particlesInit = (main) => {
      console.log(main);
	}

	const particlesLoaded = (container) => {
      console.log(container)
	}

	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<div className="main-section">
               <Particles
        id="tsparticles"
        url="http://foo.bar/particles.json"
        init={particlesInit}
        loaded={particlesLoaded}
      />
					<h1 style={{ color: "black" }}>Hii, I Am</h1>
					<ul>
						<li>N</li>
						<li>I</li>
						<li>S</li>
						<li>H</li>
						<li>A</li>
						<li>N</li>
						<li>T</li>
						<li>_</li>
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
				<Projects />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
