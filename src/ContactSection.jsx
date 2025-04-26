import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id='contact' className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-2/3 space-y-4">
  <div>
    <label className="block text-sm font-medium mb-1">Name</label>
    <input
      type="text"
      placeholder="Your name"
      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <div>
    <label className="block text-sm font-medium mb-1">Email</label>
    <input
      type="email"
      placeholder="your@email.com"
      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* ✅ New phone number input */}
  <div>
    <label className="block text-sm font-medium mb-1">Phone Number</label>
    <input
      type="tel"
      placeholder="Your phone number"
      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Message</label>
    <textarea
      rows="5"
      placeholder="Your message"
      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></textarea>
  </div>

  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 w-40 rounded-lg transition">
    Send Message
  </button>
</div>


          {/* Contact Info */}
          <div className="w-full md:w-1/3 space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Contact Information</h4>
              <div className="flex items-center text-gray-700 mb-2">
                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center text-gray-700 mb-2">
                <FaEnvelope className="mr-2 text-blue-500" />
                <span>hello@letsdev.com</span>
              </div>
              <div className="flex items-center text-gray-700">
                <FaPhoneAlt className="mr-2 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Follow Me</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-700 hover:text-black">
                  <FaGithub size={20} />
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-400">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-700">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
