import { FaFacebookF } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { Router } from "react-router-dom";
import { CiSquareChevUp } from "react-icons/ci";

function Home() {
	return (
		<>
			{/* socail icon section */}
			<div className="w-full h-full relative">
				<div className="w-24 h-20 hover:h-auto pt-8 absolute bottom-[35%] tras left-0  flex flex-col z-10 items-center justify-end ">
				
					<div className="lg:flex hidden">
						<div className="border  rounded-md p-2 flex flex-col gap-y-8">
							<FaFacebookF className="w-10 h-10 hover:bg-purple-300 p-2 rounded-md cursor-pointer " />
							<AiFillInstagram className="w-10 h-10 hover:bg-purple-300 p-2 rounded-md cursor-pointer" />
							<FaLinkedin className="w-10 h-10 hover:bg-purple-300 p-2 rounded-md cursor-pointer" />
							<IoLogoGithub className="w-10 h-10 hover:bg-purple-300 p-2 rounded-md cursor-pointer" />
						</div>
					</div>
				</div>
				{/* Spacer to prevent content overlap */}

				{/* Home Section */}

				<div className="w-full h-full  flex items-center justify-center ">
					<div className="lg:w-[50%] h-[300px] w-full mx-auto flex flex-col justify-start  items-center">
						<span className="lg:text-5xl text-3xl text-center font-semibold mt-2 ">
							Hey, I'm Dhanushka Basnayaka
						</span>
						<span className="lg:w-[70%] lg:text-lg mt-6 w-[80%] text-justify  p-1 text-xs ">
							A Result-Oriented Web Developer building and managing Websites and
							Web Applications that leads to the success of the overall product{" "}
						</span>
						<div className="  w-full items-center justify-center flex  gap-x-4">
						<button className="mt-12 w-auto bg-purple-500 lg:px-20 rounded text-white text-center lg:text-lg text-base px-8  py-1 lg:py-2 text hover:bg-white hover:border-purple-500 hover:text-purple-500 border uppercase">
							Resume
						</button>
						<button className="mt-12 w-auto bg-white text-purple-500 border  lg:px-20 rounded border-purple-500 text-center lg:text-lg text-base px-8  py-1 lg:py-2 text uppercase">
							Projects
						</button>
							
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
