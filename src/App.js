import React from "react";
import VideoDescription from "./component/details/VideoDescription";
import Footer from "./component/footer/Footer";
import Home from "./component/Home";
import NavigationBar from "./component/navigation/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<NavigationBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/video/:videoId" element={<VideoDescription />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
