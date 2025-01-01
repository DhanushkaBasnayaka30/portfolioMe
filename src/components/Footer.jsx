import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

function Footer() {
	return (
		<>
			<div className="w-full h-[300px] bg-black">
				<div className="w-[70%] mx-auto  h-full">
					<div className="w-full h-4/5  flex text-white">
						<div className="flex w-1/2 items-start flex-col justify-center gap-y-4">
							<p className="uppercase text-xl font-semibold">
								Dhanushka Basnayaka
							</p>
							<p>
								A Full-Stack Web Developer specializing in building both the
								Frontend and Backend of Websites and Web Applications,
								contributing to the success and functionality of the overall
								product
							</p>
						</div>
						<div className="w-1/2 flex flex-col gap-y-4 justify-center items-end">
							<div className="w-full flex justify-end">
								<p className="text-lg w-[200px]  justify-end text-center font-semibold uppercase">
									social
								</p>
							</div>
							<div className="flex w-full justify-end  gap-x-2">
								<FaFacebookF className="w-10 h-10 hover:text-purple-500 p-2 rounded-md cursor-pointer " />
								<AiFillInstagram className="w-10 h-10  hover:text-purple-500 p-2 rounded-md cursor-pointer" />
								<FaLinkedin className="w-10 h-10 hover:text-purple-500 p-2 rounded-md cursor-pointer" />
								<IoLogoGithub className="w-10 h-10 hover:text-purple-500 p-2 rounded-md cursor-pointer" />
							</div>
						</div>
					</div>
					<div className="w-full h-[1px] bg-gray-200 "></div>
					<div className="w-full h-1/5 "></div>
				</div>
			</div>
		</>
	);
}

export default Footer;
