import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#e9eff3] text-gray-800 pt-20 pb-8">
      {/* Top pink bar */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ff0066] text-white px-6 py-3 rounded-md shadow-md text-sm md:text-base z-10 text-center w-[90%] md:w-auto">
        Free support: +92 (8800) 68 - 8960 &nbsp; | &nbsp; Email:
        INFO@EXAMPLE.COM
      </div>

      {/* Top Grass Design */}
      <div
        className="absolute top-0 left-0 w-full h-8 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url(/grass-top.png)" }}
      ></div>

      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 text-center md:text-left mt-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold mb-2 uppercase text-sm">
              Get in Touch
            </h3>
            <p>Address: 3812 Lena Lane City Jackson Mississippi</p>
            <p>Phone: +92 (8800) 68 - 8960</p>
            <p>Email: info@example.com</p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-2 uppercase text-sm">
              Help & Support
            </h3>
            <p>About company</p>
            <p>Feedback</p>
            <p>Testimonials</p>
            <p>Contact us</p>
            <p>FAQs</p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-2 uppercase text-sm">
              Social Media
            </h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-2 text-xl">
              <a href="#" className="text-[#0077b5]">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-[#1DA1F2]">
                <FaTwitter />
              </a>
              <a href="#" className="text-[#1877F2]">
                <FaFacebookF />
              </a>
              <a href="#" className="text-[#FF0000]">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-t border-gray-300" />

        {/* Bottom Note */}
        <div className="text-center text-sm md:flex md:justify-between md:items-center space-y-4 md:space-y-0">
          <p>
            Company name Site - Trusted by over thousands of Boys & Girls for
            successful marriage.
          </p>
          <button className="bg-gray-600 text-white px-4 py-2 rounded shadow">
            Join us today !
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs text-gray-600">
          Copyright © 2023{" "}
          <a href="#" className="text-blue-500">
            Company.com
          </a>
          . All rights reserved.
        </div>
      </div>

      {/* Bottom Leaf Decoration (optional if you want exact design) */}
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
