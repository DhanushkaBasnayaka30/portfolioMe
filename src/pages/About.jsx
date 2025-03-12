import { useState } from "react";
import about from "../assets/about.png";
import about1 from "../assets/about.png";
import { toast } from "react-toastify";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaArrowAltCircleDown } from "react-icons/fa";
function About() {
	const [state, setState] = useState("skill");
	return (
		<div className="w-full h-full bg-blue-800  flex flex-col">

			<div className=" w-[90%] mx-auto h-full lg:flex-col flex-row lg:p-6 mt-8  ">
				<p className="font-[cursive] text-8xl  mt-4   text-[#c9f07b]  lg:w-[80%] mx-auto">Hello...</p>

				<div className="lg:w-[80%] w-full mx-auto  h-full  lg:p-2  ">
					<div className="w-full lg:flex-col  flex-col flex lg:h-[400px] lg:w-[75%] mx-auto ">
						{/* <div className="lg:w-[380px] px-8 h-[450px] lg:h-[400px] flex items-center justify-center  lg:px-2 relative overflow-hidden "> */}
						{/* <div className="w-[330px] h-[330px] shadow-2xl  shadow-purple-300   rounded-full absolute bg-purple-500 bottom-12 z-[-10]"></div>
							{/* <img
								className="w-full h-full   bg-cover overflow-hidden rounded"
								src={about}
								alt="about image"
							/> */}
						{/* </div> */}
						<div className="w-full ">
							<p className="mt-6 text-white  text-sm lg:text-lg text-justify p-2 lg:mt-8 lg:text-center  sm:text-base">
								Hi, I’m Dhanushka Basnayaka, a passionate and dedicated Full-Stack
								Developer currently pursuing my degree in Computer Science at the
								University of Jaffna. I specialize in building dynamic and
								user-friendly web applications that focus on delivering seamless
								experiences for both users and clients.
							</p>
							<p className="text-sm lg:text-lg  text-white lg:text-center  text-justify p-2 mt-2 sm:text-base sm:mt-4">
								I’m also an avid learner who enjoys sharing insights and
								experiences from my web development journey. Through platforms
								like LinkedIn and Instagram, I regularly post content that
								inspires and educates others in the developer community. I’m
								always open to job opportunities that allow me to contribute,
								grow, and hone my skills further. If you’re looking for someone
								who is passionate, skilled, and eager to make an impact, don’t
								hesitate to get in touch.
							</p>
						</div>
						<div className="lg:w-[99%]  w-full py-2 lg:px-4 flex lg:flex-row flex-row p-2  items-center   lg:mx-auto lg:mt-[1%]">
							<div className="w-full h-full lg:text-base text-sm p-1 gap-y-3 flex flex-col lg:flex-row  lg:justify-center lg:gap-x-8 lg:items-center">

								<div className="flex gap-x-3 text-wrap lg:mt-4 mt-12 flex-wrap  items-center ">
									<MdMarkEmailUnread color="#c9f07b"size={20} />
									<p className="text-[#c9f07b] font-bold">dhanushkabasnayaka99@gmail.com</p>
								</div>
								<div className="flex gap-x-3 items-center justify-start lg:mt-0">
									<IoCall  size={20} color="#c9f07b" />
									<p className="text-[#c9f07b] font-bold lat ">+94 773189716</p>
								</div>
							</div>
						</div>
					<div className="w-full   text-gray-600 text-justify lg:mt-12 flex lg:justify-center  sm:mt-8 mt-8 p-2  md:mt-[8%] ">
							<a href="#contact" className="">
							<button className="bg-white flex md:mt-4  items-center justify-center  gap-x-2 lg:px-12 lg:py-3 -none text-xs px-6 py-3 sm:text-base uppercase mt-2 rounded text-blue-800 font-semibold text-[18px]">
								Contact Me
								<FaArrowAltCircleDown size={20} />
							</button>
						</a>
					</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
