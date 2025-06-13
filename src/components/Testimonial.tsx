import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/1 (2).png";
import image2 from "../assets/1.png";

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    name: "JACK DANIAL",
    location: "New York",
  },
  {
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    name: "JACK DANIAL",
    location: "New York",
  },
  {
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    name: "JACK DANIAL",
    location: "New York",
  },
];

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#fcd9a8] p-2 rounded-full shadow-lg"
      onClick={onClick}
    >
      <ChevronRight className="text-[#4b2e14]" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#fcd9a8] p-2 rounded-full shadow-lg"
      onClick={onClick}
    >
      <ChevronLeft className="text-[#4b2e14]" />
    </button>
  );
}

export default function TestimonialSection() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-[var(--bg-primary-color)] pt-12 pb-44 text-center relative">
      {/* Header */}
      <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-[var(--secondary-color)] mb-4">
        Trust by <span className="text-6xl text-[#4b2e14]">1500+</span> Couples
      </h1>

      {/* Decorations */}
      <div className="flex justify-center items-center gap-1 mt-4">
        <img
          src={image1}
          alt="decor"
          className="w-24 animate-float"
          style={{ transform: "scaleX(-1)" }}
        />
        <img src={image2} alt="decor" className="w-24 animate-float" />
      </div>

      {/* Slider */}
      <div className=" px-4 w-5/6 mx-auto relative">
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-4">
              <div className="flex flex-col items-center pt-8 relative">
                {/* Diamond Image - OUTSIDE the card */}
                <div className="relative w-24 h-24 z-10 -mb-12">
                  <img
                    src={t.image}
                    alt="User"
                    className="w-full h-full object-cover rounded-lg transform rotate-45 border-4 border-white shadow-lg"
                  />
                  {/* Color corners */}
                  <div className="absolute -top-2 -left-2 w-3 h-3 rotate-45 bg-white border-2 border-yellow-400" />
                  <div className="absolute -top-2 -right-2 w-3 h-3 rotate-45 bg-white border-2 border-green-400" />
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 rotate-45 bg-white border-2 border-pink-400" />
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 rotate-45 bg-white border-2 border-blue-400" />
                </div>

                {/* Card */}
                <div className="bg-white border rounded-xl px-6 pt-16 pb-8 shadow-md w-full">
                  <p className="text-[#5c4433] mb-4 text-sm leading-relaxed mt-2">
                    {t.text}
                  </p>
                  <h3 className="text-[#4b2e14] font-bold text-lg">{t.name}</h3>
                  <p className="text-sm text-gray-600">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
