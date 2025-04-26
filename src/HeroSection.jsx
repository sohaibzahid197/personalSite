import React from 'react';
import phoneImage from './assets/phone.png'; 

const HeroSection = () => {
  return (
    <section className="w-full bg-white py-14" data-aos="fade-up">
      <div id="home" className="w-full pl-8 flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            From Idea to <br /> Complete App
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Transforming your vision into powerful mobile applications with <br />
            cutting-edge technology and exceptional user experience.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={phoneImage}
            alt="Mobile App"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
