import { useState } from "react";
import about from "../assets/about.jpg";
import about1 from "../assets/about2.png";
function About() {
	const [state, setState] = useState("skill");
	return (
		<div className="w-full h-full  flex flex-col">
			<div className="text-center items-center justify-center flex flex-col ">
				<h1 className="text-2xl lg:text-4xl uppercase font-semibold">about me</h1>
				<div className="border-2 w-12 mt-2 border-purple-500"></div>
			</div>
			<div className=" w-[90%] mx-auto h-full flex-col lg:flex-row flex lg:p-6 mt-8">
				<div className="lg:w-1/2 w-full  h-full  lg:p-2 ">
					<div className="w-full lg:flex-row flex-col flex lg:h-[400px] ">
						<div className="lg:w-[300px] w- p-2 h-[480px] lg:h-[400px] flex items-center justify-center rounded lg:px-2 ">
							<img
								className="w-full h-full bg-cover overflow-hidden rounded"
								src={about}
								alt="about image"
							/>
						</div>

						<div className="lg:w-[540px] w-full py-2 lg:px-4 flex flex-col ">
							<div className="w-full h-full lg:text-base text-sm p-1 gap-y-3 flex flex-col ">
								<div className="flex gap-x-3 ">
									<p>Name :</p>
									<p>Dhanushka Basnayaka</p>
								</div>
								<div className="flex gap-x-3 text-wrap  flex-wrap">
									<p>Email :</p>
									<p>dhanushkabasnayaka99@gmail.com</p>
								</div>
								<div className="flex gap-x-3">
									<p>Mobile :</p>
									<p>0773189716</p>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full lg:h-[360px] text-gray-600 text-justify p-4 mt-4 ">
						<h1 className="text-xl lg:text-2xl font-semibold ">Get to know me!</h1>
						<p className="mt-6  text-sm lg:text-base text-justify">
							Hi, I’m Dhanushka Basnayaka, a passionate and dedicated Full-Stack
							Developer currently pursuing my degree in Computer Science at the
							University of Jaffna. I specialize in building dynamic and
							user-friendly web applications that focus on delivering seamless
							experiences for both users and clients.
						</p>

						<p className="text-sm lg:text-base">
							I’m also an avid learner who enjoys sharing insights and
							experiences from my web development journey. Through platforms
							like LinkedIn and Instagram, I regularly post content that
							inspires and educates others in the developer community. I’m
							always open to job opportunities that allow me to contribute,
							grow, and hone my skills further. If you’re looking for someone
							who is passionate, skilled, and eager to make an impact, don’t
							hesitate to get in touch.
						</p>
						<button className="bg-purple-500 lg:px-12 lg:py-3 text-xs px-6 py-2 uppercase mt-4 rounded text-white font-semibold text-[16px]">
							ContactME
						</button>
					</div>
				</div>
				<div className="lg:w-1/2 w-full h-full p-2 ">
					<div className=" w-full flex gap-x-2  items-center justify-start p-1">
						<button
							className={`${
								state === "skill"
									? " border border-black text-gray-800 uppercase text-xs px-4 py-1 lg:text-base lg:px-12 lg:py-1  "
									: " border-gray-500 text-gray-500 uppercase  border opacity-65 text-xs px-4 py-1 lg:text-base lg:px-12 lg:py-1  "
							}`}
							onClick={() => {
								setState("skill");
							}}>
							skill
						</button>
						<button
							className={`${
								state === "exp"
									? " border border-black text-gray-800 uppercase text-xs px-4 py-1 lg:text-base lg:px-12 lg:py-1   "
									: " border-gray-500 border  uppercase text-gray-500 opacity-65 text-xs px-4 py-1 lg:text-base lg:px-12 lg:py-1  "
							}`}
							onClick={() => {
								setState("exp");
							}}>
							experience
						</button>
					</div>
					{state === "skill" ? (
						<div className="w-full h-full  p-2">
							<p className="capitalize text-xl lg:text-2xl mt-8 text-gray-700 font-semibold">my skill</p>

							<div className="w-full h-full flex mt-12  gap-4 flex-wrap text-sm lg:text-base">
								<div>
									<p className="text-gray-800 w-auto h-auto  rounded-sm px-5 py-1 bg-gray-300">
										HTML
									</p>
								</div>
								<div>
									<p className="text-gray-800 w-auto h-auto  rounded-sm px-5 py-1 bg-gray-300">
										CSS
									</p>
								</div>
								<div>
									<p className="text-gray-800 w-auto h-auto  rounded-sm px-5 py-1 bg-gray-300">
										Taiwind
									</p>
								</div>
								<div>
									<p className="text-gray-800 w-auto h-auto  rounded-sm px-5 py-1 bg-gray-300">
										REACT
									</p>
								</div>
								<div>
									<p className="text-gray-800 w-auto h-auto  rounded-sm px-5 py-1 bg-gray-300">
										Node js
									</p>
								</div>
								<div>
									<p className="text-gray-800 w-auto h-auto  rounded-sm px-5 py-1 bg-gray-300">
										My Sql
									</p>
								</div>
							</div>
						</div>
					) : (
						<div className="w-full h-[300px] bg-gray-200 flex items-center justify-center">
							<p>comming soon</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default About;
