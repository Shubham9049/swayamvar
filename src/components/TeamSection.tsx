import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import image1 from "../assets/1 (2).png";
import image2 from "../assets/1.png";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const members: TeamMember[] = [
  {
    name: "Ashley Jen",
    role: "Marketing Manager",
    image: "https://rn53themes.net/themes/matrimo/images/profiles/6.jpg",
  },
  {
    name: "Ashley Jen",
    role: "Marketing Manager",
    image: "https://rn53themes.net/themes/matrimo/images/profiles/7.jpg",
  },
  {
    name: "Emily Arrov",
    role: "Creative Manager",
    image: "https://rn53themes.net/themes/matrimo/images/profiles/8.jpg",
  },
  {
    name: "Julia Sear",
    role: "Client Coordinator",
    image: "https://rn53themes.net/themes/matrimo/images/profiles/9.jpg",
  },
];

const TeamSection: React.FC = () => {
  return (
    <div className="text-[#a67c52] bg-[#fffaf0]">
      <section className="w-5/6 mx-auto py-12 px-4 text-center">
        <h3 className="text-lg sm:text-xl  tracking-widest font-serif uppercase">
          Our Professionals
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[secondary-color] my-2 font-cinzel">
          Meet Our Team
        </h2>
        {/* Decorations */}
        <div className="flex justify-center items-center gap-1 my-4">
          <img
            src={image1}
            alt="decor"
            className="w-24 animate-float"
            style={{ transform: "scaleX(-1)" }}
          />
          <img src={image2} alt="decor" className="w-24 animate-float" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md group transition-all duration-300"
            >
              {/* Background Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />

              {/* Bottom name/role (hidden on hover) */}
              <div className="absolute bottom-0 w-full bg-white p-4 text-center group-hover:opacity-0 transition duration-300">
                <h4 className="font-semibold text-gray-800">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>

              {/* Hover Overlay */}
              {/* Hover Overlay with Animation from Center */}
              <div
                className="absolute inset-0 bg-black/80 flex items-end justify-start p-5 
  opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 
  transition-all duration-500 ease-out origin-center rounded-lg"
              >
                <div className="text-white">
                  <h4 className="font-bold text-lg text-[var(--primary-color)]">
                    {member.name}
                  </h4>
                  <p className="text-sm">{member.role}</p>
                  <div className="flex space-x-4 mt-4">
                    <a
                      href="#"
                      className="text-white hover:text-[var(--primary-color)]"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-[var(--primary-color)]"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-[var(--primary-color)]"
                    >
                      <FaWhatsapp />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-[var(--primary-color)]"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
