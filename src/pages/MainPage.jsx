import React from "react";
import Home from "./Home";

function MainPage() {
	return (
		<>
			<div
				className="fixed w-full z-0 h-screen top-0"
				style={{
					backgroundImage: `
      linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),
      url("https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg")
      `,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}></div>

			<div className="w-full h-auto absolute z-10">
				<section className="w-full h-screen bg-transparent " id="home">
					<Home />
				</section>
				<section
					className="w-full h-screen bg-white  relative"
					id="about"></section>
				<section
					className="w-full h-screen bg-white  relative "
					id="services"></section>

				<section
					className="w-full h-screen bg-white  relative"
					id="projects"></section>
				<section
					className="w-full h-screen bg-white  relative"
					id="contact"></section>
			</div>
		</>
	);
}

export default MainPage;
