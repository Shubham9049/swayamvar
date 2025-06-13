import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import HeroSection from "../components/hero";
import Navbar from "../components/nav";
import TeamSection from "../components/TeamSection";
import TestimonialSection from "../components/Testimonial";
import WhyChooseUs from "../components/WhyChooseUs";
import leaf1 from "../assets/5.png";
import leaf2 from "../assets/8.png";

function Landing() {
  return (
    <div>
      {/* Fixed Decorative Images */}
      <img
        src={leaf1}
        alt="Decor Left"
        className="fixed-leaf-left md:block hidden"
      />
      <img
        src={leaf2}
        alt="Decor Right"
        className="fixed-leaf-right  md:block hidden"
      />

      {/* Main Content */}
      <Navbar />
      <HeroSection />
      <TestimonialSection />
      <WhyChooseUs />
      <TeamSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default Landing;
