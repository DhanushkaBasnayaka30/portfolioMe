import {BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import Navbar from "./components/navbar";
import { ToastContainer, toast } from 'react-toastify';

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
