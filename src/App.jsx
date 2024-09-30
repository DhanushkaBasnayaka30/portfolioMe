import {BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import MainPage from "./pages/MainPage";

function App() {
	return (
		<>
			<Router>
				<MainPage />
			</Router>
		</>
	);
}

export default App;
