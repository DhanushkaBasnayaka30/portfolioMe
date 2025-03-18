import { FaFacebookF } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { Router } from "react-router-dom";
import { CiSquareChevUp } from "react-icons/ci";
import profile from "../assets/header1.png"
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { BiSolidDownload } from "react-icons/bi";
import { LuDownload } from "react-icons/lu";
import DhanushkaBasnayaka from "../../src/assets/DhanushkaBasnayaka.pdf"


function Home() {
	return (
		<>
			{/* socail icon section */}
			<div className="w-full mx-auto h-screen relative  ">

				<div className="w-full h-[90%]  sm:flex-row flex-col-reverse flex ">
					<div className=" w-[18%] sm:flex hidden aspect-square top-32 absolute z-[10] bg-gray-400 left-[51%]  items-center justify-center">
						<img src={profile} alt="" className="bg-center w-full h-full" />
					</div>
					<div className=" w-[18%] sm:flex hidden aspect-square  top-36 absolute z-[1] bg-transparent border-2 left-[52%]  items-center justify-center border-white"></div>
					<div className="sm:w-3/5 w-full  bg-blue-900  h-[80%] sm:h-full  ">
						<div className="sm:w-[80%] w-full h-full  float-end flex flex-col
						">
							<div className=" flex-col mt-24 sm:mt-40  sm:flex hidden ">

								<text className=" text-[#c9f07b]  text-4xl sm:text-6xl mt-6 font-bold">Full-stack</text>
								<text className=" text-[#c9f07b]  text-4xl sm:text-6xl mt-6 font-bold">Developer.</text>
							</div>
							<text className="text-xl text-white  mt-[42%] text-center sm:text-left  sm:mt-4 ">	Hey, I'm Dhanushka Basnayaka</text>
							<text className="sm:w-[80%] text-white mt-8 text-center w-full sm:text-left px-4 sm:px-0 ">	A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product </text>
							<div className="  mt-4 rounded-md  flex gap-y-8  sm:justify-start justify-center gap-x-3 ">
								<a href="https://www.facebook.com/dhanushka.basnayaka.90/" >
									<FaFacebookF className="w-10 h-10 text-gray-200 hover:bg-blue-500 p-2 rounded-md cursor-pointer " />
								</a>
								<AiFillInstagram className="w-10 h-10 text-gray-200 hover:bg-blue-500  p-2 rounded-md cursor-pointer" />
								<a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGrYU8d5wQpBgAAAZWJWdJAYTpk_cmSP_SD8_Yp2iytxrXqKFV9oQ_5DmjrIA5RWDWxn41taAFtS9P3wgiq9NUY6SuB2rdDf8lXlz6Mq-z7qQ6sWRunYF91zbdckwL7fwAE8DE=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdhanushka-basnayaka">
									<FaLinkedin className="w-10 h-10 text-gray-200 hover:bg-blue-500  p-2 rounded-md cursor-pointer" />
								</a>
								<a href="https://github.com/DhanushkaBasnayaka30">
									<IoLogoGithub className="w-10 h-10 text-gray-200 hover:bg-blue-500  p-2 rounded-md cursor-pointer" />
								</a>
							</div>

							<div className="  w-full items-center sm:justify-start justify-center mt-8 sm:mt-0 flex  gap-x-4">
								<a href={DhanushkaBasnayaka} target="DhanushkaBasnayaka.pdf" className="sm:mt-8 w-auto lg:px-20 rounded text-white text-center justify-center items-center gap-x-2 flex lg:text-lg text-base px-8  py-1 lg:py-2 border border-white text hover:bg-blue-700  hover:border-blue-500 hover:text-white  uppercase">
									Resume
									<LuDownload
										size={20} />
								</a>


							</div>
						</div>
					</div>
					<div className="sm:w-2/5 w-full gap-x-4 border-black sm:flex flex-col justify-start  px-4  items-start pt-16 flex bg-[#c9f07b] sm:h-full h-[32%] ">
						<div className="flex mt-4 relative flex-col  gap-x-2 sm:hidden  border-black w-full items-start justify-center
						">

							<text className=" text-blue-700  text-4xl sm:text-6xl font-bold">Full-stack</text>
							<text className=" text-blue-700  pl-4 text-4xl sm:text-6xl  font-bold">Developer.</text>
						</div>
						<div className=" w-[50%] sm:hidden z-10 flex aspect-square  mx-auto mt-6 bg-gray-400   items-center justify-center">
							<img src={profile} alt="" className="bg-center w-full h-full" />
						</div>

					</div>
					<div></div>





				</div>
				</div>
				</>
	);
}

export default Home;
