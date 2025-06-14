import TimelineItem from "./TimelineItem";
import { useEffect, useRef, useState } from "react";
import register from "../assets/rings.png";
import match from "../assets/wedding-2.png";
import interest from "../assets/love-birds.png";
import profile from "../assets/network.png";
import meetup from "../assets/chat.png";
import marriage from "../assets/wedding-couple.png";
import image1 from "../assets/1 (2).png";
import image2 from "../assets/1.png";

const timelineData = [
  { title: "Register", timing: "7:00 PM", image: register },
  { title: "Find your Match", timing: "7:00 PM", image: match },
  { title: "Send Interest", timing: "7:00 PM", image: interest },
  { title: "Get Profile Information", timing: "7:00 PM", image: profile },
  { title: "Start Meetups", timing: "7:00 PM", image: meetup },
  { title: "Getting Marriage", timing: "7:00 PM", image: marriage },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fillHeight, setFillHeight] = useState(0); // visible pink line height in %

  const handleScroll = () => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // If not visible, don't fill
    if (rect.bottom < 0 || rect.top > windowHeight) {
      setFillHeight(0);
      return;
    }

    const totalHeight = rect.height;
    const visibleBottom = Math.min(windowHeight, rect.bottom);

    const scrollProgress = (visibleBottom - rect.top) / totalHeight;

    setFillHeight(Math.min(1, scrollProgress) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#fffaf0] py-20 px-4 md:px-20 overflow-hidden"
    >
      <div className="text-center">
        <h3 className="text-sm uppercase tracking-widest text-[#a67c52] font-serif">
          Moments
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold text-[#3d2b1f] font-cinzel">
          How it works
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

      {/* Center Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-black z-0">
        <div
          className="absolute top-0 left-0 w-full bg-pink-500 transition-all duration-300"
          style={{ height: `calc(${fillHeight}% - 300px)` }}
        />
      </div>

      {/* Dot points */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-4">
        {timelineData.map((_, index) => (
          <div
            key={index}
            className="absolute w-4 h-4 rounded-full bg-black border-4 border-white transition-colors duration-300"
            style={{
              top: `${(index + 1) * 160}px`,
              backgroundColor:
                fillHeight / 100 >= (index + 1) / timelineData.length
                  ? "#ec4899"
                  : "#000",
            }}
          />
        ))}
      </div>

      {/* Timeline Items */}
      <div className="relative z-20 flex flex-col space-y-0">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            timing={item.timing}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image={item.image}
            left={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
}
