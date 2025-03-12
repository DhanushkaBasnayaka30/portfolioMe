import { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProjectsList from "../../constant/ProjectsList";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [itemsPerPage, setItemsPerPage] = useState(2); // Default for large screens

  // Update itemsPerPage based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize(); // Set on load
    window.addEventListener("resize", handleResize); // Listen for changes

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle Next Slide
  const nextSlide = () => {
    if (currentIndex + itemsPerPage < ProjectsList.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Handle Previous Slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-12">
      <p className="text-2xl lg:text-4xl uppercase font-semibold text-blue-800">
        Projects
      </p>
      <div className="border-2 w-12 mt-2 border-[#1a0505]"></div>

      <div className="relative w-[94%] bg-gray-200 mx-auto mt-12 p-6 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 text-blue-800 ${
            currentIndex === 0 ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
          disabled={currentIndex === 0}
        >
          <FaArrowAltCircleLeft size={40} />
        </button>

        {/* Slider Container */}
        <div className="w-full overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {ProjectsList.map((project, index) => (
              <div
                key={index}
                className="w-full sm:w-[320px] md:w-[450px] lg:w-[600px] h-[500px] bg-white border-2 border-blue-800 rounded-lg p-4 flex-shrink-0"
              >
                <div className="w-full h-[320px]">
                  <img
                    src={project.font_image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <p className="text-lg text-blue-800 uppercase font-bold mt-2">
                  {project.title}
                </p>
                <div className="flex gap-x-2 mt-1">
                  <span className="text-lg font-bold">Tech Stack:</span>
                  <span className="text-lg">{project.stack}</span>
                </div>
                <div
                  className="flex items-center cursor-pointer mt-2 gap-x-2"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  <p className="text-blue-800 text-xl">More</p>
                  <FaArrowAltCircleRight size={20} className="text-blue-800" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className={`absolute right-0 top-1/2 -translate-y-1/2 text-blue-800 ${
            currentIndex >= ProjectsList.length - itemsPerPage
              ? "opacity-0"
              : "opacity-100"
          } transition-opacity duration-300`}
          disabled={currentIndex >= ProjectsList.length - itemsPerPage}
        >
          <FaArrowAltCircleRight size={40} />
        </button>
      </div>

      <div className="mb-24"></div>
    </div>
  );
}

export default Projects;
