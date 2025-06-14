import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#e9eff3] text-gray-800 pt-24 pb-10">
      {/* Top pink bar */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ff0066] text-white px-6 py-3 rounded-md shadow-md text-sm md:text-base z-10 text-center w-[90%] md:w-auto">
        Free support: +92 (8800) 68 - 8960 &nbsp; | &nbsp; Email:
        INFO@EXAMPLE.COM
      </div>

      <div className="w-5/6 mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-3 mt-8 text-center md:text-left">
          {/* Column 1 */}
          <div className="space-y-3 text-sm px-2 md:px-4 md:border-r border-gray-400">
            <h3 className="font-semibold text-md uppercase mb-4">
              Get in Touch
            </h3>
            <p>Address: 3812 Lena Lane City Jackson Mississippi</p>
            <p>Phone: +92 (8800) 68 - 8960</p>
            <p>Email: info@example.com</p>
          </div>

          {/* Column 2 */}
          <div className="text-sm px-2 md:px-4 md:border-r border-gray-400">
            <h3 className="font-semibold text-md uppercase mb-4">
              Help & Support
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start">
              <div className="w-1/2 space-y-3">
                <p>About Company</p>
                <p>Testimonials</p>
                <p>FAQs</p>
              </div>
              <div className="w-1/2 space-y-3">
                <p>Feedback</p>
                <p>Contact Us</p>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-4 px-2 md:px-4">
            <h3 className="font-semibold text-md uppercase mb-4">
              Social Media
            </h3>
            <div className="flex justify-center md:justify-start space-x-4 text-md">
              <a
                href="#"
                className="text-[#0077b5] border border-gray-700 p-2 rounded-full 
               transition-transform duration-700 transform 
               hover:bg-[#0077b5] hover:text-white hover:rotate-[360deg]"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-[#1DA1F2] border border-gray-700 p-2 rounded-full 
               transition-transform duration-700 transform 
               hover:bg-[#1DA1F2] hover:text-white hover:rotate-[360deg]"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-[#1877F2] border border-gray-700 p-2 rounded-full 
               transition-transform duration-700 transform 
               hover:bg-[#1877F2] hover:text-white hover:rotate-[360deg]"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-[#FF0000] border border-gray-700 p-2 rounded-full 
               transition-transform duration-700 transform 
               hover:bg-[#FF0000] hover:text-white hover:rotate-[360deg]"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-t border-gray-300" />

        {/* Bottom CTA */}
        <div className="text-center md:flex md:justify-between md:items-center space-y-4 md:space-y-0 text-sm">
          <p>
            Company name Site - Trusted by over thousands of Boys & Girls for
            successful marriage.
          </p>
          <button className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded shadow transition">
            Join Us Today!
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs text-gray-600">
          © 2025{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Company.com
          </a>{" "}
          | All rights reserved.
        </div>
      </div>

      {/* Bottom Decoration */}
      <div
        className="absolute bottom-0 left-0 w-24 h-24 bg-no-repeat bg-contain"
        style={{ backgroundImage: "url(/leaf-left.png)" }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-24 h-24 bg-no-repeat bg-contain"
        style={{ backgroundImage: "url(/leaf-right.png)" }}
      ></div>
    </footer>
  );
};

export default Footer;
