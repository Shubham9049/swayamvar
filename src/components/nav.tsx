import { useEffect, useState } from "react";
import { Menu, Moon, Sun, ChevronDown } from "lucide-react";
import "../App.css";

const navItems = [
  { title: "Home", href: "/" },
  {
    title: "About",
    dropdown: ["Our Story", "Management", "Vision & Mission"],
  },
  { title: "Search", href: "/search" },
  { title: "Success Stories", href: "/success-stories" },
  { title: "Contact", href: "/contact" },
];

const authLinks = [
  { title: "Login", href: "/login" },
  { title: "Register", href: "/register" },
];

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<
    Record<number, boolean>
  >({});
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "google_translate_element"
      );
    };

    if (!window.googleTranslateElementInit) {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }
  }, []);

  const toggleMobileDropdown = (idx: number) => {
    setMobileDropdowns((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const closeMobileMenu = () => setMobileMenu(false);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full shadow-sm font-raleway font-light ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Desktop Nav */}
      <div className="hidden md:flex justify-between items-center px-10">
        <div className="flex items-center gap-6">
          <a
            href="/"
            className="font-cinzel text-2xl font-bold bg-gradient-to-r from-[#ac7072] via-[#e6d2d1] to-[#ad7173] bg-clip-text text-transparent uppercase"
          >
            MatrimonySite
          </a>
          <div className="border-l self-stretch border-gray-400"></div>
          <ul className="flex gap-6 text-sm">
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <li
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className=" flex items-center gap-1 py-5">
                    {item.title}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        activeDropdown === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`absolute left-0 min-w-[200px] shadow-lg z-50 transition-all duration-200 ${
                      activeDropdown === idx
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    } ${
                      darkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {item.dropdown.map((sub, subIdx) => (
                      <a
                        key={subIdx}
                        href={`/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                        className={`block px-4 py-2 ${
                          darkMode
                            ? "hover:bg-gray-700 text-white"
                            : "hover:bg-gray-200 text-black"
                        }`}
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={idx}>
                  <a href={item.href} className="py-5 block">
                    {item.title}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} title="Toggle Theme">
            {darkMode ? <Sun /> : <Moon />}
          </button>
          <a
            href="/login"
            className={`px-4 py-1 border rounded text-sm ${
              darkMode
                ? "border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white"
                : "border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white"
            }`}
          >
            Login
          </a>
          <a
            href="/register"
            className={`px-4 py-1 rounded text-sm ${
              darkMode
                ? "bg-[var(--primary-color)] text-white hover:opacity-80"
                : "bg-[var(--primary-color)] text-white hover:opacity-80"
            }`}
          >
            Register
          </a>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <a
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-[#ac7072] via-[#e6d2d1] to-[#ad7173] bg-clip-text text-transparent"
        >
          MatrimonySite
        </a>
        <div className="flex items-center gap-3">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun /> : <Moon />}
          </button>
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {mobileMenu && (
        <div
          className={`md:hidden fixed top-12 left-0 w-full h-[calc(100vh-3.5rem)] overflow-y-auto px-4 pt-4 z-40 ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        >
          <div className="space-y-4 pb-6">
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <div key={idx}>
                  <button
                    onClick={() => toggleMobileDropdown(idx)}
                    className="flex w-full gap-5 items-center py-2 text-left"
                  >
                    {item.title}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        mobileDropdowns[idx] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdowns[idx] && (
                    <ul className="pl-4 mt-1 space-y-1 text-sm">
                      {item.dropdown.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <a
                            href={`/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={closeMobileMenu}
                            className="block"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a
                  key={idx}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block py-2 text-sm hover:underline"
                >
                  {item.title}
                </a>
              )
            )}
            <div className="pt-4 flex gap-2  w-full">
              {authLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="text-sm hover:underline border border-gray-400 w-1/2 p-2 text-center"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
