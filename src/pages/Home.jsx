import { FaFacebookF } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { Router } from "react-router-dom";

function Home() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 1) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		// Attach the scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			{/* Navbar */}
			<div
				className={`w-full md:h-[10vh] h-[8vh] bg-white fixed flex justify-end z-50 navbar transition-transform duration-300 ${
					isVisible ? "translate-y-0" : "-translate-y-full"
				}`}>
			
					<Navbar />
			
			</div>

			{/* Main Content */}
			<div className="w-full h-screen">
				{/* Spacer to prevent content overlap */}

				{/* Home Section */}
				<div className="w-full h-[90vh] bg-transparent">
					<div className="w-[95%] md:w-[80%] h-[10vh] bg-transparent flex  relative m-auto gap-x-4 py-4 items-center">
						<FaFacebookF className="text-2xl cursor-pointer text-white hover:text-blue-500" />
						<IoLogoGithub className="text-2xl cursor-pointer text-white hover:text-blue-500" />
						<FaLinkedin className="text-2xl cursor-pointer text-white hover:text-blue-500" />
						<AiFillInstagram className="text-2xl cursor-pointer text-white hover:text-blue-500" />
					</div>

					<div className=" w-[95%] md:w-[80%] h-[92vh] gap-y-6  md:h-[90vh] bg-transparent m-auto flex flex-col justify-center md:gap-y-8 ">
						<h1 className="text-3xl md:text-5xl text-white">HELLO , I am</h1>
						<span className="text-3xl md:text-6xl text-white">Dhanushka Basnayaka</span>
						<span className="md:text-xl text-white">Web Developer</span>
						<button className=" bg-blue-500 flex justify-center py-1 md:px-4 px-2 w-24 md:w-40 text-white rounded-sm">
							Resume
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
