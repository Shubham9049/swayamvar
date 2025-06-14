import { useEffect, useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";
import image1 from "../assets/ban-bg.jpg";
import image2 from "../assets/banner.jpg";

const images = [image1, image2];

const options = [
  { label: "Looking For", value: "" },
  { label: "Bride", value: "woman" },
  { label: "Groom", value: "man" },
];

const religionOptions = [
  { label: "Religion", value: "" },
  { label: "Hindu", value: "hindu" },
  { label: "Muslim", value: "muslim" },
  { label: "Christian", value: "christian" },
  { label: "Sikh", value: "sikh" },
  { label: "Other", value: "other" },
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedReligion, setSelectedReligion] = useState(religionOptions[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`bg ${idx}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              currentImage === idx
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
            style={{ transition: "transform 10s ease-in-out, opacity 1s" }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-3">
          #1{" "}
          <span className="font-cinzel text-[var(--primary-color)]">
            Matrimony
          </span>{" "}
          Platform
        </h1>
        <h2 className="text-xl md:text-3xl font-light">
          Find Your{" "}
          <span className="text-[var(--primary-color)] font-semibold">
            Perfect Match
          </span>{" "}
          with Confidence
        </h2>
        <p className="text-sm md:text-base mt-3 max-w-xl text-white/90">
          Trusted by millions — blending tradition with technology to unite
          hearts.
        </p>

        {/* Search Filter Box */}
        <div className="backdrop-blur-md bg-white/40 text-black w-full max-w-6xl mt-10 rounded-2xl shadow-2xl px-6 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Looking for */}
          <div>
            <Listbox value={selectedOption} onChange={setSelectedOption}>
              <div className="relative">
                <Listbox.Button className="w-full rounded-lg border p-2 bg-white flex justify-between items-center shadow-sm">
                  {selectedOption.label}
                  <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 w-full bg-white border rounded-md shadow-lg z-50">
                    {options.map((option, idx) => (
                      <Listbox.Option
                        key={idx}
                        value={option}
                        className={({ active, selected }) =>
                          `cursor-pointer select-none px-4 py-2 rounded ${
                            active
                              ? "bg-[var(--primary-color)] text-white"
                              : "text-gray-900"
                          } ${selected ? "font-semibold" : ""}`
                        }
                      >
                        {({ selected }) => (
                          <div className="flex justify-between">
                            <span>{option.label}</span>
                            {selected && <Check className="w-4 h-4" />}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>

          {/* Age */}
          <div>
            <input
              type="number"
              placeholder="Age"
              className="border rounded-lg p-2 w-full bg-white shadow-sm"
            />
          </div>

          {/* Religion */}
          <div>
            <Listbox value={selectedReligion} onChange={setSelectedReligion}>
              <div className="relative">
                <Listbox.Button className="w-full rounded-lg border p-2 bg-white flex justify-between items-center shadow-sm">
                  {selectedReligion.label}
                  <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 w-full bg-white border rounded-md shadow-lg z-50">
                    {religionOptions.map((option, idx) => (
                      <Listbox.Option
                        key={idx}
                        value={option}
                        className={({ active, selected }) =>
                          `cursor-pointer select-none px-4 py-2 rounded ${
                            active
                              ? "bg-[var(--primary-color)] text-white"
                              : "text-gray-900"
                          } ${selected ? "font-semibold" : ""}`
                        }
                      >
                        {({ selected }) => (
                          <div className="flex justify-between">
                            <span>{option.label}</span>
                            {selected && <Check className="w-4 h-4" />}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>

          {/* Location */}
          <div>
            <input
              type="text"
              placeholder="Location"
              className="border rounded-lg p-2 w-full bg-white shadow-sm"
            />
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button className="w-full bg-[var(--primary-color)] hover:bg-pink-700 text-white rounded-lg p-2 font-semibold transition-all duration-200 shadow-md">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
