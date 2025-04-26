import React, { useState } from "react";
import {
  FaApple,
  FaAndroid,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

import {
  SiFlutter,
  SiTypescript,
  SiJavascript,
  SiExpo,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiFirebase,
} from "react-icons/si";

const categories = {
  Mobile: [
    { name: "iOS", icon: <FaApple size={80} /> },
    { name: "Android", icon: <FaAndroid size={80} /> },
    {
      name: "React Native",
      icon: <FaReact size={80} className="text-cyan-500" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={80} className="text-blue-800" />,
    },
    { name: "Expo", icon: <SiExpo size={80} /> },
  ],
  FrontEnd: [
    { name: "ReactJS", icon: <FaReact size={80} className="text-cyan-500" /> },
    { name: "Next.js", icon: <SiNextdotjs size={80} /> },
    {
      name: "TypeScript",
      icon: <SiTypescript size={80} className="text-blue-800" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={80} className="text-yellow-800" />,
    },
  ],
  Backend: [
    { name: "NodeJS", icon: <FaNodeJs size={80} className="text-green-500" /> },
    {
      name: "TypeScript",
      icon: <SiTypescript size={80} className="text-blue-800" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={80} className="text-yellow-800" />,
    },
  ],
  Database: [
    { name: "Database", icon: <FaDatabase size={80} /> },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql size={80} className="text-blue-700" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={80} className="text-green-800" />,
    },
    { name: "MySQL", icon: <SiMysql size={80} className="text-blue-500" /> },
    {
      name: "Firebase",
      icon: <SiFirebase size={80} className="text-yellow-500" />,
    },
  ],
};

const Technologies = () => {
  const tabs = Object.keys(categories);
  const [activeTab, setActiveTab] = useState("Mobile");

  return (
    <div className="bg-white px-4 py-12 text-center">
      <h2 className="text-3xl font-bold mb-8">TECHNOLOGIES</h2>

      {/* <div className="border-b border-gray-200 mt-4"> */}
        <nav className="flex justify-center flex-wrap gap-24">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 font-semibold text-black-700 transition-all relative ${
                activeTab === tab
                  ? 'text-black font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-cyan-500'
                  : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      {/* </div> */}

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
        {categories[activeTab].map((tech, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center transition-transform duration-200 hover:scale-110 cursor-pointer group"
          >
            <div className="relative">
              {tech.icon}
              <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {tech.name}
              </span>
            </div>
            <p className="mt-2 text-sm font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
