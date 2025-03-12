import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import ProjectsList from "../../constant/ProjectsList";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";




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
    <div className="bg-black h-screen w-full  p-3 overflow-hidden ">
      <div className="w-[99%] h-[99%] bg-white mx-auto rounded-md lg:overflow-hidden overflow-y-scroll relative ">
        <div className="w-full h-24 fixed z-50 bg-blue-800 flex items-center justify-start pl-2">

          <IoArrowBackCircleOutline
            onClick={() => navigate("/#projects")}
            className="cursor-pointer"
            size={60}
            color="#c9f07b"
          />

        </div>

        <div className="w-[90%]  h-auto  absolute top-24 left-[5%] ">
          <div className="w-full lg:h-[700px] h-auto  mt-4 lg:flex-row flex-col flex bg-gray-200 lg:p-4 p-1">
            <div className="w-full lg:w-1/2 h-full flex flex-col gap-y-4">

              <div className="w-full lg:h-4/5 h-[210px] sm:h-[350px]">
              
                {/* Image Carousel */}

                <img
                  src={selectedProject["image"][imageIndexes[selectedProject.id]]}
                  alt={`${selectedProject["image"][imageIndexes[selectedProject.id]]}`}
                  className="w-full h-full object-cover rounded-md"
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
                  className="bg-gray-200 border border-purple-500 cursor-pointer rounded p-1"
                >
                  <IoIosArrowForward className="text-xl lg:text-2xl" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full h-full">
              <div className="lg:w-[80%] h-[90%] w-[100%] mt-2 mx-auto">
                <h1 className="lg:text-2xl uppercase font-medium text-lg">
                  {selectedProject.title}
                </h1>
                <p className="text-sm lg:text-base mt-4 text-justify">
                  {selectedProject.description}
                </p>
                <div className="mt-4 flex w-full flex-wrap">
                  <p>Website Link - </p>
                  <a className="text-purple-700 text-sm lg:text-base" href={selectedProject.projects_link}>
                    {selectedProject.projects_link}
                  </a>
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
  );
}
