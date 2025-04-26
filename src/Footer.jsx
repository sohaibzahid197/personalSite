import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-8">
      <div className="w-full grid md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
        {/* Column 1 - Brand */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">LetsDev</h4>
          <p className="mb-4">Transforming ideas into exceptional mobile experiences.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white"><FaGithub /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaLinkedin /></a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Newsletter</h4>
          <p className="mb-4">Subscribe to receive updates and news about latest projects.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-blue-600 px-4 text-sm text-white rounded-r hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © 2024 LetsDev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
