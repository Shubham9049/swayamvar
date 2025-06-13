import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

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
      <section className="max-w-7xl mx-auto py-16 px-4 text-center">
        <h3 className="text-lg sm:text-xl  tracking-widest font-serif uppercase">
          Our Professionals
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 my-2 font-cinzel">
          Meet Our Team
        </h2>
        <div className="w-24 h-1 mx-auto bg-green-300 my-4 rounded-full"></div>

        <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4">
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
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end">
                <div className="text-white p-5 text-left">
                  <h4 className="font-bold text-lg text-yellow-300">
                    {member.name}
                  </h4>
                  <p className="text-sm">{member.role}</p>
                  <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-white hover:text-yellow-300">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="text-white hover:text-yellow-300">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-white hover:text-yellow-300">
                      <FaWhatsapp />
                    </a>
                    <a href="#" className="text-white hover:text-yellow-300">
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
