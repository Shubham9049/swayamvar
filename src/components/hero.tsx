import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#fff0f5] text-black pt-28">
      <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 text-center flex flex-col items-center space-y-10">
        {/* Central Image with Circular Border */}
        <div className="relative flex justify-center">
          <img
            src="/couple.png"
            alt="Couple"
            className="w-48 sm:w-56 md:w-64 relative z-10"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
            <div className="w-56 h-56 rounded-full border-[10px] border-white absolute"></div>
            <div className="w-56 h-56 rounded-full border-[10px] border-pink-500 rotate-[40deg] absolute"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="space-y-4 z-20 max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-light">Find Your</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Perfect Partner
            <div className="text-xs mt-1 text-gray-500 italic">
              Find a Life Partner
            </div>
          </h1>
          <p className="text-sm sm:text-base">
            JOIN OVER <strong>50,000</strong> DESI SINGLES IN{" "}
            <strong>MATRI MARRY</strong>
          </p>
          <p className="text-sm">
            The most{" "}
            <span className="text-pink-600 font-semibold">Trusted</span>{" "}
            Matchmaking Service
          </p>
          <div>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition text-sm sm:text-base">
              LET’S FIND SOMEONE →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
