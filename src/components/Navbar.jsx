import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import header from "../assets/header1.png";
import PageLocation from "./PageLocation";

const navbarDetails = [
	{ title: "Home", path: "#home" },
	 { title: "About", path: "#about" },
	{ title: "Projects", path: "#projects" },
	{ title: "Contact", path: "#contact" },

];

function Navbar() {
	const location = useLocation();
	const [activeSection, setActiveSection] = useState("#home");
	const [menubuttonState, setmenubuttonState] = useState(false);
	const divRef = useRef(null);
	
	console.log("activesection",activeSection);

	const index = navbarDetails.findIndex(item => item.path === activeSection);

	console.log(index);
	const changeState = (state) => {
		setmenubuttonState(state);
	};


	useEffect(() => {
		const sections = navbarDetails.map((item) =>
			document.querySelector(item.path)
		);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(`#${entry.target.id}`);
					}
				});
			},
			{ threshold: 0.7 } // 70% of the section must be visible to be considered active
		);

		sections.forEach((section) => {
			if (section) observer.observe(section);
		});

		// Cleanup on component unmount
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		// Smooth scrolling behavior
		document.documentElement.style.scrollBehavior = "smooth";

		return () => {
			document.documentElement.style.scrollBehavior = "auto"; // Cleanup scroll behavior on unmount
		};
	}, []);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (divRef.current && !divRef.current.contains(event.target)) {
				changeState(false); // Close the menu when clicking outside
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		// Cleanup the event listener on component unmount
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (menubuttonState) {
				changeState(false); // Close the menu on scroll
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [menubuttonState]);

	return (
		<>
			{/* <div className="w-full  top-0 lg:top-16 h-screen  flex items-center lg:justify-end  p-1 fixed z-10">
			<PageLocation currentIndex={index} section={navbarDetails} />

			</div> */}
			<div className="lg:w-full w-[100vw]   sm:px-12 flex lg:justify-between  bg-transparent   ">
				<div className="lg:w-80 lg:h-20 h-16   lg:ml-8 px-1 w-1/2 flex items-center lg:justify-center lg:gap-x-4 ">

				</div>
				{/* --------------for web---------------- */}
				<ul className=" hidden gap-x-12   h-20 items-center justify-start sm:mr-4 ">
					{navbarDetails.map((item, index) => (
						<li
							key={index}
							className="py-4 text flex items-center justify-center">
							<a
								href={item.path}
								className={` font-semibold uppercase ${activeSection === item.path
									? "border-b-2 border-violet-600 "
									: "hover:border-b-2 dark:border-violet-600 text-center active:border-blue-500 border-[#000814] flex justify-center items-center"
									}`}>
								{item.title}
							</a>
						</li>
					))}
				</ul>
				{/* -------------------------------------- */}

				<div className="w-1/2 justify-end  h-16 flex items-center  sm:mr-0">
					<div
						className="w-auto h-auto flex items-center  cursor-pointer  justify-center py-1 px-1 rounded-lg border-black"
						onClick={() => changeState(!menubuttonState)} // Toggle state on click
						aria-expanded={menubuttonState}>
						{menubuttonState != true ? (
							<HiOutlineMenuAlt3  className={`${index%2!=0?"text-white  text-4xl sm:text-6xl":"text-blue-800  text-4xl sm:text-6xl"}`}   />
						) : (
							<HiOutlineMenuAlt3  className="text-blue-800  text-4xl sm:text-6xl"   />
						)}
					</div>
					<div
				ref={divRef}
				className={`absolute z-50 sm:right-14 top-0 bg-slate-100 text-gray-800 overflow-hidden 
					transition-all duration-700 ease-in-out origin-top 
					${menubuttonState ? "sm:w-1/4 w-full md:w-2/4 lg:w-1/4 h-screen md:h-[500px]" : "w-0 h-0"}`
				}
				
				>

				<div className="w-full  h-[30vh] flex bg-transparent absolute   ">

					<div className="w-3/4  ">

						<ul className="flex flex-col items-end justify-center h-full  pr-8 ">
							{navbarDetails.map((item, index) => (
								<li
									key={index}
									className="py-4 text flex items-center justify-center">
									<a
										href={item.path}
										onClick={() => changeState(false)} // Close the menu after clicking an item
										className={`${activeSection === item.path
											? "border-b-2 border-blue-500 text-gray-900 "
											: "hover:border-b-2 dark:border-blue-500 text-center active:border-blue-500  border-[#000814] flex justify-center items-center text-gray-600"
											}`}>
										{item.title}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className="w-1/4  flex justify-end p-2  text-4xl sm:text-6xl"><IoCloseSharp  color="red"
						className="text-5xl cursor-pointer  rounded"
						onClick={() => changeState(false)} // Close menu on close button click
					/></div>
				</div>
			</div>
				</div>
			</div>
			
		</>
	);
}

export default Navbar;
