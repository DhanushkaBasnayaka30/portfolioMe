import React from "react";
import Home from "./Home";
import Navbar from "../components/navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/Footer";

function MainPage() {
	return (
		<>
			<div className="w-full fixed top-0 lg:top-0 z-50 h-20  flex items-center lg:justify-end  ">
				<Navbar />
			</div>

			<div className="w-full   absolute z-0 top-20 min-h-h-screen-minus-20 max-h-auto">
				<section className="w-full   h-screen-minus-20   relative " id="home">
					<Home />
				</section>
				<section
					className="w-full  min-h-h-screen-minus-20 max-h-auto "
					id="about">
					<About />
				</section>
				<section className="w-full  min-h-h-screen-minus-20 max-h-auto mt-20 relative  " id="projects">
					<Projects />
				</section>

				<section className="w-full min-h-h-screen-minus-20 max-h-auto relative " id="contact">
					<Contact />
				</section>

				<div className="mt-20 ">
					<Footer />
				</div>
			</div>
		</>
	);
}

export default MainPage;
