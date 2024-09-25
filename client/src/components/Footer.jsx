import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1E2A5E] text-white py-10 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-700 pb-8">
          {/* Logo or Brand */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white">CarWorld</h2>
          </div>

          {/* Links */}
          <div className="flex space-x-8 text-lg">
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              About Us
            </a>
            <a href="#" className="hover:text-gray-400">
              Services
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>

          {/* Copyright Text */}
          <div className="text-sm text-gray-500">
            <p>&copy; 2024 CarWorld. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
