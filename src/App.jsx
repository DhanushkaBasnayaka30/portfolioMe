import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import Navbar from "./components/navbar";
import { ToastContainer, toast } from 'react-toastify';
import Project from "./pages/Project";

function App() {
	return (
		<>

			<Router>
				<Routes>
				<Route path="project/:id" element={<Project />} />
				<Route path="/" element={<MainPage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
