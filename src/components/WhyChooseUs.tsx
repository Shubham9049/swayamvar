import image from "../assets/whychooseus.png";

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
      <div className="text-center max-w-4xl mx-auto px-4">
        <h3 className="text-yellow-400 text-xl font-semibold mb-2">
          #1 <span className="text-orange-400">WEDDING WEBSITE</span>
        </h3>
        <h2 className="text-4xl sm:text-5xl font-bold text-[var(--primary-color)] mb-4">
          Why choose us
        </h2>
        <p className="text-gray-200 mb-10">
          Most Trusted and premium Matrimony Service in the World.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 justify-center px-4 max-w-6xl mx-auto">
        {[
          {
            icon: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
            title: "Genuine profiles",
            desc: "Contact genuine profiles with 100% verified mobile",
          },
          {
            icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
            title: "Most trusted",
            desc: "The most trusted wedding matrimony brand lorem",
          },
          {
            icon: "https://cdn-icons-png.flaticon.com/512/1828/1828970.png",
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
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
