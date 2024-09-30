import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const navbarDetails = [
	{ title: "Home", path: "#home" },
	{ title: "About", path: "#about" },
	{ title: "Services", path: "#services" },
	{ title: "Projects", path: "#projects" },
	{ title: "Contact", path: "#contact" },
];

function Navbar() {
	const location = useLocation();
	const [activeSection, setActiveSection] = useState(location.hash || "#home");
	const [menubuttonState, setmenubuttonState] = useState(false);
	const divRef = useRef(null);
	
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
			<div>
				<ul className="md:flex hidden gap-x-8 h-full items-center justify-start mr-4 ">
					{navbarDetails.map((item, index) => (
						<li key={index} className="py-4 text flex items-center justify-center">
							<a
								href={item.path}
								className={`${
									activeSection === item.path
										? "border-b-2 border-blue-500"
										: "hover:border-b-2 dark:border-blue-500 text-center active:border-blue-500 border-[#000814] flex justify-center items-center"
								}`}
							>
								{item.title}
							</a>
						</li>
					))}
				</ul>
				<div className="w-[100vw] h-full md:hidden flex items-center justify-end mr-2">
					<div
						className="w-auto h-auto flex items-center justify-center py-1 px-1 rounded-lg border-black"
						onClick={() => changeState(!menubuttonState)} // Toggle state on click
						aria-expanded={menubuttonState}
					>
						<IoMdMenu className="text-3xl" />
					</div>
				</div>
			</div>
			<div
	ref={divRef}
	className={`md:hidden flex w-full h-[50vh] bg-gray-900 absolute transition-transform duration-300 ${
		menubuttonState ? " translate-y-0" : "top-[-100vh] translate-y-0 "
	}`}
>
	<div className="w-full h-[8vh] bg-white flex items-center justify-end">
		<IoCloseSharp
			className="text-3xl mr-2"
			onClick={() => changeState(false)} // Close menu on close button click
		/>
	</div>
	<div className="w-full h-full bg-transparent absolute top-[8vh]">
		<ul className="flex flex-col items-center justify-center h-full  ">
			{navbarDetails.map((item, index) => (
				<li key={index} className="py-4 text flex items-center justify-center">
					<a
						href={item.path}
						onClick={() => changeState(false)} // Close the menu after clicking an item
						className={`${
							activeSection === item.path
								? "border-b-2 border-blue-500 text-white"
								: "hover:border-b-2 dark:border-blue-500 text-center active:border-blue-500 border-[#000814] flex justify-center items-center text-white"
						}`}
					>
						{item.title}
					</a>
				</li>
			))}
		</ul>
	</div>
</div>

		</>
	);
}

export default Navbar;
