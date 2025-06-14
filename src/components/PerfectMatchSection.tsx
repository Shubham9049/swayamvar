import React from "react";
import bannerBottom from "../assets/Capture (1).png"; // Replace with your actual image path

const PerfectMatchSection: React.FC = () => {
  return (
    <div className="bg-[var(--bg-primary-color)] py-12">
      <section className="bg-[#fef0c4] w-5/6 mx-auto text-center rounded-xl pt-12 relative overflow-hidden">
        <div className=" mx-auto px-4 py-4">
          <h2 className="text-4xl sm:text-5xl  font-bold text-[var(--secondary-color)] font-cinzel mb-4">
            Find your perfect Match now
          </h2>
          <p className="text-[var(--secondary-color)] max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
            fringilla. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>

          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <button className="bg-black text-white px-6 py-2 text-sm font-semibold uppercase tracking-wide hover:bg-gray-800 transition">
              Register Now
            </button>
            <button className="border border-black text-black px-6 py-2 text-sm font-semibold uppercase tracking-wide hover:bg-black hover:text-white transition">
              Help & Support
            </button>
          </div>
        </div>

        {/* Bottom Decorative Image */}
        <img src={bannerBottom} alt="Bottom Decoration" className="w-full" />
      </section>
    </div>
  );
};

export default PerfectMatchSection;
