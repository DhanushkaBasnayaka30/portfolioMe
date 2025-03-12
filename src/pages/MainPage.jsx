import React, { useEffect } from "react";
import Home from "./Home";
import Navbar from "../components/navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

function MainPage() {

	useEffect(() => {
    const sections = document.querySelectorAll(".section");
    let isScrolling = false;

    const scrollToSection = (direction) => {
      if (isScrolling) return;
      isScrolling = true;

      const currentSection = [...sections].find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight;
      });

      let nextSection;
      if (direction === "down") {
        nextSection = currentSection?.nextElementSibling;
      } else {
        nextSection = currentSection?.previousElementSibling;
      }

      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }

      setTimeout(() => (isScrolling = false), 800); // Prevent fast scrolling
    };

    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        scrollToSection("down");
      } else {
        scrollToSection("up");
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

	return (
		<>
		<ToastContainer />
			<div className="w-full fixed top-0 lg:top-16 z-50 h-20  flex items-center lg:justify-end  ">
				<Navbar />
			</div>

			<div className="w-full h-screen max-h-auto ">
				<section className="w-full section  h-screen-minus-20  relative " id="home">
					<Home />
				</section>
				{/* <section
					className="w-full  min-h-h-screen-minus-20 max-h-auto "
					id="about">
					<About />
				</section> */}
				<section className="w-full section mt-20   max-h-auto h-screen  " id="projects">
					<Projects /> 
				</section>

				<section className="w-full section  min-h-h-screen-minus-20 max-h-auto h-screen relative " id="contact">
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
