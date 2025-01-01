import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import image from "../assets/image.png";
function Projects() {
	return (
		<div className="mt-20 w-full h-full p-2 ">
			<div className="w-full flex items-center justify-center flex-col">
				<p className="text-4xl  uppercase font-semibold">Projects</p>
				<div className="border-2 w-12 mt-2 border-purple-500"></div>
			</div>
			<div className="w-[75%] mx-auto  h-full p-6">
				<div className="w-full  h-12 flex items-center">
					<form action="" className="ml-2">
						<select
							name=""
							id=""
							className="h-10 px-2 rounded-md uppercase text-gray-800 border border-purple-500 font-semibold">
							<option value="">web development</option>
							<option value="">Mobile development</option>
						</select>
					</form>
				</div>
        {/* =================================== */}
				<div className="w-full h-[400px]  mt-8 flex bg-gray-200 p-1">
					<div className="w-1/2 h-full  flex flex-col gap-y-4">
						<div className="w-full h-4/5 ">
							<img src={image} alt="" className="bg-cover bg-center" />
						</div>
						<div className="w-full h-1/5  flex items-center justify-center gap-x-4">
							<div className="bg-gray-200 cursor-pointer border border-purple-500 rounded p-1">
								<IoIosArrowBack className="text-4xl " />
							</div>
							<div className="bg-gray-200 border border-purple-500  cursor-pointer rounded p-1">
								<IoIosArrowForward className="text-4xl " />
							</div>
						</div>
					</div>
					<div className="w-1/2 h-full ">
						<div className="w-[80%] h-[90%]  mt-2 mx-auto">
							<h1 className="text-2xl uppercase font-medium">portfolio website</h1>
							<p className="text-base mt-4 text-justify">
								A personal portfolio to showcase my skills, projects, and
								achievements. Features include responsive design, an interactive
								project gallery, and smooth animations. Built using vite.js and
								Tailwind CSS.
							</p>
							<div className="mt-4 flex w-full flex-wrap ">
								<p>website link   - </p>
								<a
									className="text-purple-700"
									href="https://github.com/DhanushkaBasnayaka30/portfolioMe">
									https://github.com/DhanushkaBasnayaka30/portfolioMe
								</a>
							</div>
						</div>
					</div>
				</div>
        <div className="w-full h-[400px]  mt-8 flex bg-gray-200 p-1">
					<div className="w-1/2 h-full  flex flex-col gap-y-4">
						<div className="w-full h-4/5 ">
							<img src={image} alt="" className="bg-cover bg-center" />
						</div>
						<div className="w-full h-1/5  flex items-center justify-center gap-x-4">
							<div className="bg-gray-200 cursor-pointer border border-purple-500 rounded p-1">
								<IoIosArrowBack className="text-4xl " />
							</div>
							<div className="bg-gray-200 border border-purple-500  cursor-pointer rounded p-1">
								<IoIosArrowForward className="text-4xl " />
							</div>
						</div>
					</div>
					<div className="w-1/2 h-full ">
						<div className="w-[80%] h-[90%]  mt-2 mx-auto">
							<h1 className="text-2xl uppercase font-medium">portfolio website</h1>
							<p className="text-base mt-4 text-justify">
								A personal portfolio to showcase my skills, projects, and
								achievements. Features include responsive design, an interactive
								project gallery, and smooth animations. Built using vite.js and
								Tailwind CSS.
							</p>
							<div className="mt-4 flex w-full flex-wrap ">
								<p>website link   - </p>
								<a
									className="text-purple-700"
									href="https://github.com/DhanushkaBasnayaka30/portfolioMe">
									https://github.com/DhanushkaBasnayaka30/portfolioMe
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
