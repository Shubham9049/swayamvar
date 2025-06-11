import { useEffect, useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";
import image1 from "../assets/ban-bg.jpg";
import image2 from "../assets/banner.jpg";

const images = [image1, image2];

const options = [
  { label: "I am looking for", value: "" },
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
      {/* Background */}
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
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60 z-10" />
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
        <div className="bg-white dark:bg-[#1a1a1a] text-black dark:text-white w-full max-w-5xl mt-10 rounded-xl shadow-lg p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Headless UI Dropdown */}
          <div>
            <Listbox value={selectedOption} onChange={setSelectedOption}>
              <div className="relative">
                <Listbox.Button className="w-full rounded border p-2 bg-white dark:bg-black dark:border-gray-600 flex justify-between items-center">
                  {selectedOption.label}
                  <ChevronDown className="w-5 h-5 ml-2 text-gray-500" />
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 w-full bg-white dark:bg-black border dark:border-gray-600 rounded shadow-lg z-50">
                    {options.map((option, idx) => (
                      <Listbox.Option
                        key={idx}
                        value={option}
                        className={({ active, selected }) =>
                          `cursor-pointer select-none px-4 py-2 ${
                            active
                              ? "bg-[var(--primary-color)] text-white"
                              : "text-gray-900 dark:text-white"
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

          {/* Keep other fields native for now */}
          <input
            type="number"
            placeholder="Age"
            className="border dark:border-gray-600 rounded p-2 w-full bg-white dark:bg-black"
          />
          {/* Religion Dropdown with Headless UI */}
          <div>
            <Listbox value={selectedReligion} onChange={setSelectedReligion}>
              <div className="relative">
                <Listbox.Button className="w-full rounded border p-2 bg-white dark:bg-black dark:border-gray-600 flex justify-between items-center">
                  {selectedReligion.label}
                  <ChevronDown className="w-5 h-5 ml-2 text-gray-500" />
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 w-full bg-white dark:bg-black border dark:border-gray-600 rounded shadow-lg z-50">
                    {religionOptions.map((option, idx) => (
                      <Listbox.Option
                        key={idx}
                        value={option}
                        className={({ active, selected }) =>
                          `cursor-pointer select-none px-4 py-2 ${
                            active
                              ? "bg-[var(--primary-color)] text-white"
                              : "text-gray-900 dark:text-white"
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

          <input
            type="text"
            placeholder="Location"
            className="border dark:border-gray-600 rounded p-2 w-full bg-white dark:bg-black"
          />
          <button className="bg-[var(--primary-color)] hover:bg-pink-700 text-white rounded p-2 font-semibold transition-all duration-200">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
