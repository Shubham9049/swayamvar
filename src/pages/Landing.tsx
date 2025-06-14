import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import HeroSection from "../components/hero";
import Navbar from "../components/nav";
import TeamSection from "../components/TeamSection";
import TestimonialSection from "../components/Testimonial";
import WhyChooseUs from "../components/WhyChooseUs";
import leaf1 from "../assets/5.png";
import leaf2 from "../assets/8.png";
import PerfectMatchSection from "../components/PerfectMatchSection";
import HowItWorks from "../components/HowItWorks";

function Landing() {
  return (
    <div className="relative overflow-hidden">
      {/* Fixed Decorative Images */}
      <img
        src={leaf1}
        alt="Decor Left"
        className="fixed top-20 left-0 w-32 z-[999] md:block hidden"
      />
      <img
        src={leaf2}
        alt="Decor Right"
        className="fixed bottom-10 right-0 w-20 z-[999] md:block hidden"
      />

      {/* Main Content */}
      <Navbar />
      <HeroSection />
      <TestimonialSection />
      <WhyChooseUs />
      <HowItWorks />
      <BlogSection />
      <TeamSection />

      <PerfectMatchSection />
      <Footer />
    </div>
  );
}

export default Landing;
