import { FaTools, FaLeaf, FaRobot } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { HiOutlineArrowRight } from "react-icons/hi";

import healthImg from "./assets/healthImg.png";
import ecoImg from "./assets/ecoImg.png";
import studyImg from "./assets/studyImg.png";



const projects = [
  {
    title: "HealthTrack Pro",
    description: "A comprehensive health monitoring application",
    image: healthImg,
    icons: [<FaTools key="tools" />, <SiTypescript key="ts" />],
  },
  {
    title: "EcoRoute",
    description: "Sustainable transportation solution",
    image: ecoImg,
    icons: [<FaLeaf key="leaf" />, <FaTools key="tools2" />],
  },
  {
    title: "StudyBuddy",
    description: "AI-powered learning companion",
    image: studyImg,
    icons: [<FaRobot key="robot" />],
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Projects
      </h2>
      <div className="w-full mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            data-aos="fade-up"
            data-aos-delay={`${index * 300}`} // delay increases for each card
            data-aos-duration="800"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex items-center gap-3 text-gray-500 text-lg mb-4">
                {project.icons.map((icon) => icon)}
              </div>
              <a
                href="#"
                className="text-blue-600 hover:underline inline-flex items-center font-medium"
              >
                View Case Study <HiOutlineArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
