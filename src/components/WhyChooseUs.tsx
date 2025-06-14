import image from "../assets/whychooseus.png";
import prize from "../assets/prize.png";
import trust from "../assets/trust.png";
import rings from "../assets/rings.png";
import image1 from "../assets/1 (2).png";
import image2 from "../assets/1.png";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[var(--bg-secondary-color)] text-white py-20 border">
      {/* Image on top center */}
      <div className="w-5/6 mx-auto absolute -top-32 md:-top-40 left-1/2 transform -translate-x-1/2 z-10">
        <img
          src={image}
          alt="Happy man"
          className="w-[300px] md:w-[400px] mx-auto object-contain "
        />
      </div>

      {/* Text Content */}
      <div className="text-center w-5/6 mt-10 mx-auto px-4">
        <h3 className="text-yellow-400 text-xl font-semibold mb-2">
          #1{" "}
          <span className="text-orange-400 text-lg sm:text-xl  tracking-widest font-serif uppercase">
            WEDDING WEBSITE
          </span>
        </h3>
        <h2 className=" text-4xl sm:text-5xl font-bold text-[var(--primary-color)] mb-4 uppercase font-cinzel">
          Why choose us
        </h2>
      </div>

      {/* Decorations */}
      <div className="flex justify-center items-center gap-1 my-4 ">
        <img
          src={image1}
          alt="decor"
          className="w-24 animate-float"
          style={{ transform: "scaleX(-1)" }}
        />
        <img src={image2} alt="decor" className="w-24 animate-float" />
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 justify-center px-4 max-w-6xl mx-auto">
        {[
          {
            icon: prize,
            title: "Genuine profiles",
            desc: "Contact genuine profiles with 100% verified mobile",
          },
          {
            icon: trust,
            title: "Most trusted",
            desc: "The most trusted wedding matrimony brand lorem",
          },
          {
            icon: rings,
            title: "2000+ weddings",
            desc: "Lakhs of peoples have found their life partner",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 rounded-lg p-6 shadow-md text-center w-full sm:w-80"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-12 h-12 mx-auto mb-4"
            />
            <h4 className="font-cinzel text-xl text-[var(--secondary-color)] font-semibold mb-2">
              {item.title}
            </h4>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
