import React, { useEffect, useRef, useState } from "react";
import profileImage from "./assets/profile.png";

const skills = [
  { name: "Mobile Development", value: 90 },
  { name: "UI/UX Design", value: 85 },
  { name: "Backend Development", value: 80 },
];

const SkillBar = ({ name, value }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
        <span>{name}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className="h-2 bg-blue-600 rounded transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${value}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
};

const AboutMeSection = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 px-8">
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch">
        {/* Left - Profile Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={profileImage}
            alt="Profile"
            className="h-full object-cover w-full rounded-lg"
          />
        </div>

        {/* Right - About Text and Skills */}
        <div className="w-full lg:w-1/2 flex flex-col px-6 mt-6 lg:mt-0">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 mb-6">
            With over 8 years of experience in mobile app development, I
            specialize in creating innovative solutions that bridge the gap
            between user needs and business goals. My expertise spans across the
            entire development lifecycle, from initial concept to deployment.
          </p>

          <div className="space-y-4 mb-6">
            {skills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} value={skill.value} />
            ))}
          </div>

          <button className="bg-gray-900 text-white px-5 py-2 w-40 rounded-lg hover:bg-gray-700 transition">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
