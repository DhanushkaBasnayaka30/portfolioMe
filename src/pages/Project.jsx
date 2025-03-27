import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import ProjectsList from "../../constant/ProjectsList";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa";



export default function Project() {
  const navigate = useNavigate();
  const { id } = useParams();
  const projectId = parseInt(id, 10);

  // Filter projects
  const filteredProjects = ProjectsList.filter((project) => project.id === projectId);
  const selectedProject = filteredProjects.length > 0 ? filteredProjects[0] : null;

  // Initialize state for image indexes
  const [imageIndexes, setImageIndexes] = useState(
    ProjectsList.reduce((acc, project) => {
      acc[project.id] = 0;
      return acc;
    }, {})
  );

  const nextImage = (projectId, imageArrayLength) => {
    console.log("next-->", projectId, imageArrayLength);
    setImageIndexes((prevIndexes) => ({
      ...prevIndexes,
      [projectId]: (prevIndexes[projectId] + 1) % imageArrayLength,
    }));
  };

  const prevImage = (projectId, imageArrayLength) => {
    console.log("prev-->", projectId, imageArrayLength);
    setImageIndexes((prevIndexes) => ({
      ...prevIndexes,
      [projectId]: prevIndexes[projectId] === 0
        ? imageArrayLength - 1
        : prevIndexes[projectId] - 1,
    }));
  };

  if (!selectedProject) {
    return <div>No item found</div>;
  }

  return (
    <div className=" h-screen w-full  ">
      <div className="w-[100%] h-[99%] bg-white mx-auto rounded-md  sm:overflow-y-scroll relative ">
        <div className=" mx-auto  h-24   flex items-center justify-start border ">

          <FaHome 
            onClick={() => navigate("/#projects")}
            className="cursor-pointer  border-black  ml-4"
            size={40}
            color="#3146ab"
          />

        </div>

        <div className="w-[90%]  h-auto  absolute top-24 left-[5%] ">
          <div className="w-full lg:h-[700px] h-auto  mt-4 lg:flex-col flex-col flex bg-gray-1w00 lg:p-4 p-1">
            <div className="w-full lg:w-[90%] mx-auto h-full flex flex-col gap-y-4">

              <div className="w-full lg:h-4/5 h-[210px] sm:h-[350px] flex border border-black rounded">
                {/* Image Carousel */}
                <img
                  src={selectedProject["image"][imageIndexes[selectedProject.id]]}
                  alt={`${selectedProject["image"][imageIndexes[selectedProject.id]]}`}
                  className="w-full h-full object-contain  bg-center rounded-md"
                />
              </div>
              <div className="w-full h-1/5 flex items-center justify-end lg:justify-center gap-x-4">
                <div
                  onClick={() => prevImage(selectedProject["id"], selectedProject["image"].length)}
                  className="bg-gray-200 cursor-pointer border border-purple-500 rounded p-1"
                >
                  <IoIosArrowBack className="text-xl lg:text-2xl" />
                </div>
                <div
                  onClick={() => nextImage(selectedProject["id"], selectedProject["image"].length)}
                  className="bg-gray-200 border border-purple-500  cursor-pointer rounded p-1"
                >
                  <IoIosArrowForward className="text-xl lg:text-2xl" />
                </div>
              </div>
            </div>
            <div className="lg:w-[80%] mx-auto  w-full h-full pb-12">
              <div className="lg:w-[80%] h-[90%] w-[100%] mt-2 mx-auto">
                <h1 className="lg:text-2xl uppercase font-medium text-lg text-blue-800  md:text-center">
                  {selectedProject.title}
                </h1>
                <p className="text-sm lg:text-base mt-4 text-justify">
                  {selectedProject.description}
                </p>
                <div className=" flex gap-x-2 mt-4">
                  <p className="font-semibold">Teck stack:</p>
                  {selectedProject.stack.map((item, index) => (
                    <p className="text-blue-800 flex" key={index}>{item}, </p>
                  ))}
                </div>
                <div className="mt-4 flex w-full   flex-row gap-x-2">
                  <div className=" w-1/2">
                    <p>Website Link - </p>
                    <a className="text-purple-700 text-sm lg:text-base" href={selectedProject.projects_link}>
                      {selectedProject.projects_link}
                    </a>
                  </div>
                  <div className=" w-1/2">
                    <p>GitHub Repo - </p>
                    <a className="text-purple-700 text-sm lg:text-base" href={selectedProject.github_link}>
                      {selectedProject.github_link}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
