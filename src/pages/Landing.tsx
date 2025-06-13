import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import HeroSection from "../components/hero";
import Navbar from "../components/nav";
import TeamSection from "../components/TeamSection";
import TestimonialSection from "../components/Testimonial";
import WhyChooseUs from "../components/WhyChooseUs";

function Landing() {
  return (
    <div>
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
