import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type TimelineItemProps = {
  title: string;
  timing: string;
  description: string;
  image: string;
  left?: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  timing,
  description,
  image,
  left = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full flex justify-between items-center py-10"
    >
      {/* Left Content */}
      {left ? (
        <>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-1/2 text-right pr-10"
          >
            <h3 className="font-bold text-xl md:text-2xl font-cinzel text-[var(--secondary-color)]">
              {title}
            </h3>
            <p className="text-pink-600 text-xs mt-1 font-semibold">
              TIMING: {timing}
            </p>
            <p className="text-sm mt-2 w-40 md:w-60  text-gray-700 text-right ml-auto">
              {description}
            </p>
          </motion.div>
          <div className="w-1/2 flex justify-start pl-10">
            <motion.img
              src={image}
              alt={title}
              className="w-24 h-24"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            />
          </div>
        </>
      ) : (
        <>
          <div className="w-1/2 flex justify-end pr-10">
            <motion.img
              src={image}
              alt={title}
              className="w-28 h-28 md:w-36 md:h-36 "
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-1/2 text-left pl-10"
          >
            <h3 className="font-bold text-xl md:text-2xl font-cinzel text-[var(--secondary-color)]">
              {title}
            </h3>
            <p className="text-pink-600 text-xs mt-1 font-semibold">
              TIMING: {timing}
            </p>
            <p className="text-sm mt-2 w-40 md:w-60 text-gray-700">
              {description}
            </p>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default TimelineItem;
