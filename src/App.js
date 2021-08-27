import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				Portfolio website
			</div>
		</BrowserRouter>
	);
}

export default App;
