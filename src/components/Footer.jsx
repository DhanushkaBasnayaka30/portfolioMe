import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

function Footer() {
	return (
		<>
			<div className="w-full h-[310px] bg-black">
				<div className="w-[90%] lg:w-[70%] mx-auto  h-full ">
					<div className="w-full h-4/5  flex text-white  lg:flex-row flex-col">
						<div className="flex lg:w-1/2 items-start flex-col justify-center gap-y-4 mt-4">
							<p className="uppercase lg:text-xl text-lg  font-semibold">
								Dhanushka Basnayaka
							</p>
							<p className="lg:text-base text-xs">
								A Full-Stack Web Developer specializing in building both the
								Frontend and Backend of Websites and Web Applications,
								contributing to the success and functionality of the overall
								product
							</p>
						</div>
						<div className="lg:w-1/2 flex flex-col gap-y-4 justify-center items-end">
							<div className="w-full flex justify-start  lg:justify-end mt-4 lg:mt-4">
								<p className="text-lg lg:w-[200px]  lg:justify-end text-center font-semibold uppercase">
									social
								</p>
							</div>
							<div className="flex w-full lg:justify-end  gap-x-2  justify-start">
								<FaFacebookF className="w-10 h-10 hover:text-purple-500 p-2 rounded-md cursor-pointer " />
								<AiFillInstagram className="w-10 h-10  hover:text-purple-500 p-2 rounded-md cursor-pointer" />
								<FaLinkedin className="w-10 h-10 hover:text-purple-500 p-2 rounded-md cursor-pointer" />
								<IoLogoGithub className="w-10 h-10 hover:text-purple-500 p-2 rounded-md cursor-pointer" />
							</div>
						</div>
					</div>
					<div className="w-full h-[1px] bg-gray-200 "></div>
					<div className="w-full h-1/5 items-center justify-center  flex">
					<p className="text-white text-xs text-center ">© Copyright 2025 . Made by Dhanushka Basnayaka</p></div>
				</div>
			</div>
		</>
	);
}

export default Footer;
