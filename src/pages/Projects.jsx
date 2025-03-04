import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import ProjectsList from "../../constant/ProjectsList";
import { useState } from "react";

function Projects() {

	const [selectedCategory, setSelectedCategory] = useState("web");
	console.log(selectedCategory);
	const [imageIndexes, setImageIndexes] = useState(
		ProjectsList.reduce((acc, project, index) => {
			acc[index] = 0; // Initialize each project with first image
			return acc;
		}, {})
	);
	// Function to handle next image for a specific project
	const nextImage = (projectIndex, imageArrayLength) => {
		setImageIndexes((prevIndexes) => ({
			...prevIndexes,
			[projectIndex]: (prevIndexes[projectIndex] + 1) % imageArrayLength, // Loop to first image
		}));
	};

	// Function to handle previous image for a specific project
	const prevImage = (projectIndex, imageArrayLength) => {
		setImageIndexes((prevIndexes) => ({
			...prevIndexes,
			[projectIndex]:
				prevIndexes[projectIndex] === 0
					? imageArrayLength - 1
					: prevIndexes[projectIndex] - 1,
		}));
	};

	// Filter projects based on selected category
	const filteredProjects = ProjectsList.filter(
		(project) => project.category === selectedCategory
	);
	return (
		<>

			<div className="mt-20 w-full h-full lg:p-2  ">

				<div className="w-full flex items-center justify-center flex-col ">
					<p className=" text-2xl lg:text-4xl  uppercase font-semibold">
						Projects
					</p>
					<div className="border-2 w-12 mt-2 border-purple-500"></div>
				</div>
				<div className="w-full lg:w-[75%] mx-auto  h-full lg:p-6 lg:p-1  mt-5">
					<div className="w-full  h-12 flex items-center">
						<form action="" className="lg:ml-2 ml-2 mb-4">
							<select
								onChange={(e) => setSelectedCategory(e.target.value)}
								value={selectedCategory} // Set default category in UI
								className="h-10 px-2 text-xs lg:text-base rounded uppercase text-gray-800 border border-purple-500 font-semibold"
							>
								<option value="web">Web Development</option>
								<option value="mobile">Mobile Development</option>
							</select>
						</form>
					</div>
					{/* =================================== */}
					{filteredProjects.map((project, index) => (

						<div key={index} className="w-full  lg:h-[400px] h-auto mt-8 lg:flex-row flex-col flex bg-gray-200 lg:p-1 p-3">
							<div className=" w-full lg:w-1/2 h-full  flex flex-col gap-y-4">
								<div className="w-full lg:h-4/5 h-[210px] sm:h-[350px] ">


									<img
										src={project.image[imageIndexes[index]]}

										alt={project.image[imageIndexes[index]]}
										className="bg-cover bg-center w-full h-full"
									/>

								</div>
								<div className="w-full h-1/5  flex items-center justify-end lg:justify-center  gap-x-4 ">
									<div onClick={() => prevImage(index, project.image.length)} className="bg-gray-200 cursor-pointer border border-purple-500 rounded p-1">
										<IoIosArrowBack className="text-xl lg:text-2xl " />
									</div>
									<div onClick={() => nextImage(index, project.image.length)} className="bg-gray-200 border border-purple-500  cursor-pointer rounded p-1">
										<IoIosArrowForward className="text-xl lg:text-2xl " />
									</div>
								</div>
							</div>
							<div className="lg:w-1/2 w-full h-full ">
								<div className="lg:w-[80%] h-[90%] w-[100%] mt-2 mx-auto ">
									<h1 className="lg:text-2xl uppercase font-medium text-lg">
										{project.title}
									</h1>
									<p className="text-sm lg:text-base mt-4 text-justify">
										{project.description}
									</p>
									<div className="mt-4 flex w-full flex-wrap ">
										<p>website link - </p>
										<a
											className="text-purple-700 text-sm lg:text-base"
											href={project.projects_link}>
											{project.projects_link}
										</a>
										<p>GitHub Repo - </p>
										<a
											className="text-purple-700 text-sm lg:text-base"
											href={project.github_link}>
											{project.github_link}
										</a>
									</div>
								</div>
							</div>
						</div>
					))}

				</div>

				<div className="mb-24"></div>

			</div>
		</>
	);
}

export default Projects;
